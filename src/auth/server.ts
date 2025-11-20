import type { Session, NextAuthConfig } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from "@/auth/next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import type { Role, RoleTypes } from "@prisma/generated/client";
import type { AdapterUser } from "@auth/core/adapters";

export const baseNextAuthConfig: Omit<NextAuthConfig, "providers"> = {
	pages: {
		signIn: "/auth/signin",
	},
	adapter: {
		...PrismaAdapter(prisma),
		// Override createUser method to assign default USER role
		createUser: async (data: AdapterUser) => {
			const user = await prisma.user.create({
				data: {
					...data,
					name: data.name ?? "",
					roles: {
						connectOrCreate: {
							where: { role: "USER" },
							create: { role: "USER" },
						},
					},
				},
				include: { roles: true },
			});
			return user;
		},
		// Override getSessionAndUser method to include roles. Avoids a second database query in session callback
		getSessionAndUser: async (sessionToken: string) => {
			const sessionAndUser = await prisma.session.findUnique({
				where: { sessionToken },
				include: { user: { include: { roles: true } } },
			});
			if (!sessionAndUser) { return null; }
			const { user, ...session } = sessionAndUser;
			return { user, session };
		},
	},
	callbacks: {
		session: async ({ session, user }: { session: Session; user: AdapterUser }) => {
			if (!user) { throw new Error("Unreachable, we're not using JWT sessions"); }

			return {
				...session,
				user: {
					...session.user,
					id: user.id,
					role: user.roles.map((role: Role) => role.role as RoleTypes),
				},
			};
		},
	},
	session: {
		strategy: "database",
	}
};


if (!process.env.AUTH_GITHUB_ID) {
	throw new Error("No AUTH_GITHUB_ID has been provided");
}

if (!process.env.AUTH_GITHUB_SECRET) {
	throw new Error("No AUTH_GITHUB_SECRET has been provided");
}

const useSecureCookie = process.env.VERCEL_ENV === "production";
const cookiePrefix = useSecureCookie ? "__Secure-" : "";
const cookiesDomain = useSecureCookie ? "jorgeadev.com" : undefined;

export const createGitHubProvider = (clientId: string, clientSecret: string) => {
	return GitHubProvider({
		clientId,
		clientSecret,
		profile: (profile) => ({
			id: profile.id.toString(),
			name: profile.login || profile.name,
			email: profile.email,
			image: profile.avatar_url,
			roles: [],
		}),
	});
};

export const authOptions = {
	...baseNextAuthConfig,
	cookies: {
		sessionToken: {
			name: `${cookiePrefix}next-auth.session-token`,
			options: {
				httpOnly: true,
				sameSite: "lax" as never,
				path: "/",
				domain: cookiesDomain,
				secure: useSecureCookie,
			},
		},
	},
	providers: [createGitHubProvider(process.env.AUTH_GITHUB_ID, process.env.AUTH_GITHUB_SECRET)],
};

export const { handlers, auth } = NextAuth(authOptions);
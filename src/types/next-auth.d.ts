import { type DefaultSession } from "next-auth";
import type { RoleTypes, User } from "@prisma/generated/client";

declare module "next-auth" {
	interface Session {
		user: User & { role: RoleTypes[] };
	}
}

declare module "@auth/core/adapters" {
	interface AdapterUser extends User {
		roles: Role[];
	}
}

export interface Session extends DefaultSession {
	user?: DefaultSession["user"] & {
		id: string;
		role: RoleTypes[];
	};
}
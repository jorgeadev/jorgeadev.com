import prisma from "@/lib/prisma";

export const getUserByUserName = (username: string) => {
	return prisma.user.findFirst({
		where: {
			name: username,
			status: "ACTIVE",
		},
		select: {
			id: true,
			bio: true,
			name: true,
			image: true,
			roles: true,
			createdAt: true,
			userLinks: true,
		},
	});
};

export const getUserByUserNameOrThrow = async (username: string) => {
	return prisma.user.findFirstOrThrow({
		where: {
			name: username,
		},
		select: {
			id: true,
			bio: true,
			userLinks: {
				orderBy: {
					url: "desc",
				},
			},
		},
	});
};
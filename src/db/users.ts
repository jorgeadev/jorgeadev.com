import prisma from "@/lib/prisma";

export const getActiveUserByUserName = (username: string) => {
	const user = prisma.user.findFirst({
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

	return user;
};

export const getUserByUserName = (username: string) => {
	const user = prisma.user.findFirst({
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

	return user;
};
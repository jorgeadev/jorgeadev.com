import { type Session } from "@/types/next-auth";
import { RoleTypes } from "@prisma/generated/client";

export const isAdmin = (session: Session | null) => {
	if (!session) { return false; }
	return session.user?.role.includes(RoleTypes.ADMIN);
};

export const isAdminOrModerator = (session: Session | null) => {
	return [RoleTypes.ADMIN, RoleTypes.MODERATOR].some((role) => session?.user?.role.includes(role));
};

export const isAuthor = (session: Session | null, userId?: string | null) => {
	return Boolean(userId && session?.user?.id && userId === session?.user?.id);
};
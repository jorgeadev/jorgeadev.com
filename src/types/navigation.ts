import { type Session } from "@/types/next-auth";

export type NavigationOptions = {
	session: Session | null;
	isAdmin: boolean | undefined;
	isAdminOrModerator: boolean;
};

export type UserAvatarProps = {
	src: string;
	className?: string;
};

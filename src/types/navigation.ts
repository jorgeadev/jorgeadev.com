import { type Session } from "@/types/next-auth";

export type NavigationOptions = {
	session: Session | null;
};
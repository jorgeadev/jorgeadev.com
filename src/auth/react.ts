// import { SessionContextValue, useSession as useAuthSession } from "next-auth/react";
import { useSession as useAuthSession } from "next-auth/react";
// import { Session } from "@/types/signin";

export { SessionProvider, signIn, signOut } from "next-auth/react";

// export const useSession: () => Session & SessionContextValue = useAuthSession;
export const useSession = useAuthSession;

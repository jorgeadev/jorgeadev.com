"use client";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { SessionProvider } from "@/auth/react";
import type { ReactNode } from "react";

export const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<SessionProvider>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
			>
				{children}
			</ThemeProvider>
		</SessionProvider>
	);
};
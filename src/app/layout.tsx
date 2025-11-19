import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "@/app/providers";
import type { ReactNode } from "react";

const lexend = Lexend({
	variable: "--font-lexend",
	subsets: ["latin"],
	display: "swap",
	preload: true,
});

export const metadata: Metadata = {
	title: {
		default: "jorgeadev.com | Programming & Technology News",
		template: "jorgeadev.com | %s",
	},
	description: "Stay updated with the latest in programming, software development, and technology trends",
	generator: "Jorge Gomez",
};

export const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`flex flex-col min-h-screen font-sans ${lexend.className} antialiased`}>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
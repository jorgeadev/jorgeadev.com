"use client";

import { signOut } from "@/auth/react";
import { Button } from "@/components/ui/button";
import { LogOut } from "@/utils/icons";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export const SignOutLink = ({ className }: { className?: string }) => {
	const router = useRouter();

	const handleSignOut = async () => {
		await signOut({ redirect: false });
		router.refresh();
	};


	return (
		<Button
			variant="ghost"
			className={clsx(
				"bg-opacity-50 justify-start text-red-500 hover:bg-red-500/20 hover:text-red-500 dark:hover:bg-red-500/20",
				className
			)}
			onClick={handleSignOut}
		>
			<LogOut className="mr-2 h-4 w-4" />
			<span className="text-red-500">Sign Out</span>
		</Button>
	);
};
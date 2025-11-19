import { buttonVariants } from "@/components/ui/button";
import { LogIn } from "@/utils/icons";
import clsx from "clsx";
import Link from "next/link";

export const SignInLink = ({ className }: { className?: string }) => {
	return (
		<Link
			href={{ pathname: "/auth/signin", query: {} }}
			className={clsx("", className, buttonVariants({ variant: "outline", size: "lg" }))}
		>
			<div className="flex place-items-center space-x-2">
				<LogIn className="h-5 w-5" />
				<span className="dark:text-white">Sign In</span>
			</div>
		</Link>
	);
};
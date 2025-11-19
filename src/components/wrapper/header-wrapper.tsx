import { type ReactNode } from "@/types/base";

export const HeaderWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<nav className="flex h-16 items-center text-sm font-medium">
			{children}
		</nav>
	);
};
import type { WrapperConfig } from "@/types/wrapper";

export const LayoutWrapper = ({ children, footer, header, showHeader = true, showFooter = true }: WrapperConfig) => {
	return (
		<>
			{showHeader && header}

			<main className="mx-auto grow">
				{children}
			</main>

			{showFooter && footer}
		</>
	);
};
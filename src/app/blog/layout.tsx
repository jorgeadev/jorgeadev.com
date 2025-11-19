import { Footer } from "@/components/footer/footer";
import { Navigation } from "@/components/navigation/navigation";
import { LayoutWrapper } from "@/components/wrapper/layout-wrapper";
import type { ReactNode } from "react";

export const HomeLayout = ({ children }: { children: ReactNode }) => {
	return (
		<LayoutWrapper footer={<Footer />} header={<Navigation />}>
			{children}
		</LayoutWrapper>
	);
};

export default HomeLayout;
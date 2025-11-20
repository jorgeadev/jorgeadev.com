import { Footsies } from "@/components/footer/footsies";
import { Navigation } from "@/components/navigation/navigation";
import { LayoutWrapper } from "@/components/wrapper/layout-wrapper";
import { type ReactNode } from "react";

const ProfileLayout = ({ children }: { children: ReactNode }) => {
	return (
		<LayoutWrapper footer={<Footsies />} header={<Navigation />}>
			<div className="container flex flex-1 flex-col pb-8 mx-auto">
				{children}
			</div>
		</LayoutWrapper>
	);
};

export default ProfileLayout;
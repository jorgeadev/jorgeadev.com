import type { ReactNode } from "react";

export type WrapperConfig = {
	header?: ReactNode;
	footer?: ReactNode;
	children: ReactNode;
	showHeader?: boolean;
	showFooter?: boolean;
	headerVariant?: HeaderVariants;
	footerVariant?: FooterVariants;
	containerWidth?: ContainerWidth;
};

export type HeaderVariants = "full" | "minimal" | "transparent";

export type FooterVariants = "full" | "minimal";

export type ContainerWidth = "full" | "wide" | "narrow";

export type WrapperContextType = {
	config: WrapperConfig;
	setConfig: (_config: WrapperConfig) => void;
};
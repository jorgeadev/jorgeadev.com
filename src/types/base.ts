import { type RoleTypes } from "@prisma/generated/client";

export { type ReactNode } from "react";

export type TitleInfo = {
	type: RoleTypes;
	label: string;
	description?: string;
};
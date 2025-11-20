import { type TitleInfo } from "@/types/base";
import { TITLE_TO_CLASSNAME } from "@/utils/constants";
import { RoleTypes, type Role } from "@prisma/generated/client";

export function getGradient(roles: Role[]) {
	if (roles.find((r) => (r.role === "ADMIN" || r.role === "MODERATOR"))) {
		return TITLE_TO_CLASSNAME.ADMIN;
	}
	if (roles.find((r) => r.role === "USER" || r.role === "CREATOR")) {
		return TITLE_TO_CLASSNAME.USER;
	}
	if (roles.find((r) => r.role === "SUPPORTER" || r.role === "CONTRIBUTOR")) {
		return TITLE_TO_CLASSNAME.SUPPORTER;
	}
	return "text-foreground";
}

export function getTitles(roles: Role[]): TitleInfo[] {
	const flairs: TitleInfo[] = [];
	if (roles.find((r) => r.role === RoleTypes.ADMIN)) {
		flairs.push({
			type: "ADMIN",
			label: "Admin",
			description: "Platform administrator"
		});
	}
	if (roles.find((r) => r.role === RoleTypes.MODERATOR)) {
		flairs.push({
			type: "MODERATOR",
			label: "Moderator",
			description: "Oversees community interactions"
		});
	}
	if (roles.find((r) => r.role === RoleTypes.CREATOR)) {
		flairs.push({
			type: "CREATOR",
			label: "Creator",
			description: "Creates content on the platform",
		});
	}
	if (roles.find((r) => r.role === RoleTypes.USER)) {
		flairs.push({
			type: "USER",
			label: "User",
			description: "Active user of the platform",
		});
	}
	if (roles.find((r) => r.role === RoleTypes.CONTRIBUTOR)) {
		flairs.push({
			type: "CONTRIBUTOR",
			label: "Contributor",
			description: "Contributed to the project",
		});
	}
	if (roles.find((r) => r.role === RoleTypes.SUPPORTER)) {
		flairs.push({
			type: "SUPPORTER",
			label: "Supporter",
			description: "Donated money to the project",
		});
	}
	return flairs;
}
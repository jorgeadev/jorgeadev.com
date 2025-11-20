import { type TitleInfo } from "@/types/base";
import { Code, Heart, Shield, ShieldCheck, Sparkles, User, type LucideIcon } from "@/utils/icons";

export const themes = ["system", "light", "dark"];

export const BAD_WORDS_FILTER = ["sh!t", "h3ll", "f*ck", "fucki"];

const classes = {
	sky: "bg-linear-to-r from-sky-400 to-cyan-600 dark:from-sky-400 dark:to-cyan-300",
	emerald: "bg-linear-to-r from-emerald-500 to-emerald-600 dark:from-emerald-200 dark:to-emerald-500",
	rose: "bg-linear-to-r from-rose-400 to-orange-500 dark:from-rose-400 dark:to-orange-300",
};

export const TITLE_TO_CLASSNAME: Record<TitleInfo["type"], string> = {
	ADMIN: classes.rose,
	MODERATOR: classes.rose,
	CONTRIBUTOR: classes.emerald,
	SUPPORTER: classes.emerald,
	USER: classes.sky,
	CREATOR: classes.sky
};

export const TITLE_TO_ICON: Record<TitleInfo["type"], LucideIcon> = {
	ADMIN: Shield,           // Authority and protection
	MODERATOR: ShieldCheck,  // Verified protection/moderation
	CREATOR: Sparkles,       // Creativity and content creation
	USER: User,              // Standard user profile
	CONTRIBUTOR: Code,       // Technical contribution/development
	SUPPORTER: Heart,        // Support and community love
};

// Different animation classes for each role type
export const TITLE_TO_ANIMATION: Record<TitleInfo["type"], string> = {
	ADMIN: "animate-pulse",                    // Steady authority
	MODERATOR: "animate-bounce",               // Active monitoring
	CREATOR: "animate-spin-slow",              // Creative energy
	USER: "",                                  // No animation for regular users
	CONTRIBUTOR: "animate-pulse-slow",         // Steady contribution
	SUPPORTER: "animate-heartbeat",            // Loving support
};
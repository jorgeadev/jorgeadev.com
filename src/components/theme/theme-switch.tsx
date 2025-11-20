"use client";

import { cn } from "@/lib/utils";
import { themes } from "@/utils/constants";
import { Laptop, Moon, Sun } from "@/utils/icons";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export const ThemeSwitch = () => {
	const { theme: T, setTheme } = useTheme();
	const mounted = useSyncExternalStore(
		() => () => { },
		() => true,
		() => false
	);

	if (!mounted) {
		// Return a placeholder with the same structure to avoid hydration mismatch
		return (
			<div className="flex items-center rounded-full border p-px">
				<button className="rounded-full p-2" disabled>
					<Laptop className="size-4" />
				</button>
			</div>
		);
	}

	return (
		<div className="flex items-center rounded-full border p-px">
			{themes.map((theme) => {
				const isActive = T === theme;

				return (
					<motion.button
						key={theme}
						className={cn("m-0.5 rounded-full p-1.5", isActive && "bg-secondary")}
						onClick={() => setTheme(theme)}
						aria-label="theme button"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						layout
						transition={{ type: "spring", stiffness: 300, damping: 20 }}
					>
						{theme === "system" && <Laptop aria-hidden="true" className="size-4" />}

						{theme === "light" && (
							<Sun
								aria-hidden="true"
								className={cn("size-4", isActive && "fill-black dark:fill-white")}
							/>
						)}

						{theme === "dark" && (
							<Moon
								aria-hidden="true"
								className={cn("size-4", isActive && "fill-black dark:fill-white")}
							/>
						)}
					</motion.button>
				);
			})}
		</div>
	);
};
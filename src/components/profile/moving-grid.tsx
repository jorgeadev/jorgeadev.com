"use client";

import { cn } from "@/lib/utils";
import { useIsMobile } from "@/utils/use-is-mobile";
import { motion, type MotionValue, useMotionTemplate, useMotionValue, useSpring, type MotionStyle } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

type WrapperStyle = MotionStyle & {
	"--x": MotionValue<string>;
	"--y": MotionValue<string>;
};

export const MovingGrid = ({ children, className }: { children: ReactNode, className?: string }) => {
	const transition = { damping: 100, stiffness: 1000, type: "spring" };
	const mouseX = useMotionValue(43.5);
	const x = useSpring(mouseX, transition);
	const mouseY = useMotionValue(80);
	const y = useSpring(mouseY, transition);
	const isMobile = useIsMobile();

	const handleMoseMove = (event: MouseEvent<HTMLDivElement>) => {
		if (isMobile) { return; }
		const boundingRect = event.currentTarget.getBoundingClientRect();
		x.set(event.clientX - boundingRect.left);
		y.set(event.clientY - boundingRect.top);
	};

	const handleMouseLeave = () => {
		if (isMobile) { return; }
		x.set(43.5);
		y.set(80);
	};

	return (
		<motion.div
			onMouseMove={handleMoseMove}
			onMouseLeave={handleMouseLeave}
			className={cn("relative overflow-hidden radial-bg", className)}
			style={{
				"--x": useMotionTemplate`${x}px`,
				"--y": useMotionTemplate`${y}px`,
				"--color-center": "#3aecf8",
				"--color-mid": "#5295dc",
				"--color-fade": "rgba(255, 255, 255, 0)",
				"--color-outer": "transparent",
			} as WrapperStyle}
		>
			<motion.div className="absolute h-[200%] w-full moving-grid-background" />
			<div className="shadow-background absolute h-full w-full shadow-[inset_0_0_5rem_3.5rem]" />
			{children}
		</motion.div>
	);
};
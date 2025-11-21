import { useEffect, useState } from "react";

const checkIsMobile = (): boolean => {
	if (typeof window === "undefined") { return false; }

	const userAgent = navigator.userAgent || navigator.vendor || (window as Window & { opera?: string }).opera || "";
	const isSmall = window.matchMedia("(max-width: 768px)").matches;
	const isMobileDevice = Boolean(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.exec(userAgent));

	const isDev = process.env.NODE_ENV !== "production";

	return isDev ? (isSmall || isMobileDevice) : (isSmall && isMobileDevice);
};

export const useIsMobile = (): boolean => {
	// Initialize state with lazy initialization function
	const [isMobile, setIsMobile] = useState(() => checkIsMobile());

	useEffect(() => {
		// Listen for resize events
		const mediaQuery = window.matchMedia("(max-width: 768px)");

		const handleChange = () => {
			setIsMobile(checkIsMobile());
		};

		mediaQuery.addEventListener("change", handleChange);

		return () => {
			mediaQuery.removeEventListener("change", handleChange);
		};
	}, []);

	return isMobile;
};
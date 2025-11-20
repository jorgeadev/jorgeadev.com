import Link from "next/link";
import { ThemeSwitch } from "@/components/theme/theme-switch";
import { GitHub, HeartHandshake, Twitter } from "@/utils/icons";

export const Footsies = () => {
	return (
		<footer className="flex flex-col items-center gap-2 px-8 pb-12 text-sm font-light sm:px-16 sm:pb-20 sm:pt-6 md:px-0 md:py-12">
			<div className="container flex flex-col-reverse justify-between gap-2 md:flex-row md:items-end">
				<span>
					Built with {" "}
					<HeartHandshake className="inline-block h-5 w-5 text-[#31bdc6]" />
					{" "} by {" "}
					<Link href="https://jorgeadev.com" className="transition-colors duration-300 hover:underline">
						jorgeadev.com
					</Link>
				</span>
				<div className="flex items-center gap-2">
					<ThemeSwitch />
					<span className="px-2">|</span>
					<Link href="https://github.com/jorgeadev" className="group rounded-lg p-2" target="_blank" rel="noopener noreferrer">
						<span className="sr-only">jorgeadev on GitHub</span>
						<GitHub className="h-5 w-5 duration-150 group-hover:scale-110 group-hover:fill-black dark:group-hover:fill-white" />
					</Link>
					<Link href="https://x.com/jorgeadev" className="group rounded-lg p-2" target="_blank" rel="noopener noreferrer">
						<span className="sr-only">jorgeadev on Twitter</span>
						<Twitter className="h-5 w-5 duration-150 group-hover:scale-110 group-hover:fill-black dark:group-hover:fill-white" />
					</Link>
				</div>
			</div>

			<div className="container flex flex-col justify-between gap-2 text-neutral-500 md:flex-row  md:items-end dark:text-neutral-400">
				<span>
					<Link href="/privacy" className="dark:hover:text-primary-foreground transition-colors duration-300 hover:text-neutral-900 hover:underline">
						Privacy Policy
					</Link>{"  "}
					| {"  "}
					<Link href="/tos" className="dark:hover:text-primary-foreground transition-colors duration-300 hover:text-neutral-900 hover:underline">
						Terms of Service
					</Link>
				</span>
				<span>
					<div className="inline-block">&copy;</div>
					{new Date().getFullYear()} Jorge Gomez. All rights reserved
				</span>
			</div>
		</footer>
	);
};
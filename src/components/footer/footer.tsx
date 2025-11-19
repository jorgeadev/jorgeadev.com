export const Footer = () => {
	return (
		<footer className="w-full border-t bg-white py-6 text-center text-sm text-neutral-500 dark:bg-black dark:border-neutral-800 dark:text-neutral-400">
			<p>
				&copy; {new Date().getFullYear()} Jorge Gomez. All rights reserved.
			</p>
		</footer>
	);
};
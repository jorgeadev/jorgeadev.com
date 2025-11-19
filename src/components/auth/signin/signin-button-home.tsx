import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { type NavigationOptions } from "@/types/navigation";
import { SignInLink } from "./signin-link";

export const SignInButtonHome = ({ session }: NavigationOptions) => {
	return session?.user ? (
		(
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button>
						Sign Innnnnnnnn
					</button>
				</DropdownMenuTrigger>
			</DropdownMenu>
		)
	) : (
		<span className="hidden md:flex">
			<SignInLink />
		</span>
	);
};	
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { type NavigationOptions } from "@/types/navigation";
import { SignInLink } from "../../auth/signin/signin-link";
import { IconAvatar } from "@/components/navigation/nav-avatar";
import Link from "next/link";
import { SignOutLink } from "../../auth/signout/signout-link";
import { ExternalLink, Palette, Play, Settings, Settings2, User } from "@/utils/icons";
import { ThemeSwitch } from "@/components/theme/theme-switch";

export const UserProfileMenu = ({ session, isAdmin, isAdminOrModerator }: NavigationOptions) => {
	return session?.user ? (
		(
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button
						aria-label="profile button"
						className="hidden cursor-pointer rounded-lg duration-300 focus:outline-none focus-visible:outline-none md:block"
					>
						<IconAvatar src={session.user.image ?? ""} />
					</button>
				</DropdownMenuTrigger>

				<DropdownMenuContent
					align="end"
					className="w-56 rounded-lg bg-white/50 backdrop-blur-sm dark:bg-neutral-950/50"
				>
					<Link className="block" href={`/@${session.user.name}`}>
						<DropdownMenuItem className="focus:bg-accent cursor-pointer rounded-lg p-2 duration-300 focus:outline-none dark:hover:bg-neutral-700/50">
							<User className="mr-2 h-4 w-4" />
							<span>Profile</span>
						</DropdownMenuItem>
					</Link>

					<Link href={`@${session.user.name}/edit`} className="block">
						<DropdownMenuItem className="focus:bg-accent cursor-pointer rounded-md p-2 duration-300 focus:outline-none dark:hover:bg-neutral-700">
							<Settings2 className="mr-2 h-4 w-4" />
							<span>Settings</span>
						</DropdownMenuItem>
					</Link>

					<DropdownMenuSeparator className="mx-0.5" />

					{isAdminOrModerator && (
						<>
							<Link href={""} className="block">
								<DropdownMenuItem className="focus:bg-accent cursor-pointer rounded-lg p-2 duration-300 focus:outline-none dark:hover:bg-neutral-700/50">
									<Settings className="mr-2 h-4 w-4" />
									<span>Admin Dashboard</span>
								</DropdownMenuItem>
							</Link>

							<Link className="block" href="/challenge-playground">
								<DropdownMenuItem className="focus:bg-accent cursor-pointer rounded-lg p-2 duration-300 focus:outline-none dark:hover:bg-neutral-700/50">
									<Play className="mr-2 h-4 w-4" />
									<span>Challenge Playground</span>
								</DropdownMenuItem>
							</Link>
						</>
					)}

					{isAdmin && (
						<Link href="/share" className="block">
							<DropdownMenuItem className="focus:bg-accent cursor-pointer rounded-lg p-2 duration-300 focus:outline-none dark:hover:bg-neutral-700/50">
								<ExternalLink className="mr-2 h-4 w-4" />
								<span>URL Shortener</span>
							</DropdownMenuItem>
						</Link>
					)}

					<div className="mt-1 flex items-center justify-between rounded-lg px-2 py-0.5 text-sm">
						<div className="flex items-center gap-2">
							<Palette className="text-muted-foreground mr-2 h-4 w-4" />
							<span>Theme</span>
						</div>
						<ThemeSwitch />
					</div>

					<DropdownMenuSeparator className="mx-0.5" />

					<SignOutLink className="w-full cursor-pointer gap-1" />
				</DropdownMenuContent>
			</DropdownMenu>
		)
	) : (
		<span className="hidden md:flex">
			<SignInLink />
		</span>
	);
};	
import Link from "next/link";
import { HeaderWrapper } from "@/components/wrapper/header-wrapper";
import clsx from "clsx";
import { buttonVariants } from "@/components/ui/button";
import { UserProfileMenu } from "@/components/navigation/profile/user-profile-menu";
import { auth } from "@/auth/server";
import { isAdmin, isAdminOrModerator } from "@/utils/auth-guards";

export const Navigation = async () => {
	const [session] = await Promise.all([auth()]);
	const isAdminRole = isAdmin(session);
	const isAdminOrMod = isAdminOrModerator(session);

	return (
		<header className="w-full px-3">
			<HeaderWrapper>
				<div className="flex w-full items-center justify-between">
					<div className="">
						<Link href="/" className="flex space-x-1.5 focus:outline-none focus-visible:ring-2">
							<div className="leading-3 font-bold">
								jorgeadev.com
							</div>
						</Link>
					</div>

					<div className="flex">
						<div className="flex items-center justify-end gap-2">
							<Link
								className={clsx(
									"donate-btn relative overflow-hidden rounded-md border border-[#bea74b66] px-3 py-2 text-black duration-300 hover:bg-[#eed15f] dark:text-white dark:hover:bg-[#bea74b44]",
									buttonVariants({ variant: "outline", size: "lg" }),
								)}
								href="/support"
							>
								Support Us
							</Link>

							<UserProfileMenu
								session={session}
								isAdmin={isAdminRole}
								isAdminOrModerator={isAdminOrMod}
							/>
						</div>
					</div>
				</div>
			</HeaderWrapper>
		</header>
	);
};
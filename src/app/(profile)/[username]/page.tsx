import { auth } from "@/auth/server";
import { MagicIcons } from "@/components/icons/magic-icons";
import { IconAvatar } from "@/components/navigation/nav-avatar";
import { getGradient, getTitles } from "@/components/profile/profile-badge";
import { ProfileTitle } from "@/components/profile/profile-title";
import { Button } from "@/components/ui/button";
import { getUserByUserName } from "@/db/users";
import { cn } from "@/lib/utils";
import { type UserNameParams } from "@/types/profile";
import { UserPen } from "@/utils/icons";
import { getRelativeTime } from "@/utils/relative-time";
import Link from "next/link";
import { notFound } from "next/navigation";

const ProfilePage = async ({ params }: { params: UserNameParams }) => {
	const [_, username] = decodeURIComponent((await params).username).split("@");
	if (!username) {
		return notFound();
	}

	const user = await getUserByUserName(username);
	if (!user) {
		return notFound();
	}

	const titles = getTitles(user.roles);
	const userLinks = user.userLinks.filter((link) => link.url != "");
	const gradient = getGradient(user.roles);
	const session = await auth();
	const isOwnProfile = session?.user.id === user.id;

	console.log("Page: ", { userLinks }, "Bio: ", user.bio);


	return (
		<div className="px-2 pt-8 lg:px-0 lg:pt-10">
			<div className="relative flex flex-row flex-wrap items-start justify-between">
				<div className="flex h-full max-w-full flex-col justify-center space-y-3 lg:max-w-[50%]">
					<div className="flex flex-row items-end space-x-4">
						<IconAvatar
							src={user.image ?? ""}
							className="z-10 h-56 w-56 rounded-2xl transition group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-1"
						/>

						<div className="m-0 flex flex-col space-y-2">
							<div className="flex flex-row space-x-2 items-baseline">
								<h1 className={cn("bg-linear-to-r bg-clip-text text-3xl font-bold text-transparent whitespace-nowrap", gradient)}>
									{user.name}
								</h1>

								{isOwnProfile && (
									<Link
										href={`/@${encodeURIComponent(username)}/edit`}
										className="text-muted-foreground/80 hover:text-foreground flex h-6 items-end px-1 transition-colors"
									>
										<UserPen className="h-4 w-4" />
									</Link>
								)}
							</div>

							<ProfileTitle titles={titles} />

							<h2 className="text-muted-foreground text-sm tracking-tight">
								Joined {getRelativeTime(user.createdAt)}
							</h2>

							<div className="flex flex-row space-x-1">
								{userLinks.map((link) => (
									<Link key={link.id} href={link.url} className="group p-2">
										<MagicIcons url={link.url} className="w-6 h-6 text-foreground/60 group-hover:text-foreground transition-colors" />
									</Link>
								))}
							</div>
						</div>
					</div>

					{user.bio !== "" && isOwnProfile ? (
						<div className="py-4">
							<h1>You haven’t added a bio yet—tell others a bit about yourself !</h1>
							<Button asChild variant="link" size="sm" className="px-0 text-link/80 hover:text-link/70">
								<Link href={`/@${encodeURIComponent(username)}/edit`}>Update Your Bio</Link>
							</Button>
						</div>
					) : (
						<div className="max-w-[60ch]">
							<p className="leading-7 tracking-tight">
								{user.bio}
							</p>
						</div>
					)}
				</div>

				<div className="h-fit max-w-[50%] items-center">
					Progress Chart Placeholder
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
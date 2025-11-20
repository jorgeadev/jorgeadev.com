import { ProfileEditForm } from "@/components/profile/edit/edit-form";
import { getUserByUserNameOrThrow } from "@/db/users";
import { type UserNameParams } from "@/types/profile";
import { notFound } from "next/navigation";

const ProfileEditPage = async ({ params }: { params: UserNameParams }) => {
	const [_, username] = decodeURIComponent((await params).username).split("@");
	if (!username) {
		return notFound();
	}

	const user = await getUserByUserNameOrThrow(username);

	return (
		<div className="mx-auto pt-8 lg:pt-10 flex items-center flex-col p-3">
			<h1 className="text-muted-foreground text-xl pb-6 flex w-full font-bold">Update Profile</h1>
			<div className="mt-4">
				<ProfileEditForm user={user} className="space-y-6" />
			</div>
		</div>
	);
};

export default ProfileEditPage;
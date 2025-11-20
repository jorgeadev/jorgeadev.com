"use server";

import { auth } from "@/auth/server";
import { EditFormSchema } from "@/components/profile/edit/edit-form-schema";
import prisma from "@/lib/prisma";

/**
 * This will only let you update your own profile
 * @param profileData
 */
export const updateProfile = async (profileData: EditFormSchema) => {
	const session = await auth();

	// 1.Checks that the user is logged in
	if (!session?.user?.id) {
		return { success: false, error: "You must be logged in to update your profile" };
	}

	// 2. Test schema validation with Zod
	EditFormSchema.parse(profileData);

	// 3. Update the user bio field in the db
	const user = await prisma.user.update({
		where: { id: session.user.id },
		data: { bio: profileData.bio },
	});

	// 4. Create an array of userLinks to be upserted
	const userLinksToCreate = profileData.userLinks
		.filter((link) => link.url.trim() !== "")
		.map((link) => ({
			url: link.url.trim(),
			user: { connect: { id: session.user.id } },
		}));

	// 5. Upsert the user links
	try {
		await prisma.$transaction([
			// 5.1. Delete existing links
			prisma.userLink.deleteMany({
				where: {
					user: {
						some: {
							id: session.user.id,
						},
					},
				},
			}),

			// 5.2. Create new links
			...userLinksToCreate.map((link) =>
				prisma.userLink.create({
					data: link,
				})
			),
		]);

		// 6. Return success with username for client-side redirect
		return { success: true, username: user.name };
	} catch (error) {
		console.error("Error updating user links:", error);
		return { success: false, error: "Failed to update profile" };
	} finally {
		await prisma.$disconnect();
	}
};
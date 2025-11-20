"use client";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { type ProfileEditFormProps } from "@/types/profile";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditFormSchema } from "@/components/profile/edit/edit-form-schema";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { updateProfile } from "@/components/profile/edit/edit-form-action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const ProfileEditForm = ({ user, className }: ProfileEditFormProps) => {
	const router = useRouter();

	const form = useForm<EditFormSchema>({
		resolver: zodResolver(EditFormSchema),
		defaultValues: {
			...user,
			userLinks: [
				...user.userLinks,
				...Array.from({ length: 4 - user.userLinks.length }).map(() => ({ url: "" })),
			],
		},
		mode: "onTouched",
	});

	const userLinksField = useFieldArray({
		control: form.control,
		name: "userLinks",
	});

	const onSubmit = async (data: EditFormSchema) => {
		try {
			const result = await updateProfile(data);

			if (!result.success) {
				toast.error(result.error || "Something went wrong while updating your profile");
			}

			toast.success("Profile updated successfully!", {
				position: "top-center",
				description: "Your profile has been updated",
				duration: 5000,
				richColors: true,
			});

			router.push(`/@${result.username}`);
			router.refresh();
		} catch {
			toast.error("Something went wrong. Please try again", {
				position: "top-center",
				description: "We encountered an error while updating your profile",
				duration: 5000,
				richColors: true,
			});
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={cn("flex max-w-sm flex-col lg:max-w-full", className)}
			>
				<FormField
					control={form.control}
					name="bio"
					render={({ field }) => (
						<FormItem className="flex flex-col lg:max-w-full lg:flex-row lg:items-center lg:justify-between">
							<FormLabel className="w-32">Bio</FormLabel>
							<div className="max-w-sm grow space-y-2 lg:mx-auto lg:max-w-md">
								<FormControl>
									<Textarea {...field} placeholder="Tell others a bit about yourself..." rows={4} />
								</FormControl>
								<FormDescription>{form.getValues("bio").length} / 256 characters</FormDescription>
								<FormMessage />
							</div>
						</FormItem>
					)}
				/>

				<Separator />

				<FormItem className="flex max-w-sm flex-col lg:max-w-full lg:flex-row lg:items-center lg:justify-between sm:w-xl">
					<FormLabel className="w-32">User Links</FormLabel>
					<div className="max-w-sm grow space-y-2 lg:mx-auto lg:max-w-md">
						{userLinksField.fields.map((field, index) => (
							<div key={index}>
								<FormControl>
									<Input
										{...form.register(`userLinks.${index}.url` as const)}
										defaultValue={field.url}
										placeholder="https://"
									/>
								</FormControl>
								<FormMessage>{form.formState.errors.userLinks?.[index]?.url?.message}</FormMessage>
							</div>
						))}
					</div>
				</FormItem>

				<div className="space-x-2 self-end pt-4">
					<Button variant="outline">
						<Link href=".">
							Cancel
						</Link>
					</Button>
					<Button type="submit" disabled={!form.formState.isDirty || !form.formState.isValid}>
						Update Profile
					</Button>
				</div>
			</form>
		</Form>
	);
};	
export type UserNameParams = Promise<{ username: string }>;

export type ProfileEditFormProps = {
	user: {
		id: string;
		bio: string;
		userLinks: { url: string }[];
	};
	className?: string;
}
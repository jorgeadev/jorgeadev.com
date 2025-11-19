import { CreateUser } from "@/components/user/create-user";

export const RootPage = () => {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="flex min-h-screen w-full flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
				<CreateUser />
			</main>
		</div>
	);
};

export default RootPage;

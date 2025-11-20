import { Avatar as AvatarIcon } from "@/utils/icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import { type UserAvatarProps } from "@/types/navigation";

export const IconAvatar = ({ src, className }: UserAvatarProps) => {
	return (
		<Avatar className={cn("h-10 w-10", className)}>
			<AvatarImage src={src} alt="user avatar and profile picture from the signed in user" />
			<AvatarFallback delayMs={5000}>
				<AvatarIcon />
			</AvatarFallback>
		</Avatar>
	);
};
import { type TitleInfo } from "@/types/base";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { TITLE_TO_ANIMATION, TITLE_TO_ICON } from "@/utils/constants";

export const ProfileTitle = ({ titles }: { titles: TitleInfo[] }) => {
	return (
		<div className="flex flex-row flex-wrap gap-2">
			{titles.map((title) => {
				const Icon = TITLE_TO_ICON[title.type];
				const animation = TITLE_TO_ANIMATION[title.type];

				return (
					<Tooltip key={title.type}>
						<TooltipTrigger asChild>
							<Badge className="rounded-full bg-linear-to-br from-sky-600 to-sky-700 px-3 py-1.5 cursor-pointer">
								<Icon className={`mr-1 inline h-3 w-3 ${animation}`} />
								{title.label}
							</Badge>
						</TooltipTrigger>
						<TooltipContent>
							{title.description ?? title.label}
						</TooltipContent>
					</Tooltip>
				);
			})}
		</div>
	);
};
export const getRelativeTime = (date: Date | string): string => {
	const targetDate = typeof date === "string" ? new Date(date) : date;
	const now = new Date();
	const diffInSeconds = Math.floor((now.getTime() - targetDate.getTime()) / 1000);

	const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

	const intervals = [
		{ seconds: 31536000, unit: "year" as Intl.RelativeTimeFormatUnit },
		{ seconds: 2592000, unit: "month" as Intl.RelativeTimeFormatUnit },
		{ seconds: 86400, unit: "day" as Intl.RelativeTimeFormatUnit },
		{ seconds: 3600, unit: "hour" as Intl.RelativeTimeFormatUnit },
		{ seconds: 60, unit: "minute" as Intl.RelativeTimeFormatUnit },
		{ seconds: 1, unit: "second" as Intl.RelativeTimeFormatUnit },
	];

	for (const { seconds, unit } of intervals) {
		const interval = Math.floor(diffInSeconds / seconds);
		if (interval >= 1) {
			return rtf.format(-interval, unit);
		}
	}

	return rtf.format(0, "second");
};
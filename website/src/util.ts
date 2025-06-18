import { DateTime } from "luxon";

export const formatRelativeDate = (date: Date | string) => {
	const dateTime =
		typeof date === "string"
			? DateTime.fromISO(date)
			: DateTime.fromJSDate(date);

	const now = DateTime.now();
	const diffInMinutes = dateTime.diff(now, "minutes").minutes;
	const diffInHours = dateTime.diff(now, "hours").hours;
	const diffInDays = Math.round(dateTime.diff(now, "days").days);

	if (diffInMinutes < 2) return "Dans quelques minutes";
	if (diffInMinutes < 60) return `Dans ${Math.floor(diffInMinutes)} minutes`;
	if (diffInHours < 24) return `Dans ${Math.floor(diffInHours)} heures`;
	if (diffInDays === 1) return "Demain";

	return `Dans ${diffInDays} jours`; // e.g. "9 June 2025"
};

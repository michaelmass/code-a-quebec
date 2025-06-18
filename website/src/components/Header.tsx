import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { DiamondIcon } from "@/components/DiamondIcon";
import { Logo } from "@/components/Logo";
import { nextEventLink } from "@/const";

function getLastThursdayOfMonth(date = new Date()) {
	const year = date.getFullYear();
	const month = date.getMonth();

	const lastDay = new Date(year, month);
	console.log(lastDay);

	while (lastDay.getDay() !== 4) {
		lastDay.setDate(lastDay.getDate() - 1);
	}

	return lastDay;
}

export function Header() {
	const date = new Date("2025-04-21");
	const nextLastThursday = getLastThursdayOfMonth(date);

	return (
		<header className="relative z-50 flex-none lg:pt-11">
			<Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
				<div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
					<Logo className="h-20 w-auto text-slate-900" />
				</div>
				<div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto border-b border-blue-600/10 py-4 font-mono text-sm whitespace-nowrap text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
					<div className="mx-auto flex items-center gap-2 px-4">
						<p>Prochain meetup</p>-
						<time dateTime={nextLastThursday.toISOString().slice(0, 10)}>
							{nextLastThursday.toLocaleDateString("fr-CA", {
								weekday: "long",
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</time>
						<DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
						<p>Québec, QC</p>
					</div>
				</div>
				<div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
					<Button
						target="_blank"
						className="flex flex-col justify-center items-center"
						href={nextEventLink}
					>
						<span>Réservez vos billets</span>
						<span className="text-sm text-blue-200">(C'est Gratuit!)</span>
					</Button>
				</div>
			</Container>
		</header>
	);
}

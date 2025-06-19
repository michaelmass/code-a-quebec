import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { DiamondIcon } from "@/components/DiamondIcon";
import { Logo } from "@/components/Logo";
import { nextEventLink } from "@/const";
import { formatRelativeDate } from "@/util";

function getLastThursdayOfMonth(date = new Date()) {
	const nextThursday = new Date(date);

	while (nextThursday.getDay() !== 4) {
		nextThursday.setDate(nextThursday.getDate() + 1);
	}

	const lastThursday = new Date(
		nextThursday.getFullYear(),
		nextThursday.getMonth() + 1,
		0,
	);

	while (lastThursday.getDay() !== 4) {
		lastThursday.setDate(lastThursday.getDate() - 1);
	}

	return lastThursday;
}

export function Header() {
	const nextLastThursday = getLastThursdayOfMonth();

	return (
		<header className="relative z-50 flex-none lg:pt-11">
			<Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
				<div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
					<Logo width={53} height={80} />
				</div>
				<div className="order-first relative -mx-4 flex flex-auto basis-full border-b border-blue-600/10 py-4 font-mono text-sm whitespace-nowrap text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
					<div>
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
						<div className="font-comic text-center">
							{formatRelativeDate(nextLastThursday)}
						</div>
					</div>
				</div>
				<div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
					<Button
						target="_blank"
						className="flex flex-col justify-center items-center"
						href={nextEventLink}
					>
						<span>Réserve ton billet</span>
						<span className="text-sm text-blue-200">(C&apos;est Gratuit!)</span>
					</Button>
				</div>
			</Container>
		</header>
	);
}

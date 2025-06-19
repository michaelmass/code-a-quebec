import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="flex-none py-16">
			<Container className="flex flex-col items-center justify-between md:flex-row">
				<Logo height={48} width={32} />
				<p className="mt-6 text-base text-slate-500 md:mt-0">
					Organisé par{" "}
					<Link
						href="https://michaelmasson.com"
						className="underline hover:underline-offset-1 underline-offset-2"
						target="_blank"
					>
						Michael Masson
					</Link>{" "}
					&copy; {new Date().getFullYear()}
				</p>
			</Container>
		</footer>
	);
}

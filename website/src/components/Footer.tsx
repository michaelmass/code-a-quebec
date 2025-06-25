"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { DiamondIcon } from "@/components/DiamondIcon";
import { Logo } from "@/components/Logo";

export function Footer() {
	return (
		<footer className="flex-none py-16">
			<Container className="flex flex-col items-center justify-between md:flex-row">
				<div className="flex items-center gap-4">
					<Link className="cursor-pointer" href="/">
						<Logo height={48} width={32} />
					</Link>
					<div className="flex gap-3 text-gray-500 items-center">
						<Link href="/guidelines" className="hover:underline">
							Guidelines
						</Link>
						<DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
						<Link href="/contact" className="hover:underline">
							Contact
						</Link>
					</div>
				</div>
				<p className="mt-6 text-base text-gray-400 md:mt-0">
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

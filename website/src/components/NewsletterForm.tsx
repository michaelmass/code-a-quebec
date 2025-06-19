"use client";

import { Button } from "@/components/Button";
import { useState } from "react";

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<"svg">) {
	return (
		<svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
			<path
				d="m14 7 5 5-5 5M19 12H5"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

const INIT = "INIT";
const SUBMITTING = "SUBMITTING";
const ERROR = "ERROR";
const SUCCESS = "SUCCESS";
const formStates = [INIT, SUBMITTING, ERROR, SUCCESS] as const;

const domain = "app.loops.so";
const formId = "cm4lhl9l400n19qt8gqd4wk73";

function isValidEmail(email: string) {
	return /.+@.+/.test(email);
}

export const NewsletterForm = () => {
	const [email, setEmail] = useState("");
	const [formState, setFormState] = useState<(typeof formStates)[number]>(INIT);
	const [errorMessage, setErrorMessage] = useState("");

	const resetForm = () => {
		setEmail("");
		setFormState(INIT);
		setErrorMessage("");
	};

	const hasRecentSubmission = () => {
		const time = new Date();
		const timestamp = time.valueOf();
		const previousTimestamp = localStorage.getItem("loops-form-timestamp");

		// Indicate if the last sign up was less than 3 minutes ago
		if (
			previousTimestamp &&
			Number(previousTimestamp) + 180 * 1000 > timestamp
		) {
			setFormState(ERROR);
			setErrorMessage("Trop de soumissions, réessaye dans 3 minutes");
			return true;
		}

		localStorage.setItem("loops-form-timestamp", timestamp.toString());
		return false;
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (formState !== INIT) return;

		if (!isValidEmail(email)) {
			setFormState(ERROR);
			setErrorMessage("Entre une adresse email valide");
			return;
		}

		if (hasRecentSubmission()) return;
		setFormState(SUBMITTING);

		const formBody = `userGroup=website&email=${encodeURIComponent(email)}`;

		fetch(`https://${domain}/api/newsletter-form/${formId}`, {
			method: "POST",
			body: formBody,
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		})
			.then(async (res) => {
				const data = await res.json();

				if (!res.ok) {
					setFormState(ERROR);
					setErrorMessage(
						"Il y a eu une erreur, assure-toi d'entrer un email valide",
					);
					localStorage.setItem("loops-form-timestamp", "");
					return;
				}

				resetForm();
				setFormState(SUCCESS);
			})
			.catch((error) => {
				setFormState(ERROR);

				if (error.message === "Failed to fetch") {
					setErrorMessage("Trop de soumissions, réessaye dans 3 minutes");
				} else if (error.message) {
					setErrorMessage(error.message);
				}

				localStorage.setItem("loops-form-timestamp", "");
			});
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3 className="text-lg font-semibold tracking-tight text-blue-900">
				Entre ton email pour recevoir les updates{" "}
				<span aria-hidden="true">&darr;</span>
			</h3>
			<div className="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
				{formState === SUCCESS ? (
					<p className="text-sm text-green-600 w-full text-center">
						Merci pour ton inscription !
					</p>
				) : (
					<>
						<input
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							required
							placeholder="Email"
							aria-label="Email"
							className="-my-2.5 flex-auto bg-transparent pr-2.5 pl-6 text-base text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
						/>
						<Button
							type="submit"
							className="cursor-pointer"
							disabled={formState === SUBMITTING || formState === ERROR}
						>
							<span className="sr-only sm:not-sr-only">Abonne moi</span>
							<span className="sm:hidden">
								<ArrowRightIcon className="h-6 w-6" />
							</span>
						</Button>
					</>
				)}
			</div>
			{formState === ERROR && (
				<p className="mt-2 text-sm text-red-500 sm:text-base text-right">
					{errorMessage}
				</p>
			)}
		</form>
	);
};

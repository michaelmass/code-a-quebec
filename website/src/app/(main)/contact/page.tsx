import { BackgroundImage } from "@/components/BackgroundImage";
import { Contact } from "@/components/Contact";

export default function Home() {
	return (
		<div className="relative py-10 sm:pt-18 sm:pb-18">
			<BackgroundImage className="-top-36 -bottom-14" />
			<Contact />
		</div>
	);
}

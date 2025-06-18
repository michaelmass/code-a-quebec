import LogoSvg from "@/images/logos/logo.png";
import clsx from "clsx";
import Image from "next/image";

export function Logo(
	props: Omit<React.ComponentProps<typeof Image>, "src" | "alt">,
) {
	return (
		<Image
			{...props}
			alt="Logo"
			src={LogoSvg.src}
			className={clsx("bg-blue-700 rounded-full shadow-xl", props.className)}
		/>
	);
}

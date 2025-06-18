import LogoSvg from "@/images/logos/logo.png";
import clsx from "clsx";

export function Logo(props: React.ComponentPropsWithoutRef<"img">) {
	return (
		<img
			src={LogoSvg.src}
			{...props}
			className={clsx("bg-blue-700 rounded-full shadow-xl", props.className)}
		/>
	);
}

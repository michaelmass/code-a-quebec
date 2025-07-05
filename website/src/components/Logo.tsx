import Image from "next/image";
import LogoSvg from "@/images/logos/logo.png";
import { cn } from "@/util";

export function Logo(props: Omit<React.ComponentProps<typeof Image>, "src" | "alt">) {
  return (
    <Image
      {...props}
      alt="Logo"
      src={LogoSvg.src}
      className={cn("rounded-full bg-blue-700 shadow-xl", props.className)}
    />
  );
}

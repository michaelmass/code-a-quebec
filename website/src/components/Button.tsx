import Link from "next/link";
import { cn } from "@/util";

type ButtonProps =
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<"button"> & { href?: undefined });

export function Button({ className, ...props }: ButtonProps) {
  className = cn(
    "inline-flex justify-center text-center rounded-2xl bg-blue-600 p-2 px-4 text-base font-semibold text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70",
    className,
  );

  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}

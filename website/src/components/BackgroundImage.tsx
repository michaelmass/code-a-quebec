import Image from "next/image";

import backgroundImage from "@/images/background.jpg";
import { cn } from "@/util";

export function BackgroundImage({
  className,
  position = "left",
}: {
  className?: string;
  position?: "left" | "right";
}) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden bg-indigo-50", className)}>
      <Image
        className={cn(
          "absolute top-0",
          position === "left" &&
            "left-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]",
          position === "right" &&
            "left-full -translate-x-1/2 sm:left-1/2 sm:translate-x-[-20%] sm:translate-y-[-15%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-x-[27%] xl:translate-y-[-8%]",
        )}
        src={backgroundImage}
        alt=""
        width={918}
        height={1495}
        priority
        unoptimized
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-white" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-white" />
    </div>
  );
}

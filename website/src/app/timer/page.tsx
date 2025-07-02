import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Timer } from "@/components/Timer";

export default function () {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute flex w-full items-center justify-center">
        <Link className="z-50 mt-20 cursor-pointer" href="/">
          <Logo width={132} height={200} />
        </Link>
      </div>
      <Timer />
    </div>
  );
}

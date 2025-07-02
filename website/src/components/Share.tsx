import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";
import LinkedInLogo from "@/images/logos/linkedin.svg";
import XLogo from "@/images/logos/x.svg";
import { cn } from "@/util";

const codeAQuebecUrl = "https%3A%2F%2Fcode-a-quebec.com";

type ShareProps = {
  children: React.ReactNode;
  className?: string;
};

export const Share = ({ children, className }: ShareProps) => {
  return (
    <Popover className={cn("relative", className)}>
      <PopoverButton>{children}</PopoverButton>
      <PopoverPanel
        anchor={{ to: "top", gap: "8px" }}
        className="flex rounded-xl bg-white p-2 shadow"
      >
        <div className="flex flex-col gap-1">
          <div className="text-gray-400">Partage</div>
          <div className="flex items-center justify-center gap-2">
            <Link
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${codeAQuebecUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-light text-gray-400 hover:text-gray-500"
            >
              <LinkedInLogo className="inline-block" height="16" width="16" viewBox="0 0 24 24" />
            </Link>
            <Link
              href={`https://x.com/intent/post?url=${codeAQuebecUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-light text-gray-400 hover:text-gray-500"
            >
              <XLogo className="inline-block" height="14" width="14" viewBox="0 0 32 32" />
            </Link>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
};

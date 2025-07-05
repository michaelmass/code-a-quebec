"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { DiamondIcon } from "@/components/DiamondIcon";
import { Logo } from "@/components/Logo";
import { Share } from "@/components/Share";
import { repositoryLink } from "@/const";
import GithubLogo from "@/images/logos/github.svg";
import ShareIcon from "@/images/logos/share.svg";

export function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex items-center gap-4">
          <Link className="cursor-pointer" href="/">
            <Logo height={48} width={32} />
          </Link>
          <div className="flex items-center gap-3 text-gray-500">
            <Link href="/guidelines" className="hover:underline">
              Guidelines
            </Link>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-6 text-sm text-gray-400 sm:text-base md:mt-0">
          Organisé par{" "}
          <Link
            href="https://michaelmasson.com"
            className="underline underline-offset-1 hover:underline-offset-2"
            target="_blank"
          >
            Michael Masson
          </Link>{" "}
          &copy; {new Date().getFullYear()}
          <Share className="ml-2 inline-block">
            <div className="inline-block cursor-pointer font-light text-gray-400 hover:text-gray-500">
              <ShareIcon
                className="inline-block"
                height="20"
                width="20"
                alt="Share icon"
                viewBox="0 0 24 24"
              />
            </div>
          </Share>
          <Link
            target="_blank"
            href={repositoryLink}
            className="ml-2 font-light text-gray-400 hover:text-gray-500"
          >
            <GithubLogo
              className="inline-block"
              height="20"
              width="20"
              alt="Github logo"
              viewBox="0 0 24 24"
            />
          </Link>
        </div>
      </Container>
    </footer>
  );
}

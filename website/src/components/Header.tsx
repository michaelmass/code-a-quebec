"use client";

import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { DiamondIcon } from "@/components/DiamondIcon";
import { Logo } from "@/components/Logo";
import { formatCodeAQuebecLink, formatRelativeDate, getLastThursdayOfMonth } from "@/util";

export function Header() {
  const nextLastThursday = getLastThursdayOfMonth();
  const eventLink = formatCodeAQuebecLink(nextLastThursday);
  const nextLastThursdayLabel = formatRelativeDate(nextLastThursday);

  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <div className="flex">
            <Link className="cursor-pointer" href="/">
              <Logo width={53} height={80} />
            </Link>
          </div>
        </div>
        <div className="relative order-first -mx-4 flex flex-auto basis-full whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex flex-wrap items-center justify-center gap-2">
            <p>Prochain meetup</p>-
            <time dateTime={nextLastThursday.toISOString().slice(0, 10)}>
              {nextLastThursday.toLocaleDateString("fr-CA", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <div className="flex basis-full items-center justify-center gap-2 sm:basis-auto">
              <p>Québec, QC</p>
              <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current sm:order-first" />
              <p className="font-comic sm:hidden">{nextLastThursdayLabel}</p>
            </div>
            <p className="font-comic hidden basis-full text-center sm:block">
              {nextLastThursdayLabel}
            </p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button
            target="_blank"
            className="flex flex-col items-center justify-center"
            href={eventLink}
          >
            <span>Réserve ton billet</span>
            <span className="text-sm text-blue-200">(C&apos;est Gratuit!)</span>
          </Button>
        </div>
      </Container>
    </header>
  );
}

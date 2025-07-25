"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import Image from "next/image";
import { useEffect, useId, useState } from "react";

import { Container } from "@/components/Container";
import { DiamondIcon } from "@/components/DiamondIcon";
import LinkedInLogo from "@/images/logos/linkedin.svg";
import SlidesLogo from "@/images/logos/slides.svg";
import YoutubeLogo from "@/images/logos/youtube.svg";
import { events } from "@/talks";
import { cn } from "@/util";

function ImageClipPaths({ id, ...props }: React.ComponentPropsWithoutRef<"svg"> & { id: string }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Speakers() {
  const id = useId();
  const [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    const lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <section aria-labelledby="speakers-title" className="py-10 sm:py-20">
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Présentations
          </h2>
          <p className="font-display mt-4 text-lg tracking-tight text-blue-900 sm:text-2xl">
            Découvrez les personnes qui ont fait des présentations au Code @ Québec.
          </p>
        </div>
        <TabGroup
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 lg:mt-24 lg:grid-cols-4 lg:gap-y-16"
          vertical={tabOrientation === "vertical"}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 lg:mx-0 lg:block lg:pb-0">
            <div className="absolute top-2 bottom-0 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <TabList className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 px-4 whitespace-nowrap sm:max-w-2xl sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) => (
                <>
                  {events.map((event, eventIndex) => (
                    <div key={event.date} className="relative lg:pl-8">
                      <DiamondIcon
                        className={cn(
                          "absolute top-2.25 left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block",
                          eventIndex === selectedIndex
                            ? "fill-blue-600 stroke-blue-600"
                            : "fill-transparent stroke-slate-400",
                        )}
                      />
                      <div className="relative cursor-pointer">
                        <div
                          className={cn(
                            "rounded-2xl p-2 pb-0 hover:bg-blue-50/50",
                            eventIndex === selectedIndex && "bg-blue-50",
                          )}
                        >
                          <div
                            className={cn(
                              "font-mono text-sm",
                              eventIndex === selectedIndex ? "text-blue-600" : "text-slate-500",
                            )}
                          >
                            <Tab className="cursor-pointer data-selected:not-data-focus:outline-hidden">
                              <span className="absolute inset-0" />
                              {event.number} Code @ Québec
                            </Tab>
                          </div>
                          <time
                            dateTime={event.date}
                            className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
                          >
                            {event.date}
                          </time>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </TabList>
          </div>
          <TabPanels className="lg:col-span-3">
            {events.map((event) => (
              <TabPanel
                key={event.date}
                className="flex flex-col justify-center gap-x-8 gap-y-6 not-lg:items-center data-selected:not-data-focus:outline-hidden sm:gap-y-12"
                unmount={false}
              >
                {event.talks.map((talk, talkIndex) => (
                  <div key={talkIndex} className="flex not-md:flex-col not-md:items-center">
                    <div className="w-full max-w-80 flex-none md:mr-4">
                      <div className="group relative h-70 transform overflow-hidden rounded-4xl">
                        <div
                          className={cn(
                            "absolute top-0 right-4 bottom-6 left-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6",
                            ["border-blue-300", "border-indigo-300", "border-sky-300"][
                              talkIndex % 3
                            ],
                          )}
                        />
                        <div
                          className="absolute inset-0 bg-indigo-50"
                          style={{ clipPath: `url(#${id}-${talkIndex % 3})` }}
                        >
                          <Image
                            className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                            src={talk.profile.profile}
                            alt=""
                            priority
                            sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                          />
                        </div>
                      </div>
                      <h3 className="font-display mt-2 flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900">
                        <span>{talk.profile.name}</span>
                        {talk.profile.profileLinkedIn ? (
                          <a
                            className="-mt-0.5 font-light text-gray-400 hover:text-gray-500"
                            target="_blank"
                            rel="noreferrer"
                            href={talk.profile.profileLinkedIn}
                          >
                            <LinkedInLogo
                              className="inline-block"
                              height="16"
                              width="16"
                              viewBox="0 0 24 24"
                            />
                          </a>
                        ) : undefined}
                      </h3>
                      <p className="mt-1 flex items-center gap-1 text-base tracking-tight text-slate-500">
                        <span>{talk.profile.position}</span>
                        {talk.profile.company ? (
                          talk.profile.companyLinkedIn ? (
                            <a className="hover:text-gray-500" href={talk.profile.companyLinkedIn}>
                              {talk.profile.company}
                            </a>
                          ) : (
                            <span>{talk.profile.company}</span>
                          )
                        ) : undefined}
                      </p>
                    </div>
                    <div className="flex flex-col gap-y-3">
                      <h3 className="font-display mt-4 flex gap-x-2 text-xl font-medium tracking-tight text-blue-900">
                        {talk.youtubeUrl ? (
                          <a href={talk.youtubeUrl} target="_blank" className="-mt-0.5">
                            <YoutubeLogo
                              className="inline-block"
                              height="24"
                              width="24"
                              alt="Listen on Youtube"
                              viewBox="0 0 256 180"
                            />
                          </a>
                        ) : undefined}
                        {talk.slidesUrl ? (
                          <a href={talk.slidesUrl} target="_blank" className="-mt-0.5">
                            <SlidesLogo
                              className="inline-block"
                              height="20"
                              width="16"
                              alt="View slides"
                              viewBox="0 0 48 66"
                            />
                          </a>
                        ) : undefined}
                        <span>{talk.title}</span>
                      </h3>
                      <p className="text-justify text-base tracking-tight text-gray-600">
                        {talk.summary}
                      </p>
                      <div className="flex flex-col gap-2">
                        {talk.links.map((link, linkIndex) => (
                          <div key={linkIndex}>
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              className="text-blue-600 hover:underline"
                            >
                              - {link.text}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </Container>
    </section>
  );
}

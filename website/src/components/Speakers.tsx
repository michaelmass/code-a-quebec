"use client";

import { Tab, TabGroup, TabList } from "@headlessui/react";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/Container";
import { DiamondIcon } from "@/components/DiamondIcon";
import LinkedInLogo from "@/images/logos/linkedin.svg";
import SlidesLogo from "@/images/logos/slides.svg";
import YoutubeLogo from "@/images/logos/youtube.svg";
import { events, eventYears, type Event, type Profile, type Talk } from "@/talks";
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

const getDefaultYear = (event: string | null) => {
  if (!event) {
    return eventYears[eventYears.length - 1];
  }

  const eventYear = event.split("-")[0];

  if (eventYears.includes(eventYear)) {
    return eventYear;
  }

  return eventYears[eventYears.length - 1];
};

const getDefaultEvent = (eventYear: string, eventDate: string | null) => {
  if (!eventDate) {
    return events[0];
  }

  const event = events.find((event) => event.date === eventDate);

  if (event?.date.startsWith(eventYear)) {
    return event;
  }

  return events[0];
};

const getTalkAnchor = (talk: Talk) =>
  talk.title
    .replaceAll(" ", "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase();

const AUTO_ROTATE_INTERVAL = 5000;

function SpeakerProfiles({
  profiles,
  talkIndex,
  clipId,
}: {
  profiles: Profile[];
  talkIndex: number;
  clipId: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startTimeRef = useRef(Date.now());
  const elapsedRef = useRef(0);
  const isMultiple = profiles.length > 1;
  const pausedRef = useRef(false);

  const [paused, setPaused] = useState(false);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const scheduleNext = useCallback(
    (delay: number) => {
      clearTimer();
      if (!isMultiple) return;
      startTimeRef.current = Date.now();
      elapsedRef.current = AUTO_ROTATE_INTERVAL - delay;
      timerRef.current = setTimeout(() => {
        if (pausedRef.current) return;
        elapsedRef.current = 0;
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % profiles.length);
      }, delay);
    },
    [isMultiple, profiles.length, clearTimer],
  );

  // Handle pause/unpause
  useEffect(() => {
    pausedRef.current = paused;
    if (!isMultiple) return clearTimer;
    if (paused) {
      elapsedRef.current += Date.now() - startTimeRef.current;
      clearTimer();
    } else {
      const remaining = AUTO_ROTATE_INTERVAL - elapsedRef.current;
      scheduleNext(Math.max(remaining, 0));
    }
    return clearTimer;
  }, [paused, isMultiple, scheduleNext, clearTimer]);

  // Reset on profile change
  useEffect(() => {
    elapsedRef.current = 0;
    if (!isMultiple || pausedRef.current) return;
    scheduleNext(AUTO_ROTATE_INTERVAL);
    return clearTimer;
  }, [activeIndex, isMultiple, scheduleNext, clearTimer]);

  const selectProfile = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const profile = profiles[activeIndex];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
  };

  return (
    <div
      className="w-full max-w-80 flex-none md:mr-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="group relative h-70 transform overflow-hidden rounded-4xl pl-1">
              <div
                className={cn(
                  "absolute top-0 right-4 bottom-6 left-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6",
                  ["border-blue-300", "border-indigo-300", "border-sky-300"][talkIndex % 3],
                )}
              />
              <div
                className="absolute inset-0 bg-indigo-50"
                style={{ clipPath: `url(#${clipId}-${talkIndex % 3})` }}
              >
                <Image
                  className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                  src={profile.profile}
                  alt=""
                  priority
                  sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
            </div>
            <h3 className="font-display mt-2 flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900">
              <span>{profile.name}</span>
              {profile.profileLinkedIn ? (
                <a
                  className="-mt-0.5 font-light text-gray-400 hover:text-gray-500"
                  target="_blank"
                  rel="noreferrer"
                  href={profile.profileLinkedIn}
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
              <span>{profile.position}</span>
              {profile.company ? (
                profile.companyLinkedIn ? (
                  <a className="hover:text-gray-500" href={profile.companyLinkedIn}>
                    @ {profile.company}
                  </a>
                ) : (
                  <span>{profile.company}</span>
                )
              ) : undefined}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {isMultiple && (
        <div className="mt-3 flex items-center justify-center gap-3">
          {profiles.map((p, i) => {
            const isActive = i === activeIndex;
            const size = 44;
            const strokeWidth = 2.5;
            const radius = (size - strokeWidth) / 2;
            const circumference = 2 * Math.PI * radius;

            return (
              <button
                key={i}
                type="button"
                onClick={() => selectProfile(i)}
                className={cn(
                  "relative cursor-pointer transition-all duration-300",
                  isActive ? "scale-110" : "opacity-60 hover:opacity-100",
                )}
              >
                <div className="relative h-11 w-11">
                  <div className="absolute inset-[3px] overflow-hidden rounded-full">
                    <Image
                      src={p.profile}
                      alt={p.name}
                      className="h-full w-full object-cover"
                      width={40}
                      height={40}
                    />
                  </div>
                  <svg
                    className="absolute inset-0"
                    width={size}
                    height={size}
                    viewBox={`0 0 ${size} ${size}`}
                  >
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      fill="none"
                      stroke={isActive ? "#dbeafe" : "#e2e8f0"}
                      strokeWidth={strokeWidth}
                    />
                    {isActive && (
                      <circle
                        key={activeIndex}
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference}
                        transform={`rotate(-90 ${size / 2} ${size / 2})`}
                        style={{
                          animation: `progress-ring ${AUTO_ROTATE_INTERVAL}ms linear forwards`,
                          animationPlayState: paused ? "paused" : "running",
                        }}
                      />
                    )}
                  </svg>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function Speakers() {
  const id = useId();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [tabOrientation, setTabOrientation] = useState("horizontal");

  const eventDate = searchParams.get("event");

  const defaultYear = getDefaultYear(eventDate);
  const defaultEvent = getDefaultEvent(defaultYear, eventDate);

  const [selectedYear, setSelectedYear] = useState(defaultYear);
  const [selectedEvent, setSelectedEvent] = useState(defaultEvent);
  const [anchor, setAnchor] = useState<string | null>(null);

  const updateUrl = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("event", selectedEvent.date);
    router.push(`${pathname}?${params.toString()}${anchor ? `#${anchor}` : ""}`, { scroll: false });
  };

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

  useEffect(() => {
    if (!selectedEvent.date.startsWith(selectedYear)) {
      const event = events.find((event) => event.date.startsWith(selectedYear));

      if (event) {
        setSelectedEvent(event);
      }
    }
  }, [selectedYear]);

  useEffect(() => {
    updateUrl();
  }, [anchor, selectedEvent]);

  return (
    <section aria-labelledby="speakers-title" className="py-10 sm:py-20">
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto mb-4 max-w-2xl lg:mx-0">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Présentations
          </h2>
          <p className="font-display mt-4 text-lg tracking-tight text-blue-900 sm:text-2xl">
            Découvrez les personnes qui ont fait des présentations au Code @ Québec.
          </p>
        </div>
        <div className="mx-auto flex max-w-2xl gap-2 lg:mx-0">
          {eventYears.map((year) => (
            <div
              onClick={() => setSelectedYear(year)}
              key={year}
              className={cn(
                "relative cursor-pointer rounded-2xl border border-transparent p-1 px-2",
                selectedYear === year
                  ? "bg-blue-600 text-white"
                  : "bg-blue-50/50 text-blue-600 hover:bg-blue-50",
              )}
            >
              {year}
            </div>
          ))}
        </div>
        <TabGroup
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 lg:mt-14 lg:grid-cols-4 lg:gap-y-16"
          vertical={tabOrientation === "vertical"}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 lg:mx-0 lg:block lg:pb-0">
            <div className="absolute top-2 bottom-13 left-0.5 ml-1 hidden w-px bg-slate-200 lg:block" />
            <TabList className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-8 px-4 whitespace-nowrap sm:max-w-2xl sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {events
                .filter((event) => event.date.startsWith(selectedYear))
                .map((event) => (
                  <div
                    key={event.date}
                    className="relative lg:pl-8"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <DiamondIcon
                      className={cn(
                        "absolute top-2.25 left-[3.5px] hidden h-1.5 w-1.5 overflow-visible lg:block",
                        event.date === selectedEvent.date
                          ? "fill-blue-600 stroke-blue-600"
                          : "fill-slate-400 stroke-slate-400",
                      )}
                    />
                    <div className="relative cursor-pointer">
                      <div
                        className={cn(
                          "rounded-2xl p-2 pb-0 hover:bg-blue-50/50",
                          event.date === selectedEvent.date && "bg-blue-50",
                        )}
                      >
                        <div
                          className={cn(
                            "font-mono text-sm",
                            event.date === selectedEvent.date ? "text-blue-600" : "text-slate-500",
                          )}
                        >
                          <Tab className="cursor-pointer data-selected:not-data-focus:outline-hidden">
                            <span className="absolute inset-0" />
                            {event.number} Code @ Québec
                          </Tab>
                        </div>
                        <time
                          dateTime={event.date}
                          className="mt-1 block text-xl font-semibold tracking-tight text-blue-900"
                        >
                          {event.date}
                        </time>
                      </div>
                    </div>
                  </div>
                ))}
            </TabList>
          </div>
          <div className="lg:col-span-3">
            <div className="flex flex-col justify-center gap-x-8 gap-y-6 not-lg:items-center data-selected:not-data-focus:outline-hidden sm:gap-y-12">
              {selectedEvent.talks.map((talk, talkIndex) => {
                const talkProfiles: Profile[] = Array.isArray(talk.profiles)
                  ? talk.profiles
                  : [talk.profiles];
                return (
                  <div
                    key={talkIndex}
                    className="flex not-md:flex-col not-md:items-center"
                    id={getTalkAnchor(talk)}
                  >
                    <SpeakerProfiles
                      key={`${selectedEvent.date}-${talkIndex}`}
                      profiles={talkProfiles}
                      talkIndex={talkIndex}
                      clipId={id}
                    />
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
                        <span>
                          {talk.title}{" "}
                          <span
                            className="cursor-pointer hover:underline"
                            onClick={() => setAnchor(getTalkAnchor(talk))}
                          >
                            #
                          </span>
                        </span>
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
                );
              })}
            </div>
          </div>
        </TabGroup>
      </Container>
    </section>
  );
}

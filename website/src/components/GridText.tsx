"use client";

import clsx from "clsx";

type GridTextProps = {
  content: string;
  className?: string;
};

export function GridText({ content, className }: GridTextProps) {
  return <p className={clsx("mt-2 text-blue-900 sm:text-lg", className)}>{content}</p>;
}

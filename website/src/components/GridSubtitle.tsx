"use client";

import clsx from "clsx";

type GridSubtitleProps = {
  content: string;
  className?: string;
};

export function GridSubtitle({ content, className }: GridSubtitleProps) {
  return <h2 className={clsx("text-2xl font-semibold text-blue-600", className)}>{content}</h2>;
}

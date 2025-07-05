"use client";

import clsx from "clsx";

type GridContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

export function GridContainer({ children, className }: GridContainerProps) {
  return (
    <div
      className={clsx(
        "rounded-5xl border border-gray-100 bg-gradient-to-tr from-blue-50/60 to-white shadow-sm transition-all hover:drop-shadow",
        className,
      )}
    >
      {children}
    </div>
  );
}

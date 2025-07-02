"use client";

type PageTitleProps = {
  content: string;
};

export function PageTitle({ content }: PageTitleProps) {
  return (
    <h1 className="font-display pb-6 text-center text-3xl font-bold tracking-tighter text-blue-600 sm:text-4xl">
      {content}
    </h1>
  );
}

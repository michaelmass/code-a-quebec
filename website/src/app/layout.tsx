import type { Metadata } from "next";
import { DM_Sans, Inter, Shantell_Sans } from "next/font/google";

import "@/styles/tailwind.css";
import { BackgroundImage } from "@/components/BackgroundImage";
import { cn } from "@/util";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

const shantellSans = Shantell_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-shantell-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Code @ Québec",
    default: "Code @ Québec - Un meetup de tech à Québec",
  },
  description:
    "Le Code @ Québec est un meetup pour découvrir des technologies et rencontrer d&apos;autres devs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={cn(
        "h-full bg-white antialiased",
        inter.variable,
        dmSans.variable,
        shantellSans.variable,
      )}
    >
      <body className="relative flex min-h-full overflow-x-hidden">
        <BackgroundImage className="absolute -top-20 -bottom-14 -z-10 h-screen w-screen overflow-hidden" />
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  );
}

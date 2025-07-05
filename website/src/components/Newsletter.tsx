import Image from "next/image";
import { Container } from "@/components/Container";
import { NewsletterForm } from "@/components/NewsletterForm";
import backgroundImage from "@/images/background-newsletter.jpg";

export function Newsletter() {
  return (
    <section aria-label="Newsletter">
      <Container>
        <div className="md:rounded-5xl relative -mx-4 overflow-hidden bg-indigo-50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute top-0 left-1/2 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
            src={backgroundImage}
            alt=""
            width={919}
            height={1351}
            unoptimized
          />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                Reste au courant
              </p>
              <p className="mt-4 text-lg tracking-tight text-blue-900">
                Tu seras notifié du prochain meetup et tu vas recevoir un sommaire des
                présentations.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

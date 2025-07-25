import Link from "next/link";
import { Container } from "@/components/Container";
import { NumberTitle } from "@/components/Number";
import { spotifyPlaylistLink, tallyFormLink } from "@/const";
import ArrowRight from "@/images/logos/arrow-right.svg";
import { PageTitle } from "@/components/PageTitle";

export const Contact = () => {
  return (
    <Container className="relative">
      <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
        <PageTitle content="Contact & Feedback" />

        <div className="mb-8">
          <h2 className="font-display align-center mb-2 flex gap-2 text-xl tracking-tight text-blue-900 sm:text-2xl">
            <NumberTitle number="1" /> Tu veux contacter l'organisateur ?
          </h2>
          <p className="font-display tracking-tight text-blue-900">
            Écris un mail à{" "}
            <a
              className="text-blue-500 underline hover:underline-offset-2"
              href="mailto:michaelmasson55@gmail.com"
            >
              michaelmasson55@gmail.com
            </a>
            .
          </p>
        </div>

        <div className="mb-8">
          <h2 className="font-display align-center mb-2 flex gap-2 text-xl tracking-tight text-blue-900 sm:text-2xl">
            <NumberTitle number="2" /> Si tu veux aider à améliorer le meetup, remplis le
            formulaire:
          </h2>
          <p className="font-display mb-4 tracking-tight text-blue-900">
            <Link href={tallyFormLink} className="text-blue-500 underline hover:underline-offset-2">
              Formulaire de feedback
            </Link>
          </p>
        </div>

        <div className="mb-8">
          <h3 className="font-display align-center mb-2 flex gap-2 text-xl tracking-tight text-blue-900 sm:text-2xl">
            <NumberTitle number="3" /> Est-ce que tu veux faire un talk au Code @ Québec ?
          </h3>
          <p className="font-display tracking-tight text-blue-900">
            Écris un mail à{" "}
            <a
              className="text-blue-500 underline hover:underline-offset-2"
              href="mailto:michaelmasson55@gmail.com"
            >
              michaelmasson55@gmail.com
            </a>
            .
          </p>
          <p className="font-display mb-4 tracking-tight text-blue-900">
            Lis les directives pour préparer ton talk{" "}
            <ArrowRight className="inline-block h-6 w-6" />{" "}
            <Link className="text-blue-500 underline hover:underline-offset-2" href="/guidelines">
              guidelines
            </Link>
          </p>
        </div>

        <div className="mb-8">
          <h3 className="font-display align-center mb-2 flex gap-2 text-2xl tracking-tight text-blue-900">
            <NumberTitle number="4" /> Tu veux participer à la playlist de musique ?
          </h3>
          <p className="font-display tracking-tight text-blue-900">
            Tu peux modifier la playlist de musique du Code @ Québec sur{" "}
            <Link
              target="_blank"
              className="text-blue-500 underline hover:underline-offset-2"
              href={spotifyPlaylistLink}
            >
              Spotify
            </Link>
            .
          </p>
        </div>
      </div>
    </Container>
  );
};

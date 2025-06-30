"use client";

import { Container } from "@/components/Container";
import { GridContainer } from "@/components/GridContainer";
import SnackOffer from "@/images/event/snack-offer.png";
import Atmosphere from "@/images/event/atmosphere.jpg";
import BgTechnologies from "@/images/background-technologies.png";
import Image from "next/image";

export function Grid() {
  return (
    <section id="grid" aria-labelledby="grid" className="py-20 sm:py-32">
      <Container className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6">
        <GridContainer className="flex flex-col sm:col-span-3">
          <div className="flex-grow p-6">
            <h2 className="text-2xl font-semibold text-blue-600">Apprentissage et découvertes</h2>
            <p className="mt-2 text-blue-900 sm:text-lg">
              Découvrez des approches concrètes et actuelles du développement logiciel.
            </p>
          </div>
          <Image
            className="rounded-b-5xl max-h-64 object-cover opacity-25 grayscale"
            src={BgTechnologies}
            alt="technologies"
          />
        </GridContainer>
        <GridContainer className="p-6 sm:col-span-3">
          <h2 className="text-2xl font-semibold text-blue-600">Collations offertes</h2>
          <p className="mt-2 text-blue-900 sm:text-lg">On s'occupe de vos papilles!</p>
          <Image
            className="mt-4 h-52 rounded-3xl object-cover sm:h-64"
            src={SnackOffer}
            alt="collations offertes"
          />
        </GridContainer>
        <GridContainer className="p-6 sm:col-span-3 lg:col-span-4">
          <h2 className="text-2xl font-semibold text-blue-600">Ambiance conviviale</h2>
          <p className="mt-2 text-blue-900 sm:text-lg">
            C'est l'événement idéale pour élargir son réseau professionnel de gens pentionnés.
          </p>
          <Image
            className="mt-4 h-52 rounded-3xl object-cover sm:h-64"
            src={Atmosphere}
            alt="ambiance conviviale"
          />
        </GridContainer>
        <GridContainer className="flex h-full flex-col p-6 sm:col-span-3 lg:col-span-2">
          <h2 className="text-2xl font-semibold text-blue-600">Horaire</h2>
          <div className="mt-2 flex flex-grow flex-col rounded-xl bg-gray-900 p-4 font-mono text-gray-100 shadow-md sm:text-lg">
            <div className="flex-grow">
              <p>
                <span className="text-green-600">botpress@caq:~$</span> cat plan.txt
              </p>
              <p>
                <span className="text-pink-600">18h00</span> - Accueil et réseautage
              </p>
              <p>
                <span className="text-pink-600">18h30</span> - Présentation 1
              </p>
              <p>
                <span className="text-pink-600">19h15</span> - Présentation 2
              </p>
              <p>
                <span className="text-pink-600">20h00</span> - Réseautage libre
              </p>
            </div>
            <p className="mt-4">
              <span className="text-green-600">botpress@caq:~$</span> sudo join
            </p>
          </div>
        </GridContainer>
      </Container>
    </section>
  );
}

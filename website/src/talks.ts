import type { StaticImageData } from "next/image";

import anthonyValleeProfile from "@/images/profiles/anthony-vallee.png";
import christopheSiroisProfile from "@/images/profiles/christophe-sirois.png";
import francoisLevasseurProfile from "@/images/profiles/francois-levasseur.png";
import francoisXavierDarveauProfile from "@/images/profiles/francois-xavier-darveau.png";
import jeanDenisCaronProfile from "@/images/profiles/jean-denis-caron.png";
import laurentLeclercPoulin from "@/images/profiles/laurent-leclerc-poulin.jpeg";
import mathysDeshaiesProfile from "@/images/profiles/mathys-deshaies.jpeg";
import michaelMassonProfile from "@/images/profiles/michael-masson.jpg";
import mikaelFrancoeurProfile from "@/images/profiles/mikael-francoeur.png";
import pierreSnellProfile from "@/images/profiles/pierre-snell.png";
import sebastienDufourBeausejourProfile from "@/images/profiles/sebastien-dufour-beausejour.png";
import williamDussaultProfile from "@/images/profiles/william-dussault.jpeg";

export type Profile = {
  profile: StaticImageData;
  profileLinkedIn?: string;
  companyLinkedIn?: string;
  name: string;
  company?: string;
  position: string;
};

export const profiles = {
  christopheSirois: {
    name: "Christophe Sirois",
    position: "Engineering",
    company: "@Botpress",
    profile: christopheSiroisProfile,
    profileLinkedIn: "https://www.linkedin.com/in/christophesirois/",
    companyLinkedIn: "https://www.linkedin.com/company/botpress/",
  },
  jeanDenisCaron: {
    name: "Jean-Denis Caron",
    position: "(code-is-data 🌱 🏔️)",
    profile: jeanDenisCaronProfile,
    profileLinkedIn: "https://www.linkedin.com/in/jdecaron/",
  },
  pierreSnell: {
    name: "Pierre Snell",
    position: "Data Science",
    company: "@Ubisoft",
    profile: pierreSnellProfile,
    profileLinkedIn: "https://www.linkedin.com/in/pierre-snell-671229140/",
    companyLinkedIn: "https://www.linkedin.com/company/ubisoft/",
  },
  francoisXavierDarveau: {
    name: "Francois-Xavier P. Darveau",
    position: "Building something new ✨",
    profile: francoisXavierDarveauProfile,
    profileLinkedIn: "https://www.linkedin.com/in/francoisxavier/",
  },
  mikaelFrancoeur: {
    name: "Mikaël Francoeur",
    position: "Senior Developer",
    company: "@Ticketmaster",
    profile: mikaelFrancoeurProfile,
    profileLinkedIn: "https://www.linkedin.com/in/mika%C3%ABl-francoeur/",
    companyLinkedIn: "https://www.linkedin.com/company/ticketmaster/",
  },
  michaelMasson: {
    name: "Michael Masson",
    position: "Head of Engineering",
    company: "@Botpress",
    profile: michaelMassonProfile,
    profileLinkedIn: "https://www.linkedin.com/in/michaelmasson55/",
    companyLinkedIn: "https://www.linkedin.com/company/botpress/",
  },
  anthonyVallee: {
    name: "Anthony Vallée",
    position: "SRE",
    company: "@Ticketmaster",
    profile: anthonyValleeProfile,
    companyLinkedIn: "https://www.linkedin.com/company/ticketmaster/",
  },
  sebastienDufourBeausejour: {
    name: "Sébastien Dufour-Beauséjour",
    position: "Full Stack Developper",
    company: "@nexapp",
    profile: sebastienDufourBeausejourProfile,
    profileLinkedIn: "https://www.linkedin.com/in/sebastiendufourbeausejour/",
    companyLinkedIn: "https://www.linkedin.com/company/nexapp-technologies/",
  },
  francoisLevasseur: {
    name: "François Levasseur",
    position: "Engineering",
    company: "@Botpress",
    profile: francoisLevasseurProfile,
    profileLinkedIn: "https://www.linkedin.com/in/franklevasseur/",
    companyLinkedIn: "https://www.linkedin.com/company/botpress/",
  },
  williamDussault: {
    name: "William Dussault",
    position: "Software Developer",
    company: "@Coveo",
    profile: williamDussaultProfile,
    profileLinkedIn: "https://www.linkedin.com/in/dalloriam/",
    companyLinkedIn: "https://www.linkedin.com/company/coveo/",
  },
  laurentLeclercPoulin: {
    name: "Laurent Leclerc-Poulin",
    position: "Senior Software Developer",
    profile: laurentLeclercPoulin,
    company: "@Nesto",
    profileLinkedIn: "https://www.linkedin.com/in/laurent-leclerc-poulin-570267131/",
    companyLinkedIn: "https://www.linkedin.com/company/nesto-ca/",
  },
  mathysDeshaies: {
    name: "Mathys Deshaies",
    position: "Développeur",
    profile: mathysDeshaiesProfile,
    company: "@Desjardins",
    profileLinkedIn: "https://www.linkedin.com/in/mathys-deshaies/",
    companyLinkedIn: "https://www.linkedin.com/company/desjardins/",
  },
} satisfies Record<string, Profile>;

type Event = {
  date: string;
  number: string;
  talks: {
    profile: Profile;
    title: string;
    summary: string;
    youtubeUrl?: string;
    slidesUrl?: string;
    links: {
      text: string;
      url: string;
    }[];
  }[];
};

export const events: Event[] = [
  {
    number: "07",
    date: "2025-06-26",
    talks: [
      {
        profile: profiles.mikaelFrancoeur,
        title: "Programmation orientée aspect et API déclarative: un mélange expressif et puissant",
        summary:
          'Le talk de Mikaël explique le concept de programmation orientée aspect. Un concept de programmation pour les concerns transversaux comme le tracing, les retries, les métriques et bien d\'autres. Mikaël explique comment utiliser les annotations dans différents langages de programmation pour appliquer la programmation orientée aspect. Le talk apporte une nouvelle perspective sur comment réduire le bruit applicatif autour de la "business logic".',
        links: [
          {
            text: "Wikipedia: Programmation orientée aspect",
            url: "https://fr.wikipedia.org/wiki/Programmation_orient%C3%A9e_aspect",
          },
          {
            text: "Github Repo avec les exemples de code",
            url: "https://github.com/LeMikaelF/code-a-quebec-aop",
          },
        ],
        slidesUrl:
          "https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-06-26/programmation-orientee-aspect/slides.pdf",
        youtubeUrl: "https://youtu.be/6jjxB9bO4Ps",
      },
      {
        profile: profiles.mathysDeshaies,
        title: "Rate Limiting Deep Dive",
        summary:
          "La présentation de Mathys nous introduit au concept de rate limiting. Durant sa présentation, il nous expose différents algorithmes de rate limiting et des exemples concrets de leur utilisation. Mathys fait également des démonstrations visuelles des différents algorithmes pour bien expliquer les nuances entre eux. Après avoir écouté Mathys, tu seras en mesure de parfaitement choisir l'algorithme qui convient à ton problème.",
        links: [
          {
            text: "Le blog utilié pour la présentation",
            url: "https://smudge.ai/blog/ratelimit-algorithms",
          },
        ],
        slidesUrl:
          "https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-06-26/ratelimiting-deep-dive/slides.pptx",
        youtubeUrl: "https://www.youtube.com/watch?v=xqn1uqPQTtc",
      },
    ],
  },
  {
    number: "06",
    date: "2025-05-29",
    talks: [
      {
        profile: profiles.christopheSirois,
        title: '"It Just Feels Right": Unpacking Animation Magic for Devs',
        youtubeUrl: "https://www.youtube.com/watch?v=UCr4qZMh4EU",
        slidesUrl:
          "https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-05-29/unpacking-animation-for-devs/slides.pptx",
        summary:
          "La présentation de Christophe montre les secrets d'une animation réussie. Par exemple, la durée perçue compte plus que la durée réelle, les courbes ease-out offrent le meilleur ressenti, et la gestion des interruptions est cruciale. Côté technique, il faut privilégier les transforms CSS et l'opacité pour rester sur le GPU, maintenir 60fps coûte que coûte, et utiliser les transitions plutôt que les keyframes pour les interactions. L'essentiel : ne jamais ralentir l'utilisateur, gérer les interruptions proprement, et optimiser les performances avant tout.",
        links: [],
      },
      {
        profile: profiles.jeanDenisCaron,
        title: "La loi d'Atwood rampe vers votre infrastructure",
        slidesUrl:
          "https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-05-29/aliajs/notes.pdf",
        summary:
          "Jean-Denis a fait une présentation sur `Aliasjs`, un outil pour gérer son infrastructure à petite échelle. Aliasjs utilise NodeJS pour faire de l'infrastructure as code avec du JavaScript. Jean-Denis a fait une démo d'un déploiement zéro downtime en live durant la présentation.",
        links: [
          {
            text: "Aliajs",
            url: "https://aliajs.com/",
          },
        ],
      },
    ],
  },
  {
    number: "05",
    date: "2025-04-24",
    talks: [
      {
        profile: profiles.christopheSirois,
        title: "Design for engineers",
        youtubeUrl: "https://youtu.be/nRDiyyDIe8M",
        slidesUrl:
          "https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-04-24/design-for-engineers/slides.pptx",
        summary:
          "La présentation de Christophe est sur le design pour les devs. Il propose des approches concrètes avec des exemples clairs pour approcher le design en tant que dev. Après la présentation de Christophe, n'importe quel dev devrait être en mesure d'améliorer son UI pour éviter le fameux \"UI de dev\".",
        links: [],
      },
      {
        profile: profiles.pierreSnell,
        title: "Unlocking the Power of Pre-trained Models and Open-Source Ecosystems",
        slidesUrl:
          "https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-04-24/huggingface-101/slides.pptx",
        summary:
          "Pierre a fait une présentation pour introduire la plateforme Hugging Face. Il a fait un excellent aperçu des fonctionnalités disponibles sur la plateforme comme les modèles, les librairies, la documentation, l'outil Gradio, les cours en ligne et la communauté. Sa présentation s'est terminée par un aperçu des bénéfices d'utiliser une plateforme comme Hugging Face.",
        links: [
          {
            text: "Hugging Face",
            url: "https://huggingface.co/",
          },
        ],
      },
    ],
  },
  {
    number: "04",
    date: "2025-03-27",
    talks: [
      {
        profile: profiles.mikaelFrancoeur,
        title: "Mastering Transactions in MySQL",
        slidesUrl:
          "https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-03-27/mastering-mysql-transactions/slides.pdf",
        summary:
          "La présentation de Mikaël examine comment les bases de données maintiennent l'intégrité des données lors d'accès concurrents et explique comment MySQL utilise différents niveaux d'isolation de transactions pour équilibrer la sécurité des données et les performances, en s'appuyant sur des mécanismes comme le verrouillage, le MVCC et les lectures cohérentes sans verrouillage.",
        links: [
          {
            text: "Same presentation at Scale 22x",
            url: "https://www.youtube.com/live/-nJrugKKP1w?si=qzVBzaEwsfxBWu-q&t=25183",
          },
        ],
      },
      {
        profile: profiles.francoisXavierDarveau,
        title: "Coder en mode startup",
        slidesUrl:
          "https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-03-27/coder-en-mode-startup/slides.pptx",
        summary:
          "La présentation de François-Xavier vient redéfinir ce qu'on s'imagine quand on pense au rôle d'un dev. La réponse à la question : \"C'est quoi la job d'un dev ?\" est différente en fonction du contexte. Quand tu es un dev solo dans une startup, l'important c'est la vitesse, mais dans un contexte plus grand comme une tribu (20-100 devs) l'important c'est de scaler le code sans tuer la vélocité. La présentation amène une nouvelle perspective sur le sujet.",
        links: [],
      },
    ],
  },
  {
    number: "03",
    date: "2025-02-27",
    talks: [
      {
        profile: profiles.anthonyVallee,
        title: "DevX Story: Un Outil pour Dompter Kafka en Local",
        summary:
          "Au retour de son voyage, Anthony a décidé d'écrire un petit outil pour se simplifier la vie avec la gestion de clusters Kafka. Cette petite preuve de concept montre à quel point l'utilisation de shim et l'ingéniosité peut améliorer notre expérience en tant que dev.",
        links: [
          {
            text: "Kafka",
            url: "https://kafka.apache.org/",
          },
        ],
      },
      {
        profile: profiles.michaelMasson,
        title: "A Dinosaur with a Blade: Revolutionizing CI with Deno and Dagger",
        slidesUrl:
          "https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-02-27/a-dinosaur-with-a-blade/slides.pptx",
        summary:
          "Michael a présenté Dagger, un outil pour créer des workflows réutilisables en TypeScript, Python et Go. Ensuite, il a montré comment Dagger fonctionne parfaitement avec Deno, un runtime TypeScript moderne. La présentation met l'emphase sur l'utilisation de Dagger et Deno pour écrire des workflows de CI.",
        links: [
          {
            text: "Deno",
            url: "https://deno.land/",
          },
          {
            text: "Dagger",
            url: "https://dagger.io/",
          },
        ],
      },
    ],
  },
  {
    number: "02",
    date: "2025-01-30",
    talks: [
      {
        profile: profiles.sebastienDufourBeausejour,
        title: "Primer sur l'optimisation de performance frontend",
        summary:
          "Sébastien a présenté divers outils pour optimiser la performance frontend. Il nous a fait part de son parcours de recherche pour optimiser la performance dans un projet où même optimiser les styles CSS était crucial. La présentation de Sébastien démontre parfaitement que chercher la performance est un puits sans fond. On peut toujours aller chercher plus loin!",
        links: [],
      },
      {
        profile: profiles.christopheSirois,
        title: "Hacking Productivity",
        slidesUrl:
          "https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-01-30/hacking-productivity/slides.pptx",
        summary:
          "Christophe a présenté des outils utilisés pour augmenter la productivité des devs chez Botpress. La présentation comprenait une démo sur les Vercel previews, Storybook et Chromatic. L'utilisation de tous ces outils permet aux devs d'aimer leur environnement de travail tout en augmentant leur productivité.",
        links: [
          {
            text: "Storybook",
            url: "https://storybook.js.org/",
          },
          {
            text: "Chromatic",
            url: "https://www.chromatic.com/",
          },
          {
            text: "Vercel",
            url: "https://vercel.com/",
          },
        ],
      },
    ],
  },
  {
    number: "01",
    date: "2024-11-29",
    talks: [
      {
        profile: profiles.michaelMasson,
        title: "Generating Code Faster Than You Can Say 'Typescript'!",
        summary:
          "Mike a présenté une manière d'utiliser la génération de code avec \"TypeScript\". En utilisant un exemple loufoque de gestion de poulailler par API. La présentation abordait plusieurs technologies et spécifications comme OpenApi, JsonSchema, Zod et bien d'autres. C'était un survol du potentiel d'utiliser la génération de code pour se focaliser sur la valeur au client au lieu de penser en termes d'API et de verbes HTTP.",
        slidesUrl:
          "https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2024-11-29/typescript-code-gen/slides.pptx",
        links: [
          {
            url: "https://github.com/botpress/packages/tree/master/opapi",
            text: "Opapi Lib",
          },
        ],
      },
      {
        profile: profiles.francoisLevasseur,
        title: "Jex: le cas particulier d'un JSON Schema",
        summary:
          "François a présenté Jex, un librairie pour comparer des JsonSchemas. Jex permet de prendre deux JsonSchemas et de les comparer pour savoir si un JsonSchema est un sous-ensemble de l'autre. Cette librairie est utilisée par Botpress pour s'assurer d'éviter les breaking changes des points d'extension.",
        slidesUrl:
          "https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2024-11-29/jex/slides.pptx",
        links: [
          {
            url: "https://github.com/botpress/packages/tree/master/jex",
            text: "Jex Lib",
          },
        ],
      },
    ],
  },
];

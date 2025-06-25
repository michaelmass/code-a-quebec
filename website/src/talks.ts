import type { StaticImageData } from 'next/image'

import anthonyValleeProfile from '@/images/profiles/anthony-vallee.png'
import christopheSiroisProfile from '@/images/profiles/christophe-sirois.png'
import francoisLevasseurProfile from '@/images/profiles/francois-levasseur.png'
import francoisXavierDarveauProfile from '@/images/profiles/francois-xavier-darveau.png'
import jeanDenisCaronProfile from '@/images/profiles/jean-denis-caron.png'
import laurentLeclercPoulin from '@/images/profiles/laurent-leclerc-poulin.jpeg'
import michaelMassonProfile from '@/images/profiles/michael-masson.jpg'
import mikaelFrancoeurProfile from '@/images/profiles/mikael-francoeur.png'
import pierreSnellProfile from '@/images/profiles/pierre-snell.png'
import sebastienDufourBeausejourProfile from '@/images/profiles/sebastien-dufour-beausejour.png'
import williamDussaultProfile from '@/images/profiles/william-dussault.jpeg'

export type Profile = {
  profile: StaticImageData
  profileLinkedIn?: string
  companyLinkedIn?: string
  name: string
  company?: string
  position: string
}

export const profiles = {
  christopheSirois: {
    name: 'Christophe Sirois',
    position: 'Engineering',
    company: '@Botpress',
    profile: christopheSiroisProfile,
    profileLinkedIn: 'https://www.linkedin.com/in/christophesirois/',
    companyLinkedIn: 'https://www.linkedin.com/company/botpress/',
  },
  jeanDenisCaron: {
    name: 'Jean-Denis Caron',
    position: '(code-is-data 🌱 🏔️)',
    profile: jeanDenisCaronProfile,
    profileLinkedIn: 'https://www.linkedin.com/in/jdecaron/',
  },
  pierreSnell: {
    name: 'Pierre Snell',
    position: 'Data Science',
    company: '@Ubisoft',
    profile: pierreSnellProfile,
    profileLinkedIn: 'https://www.linkedin.com/in/pierre-snell-671229140/',
    companyLinkedIn: 'https://www.linkedin.com/company/ubisoft/',
  },
  francoisXavierDarveau: {
    name: 'Francois-Xavier P. Darveau',
    position: 'Building something new ✨',
    profile: francoisXavierDarveauProfile,
    profileLinkedIn: 'https://www.linkedin.com/in/francoisxavier/',
  },
  mikaelFrancoeur: {
    name: 'Mikaël Francoeur',
    position: 'Senior Developer',
    company: '@Ticketmaster',
    profile: mikaelFrancoeurProfile,
    profileLinkedIn: 'https://www.linkedin.com/in/mika%C3%ABl-francoeur/',
    companyLinkedIn: 'https://www.linkedin.com/company/ticketmaster/',
  },
  michaelMasson: {
    name: 'Michael Masson',
    position: 'Head of Engineering',
    company: '@Botpress',
    profile: michaelMassonProfile,
    profileLinkedIn: 'https://www.linkedin.com/in/michaelmasson55/',
    companyLinkedIn: 'https://www.linkedin.com/company/botpress/',
  },
  anthonyVallee: {
    name: 'Anthony Vallée',
    position: 'SRE',
    company: '@Ticketmaster',
    profile: anthonyValleeProfile,
    companyLinkedIn: 'https://www.linkedin.com/company/ticketmaster/',
  },
  sebastienDufourBeausejour: {
    name: 'Sébastien Dufour-Beauséjour',
    position: 'Full Stack Developper',
    company: '@nexapp',
    profile: sebastienDufourBeausejourProfile,
    profileLinkedIn: 'https://www.linkedin.com/in/sebastiendufourbeausejour/',
    companyLinkedIn: 'https://www.linkedin.com/company/nexapp-technologies/',
  },
  francoisLevasseur: {
    name: 'François Levasseur',
    position: 'Engineering',
    company: '@Botpress',
    profile: francoisLevasseurProfile,
    profileLinkedIn: 'https://www.linkedin.com/in/franklevasseur/',
    companyLinkedIn: 'https://www.linkedin.com/company/botpress/',
  },
  williamDussault: {
    name: 'William Dussault',
    position: 'Software Developer',
    company: '@Coveo',
    profile: williamDussaultProfile,
    profileLinkedIn: 'https://www.linkedin.com/in/dalloriam/',
    companyLinkedIn: 'https://www.linkedin.com/company/coveo/',
  },
  laurentLeclercPoulin: {
    name: 'Laurent Leclerc-Poulin',
    position: 'Senior Software Developer',
    profile: laurentLeclercPoulin,
    company: '@Nesto',
    profileLinkedIn: 'https://www.linkedin.com/in/laurent-leclerc-poulin-570267131/',
    companyLinkedIn: 'https://www.linkedin.com/company/nesto-ca/',
  },
} satisfies Record<string, Profile>

type Event = {
  date: string
  number: string
  talks: {
    profile: Profile
    title: string
    summary: string
    youtubeUrl?: string
    links: {
      text: string
      url: string
    }[]
  }[]
}

export const events: Event[] = [
  {
    number: '06',
    date: '2025-05-29',
    talks: [
      {
        profile: profiles.christopheSirois,
        title: '"It Just Feels Right": Unpacking Animation Magic for Devs',
        youtubeUrl: 'https://www.youtube.com/watch?v=UCr4qZMh4EU',
        summary:
          "La présentation de Christophe montre les secrets d'une animation réussie. Par exemple, la durée perçue compte plus que la durée réelle, les courbes ease-out offrent le meilleur ressenti, et la gestion des interruptions est cruciale. Côté technique, il faut privilégier les transforms CSS et l'opacité pour rester sur le GPU, maintenir 60fps coûte que coûte, et utiliser les transitions plutôt que les keyframes pour les interactions. L'essentiel : ne jamais ralentir l'utilisateur, gérer les interruptions proprement, et optimiser les performances avant tout.",
        links: [],
      },
      {
        profile: profiles.jeanDenisCaron,
        title: "La loi d'Atwood rampe vers votre infrastructure",
        summary:
          "Jean-Denis a fait une présentation sur `Aliasjs`, un outil pour gérer son infrastructure à petite échelle. Aliasjs utilise NodeJS pour faire de l'infrastructure as code avec du JavaScript. Jean-Denis a fait une démo d'un déploiement zéro downtime en live durant la présentation.",
        links: [
          {
            text: 'Aliajs',
            url: 'https://aliajs.com/',
          },
        ],
      },
    ],
  },
  {
    number: '05',
    date: '2025-04-24',
    talks: [
      {
        profile: profiles.christopheSirois,
        title: 'Design for engineers',
        youtubeUrl: 'https://youtu.be/nRDiyyDIe8M',
        summary:
          'La présentation de Christophe est sur le design pour les devs. Il propose des approches concrètes avec des exemples clairs pour approcher le design en tant que dev. Après la présentation de Christophe, n\'importe quel dev devrait être en mesure d\'améliorer son UI pour éviter le fameux "UI de dev".',
        links: [],
      },
      {
        profile: profiles.pierreSnell,
        title: 'Unlocking the Power of Pre-trained Models and Open-Source Ecosystems',
        summary: '',
        links: [],
      },
    ],
  },
  {
    number: '04',
    date: '2025-03-27',
    talks: [
      {
        profile: profiles.mikaelFrancoeur,
        title: 'Mastering Transactions in MySQL',
        summary: '',
        links: [
          {
            text: 'Same presentation at Scale 22x',
            url: 'https://www.youtube.com/live/-nJrugKKP1w?si=qzVBzaEwsfxBWu-q&t=25183',
          },
        ],
      },
      {
        profile: profiles.francoisXavierDarveau,
        title: 'Coder en mode startup',
        summary: '',
        links: [],
      },
    ],
  },
  {
    number: '03',
    date: '2025-02-27',
    talks: [
      {
        profile: profiles.anthonyVallee,
        title: 'DevX Story: Un Outil pour Dompter Kafka en Local',
        summary: '',
        links: [],
      },
      {
        profile: profiles.michaelMasson,
        title: 'A Dinosaur with a Blade: Revolutionizing CI with Deno and Dagger',
        summary: '',
        links: [],
      },
    ],
  },
  {
    number: '02',
    date: '2025-01-30',
    talks: [
      {
        profile: profiles.sebastienDufourBeausejour,
        title: "Primer sur l'optimisation de performance frontend",
        summary: '',
        links: [],
      },
      {
        profile: profiles.christopheSirois,
        title: 'Hacking Productivity',
        summary:
          "Christophe présenté des outils utilisés pour augmenter la productivité des devs chez Botpress. La présentation comprenait une démo sur les Vercel previews, Storybook et Chromatic. L'utilisation de tous ces outils permet aux devs d'aimer leur environnement de travail tout en augmentant leur productivité.",
        links: [
          {
            text: 'Storybook',
            url: 'https://storybook.js.org/',
          },
          {
            text: 'Chromatic',
            url: 'https://www.chromatic.com/',
          },
          {
            text: 'Vercel',
            url: 'https://vercel.com/',
          },
        ],
      },
    ],
  },
  {
    number: '01',
    date: '2024-11-29',
    talks: [
      {
        profile: profiles.michaelMasson,
        title: "Generating Code Faster Than You Can Say 'Typescript'!",
        summary:
          "Mike a présenté une manière d'utiliser la génération de code avec \"TypeScript\". En utilisant un exemple loufoque de gestion de poulailler par API. La présentation abordait plusieurs technologies et spécifications comme OpenApi, JsonSchema, Zod et bien d'autres. C'était un survol du potentiel d'utiliser la génération de code pour se focaliser sur la valeur au client au lieu de penser en termes d'API et de verbes HTTP.",
        links: [
          {
            url: 'https://github.com/botpress/packages/tree/master/opapi',
            text: 'Opapi Lib',
          },
        ],
      },
      {
        profile: profiles.francoisLevasseur,
        title: "Jex: le cas particulier d'un JSON Schema",
        summary:
          "François a présenté Jex, un librairie pour comparer des JsonSchemas. Jex permet de prendre deux JsonSchemas et de les comparer pour savoir si un JsonSchema est un sous-ensemble de l'autre. Cette librairie est utilisée par Botpress pour s'assurer d'éviter les breaking changes des points d'extension.",
        links: [
          {
            url: 'https://github.com/botpress/packages/tree/master/jex',
            text: 'Jex Lib',
          },
        ],
      },
    ],
  },
]

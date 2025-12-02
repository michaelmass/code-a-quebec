import type { StaticImageData } from 'next/image'

import anthonyValleeProfile from '@/images/profiles/anthony-vallee.png'
import christopheSiroisProfile from '@/images/profiles/christophe-sirois.png'
import francoisLevasseurProfile from '@/images/profiles/francois-levasseur.png'
import francoisXavierDarveauProfile from '@/images/profiles/francois-xavier-darveau.png'
import jeanDenisCaronProfile from '@/images/profiles/jean-denis-caron.png'
import laurentLeclercPoulin from '@/images/profiles/laurent-leclerc-poulin.jpeg'
import mathysDeshaiesProfile from '@/images/profiles/mathys-deshaies.jpeg'
import michaelMassonProfile from '@/images/profiles/michael-masson.jpg'
import mikaelFrancoeurProfile from '@/images/profiles/mikael-francoeur.png'
import pierreSnellProfile from '@/images/profiles/pierre-snell.png'
import sebastienDufourBeausejourProfile from '@/images/profiles/sebastien-dufour-beausejour.png'
import williamDussaultProfile from '@/images/profiles/william-dussault.jpeg'
import marcAnthonyGirardProfile from '@/images/profiles/marc-anthony-girard.png'
import philippeHamelProfile from '@/images/profiles/philippe-hamel.png'
import davidFerlandProfile from '@/images/profiles/david-ferland.jpeg'
import gabrielLeBretonProfile from '@/images/profiles/gabriel-le-breton.jpeg'

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
    company: '@Turso',
    profile: mikaelFrancoeurProfile,
    profileLinkedIn: 'https://www.linkedin.com/in/mika%C3%ABl-francoeur/',
    companyLinkedIn: 'https://www.linkedin.com/company/turso/',
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
  mathysDeshaies: {
    name: 'Mathys Deshaies',
    position: 'Développeur',
    profile: mathysDeshaiesProfile,
    company: '@Desjardins',
    profileLinkedIn: 'https://www.linkedin.com/in/mathys-deshaies/',
    companyLinkedIn: 'https://www.linkedin.com/company/desjardins/',
  },
  marcAnthonyGirard: {
    name: 'Marc-Anthony Girard',
    position: 'Software Developer',
    profile: marcAnthonyGirardProfile,
    company: '@Tracel',
    profileLinkedIn: 'https://www.linkedin.com/in/marc-anthony-girard/',
    companyLinkedIn: 'https://www.linkedin.com/company/tracel-technologies/',
  },
  philippeHamel: {
    name: 'Philippe Hamel',
    position: 'Data Engineer',
    profile: philippeHamelProfile,
    profileLinkedIn: 'https://www.linkedin.com/in/philippe-hamel-63a888153/'
  },
  davidFerland: {
    name: 'David Ferland',
    position: 'Software Developer',
    profile: davidFerlandProfile,
    company: '@Botpress',
    profileLinkedIn: 'https://www.linkedin.com/in/david-ferland-a3621a212/',
    companyLinkedIn: 'https://www.linkedin.com/company/botpress/',
  },
  gabrielLeBreton: {
    name: 'Gabriel Le Breton',
    position: 'Programmeur, Entrepreneur, Développeur de jeu et plus encore',
    profile: gabrielLeBretonProfile,
    company: '@TLM',
    profileLinkedIn: 'https://www.linkedin.com/in/gableroux/',
    companyLinkedIn: 'https://www.linkedin.com/company/solutions-tlm/',
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
    slidesUrl?: string
    links: {
      text: string
      url: string
    }[]
  }[]
}

export const events: Event[] = [
    {
    number: '12',
    date: '2025-11-27',
    talks: [
      {
        profile: profiles.michaelMasson,
        title: 'Kubernetes The Right Way',
        summary: 'La présentation de Michael démontre comment abstraire la complexité de Kubernetes pour augmenter la vélocité des développeurs. Il introduit le concept d\'un platform engineer (George) qui crée des outils permettant aux développeurs (Bob) de déployer leurs applications sans comprendre Kubernetes en profondeur. Michael explique comment mettre en place un cluster production-ready avec les outils essentiels (Traefik, Cilium, Grafana), puis créer une chart Helm personnalisée (Simple App Deployment) qui génère automatiquement du code TypeScript pour le build et le déploiement. Cette approche élimine la gestion manuelle des secrets, standardise les déploiements et rend la plateforme self-service. Michael souligne l\'importance de ne pas over-abstraire, de maintenir une friction intentionnelle pour éviter l\'explosion de projets, et rappelle que Kubernetes n\'est pas toujours la meilleure solution pour tous les cas d\'usage.',
        youtubeUrl: 'https://youtu.be/oki7366jtjk',
        links: [
          {
            text: 'Kubernetes',
            url: 'https://kubernetes.io/',
          },
          {
            text: 'Helm',
            url: 'https://helm.sh/',
          },
          {
            text: 'Traefik',
            url: 'https://traefik.io/',
          },
          {
            text: 'Cilium',
            url: 'https://cilium.io/',
          },
          {
            text: 'Grafana',
            url: 'https://grafana.com/',
          },
          {
            text: "Cert manager",
            url: "https://cert-manager.io/",
          },
          {
            text: "External DNS",
            url: "https://kubernetes-sigs.github.io/external-dns/latest/",
          }
        ],
      },
      {
        profile: profiles.mathysDeshaies,
        title: 'Styler sans devenir fou Tailwind CSS',
        summary: 'La présentation de Mathys explore comment utiliser Tailwind CSS efficacement avec sa méthodologie "TVA" (Tailwind View Atomic Design) qui structure les projets en cinq niveaux - atomes, molécules, organismes, templates et pages. L\'approche concentre les longues listes de classes Tailwind dans les atomes pour garder les composants supérieurs épurés. Mathys partage ses règles pratiques: utiliser des préfixes de nommage, créer des wrappers pour les librairies externes, privilégier les variables CSS pour le theming, et favoriser le padding. Il a créé une extension VS Code pour extraire automatiquement des composants selon cette architecture, facilitant la réutilisation entre projets et les changements de thème rapides. Après la présentation de Mathys, vous allez connaître Tailwind de fond en comble.',
        youtubeUrl: 'https://youtu.be/oJLbPCid0Ag',
        links: [
          {
            text: 'Tailwind CSS',
            url: 'https://tailwindcss.com/',
          },
          {
            text: 'Atomic Design',
            url: 'https://bradfrost.com/blog/post/atomic-web-design/',
          },

        ],
      },
    ]
  },
  {
    number: '11',
    date: '2025-10-30',
    talks: [
      {
        profile: profiles.francoisXavierDarveau,
        title: 'Time Series Foundation models',
        summary: 'La présentation de François-Xavier explore l\'utilisation des Time Series Foundation Models pour détecter les fuites d\'eau dans sa startup. En tant que développeur solo, il évalue s\'il devrait remplacer son fournisseur externe actuel par une solution maison utilisant ces nouveaux modèles. Il démontre comment ces modèles fonctionnent en mode zéro-shot - sans entraînement préalable - et utilise les quantiles de prédiction (P90, P10) pour identifier les anomalies dans la consommation d\'eau. Bien que prometteurs sur papier (pas d\'infrastructure, pas d\'artefacts spécifiques, généralisation), les modèles présentent des défis avec les sites non-standard, le bruit dans les données et les fuites chroniques. Sa conclusion reste ouverte - potentiellement viable mais nécessite encore du travail.',
        youtubeUrl: 'https://youtu.be/8Z5pBGiWiNI',
        links: [],
      },
      {
        profile: profiles.davidFerland,
        title: 'Les closures en Javascript',
        summary: 'La présentation de David explore les closures en JavaScript, qui permettent aux fonctions d\'avoir une "mémoire privée". Quand une fonction retourne une fonction, la fonction interne conserve l\'accès aux variables de son parent grâce au scope lexical. David présente deux applications pratiques: le module pattern (encapsulation publique/privée) et le currying (transformation de fonctions multi-paramètres en chaîne).',
        youtubeUrl: 'https://youtu.be/xsLuUKrkAk8',
        links: [],
      },
    ]
  },
  {
    number: '10',
    date: '2025-09-25',
    talks: [
      {
        profile: profiles.mikaelFrancoeur,
        title: 'SQLite plus puissant que vous le croyez',
        summary: 'La présentation de Mikaël démontre que SQLite dépasse le simple CRUD grâce à quatre extensions majeures: recherche vectorielle sémantique, synchronisation décentralisée avec résolution de conflits, interrogation d\'API REST en SQL, et manipulation d\'archives ZIP comme des tables. Ces extensions transforment SQLite (650Ko, trillion d\'instances) en outil polyvalent pour le prototypage rapide et l\'analyse de données, avec support de fonctions personnalisées et exports multiformats.',
        youtubeUrl: 'https://youtu.be/X55ssos7DAA',
        links: [
          {
            text: 'SQLite',
            url: 'https://www.sqlite.org/',
          },
          {
            text: 'SQLite Extensions',
            url: 'https://www.sqlite.org/contrib/',
          },
        ],
      },
      {
        profile: profiles.gabrielLeBreton,
        title: 'Comment faire un jeu d\'banane avec un serveur MCP',
        summary: 'Gabriel Le Breton a présenté une expérience humoristique de création de jeu inspirée de l\'œuvre *Comedian* de Maurizio Cattelan. Le projet a été réalisé dans Unity en combinant l\'IA et des serveurs MCP. Gabriel a montré qu\'en utilisant des prompts comme *"Write testable code"* ou *"Make sure tests are passing"*, en passant le bon contexte et en s\'appuyant sur des serveurs MCP, on pouvait considérablement augmenter les chances de succès. Il a également démontré comment contrôler Unity, valider l\'exécution du code grâce aux tests PlayMode et EditMode et, avec relativement peu d\'efforts, produire un jeu doté d\'une base solide et testée, malgré les défis techniques et l\'optimisme démesuré de *claude-4-sonnet*.',
        youtubeUrl: 'https://youtu.be/TPGROYRxfYQ',
        links: [
          {
            text: "Présentation",
            url: "https://s.gableroux.com/jeu-de-banane-mcp"
          },
          {
            text: "Unity MCP",
            url: "https://github.com/CoplayDev/unity-mcp",
          },
          {
            text: "Unity MCP avec support des tests",
            url: "https://github.com/CoderGamester/mcp-unity",
          },
          {
            text: "Comedian artwork by Maurizio Cattelan",
            url: "https://en.wikipedia.org/wiki/Comedian_(artwork)"
          }
        ],
      },
    ]
  },
  {
    number: '09',
    date: '2025-08-28',
    talks: [
      {
        profile: profiles.marcAnthonyGirard,
        title: 'Démystifier la gestion des données dans son frontend',
        summary: 'La présentation de Marc-Anthony compare quatre solutions de gestion de données frontend et recommande TanStack Query. Contrairement au fetch natif (non performant), aux contextes React (re-renders excessifs) et à Redux (complexe), TanStack Query offre un cache intelligent avec états automatiques, code ciblé et réutilisable, tout en restant simple et performant.',
        youtubeUrl: 'https://youtu.be/AGMIUiJjl5Q',
        links: [
          {
            text: 'Tanstack Query',
            url: 'https://tanstack.com/query/latest',
          }
        ],
      },
      {
        profile: profiles.philippeHamel,
        title: 'Introduction à la modélisation dimensionnelle',
        summary: 'La présentation de Philippe introduit la modélisation dimensionnelle pour bases de données analytiques, utilisant des tables facts (mesures centrales) et dimensions (attributs descriptifs). Il démontre avec le baseball comment le star schema offre le meilleur équilibre performance/simplicité, et explique pourquoi copier directement une base opérationnelle pour l\'analytique nuit à la performance et complexifie les requêtes.',
        youtubeUrl: 'https://youtu.be/inNiAZ3ogWI',
        links: [],
      },
    ]
  },
  {
    number: '08',
    date: '2025-07-31',
    talks: [
      {
        profile: profiles.francoisLevasseur,
        title: 'Remote Code Execution - Comment éviter de que ton produit devienne une plateforme de Bitcoin mining',
        summary: 'La présentation de Fleur était instructive. Il a démontré une nouvelle facade du "Remote Code Execution" (RCE). Évidemment, le RCE est perçu comme un exploit de sécurité. Par contre, si c\'est exactement ce qu\'on veut permettre, il faut trouver des techniques sécuritaires pour faire du RCE. C\'est exactement ce que Fleur explique dans sa présentation. Il nous explique les différentes approches et technologies que l\'on peut utiliser tel que Docker, gvisor, firecracker, V8 Isolates et VRL.',
        slidesUrl: 'https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-07-31/remote-code-execution/slides.pptx',
        youtubeUrl: 'https://youtu.be/6jjxB9bO4Ps',
        links: [
          {
            text: 'What is Log4Shell ?',
            url: 'https://www.ibm.com/think/topics/log4shell'
          },
          {
            text: 'Docker (What is meant by shared Kernel)',
            url: 'https://stackoverflow.com/questions/32756988/what-is-meant-by-shared-kernel-in-docker'
          },
          {
            text: 'gvisor',
            url: 'https://gvisor.dev/'
          },
          {
            text: 'Firecracker',
            url: 'https://firecracker-microvm.github.io/'
          },
          {
            text: 'Deno Cloud',
            url: 'https://deno.com/blog/subhosting-security-run-untrusted-code'
          },
          {
            text: 'V8 Isolates',
            url: 'https://v8docs.nodesource.com/node-0.8/d5/dda/classv8_1_1_isolate.html'
          },
          {
            text: 'VRL',
            url: 'https://vector.dev/docs/reference/vrl/'
          },
          {
            text: 'Turing Machines',
            url: 'https://plato.stanford.edu/entries/turing-machine/'
          },
          {
            text: 'Church-Turing Thesis',
            url: 'https://plato.stanford.edu/entries/church-turing/'
          }
        ],
      },
      {
        profile: profiles.williamDussault,
        title: '(Ab)using Protocols',
        summary: 'La présentation de William est intrigante et impressionnante. En travaillant sur son projet personnel de système de fichiers distribué nommé Memmos. William est arrivé à une impasse pour optimiser la distribution des fichiers au niveau du réseau. Si les fichiers sont présents sur le réseau local, il ne voulait pas télécharger le fichier via Internet.Donc, dans sa présentation, William explique comment il a abusé le protocole DNS pour résoudre son problème.',
        youtubeUrl: 'https://youtu.be/xku5_OtEb-g',
        slidesUrl: 'https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-07-31/abusing-protocols/slides.pdf',
        links: [
          {
            text: 'Le projet Memmos',
            url: 'https://github.com/menmos/menmos',
          },
          {
            text: 'Let\'s Encrypt pour la génération de certificats SSL',
            url: 'https://letsencrypt.org/'
          },
        ],
      },
    ]
  },
  {
    number: '07',
    date: '2025-06-26',
    talks: [
      {
        profile: profiles.mikaelFrancoeur,
        title: 'Programmation orientée aspect et API déclarative: un mélange expressif et puissant',
        summary:
          'Le talk de Mikaël explique le concept de programmation orientée aspect. Un concept de programmation pour les concerns transversaux comme le tracing, les retries, les métriques et bien d\'autres. Mikaël explique comment utiliser les annotations dans différents langages de programmation pour appliquer la programmation orientée aspect. Le talk apporte une nouvelle perspective sur comment réduire le bruit applicatif autour de la "business logic".',
        links: [
          {
            text: 'Wikipedia: Programmation orientée aspect',
            url: 'https://fr.wikipedia.org/wiki/Programmation_orient%C3%A9e_aspect',
          },
          {
            text: 'Github Repo avec les exemples de code',
            url: 'https://github.com/LeMikaelF/code-a-quebec-aop',
          },
        ],
        slidesUrl: 'https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-06-26/programmation-orientee-aspect/slides.pdf',
        youtubeUrl: 'https://youtu.be/6jjxB9bO4Ps',
      },
      {
        profile: profiles.mathysDeshaies,
        title: 'Rate Limiting Deep Dive',
        summary:
          "La présentation de Mathys nous introduit au concept de rate limiting. Durant sa présentation, il nous expose différents algorithmes de rate limiting et des exemples concrets de leur utilisation. Mathys fait également des démonstrations visuelles des différents algorithmes pour bien expliquer les nuances entre eux. Après avoir écouté Mathys, tu seras en mesure de parfaitement choisir l'algorithme qui convient à ton problème.",
        links: [
          {
            text: 'Le blog utilisé pour la présentation',
            url: 'https://smudge.ai/blog/ratelimit-algorithms',
          },
        ],
        slidesUrl: 'https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-06-26/ratelimiting-deep-dive/slides.pptx',
        youtubeUrl: 'https://www.youtube.com/watch?v=xqn1uqPQTtc',
      },
    ],
  },
  {
    number: '06',
    date: '2025-05-29',
    talks: [
      {
        profile: profiles.christopheSirois,
        title: '"It Just Feels Right": Unpacking Animation Magic for Devs',
        youtubeUrl: 'https://www.youtube.com/watch?v=UCr4qZMh4EU',
        slidesUrl: 'https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-05-29/unpacking-animation-for-devs/slides.pptx',
        summary:
          "La présentation de Christophe montre les secrets d'une animation réussie. Par exemple, la durée perçue compte plus que la durée réelle, les courbes ease-out offrent le meilleur ressenti, et la gestion des interruptions est cruciale. Côté technique, il faut privilégier les transforms CSS et l'opacité pour rester sur le GPU, maintenir 60fps coûte que coûte, et utiliser les transitions plutôt que les keyframes pour les interactions. L'essentiel : ne jamais ralentir l'utilisateur, gérer les interruptions proprement, et optimiser les performances avant tout.",
        links: [],
      },
      {
        profile: profiles.jeanDenisCaron,
        title: "La loi d'Atwood rampe vers votre infrastructure",
        slidesUrl: 'https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-05-29/aliajs/notes.pdf',
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
        slidesUrl: 'https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-04-24/design-for-engineers/slides.pptx',
        summary:
          'La présentation de Christophe est sur le design pour les devs. Il propose des approches concrètes avec des exemples clairs pour approcher le design en tant que dev. Après la présentation de Christophe, n\'importe quel dev devrait être en mesure d\'améliorer son UI pour éviter le fameux "UI de dev".',
        links: [],
      },
      {
        profile: profiles.pierreSnell,
        title: 'Unlocking the Power of Pre-trained Models and Open-Source Ecosystems',
        slidesUrl: 'https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-04-24/huggingface-101/slides.pptx',
        summary:
          "Pierre a fait une présentation pour introduire la plateforme Hugging Face. Il a fait un excellent aperçu des fonctionnalités disponibles sur la plateforme comme les modèles, les librairies, la documentation, l'outil Gradio, les cours en ligne et la communauté. Sa présentation s'est terminée par un aperçu des bénéfices d'utiliser une plateforme comme Hugging Face.",
        links: [
          {
            text: 'Hugging Face',
            url: 'https://huggingface.co/',
          },
        ],
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
        slidesUrl: 'https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-03-27/mastering-mysql-transactions/slides.pdf',
        summary:
          "La présentation de Mikaël examine comment les bases de données maintiennent l'intégrité des données lors d'accès concurrents et explique comment MySQL utilise différents niveaux d'isolation de transactions pour équilibrer la sécurité des données et les performances, en s'appuyant sur des mécanismes comme le verrouillage, le MVCC et les lectures cohérentes sans verrouillage.",
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
        slidesUrl: 'https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-03-27/coder-en-mode-startup/slides.pptx',
        summary:
          "La présentation de François-Xavier vient redéfinir ce qu'on s'imagine quand on pense au rôle d'un dev. La réponse à la question : \"C'est quoi la job d'un dev ?\" est différente en fonction du contexte. Quand tu es un dev solo dans une startup, l'important c'est la vitesse, mais dans un contexte plus grand comme une tribu (20-100 devs) l'important c'est de scaler le code sans tuer la vélocité. La présentation amène une nouvelle perspective sur le sujet.",
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
        summary:
          "Au retour de son voyage, Anthony a décidé d'écrire un petit outil pour se simplifier la vie avec la gestion de clusters Kafka. Cette petite preuve de concept montre à quel point l'utilisation de shim et l'ingéniosité peut améliorer notre expérience en tant que dev.",
        links: [
          {
            text: 'Kafka',
            url: 'https://kafka.apache.org/',
          },
        ],
      },
      {
        profile: profiles.michaelMasson,
        title: 'A Dinosaur with a Blade: Revolutionizing CI with Deno and Dagger',
        slidesUrl: 'https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-02-27/a-dinosaur-with-a-blade/slides.pptx',
        summary:
          "Michael a présenté Dagger, un outil pour créer des workflows réutilisables en TypeScript, Python et Go. Ensuite, il a montré comment Dagger fonctionne parfaitement avec Deno, un runtime TypeScript moderne. La présentation met l'emphase sur l'utilisation de Dagger et Deno pour écrire des workflows de CI.",
        links: [
          {
            text: 'Deno',
            url: 'https://deno.land/',
          },
          {
            text: 'Dagger',
            url: 'https://dagger.io/',
          },
        ],
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
        summary:
          'Sébastien a présenté divers outils pour optimiser la performance frontend. Il nous a fait part de son parcours de recherche pour optimiser la performance dans un projet où même optimiser les styles CSS était crucial. La présentation de Sébastien démontre parfaitement que chercher la performance est un puits sans fond. On peut toujours aller chercher plus loin!',
        links: [],
      },
      {
        profile: profiles.christopheSirois,
        title: 'Hacking Productivity',
        slidesUrl: 'https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2025-01-30/hacking-productivity/slides.pptx',
        summary:
          "Christophe a présenté des outils utilisés pour augmenter la productivité des devs chez Botpress. La présentation comprenait une démo sur les Vercel previews, Storybook et Chromatic. L'utilisation de tous ces outils permet aux devs d'aimer leur environnement de travail tout en augmentant leur productivité.",
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
        slidesUrl: 'https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2024-11-29/typescript-code-gen/slides.pptx',
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
        slidesUrl: 'https://github.com/michaelmass/code-a-quebec/raw/refs/heads/master/talks/2024-11-29/jex/slides.pptx',
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

export const eventYears = Array.from(new Set(events.map(event => Number.parseInt(event.date.split('-')[0], 10)))).sort((a, b) => a - b).map(year => year.toString())

import Link from 'next/link'
import { Container } from '@/components/Container'

export const Guidelines = () => {
  return (
    <Container className="relative">
      <h1 className="font-display text-center text-3xl font-bold tracking-tighter text-blue-600 sm:text-4xl">Guidelines des talks au Code @ Québec</h1>
      <div className="mt-6 max-w-4xl ml-auto mr-auto space-y-6 font-display text-xl tracking-tight text-blue-900">
        <p>
          Premièrement, merci de faire un talk au <b>Code @ Québec</b>. J&apos;ai fait ce document pour aider à préparer un talk pour le meetup et expliquer l&apos;ambiance qu&apos;on recherche.{' '}
          <span className="font-comic">(Promis, rien de trop lourd)</span>
        </p>

        <div className="space-y-2">
          <h2 className="font-bold text-2xl">1. Un sujet technique</h2>
          <p>
            Le plus important au <b>Code @ Québec</b>, c&apos;est de faire une <b>présentation technique</b>.
          </p>
          <p>Ça peut être sur un outil qu&apos;on aime, un bug bizarre, un projet personnel, un deep dive dans une technologie.</p>
          <p className="text-lg">De bons exemples qu&apos;on a eu:</p>
          <ul>
            <li className="italic">- Un deep dive sur les MySQL transactions</li>
            <li className="italic">- Le showcase d&apos;une lib pour comparer des JsonSchemas</li>
            <li className="italic">- Des outils pour l&apos;optimisation de performance frontend</li>
          </ul>
          <p>
            On évite par contre les talks sur <span className="line-through decoration-red-600/40">la culture d&apos;entreprise</span>,{' '}
            <span className="line-through decoration-red-600/40">les principes agiles</span>, ou tout ce qui n&apos;est pas technique. Ces sujets-là ont leur place, mais pas au Code @ Québec.
          </p>
          <p className="font-bold">On veut parler de tech!</p>
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-2xl">2. Limite de temps: 20-40 Minutes</h2>
          <p>
            Le talk doit durer entre 20 et 40 minutes. Idéalement, vise 25-35 minutes pour être dans le temps. Si tu dépasses, ce n&apos;est pas grave, on ne va pas t&apos;interrompre.{' '}
            <span className="font-comic">(Sauf si t&apos;es rendu à 50 minutes)</span>
          </p>
          <p className="italic">On a un timer visible pour faciliter la gestion du temps.</p>
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-2xl">3. Inclus l&apos;audience</h2>

          <p>
            Un talk est encore meilleur avec un peu d&apos;interaction. Pose <b>une ou deux questions</b> au public pendant ta présentation — ça capte l&apos;attention et crée un petit moment vivant.
          </p>

          <p className="text-lg">Par exemple:</p>

          <ul>
            <li className="italic">- Est-ce qu&apos;il y en a ici qui ont déjà utilisé X au boulot ?</li>
            <li className="italic">- Qui ici a déjà cassé quelque chose en prod ? - Soyez honnêtes</li>
          </ul>

          <p>Pas besoin d&apos;en faire trop, une simple question peut réveiller les esprits et briser la glace.</p>

          <p className="italic">Et puis, ça te donne une pause pour respirer un peu.</p>
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-2xl">4. Slides simples, exemples et du code</h2>

          <p>
            Les slides d&apos;une présentation, c&apos;est surtout <b>pour appuyer</b> ce que tu vas dire. Donc, essaie de garder les visuels <b>épurés et lisibles</b>.
          </p>

          <p>
            Le prochain step, c&apos;est <b>des exemples</b> à l&apos;appui. Si une image vaut mille mots, un exemple, ça vaut l&apos;infini. C&apos;est mieux d&apos;avoir un exemple qui échoue que
            rien à montrer. <span className="font-comic">(On croise les doigts pour le demo god)</span>
          </p>

          <p>
            Pour finir, il y a <b>le code</b>. Montrer du code est un couteau à double tranchant. Il faut bien sélectionner ce qu'on veut montrer sans surcharger le public. Si tu prévois de montrer du
            code, assure-toi de bien l'expliquer sans passer trop vite. Une bonne règle est de montrer au <b>maximum 50 lignes</b> à la fois.
          </p>

          <p>
            Un bon exemple, c&apos;est Le talk de Christophe.{' '}
            <Link className="underline hover:underline-offset-2" target="_blank" href="https://www.youtube.com/watch?v=UCr4qZMh4EU">
              Écoute-le !
            </Link>
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-2xl">5. Répète ta présentation devant ton chat (au moins une fois)</h2>

          <p>
            Une petite répétition aide à gérer le temps, à éviter le stress, et à ne pas oublier et revenir à l&apos;arrière. On peut vraiment ressentir la différence entre un talk improvisé et{' '}
            <b>un talk répété 10 fois devant son chat</b>.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-2xl">6. Un sujet clair & (problème / solution c&apos;est une recette gagnante)</h2>

          <p>Un bon talk, c&apos;est souvent :</p>
          <p className="italic">&ldquo;Voici un problème que j&apos;ai rencontré, et comment je l&apos;ai réglé.&ldquo;</p>
          <p>Simple, efficace, et ça aide les gens à se projeter. Pas besoin d&apos;être révolutionnaire — du moment que c&apos;est clair et concret.</p>
          <p>Sinon, une bonne histoire ça aide aussi:</p>
          <p className="italic">&ldquo;parle-nous d&apos;un échec, d&apos;une galère en prod, ou d&apos;un truc que t&apos;as compris après coup.&ldquo;</p>
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-2xl">7. Adapte toi au public</h2>

          <p>
            Le public est technique, oui — mais pas expert dans <i>ton sujet</i>.
          </p>

          <p>
            si tu rentres dans les internals de <b>Kafka</b> ou la config de <b>Kubernetes</b>, prends le temps de poser le contexte.
          </p>

          <p>
            <b>Explique les bases, évite le jargon</b>, et tout le monde restera avec toi.
          </p>

          <p>Une petite phrase de contexte ça mène loin:</p>

          <i>Kafka c&apos;est un système qui permet de gérer et transférer en temps réel de grandes quantités de messages entre applications.</i>
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-2xl">8. Questions & Réponses</h2>

          <p>
            Après la présentation, on se garde un <b>5 à 10 minutes</b> de plus pour les questions. Si on voit que ça commence à déborder, tu peux inviter les gens à venir te jaser directement après
            ton talk.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-2xl">9. Matériel</h2>

          <p>
            On fournit un projecteur, les câbles, les adaptateurs de toutes sortes et même <b>la bière</b>. On te suggère <b>d&apos;amener ton ordi</b> pour présenter, mais au cas où on peut t&apos;en
            prêter un.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-2xl">10. Have fun</h2>

          <p>
            On est là pour partager notre passion pour la tech. Pas besoin de se prendre la tête — profite du moment, <b>sois toi-même!</b>
          </p>
        </div>
      </div>
    </Container>
  )
}

import { BackgroundImage } from "@/components/BackgroundImage";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Newsletter } from "@/components/Newsletter";
import { Schedule } from "@/components/Schedule";
import { Speakers } from "@/components/Speakers";
import Link from "next/link";

export default function Home() {
	return (
		<div className="relative py-10 sm:pt-18 sm:pb-18">
			<BackgroundImage className="-top-36 -bottom-14" />
			<Container className="relative">
				<div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12" />
				<h1 className="font-display text-center text-3xl font-bold tracking-tighter text-blue-600 sm:text-4xl">
					Guidelines des talks au Code @ Québec
				</h1>
				<div className="mt-6 max-w-4xl ml-auto mr-auto space-y-6 font-display text-xl tracking-tight text-blue-900">
					<p>
						Premièrement, merci de faire un talk au <b>Code @ Québec</b>.
						J&apos;ai fait ce document pour aider à préparer un talk pour le
						meetup et expliquer l'ambiance qu'on recherche.{" "}
						<span className="font-comic">(Promis, rien de trop lourd)</span>
					</p>

					<div className="space-y-2">
						<h2 className="font-bold text-2xl">1. Un sujet technique</h2>
						<p>
							Le plus important au <b>Code @ Québec</b>, c'est de faire une{" "}
							<b>présentation technique</b>.
						</p>
						<p>
							Ça peut être sur un outil qu'on aime, un bug bizarre, un projet
							personnel, un deep dive dans une technologie.
						</p>
						<p className="text-lg">Des bons exemples qu&apos;on a eu:</p>
						<ul>
							<li className="italic">
								- Un Deep dive sur les MySQL transactions
							</li>
							<li className="italic">
								- Le showcase d'une lib pour comparer des JsonSchemas
							</li>
							<li className="italic">
								- Des outils pour l'optimisation de performance frontend
							</li>
						</ul>
						<p>
							On évite par contre les talks sur{" "}
							<span className="line-through decoration-red-600/40">
								la culture d'entreprise
							</span>
							,{" "}
							<span className="line-through decoration-red-600/40">
								les principes agiles
							</span>
							, ou tout ce qui n'est pas technique. Ces sujets-là ont leur
							place, mais pas au Code @ Québec.
						</p>
						<p className="font-bold">On veut parler de tech!</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-bold text-2xl">
							2. Limite de temps: 15-30 Minutes
						</h2>
						<p>
							Le talk doit durer entre 15 et 30 minutes. Idéalement, vise 20-25
							minutes pour être dans le temps. Si tu dépasses, ce n'est pas
							grave, on ne va pas t'interrompre.{" "}
							<span className="font-comic">
								(Sauf si t&apos;es rendu à 45 minutes)
							</span>
						</p>
						<p className="italic">
							On a un timer visible pour faciliter la gestion du temps.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-bold text-2xl">3. Inclus l&apos;audience</h2>

						<p>
							Un talk, c&apos;est encore mieux avec de l&apos;interaction. Pose{" "}
							<b>une ou deux questions</b> au public pendant ta présentation —
							ça capte l&apos;attention et crée un petit moment vivant.
						</p>

						<p className="text-lg">Par exemple:</p>

						<ul>
							<li className="italic">
								- Est-ce qu&apos;il y en a ici qui ont déjà utilisé X au boulot
								?
							</li>
							<li className="italic">
								- Qui ici a déjà cassé quelque chose en prod ? - Soyez honnêtes
							</li>
						</ul>

						<p>
							Pas besoin d&apos;en faire trop, une simple question peut
							réveiller les esprits et briser la glace.
						</p>

						<p className="italic">
							Et puis, ça te donne une pause pour respirer un peu.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-bold text-2xl">
							4. Slides simples et des exemples
						</h2>

						<p>
							Les slides d'une présentation, c'est surtout <b>pour appuyer</b>{" "}
							ce que tu vas dire. Donc, essaie de garder les visuels{" "}
							<b>épurés et lisibles</b>. Un autre niveau, c'est des exemples à
							l'appui. Si une image vaut mille mots, un exemple, c'est l'infini.
						</p>

						<p>
							Un bon exemple c'est Le talk de Christophe.{" "}
							<Link
								className="underline hover:underline-offset-2"
								target="_blank"
								href="https://www.youtube.com/watch?v=UCr4qZMh4EU"
							>
								Écoute-le !
							</Link>
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-bold text-2xl">
							5. Répète ta présentation devant ton chat (au moins une fois)
						</h2>

						<p>
							Une petite répétition aide à gérer le temps, à éviter le stress,
							et à ne pas oublier et revenir à l'arrière. On peut vraiment
							ressentir la différence entre un talk improvisé et{" "}
							<b>un talk répété 10 fois devant son chat</b>.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-bold text-2xl">
							6. Un sujet clair & (problème / solution c&apos;est une recette
							gagnante)
						</h2>

						<p>Un bon talk, c'est souvent :</p>
						<p className="italic">
							"Voici un problème que j'ai rencontré, et comment je l'ai réglé."
						</p>
						<p>
							Simple, efficace, et ça aide les gens à se projeter. Pas besoin
							d'être révolutionnaire — du moment que c'est clair et concret.
						</p>
						<p>Sinon, une bonne histoire ça aide aussi:</p>
						<p className="italic">
							parle-nous d'un échec, d'une galère en prod, ou d'un truc que t'as
							compris après coup.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-bold text-2xl">7. Adapte toi au public</h2>

						<p>
							Le public est technique, oui — mais pas expert dans{" "}
							<i>ton sujet</i>.
						</p>

						<p>
							si tu rentres dans les internals de <b>Kafka</b> ou la config de{" "}
							<b>Kubernetes</b>, prends le temps de poser le contexte.
						</p>

						<p>
							<b>Explique les bases, évite le jargon</b>, et tout le monde
							restera avec toi.
						</p>

						<p>Une petite phrase de contexte ca mène loin:</p>

						<i>
							Kafka c'est un système qui permet de gérer et transférer en temps
							réel de grandes quantités de messages entre applications.
						</i>
					</div>

					<div className="space-y-2">
						<h2 className="font-bold text-2xl">8. Questions & Réponses</h2>

						<p>
							Après la présentation, on se garde un <b>5 à 10 minutes</b> de
							plus pour les questions. Si on voit que sa commence à déborder, tu
							peux inviter les gens à venir te jaser directement après ton talk.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-bold text-2xl">9. Matériel</h2>

						<p>
							On fournit un projecteur, les câbles, les adaptateurs de toutes
							sortes et même <b>la bière</b>. On te suggère{" "}
							<b>d'amener ton ordi</b> pour présenter, mais au cas où on peut
							t'en prêter un.
						</p>
					</div>

					<div className="space-y-2">
						<h2 className="font-bold text-2xl">10. Have fun</h2>

						<p>
							On est là pour partager notre passion pour la tech. Pas besoin de
							se prendre la tête — profite du moment, <b>sois toi-même!</b>
						</p>
					</div>
				</div>
			</Container>
		</div>
	);
}

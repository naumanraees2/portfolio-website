import { SectionHeading } from './common/sectionHeading'
import { Reveal } from './common/reveal'

interface Project {
    title: string
    description: string
    tags: string[]
    accent: string
    emoji: string
    live?: string
}

const projects: Project[] = [
    {
        title: 'AIO App',
        description:
            'An all-in-one business management suite — POS, MPOS, accounting and inventory. I architected the accounting and inventory modules from scratch and built 70% of core system modules, boosting transaction throughput by 50%.',
        tags: ['NestJS', 'PostgreSQL', 'React', 'AWS'],
        accent: 'from-rose-500 to-orange-400',
        emoji: '🧾',
        live: 'https://aioapp.com',
    },
    {
        title: 'Frasers Experience',
        description:
            'A premium lifestyle, retail and rewards experience platform. I built highly responsive storefront modules and streamlined web views, driving 25% higher user engagement.',
        tags: ['React', 'Redux', 'TypeScript', 'REST'],
        accent: 'from-indigo-500 to-sky-400',
        emoji: '🛍️',
        live: 'https://www.frasersexperience.com/home',
    },
    {
        title: 'Otobucks',
        description:
            'An automotive marketplace for discovering, buying and financing vehicles, with real-time listings, secure transactions and a smooth end-to-end user journey.',
        tags: ['React', 'Node.js', 'TypeScript', 'AWS'],
        accent: 'from-amber-500 to-yellow-400',
        emoji: '🚗',
        live: 'https://otobucks.com',
    },
    {
        title: 'MyDasma',
        description:
            'A community and property management platform connecting residents with services — real-time updates, secure role-based access and an intuitive dashboard.',
        tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis'],
        accent: 'from-emerald-500 to-teal-400',
        emoji: '🏡',
        live: 'https://mydasma.com',
    },
    {
        title: 'LumiView Services',
        description:
            'A modern digital services platform with a fast, responsive customer portal and a scalable backend powering bookings, management and reporting.',
        tags: ['Next.js', 'Node.js', 'TypeScript', 'MongoDB'],
        accent: 'from-fuchsia-500 to-purple-500',
        emoji: '💡',
        live: 'https://lumiviewservices.com',
    },
]

const ProjectsComponent = () => {
    return (
        <section id="projects" className="relative bg-surface py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Projects"
                    title={
                        <>
                            Things I&apos;ve <span className="text-gradient">built</span>
                        </>
                    }
                    subtitle="A selection of products and platforms I've designed, engineered and shipped to production."
                />

                <div className="mt-16 grid gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <Reveal
                            key={project.title}
                            delay={(index % 2) * 120}
                            className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/10"
                        >
                            {/* Cover */}
                            <div className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${project.accent}`}>
                                <span className="text-6xl drop-shadow-lg transition-transform duration-500 group-hover:scale-110">
                                    {project.emoji}
                                </span>
                                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                            </div>

                            {/* Body */}
                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="text-xl font-bold text-ink transition-colors group-hover:text-accent">
                                    {project.title}
                                </h3>
                                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                                    {project.description}
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-ink-soft ring-1 ring-ink/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {project.live && (
                                    <div className="mt-5 border-t border-ink/5 pt-4">
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Visit ${project.title}`}
                                            className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft transition-colors hover:text-accent"
                                        >
                                            Visit Site
                                            <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth={2}>
                                                <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </Reveal>
                    ))}

                    {/* CTA card to complete the grid */}
                    <Reveal
                        delay={120}
                        className="group flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-ink/15 bg-white/50 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:bg-white"
                    >
                        <span className="text-4xl transition-transform duration-300 group-hover:scale-110">🚀</span>
                        <h3 className="mt-4 text-xl font-bold text-ink">Your project next?</h3>
                        <p className="mt-2 text-sm text-ink-soft">
                            I&apos;m always up for building something ambitious.
                        </p>
                        <a
                            href="#contact"
                            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark"
                        >
                            Start a conversation <span aria-hidden>→</span>
                        </a>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default ProjectsComponent

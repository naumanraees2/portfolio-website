import Image from 'next/image'
import aboutImage from '@/src/assets/image_3.gif'
import { SectionHeading } from './common/sectionHeading'
import { Reveal } from './common/reveal'
import { ButtonComponent } from './common/hireMeButton'

const highlights = [
    {
        title: 'AI-Powered Products',
        description:
            'LLM integrations with OpenAI, Claude & Gemini, plus RAG and TTS — bringing intelligence into everyday products.',
        icon: '🤖',
    },
    {
        title: 'Full-Stack Engineering',
        description:
            'End-to-end delivery with React/Next.js on the front and NestJS, Node.js, Spring Boot & Django on the back.',
        icon: '⚡',
    },
    {
        title: 'Scalable Architecture',
        description:
            'Queues, caching, background jobs and query optimization for high-traffic platforms.',
        icon: '🏗️',
    },
    {
        title: 'Clean, Tested Code',
        description:
            'Type-safe codebases with a focus on readability, testing and long-term maintainability.',
        icon: '✅',
    },
    {
        title: 'Product Mindset',
        description:
            'I care about the user — shipping features that move real business metrics.',
        icon: '🎯',
    },
]

const details = [
    { label: 'Name', value: 'Nauman Raees' },
    { label: 'Location', value: 'Islamabad, Pakistan' },
    { label: 'Email', value: 'nauman.raees72@gmail.com' },
    { label: 'Availability', value: 'Open to work' },
]

const AboutComponent = () => {
    return (
        <section id="about" className="relative py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="About Me"
                    title={
                        <>
                            Turning ideas into <span className="text-gradient">reliable software</span>
                        </>
                    }
                    subtitle="A developer dedicated to crafting performant, elegant products that people love to use."
                />

                <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Image + detail card */}
                    <Reveal className="relative">
                        <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent/20 to-accent-2/20 blur-xl" />
                        <div className="overflow-hidden rounded-[2rem] border border-white/60 shadow-2xl shadow-ink/10">
                            <Image
                                src={aboutImage}
                                alt="Nauman Raees at work"
                                width={640}
                                height={640}
                                sizes="(max-width: 1024px) 90vw, 45vw"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <dl className="mt-6 grid grid-cols-2 gap-4">
                            {details.map((d) => (
                                <div
                                    key={d.label}
                                    className="rounded-2xl border border-ink/5 bg-white p-4 shadow-sm"
                                >
                                    <dt className="text-xs font-semibold uppercase tracking-wide text-accent">
                                        {d.label}
                                    </dt>
                                    <dd className="mt-1 break-words text-sm font-medium text-ink">
                                        {d.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </Reveal>

                    {/* Copy + highlights */}
                    <div>
                        <Reveal>
                            <p className="text-lg leading-relaxed text-ink-soft">
                                I&apos;m a <strong className="text-ink">Full-Stack AI Engineer</strong> with
                                5+ years of experience building web applications that scale — from POS and
                                accounting systems to HRMS and marketplace platforms serving thousands of users.
                            </p>
                            <p className="mt-4 leading-relaxed text-ink-soft">
                                My sweet spot is the <strong className="text-ink">MERN stack</strong> with
                                TypeScript and NestJS, plus <strong className="text-ink">LLM integrations</strong> (OpenAI,
                                Claude, Gemini, TTS). I also build in Java Spring Boot and Python (Django, FastAPI),
                                shipping features that make a measurable difference.
                            </p>
                        </Reveal>

                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {highlights.map((h, i) => (
                                <Reveal
                                    key={h.title}
                                    delay={i * 100}
                                    className="group rounded-2xl border border-ink/5 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl"
                                >
                                    <h3 className="font-bold text-ink"><span className="text-2xl">{h.icon} &nbsp;</span> {h.title}</h3>
                                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                                        {h.description}
                                    </p>
                                </Reveal>
                            ))}
                        </div>

                        <Reveal delay={200} className="mt-8">
                            <ButtonComponent
                                text="Let's build something"
                                href="#contact"
                                icon={<span aria-hidden>→</span>}
                            />
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutComponent

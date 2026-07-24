import React from 'react'
import { SectionHeading } from './common/sectionHeading'
import { Reveal } from './common/reveal'

interface SkillCategory {
    title: string
    icon: string
    items: string[]
}

// Featured category — highlighted to lead with the AI-engineering positioning.
const aiCategory: SkillCategory = {
    title: 'AI & LLM Engineering',
    icon: '🤖',
    items: [
        'LLM Integrations',
        'OpenAI (GPT)',
        'Claude / Anthropic',
        'Google Gemini',
        'RAG Pipelines',
        'Text-to-Speech (TTS)',
        'Prompt Engineering',
        'AI Agents',
        'Claude Code',
        'Cursor',
    ],
}

const categories: SkillCategory[] = [
    {
        title: 'Frontend',
        icon: '🎨',
        items: ['React', 'Next.js', 'TypeScript', 'Redux & Toolkit', 'React Query', 'Tailwind CSS', 'MUI', 'Bootstrap'],
    },
    {
        title: 'Backend',
        icon: '⚙️',
        items: ['Node.js', 'Express', 'NestJS', 'Java · Spring Boot', 'Python · Django', 'Python · FastAPI', 'REST APIs'],
    },
    {
        title: 'Databases & Infra',
        icon: '🗄️',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'TypeORM', 'RabbitMQ', 'Kafka', 'AWS', 'Azure', 'Docker'],
    },
    {
        title: 'Tools & Practices',
        icon: '🧰',
        items: ['Git & GitHub', 'Jest', 'CI/CD', 'Agile / Scrum', 'Background Jobs & Queues', 'Problem Solving'],
    },
]

const Pill = ({ children }: { children: React.ReactNode }) => (
    <span className="rounded-full bg-surface px-3 py-1.5 text-sm font-medium text-ink-soft ring-1 ring-ink/5 transition-colors duration-300 hover:bg-accent/10 hover:text-accent hover:ring-accent/20">
        {children}
    </span>
)

const SkillComponent: React.FC = () => {
    return (
        <section id="skills" className="relative bg-surface py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Skills"
                    title={
                        <>
                            My <span className="text-gradient">technical toolkit</span>
                        </>
                    }
                    subtitle="A full-stack skill set with a strong focus on AI — from LLM-powered products to scalable backends and polished UIs."
                />

                <div className="mt-16 space-y-6">
                    {/* Featured AI card */}
                    <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink via-ink to-accent-2 p-8 text-white shadow-xl">
                        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/30 blur-3xl" />
                        <div className="relative">
                            <div className="flex items-center gap-4">
                                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-3xl ring-1 ring-white/20">
                                    {aiCategory.icon}
                                </span>
                                <div>
                                    <h3 className="text-xl font-bold">{aiCategory.title}</h3>
                                    <p className="text-sm text-white/70">
                                        Building the intelligent layer of modern products
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-2.5">
                                {aiCategory.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white ring-1 ring-white/15 transition-colors duration-300 hover:bg-white/20"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    {/* Remaining categories */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {categories.map((cat, index) => (
                            <Reveal
                                key={cat.title}
                                delay={(index % 2) * 120}
                                className="group rounded-3xl border border-ink/5 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-2xl ring-1 ring-ink/5 transition-transform duration-300 group-hover:scale-110">
                                        {cat.icon}
                                    </span>
                                    <h3 className="text-lg font-bold text-ink">{cat.title}</h3>
                                </div>
                                <div className="mt-5 flex flex-wrap gap-2.5">
                                    {cat.items.map((item) => (
                                        <Pill key={item}>{item}</Pill>
                                    ))}
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillComponent

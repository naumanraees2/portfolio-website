import { SectionHeading } from './common/sectionHeading'
import { Reveal } from './common/reveal'

const experienceData = [
    {
        year: "Sep 2025 — Present",
        role: "Senior Full-Stack Developer",
        company: "Idrak AI",
        description:
            "Leading development of scalable web applications using the MERN stack and TypeScript. Architecting backend APIs with NestJS and optimizing database queries for high-traffic platforms serving millions of users.",
        technologies: ["React", "Redux", "TypeScript", "NestJS", "MongoDB", "Redis", "RabbitMQ", "Queues"],
    },
    {
        year: "Apr 2024 — Aug 2025",
        role: "Full-Stack Developer",
        company: "AIO App",
        description:
            "Optimized POS, MPOS and MOM synchronization, boosting operational efficiency by 40%. Architected Accounting and Inventory modules from scratch (+50% transaction throughput) and built 70% of core system modules, reducing manual workload by 60%.",
        technologies: ["React", "TypeScript", "NestJS", "PostgreSQL", "TypeORM", "AWS", "S3", "Lambda"],
    },
    {
        year: "May 2022 — Apr 2024",
        role: "MERN Stack Developer",
        company: "App-in-Snap Pvt. Ltd",
        description:
            "Led multiple React.js and Node.js builds, improving client satisfaction by 25%. Implemented 70% of core modules for an HRMS system and cut API response times by 30% through architecture and query optimization.",
        technologies: ["React", "Redux", "TypeScript", "Express", "MySQL", "MongoDB", "Sequelize", "Azure"],
    },
    {
        year: "Sep 2020 — Mar 2022",
        role: "Frontend ReactJS Developer",
        company: "GOL Technologies",
        description:
            "Built highly responsive ReactJS components (+35% UI performance, −40% maintenance effort). Streamlined React Native web views (−30% load time) and drove 25% higher user engagement on Frasers eStore.",
        technologies: ["JavaScript", "React", "Redux", "TypeScript", "React Native", "CSS"],
    },
]

const educationData = [
    {
        year: "2016 — 2020",
        degree: "B.S. in Software Engineering",
        institution: "National University of Modern Languages",
    },
]

const certifications = [
    "Meta Backend Developer Certificate",
    "MongoDB Certified Developer",
    "AWS Cloud Practitioner",
]

const ExperienceComponent = () => {
    return (
        <section id="experience" className="relative py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Experience"
                    title={
                        <>
                            My <span className="text-gradient">career journey</span>
                        </>
                    }
                    subtitle="Five years of shipping production software across POS, HRMS, e-commerce and AI platforms."
                />

                <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
                    {/* Timeline */}
                    <div className="lg:col-span-2">
                        <ol className="relative border-l-2 border-ink/10 pl-8">
                            {experienceData.map((exp, index) => (
                                <Reveal
                                    as="li"
                                    key={index}
                                    delay={index * 80}
                                    className="relative mb-10 last:mb-0"
                                >
                                    {/* Node */}
                                    <span className="absolute -left-[41px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent ring-4 ring-white">
                                        <span className="h-2 w-2 rounded-full bg-white" />
                                    </span>

                                    <div className="group rounded-2xl border border-ink/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl">
                                        <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                                            {exp.year}
                                        </span>
                                        <h3 className="mt-3 text-xl font-bold text-ink">
                                            {exp.role}
                                        </h3>
                                        <p className="font-medium text-accent-2">{exp.company}</p>
                                        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                                            {exp.description}
                                        </p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {exp.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-ink-soft ring-1 ring-ink/5"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </ol>
                    </div>

                    {/* Sidebar: education + certifications */}
                    <div className="space-y-6">
                        <Reveal className="rounded-2xl border border-ink/5 bg-white p-6 shadow-sm">
                            <h3 className="flex items-center gap-2 text-lg font-bold text-ink">
                                <span className="h-6 w-1 rounded-full bg-accent" />
                                Education
                            </h3>
                            {educationData.map((edu) => (
                                <div key={edu.degree} className="mt-4 border-l-2 border-accent/30 pl-4">
                                    <span className="text-xs font-semibold text-accent">{edu.year}</span>
                                    <h4 className="mt-1 font-bold text-ink">{edu.degree}</h4>
                                    <p className="text-sm text-ink-soft">{edu.institution}</p>
                                </div>
                            ))}
                        </Reveal>

                        <Reveal delay={120} className="rounded-2xl border border-ink/5 bg-white p-6 shadow-sm">
                            <h3 className="flex items-center gap-2 text-lg font-bold text-ink">
                                <span className="h-6 w-1 rounded-full bg-accent" />
                                Certifications
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {certifications.map((cert) => (
                                    <li key={cert} className="flex items-start gap-2 text-sm text-ink-soft">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                        {cert}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>

                        <Reveal delay={240} className="rounded-2xl bg-gradient-to-br from-ink to-accent-2 p-6 text-white shadow-lg">
                            <h3 className="text-lg font-bold">Languages</h3>
                            <div className="mt-4 space-y-3 text-sm">
                                <div className="flex items-center justify-between">
                                    <span>English</span>
                                    <span className="text-white/70">Professional</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Urdu</span>
                                    <span className="text-white/70">Native</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceComponent

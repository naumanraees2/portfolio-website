import Image from 'next/image'
import heroImage from "@/src/assets/hero_1.png";
import { ButtonComponent } from './common/hireMeButton';
import { Socials } from './common/socials';

const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '30+', label: 'Projects Shipped' },
    { value: '15+', label: 'Happy Clients' },
]

const IntroComponent = () => {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
        >
            {/* Decorative gradient blobs */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl animate-blob" />
                <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-accent-2/15 blur-3xl animate-blob [animation-delay:4s]" />
                <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-sky-300/10 blur-3xl animate-blob [animation-delay:8s]" />
            </div>

            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
                {/* Text column */}
                <div className="order-2 text-center lg:order-1 lg:text-left">
                    <span className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-sm font-medium text-ink-soft shadow-sm backdrop-blur">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                        </span>
                        Available for new opportunities
                    </span>

                    <h1 className="animate-fade-in-up delay-100 mt-6 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
                        Hi 👋, I&apos;m Nauman Raees
                    </h1>

                    <h2 className="animate-fade-in-up delay-200 mt-3 text-2xl font-bold sm:text-3xl lg:text-4xl">
                        <span className="text-gradient">Full-Stack AI Engineer</span>
                    </h2>

                    <p className="animate-fade-in-up delay-300 mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft lg:mx-0 lg:text-lg">
                        I build fast, scalable and intelligent web products — pairing the
                        MERN stack, TypeScript and NestJS with LLM integrations (OpenAI,
                        Claude, Gemini) to ship AI-powered experiences that people love.
                    </p>

                    <div className="animate-fade-in-up delay-400 mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                        <ButtonComponent
                            text="Hire me"
                            href="#contact"
                            icon={<span aria-hidden>→</span>}
                        />
                        <ButtonComponent
                            text="View my work"
                            href="#projects"
                            variant="outline"
                        />
                    </div>

                    <div className="animate-fade-in-up delay-500 mt-8 flex justify-center lg:justify-start">
                        <Socials />
                    </div>

                    {/* Stats */}
                    <dl className="animate-fade-in-up delay-700 mt-12 grid max-w-md grid-cols-3 gap-6 mx-auto lg:mx-0">
                        {stats.map((s) => (
                            <div key={s.label} className="text-center lg:text-left">
                                <dt className="text-3xl font-extrabold text-ink sm:text-4xl">
                                    {s.value}
                                </dt>
                                <dd className="mt-1 text-xs font-medium text-ink-soft sm:text-sm">
                                    {s.label}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Image column */}
                <div className="order-1 flex justify-center lg:order-2">
                    <div className="relative animate-fade-in">
                        {/* Glow ring behind the image */}
                        <div className="absolute inset-0 -z-10 scale-95 rounded-[2rem] bg-gradient-to-tr from-accent/30 to-accent-2/30 blur-2xl" />
                        <div className="animate-float overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 p-2 shadow-2xl shadow-ink/10 backdrop-blur">
                            <Image
                                src={heroImage}
                                alt="Nauman Raees"
                                width={520}
                                height={520}
                                priority
                                sizes="(max-width: 1024px) 80vw, 40vw"
                                className="rounded-[1.6rem] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll cue */}
            <a
                href="#about"
                aria-label="Scroll to About"
                className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-ink-soft transition-colors hover:text-accent lg:flex"
            >
                <span className="text-xs font-medium tracking-wide">Scroll</span>
                <svg
                    className="h-5 w-5 animate-bounce-down"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
        </section>
    )
}

export default IntroComponent

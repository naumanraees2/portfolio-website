export const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/naumanraees2',
        icon: (
            <path d="M12 .5C5.73.5.98 5.25.98 11.52c0 4.87 3.16 9 7.55 10.46.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.07.67-3.72-1.3-3.72-1.3-.5-1.28-1.23-1.62-1.23-1.62-1-.69.08-.68.08-.68 1.11.08 1.7 1.14 1.7 1.14.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.7-1.48-2.45-.28-5.03-1.23-5.03-5.46 0-1.21.43-2.2 1.14-2.97-.11-.28-.5-1.4.11-2.93 0 0 .93-.3 3.05 1.13a10.6 10.6 0 0 1 5.56 0c2.12-1.43 3.05-1.13 3.05-1.13.61 1.52.22 2.65.11 2.93.71.77 1.14 1.76 1.14 2.97 0 4.24-2.58 5.17-5.04 5.45.4.34.75 1.02.75 2.06 0 1.49-.01 2.69-.01 3.05 0 .3.2.64.76.53 4.38-1.46 7.54-5.59 7.54-10.46C23.02 5.25 18.27.5 12 .5Z" />
        ),
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/nauman-raees-355558183/',
        icon: (
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
        ),
    },
    {
        name: 'Email',
        href: 'mailto:nauman.raees72@gmail.com',
        icon: (
            <path d="M1.5 4.5h21A1.5 1.5 0 0 1 24 6v12a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 18V6a1.5 1.5 0 0 1 1.5-1.5Zm.9 2.4 9.6 6.4 9.6-6.4H2.4Zm19.2 1.8-8.85 5.9a1.5 1.5 0 0 1-1.7 0L2.4 8.7V17.1h19.2V8.7Z" />
        ),
    },
]

interface SocialsProps {
    className?: string
    iconClassName?: string
}

export const Socials = ({ className = '', iconClassName = '' }: SocialsProps) => (
    <div className={`flex items-center gap-3 ${className}`}>
        {socialLinks.map((s) => (
            <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.name}
                className={`group flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink-soft shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent hover:shadow-lg ${iconClassName}`}
            >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    {s.icon}
                </svg>
            </a>
        ))}
    </div>
)

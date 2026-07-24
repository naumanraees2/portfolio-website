import React from 'react'
import { Reveal } from './reveal'

interface SectionHeadingProps {
    eyebrow: string
    title: React.ReactNode
    subtitle?: string
    align?: 'center' | 'left'
}

export const SectionHeading = ({
    eyebrow,
    title,
    subtitle,
    align = 'center',
}: SectionHeadingProps) => (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" />
            {eyebrow}
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {title}
        </h2>
        {subtitle && (
            <p className="mt-4 text-base leading-relaxed text-ink-soft">{subtitle}</p>
        )}
    </Reveal>
)

"use client";

import React from 'react'

type Variant = 'solid' | 'outline' | 'ghost'

interface ButtonComponentProps {
    text: string
    href?: string
    variant?: Variant
    icon?: React.ReactNode
    className?: string
    onClick?: () => void
}

const variantClasses: Record<Variant, string> = {
    solid:
        'bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30',
    outline:
        'border-2 border-ink/15 text-ink bg-white/60 hover:border-accent hover:text-accent',
    ghost: 'text-ink hover:text-accent',
}

export const ButtonComponent = ({
    text,
    href,
    variant = 'solid',
    icon,
    className = '',
    onClick,
}: ButtonComponentProps) => {
    const classes = `group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer ${variantClasses[variant]} ${className}`

    const content = (
        <>
            {text}
            {icon && (
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {icon}
                </span>
            )}
        </>
    )

    if (href) {
        return (
            <a href={href} onClick={onClick} className={classes}>
                {content}
            </a>
        )
    }

    return (
        <button type="button" onClick={onClick} className={classes}>
            {content}
        </button>
    )
}

"use client";

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { SectionHeading } from './common/sectionHeading'
import { Reveal } from './common/reveal'
import { Socials } from './common/socials'

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
type Status = 'idle' | 'sending' | 'success' | 'error'

const contactChannels = [
    {
        label: 'Email',
        value: 'nauman.raees72@gmail.com',
        href: 'mailto:naumanraees72@gmail.com',
        icon: '📧',
    },
    {
        label: 'Phone',
        value: '+92 323 5247722',
        href: 'tel:+923235247722',
        icon: '📱',
    },
    {
        label: 'Location',
        value: 'Islamabad, Pakistan',
        href: 'https://maps.google.com/?q=Islamabad,Pakistan',
        icon: '📍',
    },
]

const ContactComponent = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const [status, setStatus] = useState<Status>('idle')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget

        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
            console.error('EmailJS environment variables are not configured.')
            setStatus('error')
            return
        }

        setStatus('sending')
        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                form,
                { publicKey: EMAILJS_PUBLIC_KEY },
            )
            setStatus('success')
            form.reset()
        } catch (err) {
            console.error('EmailJS send failed:', err)
            setStatus('error')
        }
    }

    return (
        <section id="contact" className="relative overflow-hidden py-24">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Contact"
                    title={
                        <>
                            Let&apos;s <span className="text-gradient">work together</span>
                        </>
                    }
                    subtitle="Have a project in mind or just want to say hi? My inbox is always open."
                />

                <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
                    {/* Left: channels */}
                    <Reveal className="flex flex-col justify-between gap-8">
                        <div className="space-y-4">
                            {contactChannels.map((c) => (
                                <a
                                    key={c.label}
                                    href={c.href}
                                    target={c.href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 rounded-2xl border border-ink/5 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl"
                                >
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-2xl ring-1 ring-ink/5">
                                        {c.icon}
                                    </span>
                                    <span>
                                        <span className="block text-xs font-semibold uppercase tracking-wide text-accent">
                                            {c.label}
                                        </span>
                                        <span className="block font-medium text-ink transition-colors group-hover:text-accent">
                                            {c.value}
                                        </span>
                                    </span>
                                </a>
                            ))}
                        </div>

                        <div className="rounded-2xl bg-gradient-to-br from-ink to-accent-2 p-6 text-white shadow-lg">
                            <h3 className="text-lg font-bold">Follow me</h3>
                            <p className="mt-1 text-sm text-white/70">
                                Let&apos;s connect on your favourite platform.
                            </p>
                            <Socials className="mt-4" iconClassName="border-white/20 bg-white/10 text-white hover:border-white hover:text-white" />
                        </div>
                    </Reveal>

                    {/* Right: form */}
                    <Reveal delay={120}>
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="rounded-3xl border border-ink/5 bg-white p-6 shadow-lg sm:p-8"
                        >
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div className="sm:col-span-1">
                                    <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Jane Doe"
                                        className="w-full rounded-xl border border-ink/10 bg-surface px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                                    />
                                </div>
                                <div className="sm:col-span-1">
                                    <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="jane@company.com"
                                        className="w-full rounded-xl border border-ink/10 bg-surface px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Tell me about your project…"
                                        className="w-full resize-none rounded-xl border border-ink/10 bg-surface px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                            >
                                {status === 'sending' ? (
                                    <>
                                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.4 0 0 5.4 0 12h4z" />
                                        </svg>
                                        Sending…
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <span aria-hidden>→</span>
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <p className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700">
                                    Thanks! Your message has been sent — I&apos;ll get back to you soon.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-700">
                                    Something went wrong. Please email me directly at{' '}
                                    <a href="mailto:nauman.raees72@gmail.com" className="underline">
                                        nauman.raees72@gmail.com
                                    </a>
                                    .
                                </p>
                            )}
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default ContactComponent

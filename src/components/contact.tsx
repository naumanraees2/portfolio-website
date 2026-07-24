"use client";

import React, { useState } from 'react'
import { SectionHeading } from './common/sectionHeading'
import { Reveal } from './common/reveal'
import { Socials } from './common/socials'

const contactChannels = [
    {
        label: 'Email',
        value: 'nauman.raees72@gmail.com',
        href: 'mailto:nauman.raees72@gmail.com',
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
    const [sent, setSent] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const data = new FormData(form)
        const name = String(data.get('name') || '')
        const email = String(data.get('email') || '')
        const message = String(data.get('message') || '')

        // Open the user's mail client pre-filled — a dependency-free "send"
        const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
        const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
        window.location.href = `mailto:nauman.raees72@gmail.com?subject=${subject}&body=${body}`

        setSent(true)
        form.reset()
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
                                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-xl"
                            >
                                Send Message
                                <span aria-hidden>→</span>
                            </button>

                            {sent && (
                                <p className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700">
                                    Thanks! Your mail client should be opening — I&apos;ll get back to you soon.
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

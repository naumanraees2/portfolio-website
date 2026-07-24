'use client'

import React, { useEffect, useState } from 'react'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Logo from '@/src/assets/image.png'

const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

function classNames(...classes: (string | false | undefined)[]) {
    return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('home')

    // Shrink / add glass background once the page is scrolled
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Scrollspy: highlight the nav item whose section is in view
    useEffect(() => {
        const ids = navigation.map((n) => n.href.slice(1))
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null)

        if (!sections.length) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id)
                })
            },
            { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
        )

        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    return (
        <Disclosure
            as="nav"
            className={classNames(
                'fixed inset-x-0 top-0 z-50 transition-all duration-300',
                scrolled
                    ? 'bg-white/80 shadow-[0_8px_30px_rgba(52,61,104,0.08)] backdrop-blur-xl'
                    : 'bg-transparent',
            )}
        >
            {() => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div
                            className={classNames(
                                'flex items-center justify-between transition-all duration-300',
                                scrolled ? 'h-16' : 'h-20',
                            )}
                        >
                            {/* Logo */}
                            <a href="#home" className="group flex shrink-0 items-center gap-2">
                                <Image
                                    alt="Nauman Raees logo"
                                    src={Logo}
                                    className="h-9 w-auto transition-transform duration-300 group-hover:scale-110"
                                    priority
                                />
                                <span className="hidden text-lg font-bold tracking-tight text-ink sm:block">
                                    Nauman<span className="text-accent">.</span>
                                </span>
                            </a>

                            {/* Desktop links */}
                            <div className="hidden items-center gap-1 md:flex">
                                {navigation.map((item) => {
                                    const isActive = active === item.href.slice(1)
                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={isActive ? 'page' : undefined}
                                            className={classNames(
                                                'relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300',
                                                isActive
                                                    ? 'text-accent'
                                                    : 'text-ink-soft hover:text-ink',
                                            )}
                                        >
                                            {item.name}
                                            <span
                                                className={classNames(
                                                    'absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent transition-all duration-300',
                                                    isActive
                                                        ? 'scale-x-100 opacity-100'
                                                        : 'scale-x-0 opacity-0',
                                                )}
                                            />
                                        </a>
                                    )
                                })}
                            </div>

                            {/* CTA + mobile toggle */}
                            <div className="flex items-center gap-3">
                                <a
                                    href="#contact"
                                    className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30 sm:inline-flex"
                                >
                                    Let&apos;s Talk
                                </a>

                                <DisclosureButton className="group inline-flex items-center justify-center rounded-full p-2 text-ink transition-colors hover:bg-ink/5 md:hidden">
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon className="block size-6 group-data-open:hidden" aria-hidden="true" />
                                    <XMarkIcon className="hidden size-6 group-data-open:block" aria-hidden="true" />
                                </DisclosureButton>
                            </div>
                        </div>
                    </div>

                    {/* Mobile panel */}
                    <DisclosurePanel className="md:hidden">
                        <div className="mx-4 mb-3 space-y-1 rounded-2xl border border-ink/5 bg-white/95 p-3 shadow-xl backdrop-blur-xl">
                            {navigation.map((item) => {
                                const isActive = active === item.href.slice(1)
                                return (
                                    <DisclosureButton
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                                            isActive
                                                ? 'bg-accent/10 text-accent'
                                                : 'text-ink-soft hover:bg-ink/5 hover:text-ink',
                                        )}
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                )
                            })}
                            <DisclosureButton
                                as="a"
                                href="#contact"
                                className="mt-2 block rounded-xl bg-accent px-4 py-3 text-center text-base font-semibold text-white"
                            >
                                Let&apos;s Talk
                            </DisclosureButton>
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    )
}

export default NavBar

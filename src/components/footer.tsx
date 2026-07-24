import { Socials } from './common/socials'

const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

const Footer = () => {
    return (
        <footer className="border-t border-ink/5 bg-surface">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-8 text-center">
                    <a href="#home" className="text-2xl font-extrabold tracking-tight text-ink">
                        Nauman<span className="text-accent">.</span>
                    </a>

                    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        {footerLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-ink-soft transition-colors hover:text-accent"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <Socials />

                    <div className="mt-4 w-full border-t border-ink/5 pt-6">
                        <p className="text-sm text-ink-soft">
                            © {new Date().getFullYear()} Nauman Raees. Crafted with{' '}
                            <span className="text-accent">♥</span> using Next.js &amp; Tailwind CSS.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#servicios', label: 'SERVICIOS' },
        { href: '#nosotros', label: 'NOSOTROS' },
        { href: '#precios', label: 'PRECIOS' },
        { href: '#como-trabajamos', label: 'CÓMO TRABAJAMOS' },
    ];

    const handleLinkClick = () => setIsMobileMenuOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 p-3 md:p-6 flex justify-center pointer-events-none">
            <div className="pointer-events-auto w-full max-w-5xl">
                <nav
                    className={`pointer-events-auto flex items-center justify-between gap-4 px-5 md:px-8 py-3 md:py-4 rounded-4xl transition-all duration-500 ${isScrolled
                        ? 'bg-noir/60 backdrop-blur-xl border border-hot-pink/20 text-paper shadow-[0_0_30px_rgba(255,45,120,0.08)]'
                        : 'bg-noir/30 backdrop-blur-md border border-white/5 text-hot-pink'
                        }`}
                >
                    {/* Logo */}
                    <span className="font-bebas text-xl md:text-2xl tracking-widest flex items-center gap-2 shrink-0">
                        STUDIO KALI{' '}
                        <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-electric-cyan animate-pulse shadow-[0_0_10px_#00e5ff]"></span>
                    </span>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-6 font-semibold text-sm">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="nav-link-animated hover:text-electric-cyan transition-colors">
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-3">
                        <a
                            href="#contacto"
                            className="btn-glass btn-neon-border text-paper rounded-full px-4 md:px-6 py-2 md:py-2.5 font-bebas tracking-widest text-base md:text-lg hover:scale-105 active:scale-95"
                        >
                            HABLEMOS
                        </a>
                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Abrir menú de navegación"
                            className="md:hidden text-paper/80 hover:text-hot-pink transition-colors p-1"
                        >
                            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Dropdown Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-2 mx-1 bg-noir/95 backdrop-blur-xl border border-hot-pink/20 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={handleLinkClick}
                                className="flex items-center px-6 py-4 font-bebas text-xl tracking-widest text-paper/70 hover:text-electric-cyan hover:bg-white/5 border-b border-charcoal/30 last:border-0 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}

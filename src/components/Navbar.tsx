import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-center pointer-events-none">
            <nav
                className={`pointer-events-auto flex items-center gap-8 px-8 py-4 rounded-4xl transition-all duration-500 ${isScrolled
                    ? 'bg-noir/60 backdrop-blur-xl border border-hot-pink/20 text-paper shadow-[0_0_30px_rgba(255,45,120,0.08)]'
                    : 'bg-noir/30 backdrop-blur-md border border-white/5 text-hot-pink'
                    }`}
            >
                <span className="font-bebas text-2xl tracking-widest flex items-center gap-2">
                    STUDIO KALI{' '}
                    <span className="w-2.5 h-2.5 rounded-full bg-electric-cyan animate-pulse shadow-[0_0_10px_#00e5ff]"></span>
                </span>
                <div className="hidden md:flex items-center gap-6 font-semibold text-sm">
                    <a href="#servicios" className="nav-link-animated hover:text-electric-cyan transition-colors">SERVICIOS</a>
                    <a href="#nosotros" className="nav-link-animated hover:text-electric-cyan transition-colors">NOSOTROS</a>
                    <a href="#precios" className="nav-link-animated hover:text-electric-cyan transition-colors">PRECIOS</a>
                    <a href="#como-trabajamos" className="nav-link-animated hover:text-electric-cyan transition-colors">CÓMO TRABAJAMOS</a>
                </div>
                <a href="#contacto" className="btn-glass btn-neon-border text-paper rounded-full px-6 py-2.5 font-bebas tracking-widest text-lg ml-4 hover:scale-105 active:scale-95">
                    HABLEMOS
                </a>
            </nav>
        </header>
    );
}

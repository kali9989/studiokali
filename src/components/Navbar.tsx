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
                className={`pointer-events-auto flex items-center gap-8 px-8 py-4 rounded-4xl transition-all duration-300 ${isScrolled
                    ? 'bg-noir/60 backdrop-blur-md border border-hot-pink/30 text-paper shadow-[0_0_15px_rgba(255,45,120,0.1)]'
                    : 'bg-noir border border-transparent text-hot-pink'
                    }`}
            >
                <span className="font-bebas text-2xl tracking-widest flex items-center gap-2">
                    STUDIO KALI{' '}
                    <span className="w-2.5 h-2.5 rounded-full bg-electric-cyan animate-pulse shadow-[0_0_10px_#00e5ff]"></span>
                </span>
                <div className="hidden md:flex items-center gap-6 font-semibold text-sm">
                    <a href="#servicios" className="hover:text-electric-cyan transition-colors">SERVICIOS</a>
                    <a href="#nosotros" className="hover:text-electric-cyan transition-colors">NOSOTROS</a>
                    <a href="#precios" className="hover:text-electric-cyan transition-colors">PRECIOS</a>
                    <a href="#como-trabajamos" className="hover:text-electric-cyan transition-colors">CÓMO TRABAJAMOS</a>
                </div>
                <a href="#contacto" className="bg-hot-pink text-paper border border-hot-pink hover:bg-transparent hover:text-hot-pink rounded-[0.4rem] px-5 py-2 font-bebas tracking-wide transition-all transform hover:scale-105 active:scale-95 text-lg ml-4">
                    HABLEMOS
                </a>
            </nav>
        </header>
    );
}

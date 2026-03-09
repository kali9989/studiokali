import { Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-noir rounded-t-[3rem] md:rounded-t-[4rem] text-paper pt-20 md:pt-32 pb-8 px-6 md:px-16 -mt-16 relative z-30 border-t border-charcoal/50 shadow-[0_-20px_40px_rgba(0,0,0,0.5)]">

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end border-b border-charcoal/30 pb-12 md:pb-16 mb-8 gap-10 md:gap-12">

                <div className="flex-1">
                    <div className="font-bebas text-5xl md:text-8xl lg:text-9xl uppercase leading-[0.8] mb-6 md:mb-8">
                        STUDIO <br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--color-hot-pink)' }}>
                            KALI
                        </span>
                    </div>

                    <div className="inline-flex items-center gap-3 text-sm font-jetbrains bg-[#141414] border border-charcoal rounded-full px-4 py-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-electric-cyan animate-pulse shadow-[0_0_10px_rgba(0,229,255,0.6)]"></span>
                        Disponible para proyectos
                    </div>
                </div>

                {/* Nav columns — flex-wrap to prevent overflow on mobile */}
                <div className="flex flex-wrap gap-8 md:gap-16 lg:gap-20">
                    <div className="flex flex-col gap-3 md:gap-4 font-jakarta text-sm">
                        <span className="font-jetbrains text-charcoal/70 uppercase text-xs tracking-widest mb-1">Servicios</span>
                        <a href="#servicios" className="text-paper/60 hover:text-electric-cyan transition-colors duration-300">Tu Página Web</a>
                        <a href="#servicios" className="text-paper/60 hover:text-electric-cyan transition-colors duration-300">Redes Sociales</a>
                        <a href="#servicios" className="text-paper/60 hover:text-electric-cyan transition-colors duration-300">Tu Marca Completa</a>
                        <a href="#servicios" className="text-paper/60 hover:text-electric-cyan transition-colors duration-300">Pack 4 Vídeos</a>
                    </div>

                    <div className="flex flex-col gap-3 md:gap-4 font-jakarta text-sm">
                        <span className="font-jetbrains text-charcoal/70 uppercase text-xs tracking-widest mb-1">Síguenos</span>
                        <a href="https://www.instagram.com/radiokalifa/" target="_blank" rel="noopener noreferrer" className="text-paper/60 hover:text-hot-pink transition-colors duration-300">Instagram</a>
                        <a href="https://www.tiktok.com/@radiokalifa" target="_blank" rel="noopener noreferrer" className="text-paper/60 hover:text-hot-pink transition-colors duration-300">TikTok</a>
                        <a href="https://www.youtube.com/@radiokalifa" target="_blank" rel="noopener noreferrer" className="text-paper/60 hover:text-hot-pink transition-colors duration-300">YouTube</a>
                    </div>

                    <div className="flex flex-col gap-3 md:gap-4 font-jakarta text-sm">
                        <span className="font-jetbrains text-charcoal/70 uppercase text-xs tracking-widest mb-1">Contacto</span>
                        <a href="mailto:cristianrafaelfdz@gmail.com" className="text-paper/60 hover:text-electric-cyan transition-colors duration-300 flex items-center gap-2">
                            <Mail size={14} />
                            Email
                        </a>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-paper/40">
                <div className="font-cormorant italic text-base md:text-lg text-paper/50 text-center md:text-left">
                    © 2026 Studio Kali — Creamos tu imagen digital.
                </div>
                <div className="font-jakarta text-xs uppercase flex gap-6 tracking-wider">
                    <a href="#" className="hover:text-paper/70 transition-colors duration-300">Privacidad</a>
                    <a href="#" className="hover:text-paper/70 transition-colors duration-300">Términos</a>
                </div>
            </div>

        </footer>
    );
}

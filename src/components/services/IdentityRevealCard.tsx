import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Palette, Baseline } from 'lucide-react';

export default function IdentityRevealCard() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

        // Step 1: Reveal canvas
        tl.fromTo('.reveal-canvas', { opacity: 0 }, { opacity: 1, duration: 0.5 });

        // Step 2: Reveal colors
        tl.fromTo('.reveal-color',
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(2)' }
        );

        // Step 3: Reveal typography
        tl.fromTo('.reveal-typo-container', { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' }, '+=0.2');
        tl.fromTo('.reveal-typo', { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.4, stagger: 0.1 });

        // Step 4: Reveal Logo
        tl.fromTo('.reveal-logo-wrapper', { scale: 0.8, opacity: 0, rotation: -5 }, { scale: 1, opacity: 1, rotation: 0, duration: 0.7, ease: 'elastic.out(1, 0.7)' }, '+=0.2');

        // Hold and fade out
        tl.to('.reveal-color, .reveal-typo-container, .reveal-logo-wrapper', { opacity: 0, duration: 0.8, delay: 2 });
    }, { scope: container });

    return (
        <div ref={container} className="group relative bg-[#141414] border border-charcoal/50 hover:border-hot-pink/50 rounded-4xl p-1 overflow-hidden transition-colors duration-500">

            {/* Badge container logic from prompt */}
            <div className="absolute top-6 left-6 z-20 bg-electric-cyan text-noir text-xs font-jetbrains px-3 py-1 rounded-full font-bold uppercase tracking-wider shadow-lg flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-noir animate-pulse"></span>
                Entrega 24h
            </div>

            <div className="bg-[#1A1A1A] rounded-[1.8rem] h-full p-8 flex flex-col relative overflow-hidden pt-16">
                <div className="mb-6 relative z-10">
                    <h3 className="font-bebas text-3xl text-paper tracking-wide mb-1">Tu Marca en 24h</h3>
                    <p className="font-jakarta text-sm text-paper/60">Logo, colores y tipografía listos</p>
                </div>

                {/* Canvas Area */}
                <div className="flex-1 w-full bg-noir border border-charcoal rounded-xl p-6 flex flex-col shadow-2xl relative overflow-hidden reveal-canvas">

                    {/* Colors Reveal */}
                    <div className="mb-6">
                        <div className="text-[10px] text-paper/40 font-jetbrains uppercase mb-3 flex items-center gap-2">
                            <Palette size={12} /> Paleta de Color
                        </div>
                        <div className="flex gap-3">
                            <div className="reveal-color w-10 h-10 rounded-full bg-noir border-2 border-paper/10 shadow-lg" style={{ backgroundColor: '#0D0D0D' }}></div>
                            <div className="reveal-color w-10 h-10 rounded-full shadow-lg" style={{ backgroundColor: '#FF2D78' }}></div>
                            <div className="reveal-color w-10 h-10 rounded-full shadow-lg" style={{ backgroundColor: '#00E5FF' }}></div>
                            <div className="reveal-color w-10 h-10 rounded-full shadow-lg" style={{ backgroundColor: '#F0EDE5' }}></div>
                        </div>
                    </div>

                    {/* Typography Reveal */}
                    <div className="mb-6 reveal-typo-container overflow-hidden">
                        <div className="text-[10px] text-paper/40 font-jetbrains uppercase mb-2 flex items-center gap-2">
                            <Baseline size={12} /> Tipografía
                        </div>
                        <div className="space-y-2 border-l-2 border-charcoal pl-3">
                            <div className="reveal-typo text-2xl font-bebas text-paper tracking-wider">BEBAS NEUE</div>
                            <div className="reveal-typo text-sm font-jakarta text-paper/80">Plus Jakarta Sans</div>
                            <div className="reveal-typo text-sm font-cormorant italic text-paper/60">Cormorant Garamond</div>
                        </div>
                    </div>

                    {/* Logo Reveal */}
                    <div className="flex-1 flex items-center justify-center border border-charcoal/30 rounded-lg bg-[#111] mt-2 relative overflow-hidden">
                        <div className="absolute inset-0 bg-halftone-overlay opacity-20"></div>
                        <div className="reveal-logo-wrapper relative z-10 text-center">
                            <div className="font-bebas text-5xl text-paper flex items-center gap-1">
                                STUDIO
                                <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-hot-pink)' }}>
                                    KALI
                                </span>
                            </div>
                            <div className="w-1.5 h-1.5 bg-electric-cyan rounded-full mx-auto mt-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

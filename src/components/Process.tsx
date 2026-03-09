import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { CheckCircle2, FastForward, Globe2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Process() {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>('.process-card');

        cards.forEach((card, i) => {
            // Setup timeline for the interactions inside each card
            if (i === 0) {
                // Form auto-complete animation
                gsap.to('.mock-typing', { width: '100%', duration: 2, ease: 'steps(12)', repeat: -1, repeatDelay: 1 });
            } else if (i === 1) {
                // Timeline checkmarks
                const tl = gsap.timeline({ repeat: -1 });
                tl.to('.timeline-check', { opacity: 1, scale: 1, stagger: 0.5, duration: 0.3, ease: 'back.out(2)' });
                tl.to('.timeline-check', { opacity: 0, scale: 0, duration: 0.5, delay: 1 });
            } else if (i === 2) {
                // URL change animation
                const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
                tl.to('.url-bad', { y: -20, opacity: 0, duration: 0.4 });
                tl.fromTo('.url-good', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, '-=0.2');
                tl.to('.confetti-dot', { opacity: 1, scale: 1.5, y: -50, x: 'random(-50, 50)', stagger: 0.05, duration: 0.6, ease: 'power2.out' });
                tl.to('.url-good, .confetti-dot', { opacity: 0, duration: 0.5, delay: 1 });
                tl.set('.url-bad', { y: 0, opacity: 1 });
                tl.set('.confetti-dot', { scale: 0, y: 0, x: 0 });
            }

            // The Sticky Stack Logic
            if (i !== cards.length - 1) {
                ScrollTrigger.create({
                    trigger: card,
                    start: 'top top',
                    pin: true,
                    pinSpacing: false,
                    endTrigger: container.current,
                    end: 'bottom bottom',
                });

                gsap.to(card, {
                    scale: 0.9,
                    opacity: 0.5,
                    filter: 'blur(20px)',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: cards[i + 1],
                        start: 'top bottom',
                        end: 'top top',
                        scrub: true,
                    }
                });
            } else {
                ScrollTrigger.create({
                    trigger: card,
                    start: 'top top',
                    pin: true,
                    pinSpacing: false, // Don't add extra space below the last pinned card
                    endTrigger: container.current,
                    end: 'bottom top' // Unpin when the container ends naturally
                });
            }
        });

    }, { scope: container });

    return (
        <section id="como-trabajamos" ref={container} className="relative z-20 bg-noir">

            {/* Step 1: Cuéntanos */}
            <div className="process-card h-screen w-full flex items-center justify-center p-8 bg-noir border-b border-charcoal/30 sticky top-0 left-0">
                <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="text-electric-cyan font-jetbrains text-lg mb-2">Paso 01</div>
                        <h2 className="font-bebas text-5xl md:text-7xl text-paper mb-4 uppercase">Cuéntanos <span className="text-hot-pink">Qué Necesitas</span></h2>
                        <p className="font-jakarta text-xl text-paper/70">Rellenas un formulario rápido. Sin reuniones largas ni idas y venidas. En 5 minutos sabemos lo que necesitas y nos ponemos a trabajar.</p>
                    </div>

                    <div className="bg-[#141414] border border-charcoal rounded-4xl p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-electric-cyan"></div>
                        <div className="space-y-6">
                            <div>
                                <div className="h-4 w-32 bg-charcoal/50 rounded mb-2"></div>
                                <div className="h-10 border border-charcoal rounded bg-noir px-3 flex items-center">
                                    <div className="h-4 bg-paper/80 mockup-typing overflow-hidden whitespace-nowrap" style={{ width: '0%', fontFamily: 'var(--font-jetbrains)', fontSize: '14px' }}>
                                        <span className="mock-typing inline-block overflow-hidden whitespace-nowrap border-r-2 border-electric-cyan text-paper">panadería artesanal en Málaga</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="h-4 w-48 bg-charcoal/50 rounded mb-2"></div>
                                <div className="h-24 border border-charcoal rounded bg-noir px-3 py-2 flex items-start">
                                    <div className="h-4 bg-paper/80 mockup-typing overflow-hidden whitespace-nowrap" style={{ width: '0%', animationDelay: '2s' }}>
                                        <div className="mock-typing inline-block overflow-hidden whitespace-nowrap border-r-2 border-electric-cyan text-paper">quiero más clientes del barrio</div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-12 w-full bg-hot-pink rounded flex items-center justify-center gap-2 font-bebas text-xl text-paper mt-8 animate-pulse">
                                <FastForward size={20} /> ENVIAR
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Step 2: Nos ponemos a crear */}
            <div className="process-card h-screen w-full flex items-center justify-center p-8 bg-[#111] border-b border-charcoal/30 sticky top-0 left-0">
                <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div className="bg-noir border border-charcoal rounded-4xl p-8 shadow-[8px_8px_0px_#1A1A1A] relative">
                        <h3 className="font-jetbrains text-xs text-paper/50 mb-6 uppercase tracking-widest">Así trabajamos</h3>
                        <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-3 before:w-0.5 before:bg-charcoal">

                            <div className="relative pl-10">
                                <div className="absolute left-0 top-0.5 w-6 h-6 rounded-full bg-noir border-2 border-charcoal flex items-center justify-center">
                                    <CheckCircle2 className="timeline-check opacity-0 text-hot-pink" size={16} />
                                </div>
                                <div className="font-bebas text-2xl text-paper">Diseñamos tu estructura</div>
                                <div className="font-jakarta text-sm text-paper/60">Organizamos todo para que tu cliente encuentre lo que busca.</div>
                            </div>

                            <div className="relative pl-10">
                                <div className="absolute left-0 top-0.5 w-6 h-6 rounded-full bg-noir border-2 border-charcoal flex items-center justify-center">
                                    <CheckCircle2 className="timeline-check opacity-0 text-hot-pink" size={16} />
                                </div>
                                <div className="font-bebas text-2xl text-paper">Lo construimos todo</div>
                                <div className="font-jakarta text-sm text-paper/60">Diseño a medida. Nada de plantillas. Todo hecho para ti.</div>
                            </div>

                            <div className="relative pl-10">
                                <div className="absolute left-0 top-0.5 w-6 h-6 rounded-full bg-noir border-2 border-charcoal flex items-center justify-center">
                                    <CheckCircle2 className="timeline-check opacity-0 text-electric-cyan" size={16} />
                                </div>
                                <div className="font-bebas text-2xl text-electric-cyan">Lo revisamos a fondo</div>
                                <div className="font-jakarta text-sm text-electric-cyan/70">Comprobamos que todo funcione perfecto en móvil y ordenador.</div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className="text-electric-cyan font-jetbrains text-lg mb-2">Paso 02</div>
                        <h2 className="font-bebas text-5xl md:text-7xl text-paper mb-4 uppercase">Nos Ponemos <span className="text-hot-pink">a Crear</span></h2>
                        <p className="font-jakarta text-xl text-paper/70">Trabajamos a puerta cerrada. Tú no tienes que hacer nada. Te enseñamos el resultado cuando esté listo para brillar.</p>
                    </div>
                </div>
            </div>

            {/* Step 3: Te lo entregamos */}
            <div className="process-card h-screen w-full flex items-center justify-center p-8 bg-[#0a0a0a] sticky top-0 left-0 overflow-hidden">
                 {/* Neon Burst Background Effect */}
                 <div className="absolute inset-0 bg-electric-cyan/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0"></div>

                <div className="max-w-4xl w-full flex flex-col items-center text-center relative z-10">
                    <div className="text-electric-cyan font-jetbrains text-lg mb-2 drop-shadow-[0_0_5px_rgba(0,229,255,0.8)]">Paso 03</div>
                    <h2 className="font-bebas text-5xl md:text-8xl text-paper mb-4 uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Te Lo <span className="text-electric-cyan" style={{ textShadow: '0 0 20px rgba(0,229,255,0.6)' }}>Entregamos</span></h2>
                    <p className="font-jakarta text-xl text-paper/70 max-w-2xl mx-auto mb-16">
                        Todo listo y funcionando. Tu negocio ya tiene una presencia digital que impone respeto. Solo queda que tus clientes te encuentren.
                    </p>

                    <div className="bg-noir border border-electric-cyan/50 p-6 rounded-2xl flex items-center gap-4 w-full max-w-md relative overflow-hidden shadow-[0_0_40px_rgba(0,229,255,0.15)] group hover:shadow-[0_0_60px_rgba(0,229,255,0.3)] hover:border-electric-cyan transition-all duration-500">
                        <Globe2 className="text-electric-cyan drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]" size={24} />
                        <div className="relative h-8 flex-1 overflow-hidden flex flex-col justify-center font-jetbrains text-xl">
                            <span className="url-bad absolute w-full text-hot-pink/60 line-through">sinweb.com</span>
                            <span className="url-good absolute w-full text-paper drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] opacity-0">tunegocio.es</span>
                        </div>
                        {/* Confetti container - Updated to Synthwave Colors */}
                        {Array.from({ length: 15 }).map((_, i) => (
                            <div key={i} className={`confetti-dot absolute left-1/2 top-1/2 w-2 h-2 rounded-full opacity-0 shadow-[0_0_10px_currentColor] ${i % 2 === 0 ? 'bg-hot-pink text-hot-pink' : 'bg-electric-cyan text-electric-cyan'}`}></div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}

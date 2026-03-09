import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail } from 'lucide-react';
import SocialCounters from './SocialCounters';

gsap.registerPlugin(ScrollTrigger);

const RadioStation = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            // Header text reveal
            gsap.fromTo('.reveal-text',
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%"
                    }
                }
            );

            // YouTube card entrance
            gsap.fromTo('.yt-card',
                { y: 40, opacity: 0, scale: 0.97 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.yt-card',
                        start: "top 85%"
                    }
                }
            );

            // Email card entrance
            gsap.fromTo('.email-card',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.email-card',
                        start: "top 85%"
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, { scope: sectionRef });

    return (
        <section id="contacto" ref={sectionRef} aria-label="Redes Sociales y Contacto" className="relative py-32 md:py-48 px-6 md:px-16 flex flex-col items-center justify-center bg-noir min-h-screen overflow-hidden">

            {/* Background subtle grid */}
            <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }}></div>

            {/* Pink glow */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-hot-pink/5 blur-3xl z-0 pointer-events-none" aria-hidden="true"></div>

            <div className="relative z-10 max-w-5xl mx-auto w-full">

                {/* Header */}
                <div className="text-center mb-14 md:mb-20">
                    <p className="reveal-text font-jetbrains text-electric-cyan uppercase tracking-[0.4em] text-xs md:text-sm mb-4">
                        @radiokalifa
                    </p>

                    <h2 className="reveal-text text-6xl md:text-9xl lg:text-[9rem] font-bebas text-white leading-[0.85] mb-6">
                        SÍGUENOS EN<br /><span className="text-hot-pink">REDES</span>
                    </h2>

                    <p className="reveal-text font-cormorant italic text-paper/50 text-xl md:text-2xl max-w-lg mx-auto">
                        Contenido en tiempo real, reflexiones y el lado humano de Studio Kali.
                    </p>
                </div>

                {/* ★ Social Stats — HERO of this section ★ */}
                <SocialCounters />

                {/* YouTube + Email — below the counters */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-4">

                    {/* YouTube Card */}
                    <a
                        href="https://www.youtube.com/@radiokalifa"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Canal de YouTube @radiokalifa"
                        className="yt-card flex-1 group block transition-all duration-500"
                        onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const dx = e.clientX - rect.left - rect.width / 2;
                            const dy = e.clientY - rect.top - rect.height / 2;
                            gsap.to(e.currentTarget, { rotationY: dx / 18, rotationX: -dy / 18, transformPerspective: 1000, duration: 0.5, ease: 'power2.out' });
                        }}
                        onMouseLeave={(e) => {
                            gsap.to(e.currentTarget, { rotationY: 0, rotationX: 0, duration: 0.5, ease: 'power2.out' });
                        }}
                    >
                        <div className="relative overflow-hidden rounded-3xl border border-charcoal/50 bg-[#111] p-8 md:p-10 text-center transition-all duration-500 hover:border-hot-pink/60 hover:shadow-[0_0_60px_rgba(255,45,120,0.12)] h-full">
                            <div className="absolute inset-0 bg-linear-to-b from-hot-pink/0 to-hot-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
                            <div className="relative z-10 mb-5">
                                <div className="w-16 h-16 mx-auto rounded-2xl bg-hot-pink/10 border border-hot-pink/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-hot-pink/20 transition-all duration-500">
                                    <svg viewBox="0 0 24 24" className="w-7 h-7 text-hot-pink" fill="currentColor" aria-hidden="true">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </div>
                            </div>
                            <span className="relative z-10 font-bebas text-3xl md:text-4xl text-white block mb-1 group-hover:text-hot-pink transition-colors duration-300">YOUTUBE</span>
                            <span className="relative z-10 font-jakarta text-sm text-paper/40 group-hover:text-paper/60 transition-colors duration-300">@radiokalifa</span>
                        </div>
                    </a>

                    {/* Email Contact Card */}
                    <div className="email-card flex-2">
                        <a href="mailto:cristianrafaelfdz@gmail.com" className="group block h-full" aria-label="Enviar correo a Studio Kali">
                            <div className="relative overflow-hidden rounded-3xl border border-charcoal/50 bg-[#111] p-8 md:p-10 text-center transition-all duration-500 hover:border-paper/20 hover:shadow-[0_0_40px_rgba(240,237,229,0.05)] h-full flex items-center justify-center">
                                <div className="absolute inset-0 bg-linear-to-r from-electric-cyan/5 via-transparent to-hot-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true"></div>
                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                                    <div className="w-12 h-12 rounded-xl bg-paper/5 border border-paper/10 flex items-center justify-center group-hover:bg-paper/10 transition-all duration-300">
                                        <Mail className="w-5 h-5 text-paper/60 group-hover:text-paper transition-colors" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <span className="font-bebas text-3xl text-paper/80 group-hover:text-paper transition-colors block">¿Hablamos?</span>
                                        <span className="font-jetbrains text-sm text-paper/30 group-hover:text-electric-cyan transition-colors">cristianrafaelfdz@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default RadioStation;

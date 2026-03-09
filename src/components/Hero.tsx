import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // Smooth fade in for STUDIO (Synthwave entrance)
            gsap.fromTo(
                '.char-studio',
                { y: 50, opacity: 0, filter: 'blur(10px)' },
                {
                    y: 0,
                    opacity: 1,
                    filter: 'blur(0px)',
                    duration: 1.5,
                    ease: 'power3.out',
                    stagger: 0.1,
                    delay: 0.2
                }
            );

            // KALI Entrance and continuous Glitch Accent
            gsap.fromTo(
                '.char-kali',
                { y: -50, opacity: 0, filter: 'blur(10px)' },
                {
                    y: 0,
                    opacity: 1,
                    filter: 'blur(0px)',
                    duration: 1.5,
                    ease: 'power3.out',
                    stagger: 0.1,
                    delay: 0.5,
                    onComplete: () => {
                        // Continuous Glitch Accent Loop
                        gsap.to('.char-kali', {
                            keyframes: [
                                { x: -3, skewX: 5, opacity: 0.8, filter: "hue-rotate(90deg) brightness(1.5)", duration: 0.05 },
                                { x: 3, skewX: -5, opacity: 1, filter: "hue-rotate(-90deg) brightness(2)", duration: 0.05 },
                                { x: 0, skewX: 0, opacity: 1, filter: "none", duration: 0.05 }
                            ],
                            repeat: -1,
                            repeatDelay: 4, // Glitch every 4 seconds
                            ease: "none",
                            stagger: {
                                amount: 0.2, // Ripples through the word
                                from: "random"
                            }
                        });
                    }
                }
            );

            // Cyber Scanline Animation
            gsap.fromTo('.cyber-scanline',
                { top: '-10%', opacity: 0 },
                {
                    top: '110%',
                    opacity: 0.8,
                    duration: 3.5,
                    ease: 'none',
                    repeat: -1,
                    stagger: 1.5 // Offset between the two scanlines
                }
            );

            // Nervous Glitch Bars
            gsap.to('.glitch-bar', {
                x: () => gsap.utils.random(-15, 15),
                y: () => gsap.utils.random(-5, 5),
                opacity: () => gsap.utils.random(0.1, 0.5),
                duration: 0.1,
                repeat: -1,
                repeatRefresh: true,
                ease: 'steps(1)'
            });

            gsap.fromTo(
                '.hero-element',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.2,
                    delay: 1.8
                }
            );

            // Subtle Parallax effect on Background
            const onMouseMove = (e: MouseEvent) => {
                const { clientX, clientY } = e;
                const moveX = (clientX - window.innerWidth / 2) * 0.015;
                const moveY = (clientY - window.innerHeight / 2) * 0.015;
                gsap.to('.hero-bg', {
                    x: moveX,
                    y: moveY,
                    duration: 2, // Smooth, liquid delay
                    ease: 'power2.out'
                });
            };

            window.addEventListener('mousemove', onMouseMove);
            return () => window.removeEventListener('mousemove', onMouseMove);
        },
        { scope: container }
    );

    const splitText = (text: string, className: string) => {
        return text.split('').map((char, i) => (
            <span key={i} className={`inline-block ${className}`}>
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };

    return (
        <section
            ref={container}
            // Absolute Center Composition with massive safety padding to prevent clipping
            className="relative min-h-dvh w-full flex flex-col items-center justify-center py-32 px-4 md:px-16 overflow-hidden perspective-1000"
        >
            {/* Background Image & Synthwave Gradients */}
            <div
                className="absolute inset-[-10%] z-0 bg-cover bg-center hero-bg scale-110 opacity-70"
                style={{ backgroundImage: 'url(/hero_branded_visual_1772218202068.png)' }}
            />
            {/* Animated Outrun Grid */}
            <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none opacity-30 mix-blend-screen">
                <div className="synthwave-grid"></div>
                <div className="grid-fade"></div>
            </div>
            <div className="absolute inset-0 z-0 bg-linear-to-b from-noir/80 via-transparent to-noir" />
            <div className="absolute inset-0 z-0 bg-linear-to-r from-noir via-hot-pink/10 to-electric-cyan/10 blend-screen mix-blend-screen" />
            <div className="absolute inset-0 z-0 bg-noir/40 backdrop-blur-[2px]" />

            {/* Main Content Hub - Centered */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center">

                {/* Typography Container */}
                <div className="relative flex flex-col items-center justify-center leading-[0.8] uppercase select-none w-full">
                    
                    {/* Cybernetic Glitch Slices & Scanlines */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen opacity-50">
                        {/* Vertical scanning laser */}
                        <div className="cyber-scanline absolute left-0 w-full h-1 bg-electric-cyan shadow-[0_0_20px_rgba(0,229,255,1)]"></div>
                        <div className="cyber-scanline absolute left-0 pr-[10%] w-[110%] h-4 bg-hot-pink/30 shadow-[0_0_30px_rgba(255,45,120,0.8)] blur-[2px] delay-1000"></div>
                        
                        {/* Subtle Horizontal Glitch Distortions */}
                        <div className="glitch-bar absolute top-[30%] -left-10 w-[120vw] h-8 bg-black/10 backdrop-blur-[2px] -rotate-2"></div>
                        <div className="glitch-bar absolute top-[65%] -left-10 w-[120vw] h-12 bg-white/5 backdrop-blur-[1px] rotate-1"></div>
                    </div>

                    <h1 className="relative z-10 font-bebas text-[5rem] sm:text-[8rem] md:text-[11rem] lg:text-[14rem] text-paper m-0 p-0 overflow-visible py-4 leading-[0.85]">
                        <span className="block drop-shadow-[0_0_20px_rgba(240,237,229,0.3)]">
                            {splitText('STUDIO', 'char-studio')}
                        </span>
                        <span
                            className="block text-transparent"
                            style={{
                                WebkitTextStroke: '2px var(--color-hot-pink)',
                                filter: 'drop-shadow(0 0 25px rgba(255,45,120,0.6))',
                                textShadow: '0 0 10px rgba(255,45,120,0.2)'
                            }}
                        >
                            {splitText('KALI', 'char-kali')}
                        </span>
                    </h1>
                </div>

                {/* Subtitle & CTA */}
                <div className="hero-element relative z-20 mt-12 flex flex-col items-center gap-8">
                    <p className="font-jakarta text-lg md:text-2xl text-paper/80 font-light tracking-widest max-w-2xl px-4">
                        Transmutamos ideas en impacto visual. <br className="hidden md:block"/>
                        <span className="text-electric-cyan font-medium drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">Diseño que domina el ruido.</span>
                    </p>
                    
                    <a href="#contacto" className="btn-glass btn-neon-border px-14 py-5 text-paper font-bebas text-2xl tracking-[0.2em] rounded-full hover:scale-105 active:scale-95 transition-transform duration-300">
                        INICIAR CONEXIÓN
                    </a>
                </div>
            </div>
        </section>
    );
}

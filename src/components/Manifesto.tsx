import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Manifesto() {
    const container = useRef<HTMLElement>(null);

    const text1 = "Otras agencias preguntan: ¿Cuánto presupuesto tienes?";
    const text2 = "Nosotros preguntamos: ¿Qué quieres conseguir?";

    useGSAP(() => {
        // Parallax background
        gsap.to('.manifesto-bg', {
            yPercent: 30,
            ease: 'none',
            scrollTrigger: {
                trigger: container.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        });

        // Text reveal staggered
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 60%',
                end: 'bottom 80%',
                toggleActions: 'play none none reverse',
            }
        });

        tl.fromTo('.manifesto-word-1',
            { y: 30, opacity: 0, rotateX: -90 },
            { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.05, ease: 'back.out(1.5)' }
        );

        tl.fromTo('.manifesto-word-2',
            { y: 50, opacity: 0, scale: 0.8 },
            { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
            '-=0.4'
        );

    }, { scope: container });

    const renderSplitText = (text: string, className: string) => {
        return text.split(' ').map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-2 mr-[0.25em]">
                <span className={`inline-block ${className} origin-bottom`}>{word}</span>
            </span>
        ));
    };

    return (
        <section id="nosotros" ref={container} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-32 border-y border-hot-pink/20">

            {/* Background Parallax */}
            <div
                className="manifesto-bg absolute inset-0 -inset-y-[30%] z-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2600&auto=format&fit=crop)' }}
            />

            {/* Heavy Noir Gradient / Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-noir via-noir/90 to-noir/80" />
            <div className="absolute inset-0 z-0 bg-halftone-overlay opacity-30" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-8 w-full">
                <div className="flex flex-col gap-12 text-center md:text-left">

                    <h2 className="font-cormorant italic text-3xl md:text-5xl text-paper/60 leading-tight">
                        {renderSplitText(text1, 'manifesto-word-1')}
                    </h2>

                    <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl text-hot-pink uppercase leading-[0.85] tracking-wide">
                        {renderSplitText(text2, 'manifesto-word-2')}
                    </h1>

                </div>
            </div>
        </section>
    );
}

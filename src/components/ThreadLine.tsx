import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ThreadLine() {
    const svgRef = useRef<SVGSVGElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const glowRef = useRef<SVGPathElement>(null);
    const pulseRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        const path = pathRef.current;
        const glow = glowRef.current;
        const pulse = pulseRef.current;
        if (!path || !glow || !pulse) return;

        const len = path.getTotalLength();

        // Start fully hidden
        gsap.set([path, glow, pulse], {
            strokeDasharray: len,
            strokeDashoffset: len,
        });

        // Draw based on scroll — the thread reveals as you scroll down
        const st = ScrollTrigger.create({
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            onUpdate: (self) => {
                const offset = len * (1 - self.progress);
                gsap.set(path, { strokeDashoffset: offset });
                gsap.set(glow, { strokeDashoffset: offset });
                gsap.set(pulse, { strokeDashoffset: offset });
            }
        });

        // Breathing glow
        const breathe = gsap.to(pulse, {
            opacity: 0.6,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });

        return () => {
            st.kill();
            breathe.kill();
        };
    }, []);

    // The path lives in VIEWPORT space (fixed position)
    // Flows from top-right, down the right side, with organic curves
    // Using absolute pixel values within a 1000x1000 viewBox
    const d = `
        M 850 -50
        C 820 50, 780 120, 800 200
        C 820 280, 860 320, 840 400
        C 810 480, 680 520, 650 580
        C 620 640, 720 680, 780 720
        C 840 760, 820 820, 760 880
        C 700 940, 620 960, 580 1000
        C 540 1040, 520 1060, 500 1080
    `;

    return (
        <>
            {/* Fixed SVG — always visible in viewport, right side */}
            <svg
                ref={svgRef}
                className="fixed inset-0 w-full h-full pointer-events-none z-[5]"
                viewBox="0 0 1000 1000"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
            >
                <defs>
                    <filter id="tg" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="b" />
                        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <filter id="tw" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="8" result="b" />
                        <feMerge><feMergeNode in="b" /><feMergeNode in="b" /></feMerge>
                    </filter>
                </defs>

                {/* Layer 1: Wide atmospheric pulse */}
                <path
                    ref={pulseRef}
                    d={d}
                    stroke="#ff2d78"
                    strokeWidth="8"
                    strokeLinecap="round"
                    opacity="0.15"
                    filter="url(#tw)"
                />

                {/* Layer 2: Main glow */}
                <path
                    ref={glowRef}
                    d={d}
                    stroke="#ff2d78"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.4"
                    filter="url(#tg)"
                />

                {/* Layer 3: Sharp thread */}
                <path
                    ref={pathRef}
                    d={d}
                    stroke="#ff2d78"
                    strokeWidth="2"
                    strokeLinecap="round"
                    filter="url(#tg)"
                />
            </svg>

            {/* "Sigue el hilo" — subtle, integrated, right-aligned */}
            <div className="fixed top-[12%] right-[6%] md:right-[8%] z-[6] pointer-events-none">
                <div className="flex flex-col items-end opacity-70">
                    <span className="font-cormorant italic text-hot-pink text-xl md:text-2xl tracking-wide">
                        Sigue el hilo
                    </span>
                    <span className="font-jakarta text-hot-pink/40 text-[10px] md:text-xs mt-1 tracking-[0.3em] uppercase">
                        El destino nos conecta
                    </span>
                </div>
            </div>
        </>
    );
}

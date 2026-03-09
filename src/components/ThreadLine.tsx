import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ThreadLine() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const st = ScrollTrigger.create({
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            onUpdate: (self) => {
                setScrollProgress(self.progress);
            }
        });

        return () => st.kill();
    }, []);

    // Generate film strip frames based on scroll
    const totalFrames = 40;
    const revealedFrames = Math.floor(scrollProgress * totalFrames);

    return (
        <>
            {/* VHS Film Strip — Right Side */}
            <div
                ref={containerRef}
                className="fixed top-0 right-4 md:right-8 w-10 md:w-12 h-full z-5 pointer-events-none"
                aria-hidden="true"
            >
                {/* Film strip body */}
                <div className="relative h-full flex flex-col items-center">

                    {/* Top Reel */}
                    <div className="relative w-8 h-8 md:w-10 md:h-10 mb-1 shrink-0">
                        <div
                            className="absolute inset-0 rounded-full border-2 border-hot-pink/30 flex items-center justify-center"
                            style={{ transform: `rotate(${scrollProgress * 1080}deg)` }}
                        >
                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-noir border border-hot-pink/50" />
                            {/* Spokes */}
                            <div className="absolute w-full h-px bg-hot-pink/20" />
                            <div className="absolute w-px h-full bg-hot-pink/20" />
                            <div className="absolute w-full h-px bg-hot-pink/20 rotate-45" />
                            <div className="absolute w-full h-px bg-hot-pink/20 -rotate-45" />
                        </div>
                    </div>

                    {/* Film Strip Tape */}
                    <div className="relative flex-1 w-full overflow-hidden">
                        {/* Film strip borders (perforations) */}
                        <div className="absolute top-0 left-0 w-[5px] h-full flex flex-col">
                            {Array.from({ length: totalFrames * 2 }).map((_, i) => (
                                <div key={`l-${i}`} className="flex-1 flex flex-col justify-center">
                                    <div className={`w-[3px] h-[4px] mx-auto rounded-[0.5px] transition-all duration-300 ${
                                        i / 2 < revealedFrames
                                            ? 'bg-hot-pink/40 shadow-[0_0_4px_rgba(255,45,120,0.3)]'
                                            : 'bg-white/5'
                                    }`} />
                                </div>
                            ))}
                        </div>

                        <div className="absolute top-0 right-0 w-[5px] h-full flex flex-col">
                            {Array.from({ length: totalFrames * 2 }).map((_, i) => (
                                <div key={`r-${i}`} className="flex-1 flex flex-col justify-center">
                                    <div className={`w-[3px] h-[4px] mx-auto rounded-[0.5px] transition-all duration-300 ${
                                        i / 2 < revealedFrames
                                            ? 'bg-hot-pink/40 shadow-[0_0_4px_rgba(255,45,120,0.3)]'
                                            : 'bg-white/5'
                                    }`} />
                                </div>
                            ))}
                        </div>

                        {/* Film Frames */}
                        <div className="absolute left-[5px] right-[5px] top-0 h-full flex flex-col">
                            {Array.from({ length: totalFrames }).map((_, i) => {
                                const isRevealed = i < revealedFrames;
                                const isActive = i === revealedFrames - 1;
                                return (
                                    <div
                                        key={`f-${i}`}
                                        className="flex-1 flex items-center justify-center relative"
                                    >
                                        {/* Frame cell */}
                                        <div className={`w-full h-[70%] rounded-[1px] transition-all duration-500 ${
                                            isActive
                                                ? 'bg-hot-pink/20 border border-hot-pink/50 shadow-[0_0_12px_rgba(255,45,120,0.3)]'
                                                : isRevealed
                                                    ? 'bg-hot-pink/8 border border-hot-pink/15'
                                                    : 'bg-white/2 border border-white/3'
                                        }`}>
                                            {/* Inner frame content — tiny hash lines */}
                                            {isRevealed && (
                                                <div className="w-full h-full flex flex-col justify-center gap-px px-[2px] py-px overflow-hidden">
                                                    <div className="w-full h-px bg-hot-pink/15" />
                                                    <div className="w-3/4 h-px bg-hot-pink/10" />
                                                    <div className="w-1/2 h-px bg-hot-pink/8" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Center tape line */}
                        <div
                            className="absolute left-1/2 -translate-x-1/2 top-0 w-px transition-all duration-300"
                            style={{
                                height: `${scrollProgress * 100}%`,
                                background: 'linear-gradient(to bottom, rgba(255,45,120,0.5), rgba(0,229,255,0.3))',
                                boxShadow: '0 0 6px rgba(255,45,120,0.3)',
                            }}
                        />
                    </div>

                    {/* Bottom Reel */}
                    <div className="relative w-8 h-8 md:w-10 md:h-10 mt-1 shrink-0">
                        <div
                            className="absolute inset-0 rounded-full border-2 border-electric-cyan/30 flex items-center justify-center"
                            style={{ transform: `rotate(${-scrollProgress * 1080}deg)` }}
                        >
                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-noir border border-electric-cyan/50" />
                            <div className="absolute w-full h-px bg-electric-cyan/20" />
                            <div className="absolute w-px h-full bg-electric-cyan/20" />
                            <div className="absolute w-full h-px bg-electric-cyan/20 rotate-45" />
                            <div className="absolute w-full h-px bg-electric-cyan/20 -rotate-45" />
                        </div>
                    </div>
                </div>
            </div>

            {/* VCR Status Label */}
            <div className="fixed top-[14%] right-16 md:right-24 z-6 pointer-events-none">
                <div className="flex flex-col items-end opacity-50">
                    <span className="font-jetbrains text-hot-pink/60 text-[9px] md:text-[10px] tracking-[0.4em] uppercase">
                        {scrollProgress < 0.05 ? '▶ PLAY' : scrollProgress > 0.95 ? '■ STOP' : '⏩ FF'}
                    </span>
                    <span className="font-jetbrains text-white/20 text-[8px] mt-0.5 tabular-nums tracking-wider">
                        {String(Math.floor(scrollProgress * 90)).padStart(2, '0')}:{String(Math.floor((scrollProgress * 90 % 1) * 60)).padStart(2, '0')}
                    </span>
                </div>
            </div>
        </>
    );
}

import { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ThreadLine() {
    const containerRef = useRef<HTMLDivElement>(null);
    const tapeLineRef = useRef<HTMLDivElement>(null);
    const topReelRef = useRef<HTMLDivElement>(null);
    const bottomReelRef = useRef<HTMLDivElement>(null);
    const statusRef = useRef<HTMLSpanElement>(null);
    const counterRef = useRef<HTMLSpanElement>(null);
    const framesRef = useRef<(HTMLDivElement | null)[]>([]);
    const perfsLeftRef = useRef<(HTMLDivElement | null)[]>([]);
    const perfsRightRef = useRef<(HTMLDivElement | null)[]>([]);

    const totalFrames = 24; // Reduced from 40 for performance

    const setFrameRef = useCallback((el: HTMLDivElement | null, i: number) => {
        framesRef.current[i] = el;
    }, []);
    const setPerfLeftRef = useCallback((el: HTMLDivElement | null, i: number) => {
        perfsLeftRef.current[i] = el;
    }, []);
    const setPerfRightRef = useCallback((el: HTMLDivElement | null, i: number) => {
        perfsRightRef.current[i] = el;
    }, []);

    useEffect(() => {
        const st = ScrollTrigger.create({
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            onUpdate: (self) => {
                const p = self.progress;
                const revealed = Math.floor(p * totalFrames);

                // Reels rotation — direct DOM, no React render
                if (topReelRef.current) {
                    topReelRef.current.style.transform = `rotate(${p * 1080}deg)`;
                }
                if (bottomReelRef.current) {
                    bottomReelRef.current.style.transform = `rotate(${-p * 1080}deg)`;
                }

                // Tape progress line
                if (tapeLineRef.current) {
                    tapeLineRef.current.style.height = `${p * 100}%`;
                }

                // Frames — direct class toggling
                for (let i = 0; i < totalFrames; i++) {
                    const frame = framesRef.current[i];
                    if (!frame) continue;
                    const isActive = i === revealed - 1;
                    const isRevealed = i < revealed;

                    if (isActive) {
                        frame.className = 'w-full h-[70%] rounded-[1px] bg-hot-pink/20 border border-hot-pink/50 shadow-[0_0_12px_rgba(255,45,120,0.3)] transition-none';
                    } else if (isRevealed) {
                        frame.className = 'w-full h-[70%] rounded-[1px] bg-hot-pink/8 border border-hot-pink/15 transition-none';
                    } else {
                        frame.className = 'w-full h-[70%] rounded-[1px] bg-white/2 border border-white/3 transition-none';
                    }
                }

                // Perforations
                const totalPerfs = totalFrames * 2;
                for (let i = 0; i < totalPerfs; i++) {
                    const pLeft = perfsLeftRef.current[i];
                    const pRight = perfsRightRef.current[i];
                    const lit = i / 2 < revealed;
                    const cls = lit
                        ? 'w-[3px] h-[4px] mx-auto rounded-[0.5px] bg-hot-pink/40'
                        : 'w-[3px] h-[4px] mx-auto rounded-[0.5px] bg-white/5';
                    if (pLeft) pLeft.className = cls;
                    if (pRight) pRight.className = cls;
                }

                // VCR status text
                if (statusRef.current) {
                    statusRef.current.textContent = p < 0.05 ? '▶ PLAY' : p > 0.95 ? '■ STOP' : '⏩ FF';
                }
                if (counterRef.current) {
                    const mins = String(Math.floor(p * 90)).padStart(2, '0');
                    const secs = String(Math.floor((p * 90 % 1) * 60)).padStart(2, '0');
                    counterRef.current.textContent = `${mins}:${secs}`;
                }
            }
        });

        return () => st.kill();
    }, [totalFrames]);

    return (
        <>
            <div
                ref={containerRef}
                className="fixed top-0 right-4 md:right-8 w-10 md:w-12 h-full z-5 pointer-events-none"
                aria-hidden="true"
            >
                <div className="relative h-full flex flex-col items-center">

                    {/* Top Reel */}
                    <div className="relative w-8 h-8 md:w-10 md:h-10 mb-1 shrink-0">
                        <div
                            ref={topReelRef}
                            className="absolute inset-0 rounded-full border-2 border-hot-pink/30 flex items-center justify-center will-change-transform"
                        >
                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-noir border border-hot-pink/50" />
                            <div className="absolute w-full h-px bg-hot-pink/20" />
                            <div className="absolute w-px h-full bg-hot-pink/20" />
                            <div className="absolute w-full h-px bg-hot-pink/20 rotate-45" />
                            <div className="absolute w-full h-px bg-hot-pink/20 -rotate-45" />
                        </div>
                    </div>

                    {/* Film Strip */}
                    <div className="relative flex-1 w-full overflow-hidden">
                        {/* Left perforations */}
                        <div className="absolute top-0 left-0 w-[5px] h-full flex flex-col">
                            {Array.from({ length: totalFrames * 2 }).map((_, i) => (
                                <div key={`l-${i}`} className="flex-1 flex flex-col justify-center">
                                    <div ref={(el) => setPerfLeftRef(el, i)} className="w-[3px] h-[4px] mx-auto rounded-[0.5px] bg-white/5" />
                                </div>
                            ))}
                        </div>

                        {/* Right perforations */}
                        <div className="absolute top-0 right-0 w-[5px] h-full flex flex-col">
                            {Array.from({ length: totalFrames * 2 }).map((_, i) => (
                                <div key={`r-${i}`} className="flex-1 flex flex-col justify-center">
                                    <div ref={(el) => setPerfRightRef(el, i)} className="w-[3px] h-[4px] mx-auto rounded-[0.5px] bg-white/5" />
                                </div>
                            ))}
                        </div>

                        {/* Frames */}
                        <div className="absolute left-[5px] right-[5px] top-0 h-full flex flex-col">
                            {Array.from({ length: totalFrames }).map((_, i) => (
                                <div key={`f-${i}`} className="flex-1 flex items-center justify-center">
                                    <div ref={(el) => setFrameRef(el, i)} className="w-full h-[70%] rounded-[1px] bg-white/2 border border-white/3 transition-none" />
                                </div>
                            ))}
                        </div>

                        {/* Center tape line */}
                        <div
                            ref={tapeLineRef}
                            className="absolute left-1/2 -translate-x-1/2 top-0 w-px will-change-[height]"
                            style={{
                                height: '0%',
                                background: 'linear-gradient(to bottom, rgba(255,45,120,0.5), rgba(0,229,255,0.3))',
                                boxShadow: '0 0 6px rgba(255,45,120,0.3)',
                            }}
                        />
                    </div>

                    {/* Bottom Reel */}
                    <div className="relative w-8 h-8 md:w-10 md:h-10 mt-1 shrink-0">
                        <div
                            ref={bottomReelRef}
                            className="absolute inset-0 rounded-full border-2 border-electric-cyan/30 flex items-center justify-center will-change-transform"
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

            {/* VCR Status */}
            <div className="fixed top-[14%] right-16 md:right-24 z-6 pointer-events-none">
                <div className="flex flex-col items-end opacity-50">
                    <span ref={statusRef} className="font-jetbrains text-hot-pink/60 text-[9px] md:text-[10px] tracking-[0.4em] uppercase">
                        ▶ PLAY
                    </span>
                    <span ref={counterRef} className="font-jetbrains text-white/20 text-[8px] mt-0.5 tabular-nums tracking-wider">
                        00:00
                    </span>
                </div>
            </div>
        </>
    );
}

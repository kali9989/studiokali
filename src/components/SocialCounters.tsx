import { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SocialCounters() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [igBonus, setIgBonus] = useState(0);
    const [tkBonus, setTkBonus] = useState(0);

    // Simulated live increment
    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.4) {
                setIgBonus(prev => prev + Math.floor(Math.random() * 3) + 1);
            }
            if (Math.random() > 0.3) {
                setTkBonus(prev => prev + Math.floor(Math.random() * 4) + 1);
            }
        }, 3000 + Math.random() * 4000);
        return () => clearInterval(interval);
    }, []);

    useGSAP(() => {
        gsap.fromTo('.stat-card',
            { y: 40, opacity: 0, scale: 0.9 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.9,
                stagger: 0.25,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                }
            }
        );
    }, { scope: sectionRef });

    const BASE_IG = 18500;
    const BASE_TK = 10000;

    return (
        <div ref={sectionRef} className="w-full max-w-4xl mx-auto mb-16 px-4">
            <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                    <p className="font-jetbrains text-green-400/80 text-[10px] uppercase tracking-[0.5em] font-bold">LIVE</p>
                </div>
                <h3 className="font-bebas text-3xl text-paper tracking-wide">Nuestra Audiencia</h3>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">

                {/* Instagram Counter */}
                <div className="stat-card flex-1 p-8 rounded-3xl bg-noir/50 backdrop-blur-md border border-electric-cyan/15 relative overflow-hidden group hover:border-electric-cyan/40 transition-all duration-500 shadow-[0_0_20px_rgba(0,229,255,0.03)] hover:shadow-[0_0_40px_rgba(0,229,255,0.12)] cursor-pointer"
                    onClick={() => window.open('https://www.instagram.com/radiokalifa/', '_blank')}>
                    {/* Glow layer */}
                    <div className="absolute inset-0 bg-linear-to-tr from-electric-cyan/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {/* Pulse ring */}
                    <div className="absolute top-4 right-4 w-3 h-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-cyan opacity-40"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-electric-cyan"></span>
                    </div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-14 h-14 mb-5 rounded-2xl bg-electric-cyan/10 border border-electric-cyan/20 flex items-center justify-center text-electric-cyan shadow-[0_0_15px_rgba(0,229,255,0.15)]">
                            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </div>
                        <div className="text-5xl md:text-6xl font-bebas text-white tracking-wider mb-1 drop-shadow-[0_0_10px_rgba(0,229,255,0.4)]">
                            <CountUp
                                start={0}
                                end={BASE_IG + igBonus}
                                duration={3.5}
                                separator="."
                                suffix="+"
                                enableScrollSpy
                                scrollSpyDelay={200}
                                scrollSpyOnce
                            />
                        </div>
                        <p className="font-jakarta text-paper/40 text-xs uppercase tracking-[0.3em] mb-3">Seguidores</p>
                        <div className="flex items-center gap-2 bg-electric-cyan/8 border border-electric-cyan/15 rounded-full px-4 py-1.5">
                            <span className="text-electric-cyan font-jetbrains text-xs font-bold">@radiokalifa</span>
                            <span className="text-electric-cyan/50 text-xs">↗</span>
                        </div>
                        <p className="font-jakarta text-paper/25 text-xs mt-3 uppercase tracking-widest">Instagram</p>
                    </div>
                </div>

                {/* TikTok Counter */}
                <div className="stat-card flex-1 p-8 rounded-3xl bg-noir/50 backdrop-blur-md border border-hot-pink/15 relative overflow-hidden group hover:border-hot-pink/40 transition-all duration-500 shadow-[0_0_20px_rgba(255,45,120,0.03)] hover:shadow-[0_0_40px_rgba(255,45,120,0.12)] cursor-pointer"
                    onClick={() => window.open('https://www.tiktok.com/@radiokalifa', '_blank')}>
                    <div className="absolute inset-0 bg-linear-to-tl from-hot-pink/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 w-3 h-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hot-pink opacity-40"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-hot-pink"></span>
                    </div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-14 h-14 mb-5 rounded-2xl bg-hot-pink/10 border border-hot-pink/20 flex items-center justify-center text-hot-pink shadow-[0_0_15px_rgba(255,45,120,0.15)]">
                            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.8.1v-3.52a6.31 6.31 0 0 0-.8-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.8a8.2 8.2 0 0 0 4.76 1.52V6.87a4.86 4.86 0 0 1-1-.18z"></path>
                            </svg>
                        </div>
                        <div className="text-5xl md:text-6xl font-bebas text-white tracking-wider mb-1 drop-shadow-[0_0_10px_rgba(255,45,120,0.4)]">
                            <CountUp
                                start={0}
                                end={BASE_TK + tkBonus}
                                duration={3.5}
                                separator="."
                                suffix="+"
                                enableScrollSpy
                                scrollSpyDelay={400}
                                scrollSpyOnce
                            />
                        </div>
                        <p className="font-jakarta text-paper/40 text-xs uppercase tracking-[0.3em] mb-3">Seguidores</p>
                        <div className="flex items-center gap-2 bg-hot-pink/8 border border-hot-pink/15 rounded-full px-4 py-1.5">
                            <span className="text-hot-pink font-jetbrains text-xs font-bold">@radiokalifa</span>
                            <span className="text-hot-pink/50 text-xs">↗</span>
                        </div>
                        <p className="font-jakarta text-paper/25 text-xs mt-3 uppercase tracking-widest">TikTok</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

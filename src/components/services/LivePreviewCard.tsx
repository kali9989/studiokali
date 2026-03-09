import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import CountUp from 'react-countup';
import { MousePointer2, ExternalLink } from 'lucide-react';

export default function LivePreviewCard() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Animate the fake website auto-scrolling
        gsap.to('.fake-website-scroll', {
            y: '-60%',
            ease: 'none',
            duration: 8,
            repeat: -1,
            yoyo: true,
        });
    }, { scope: container });

    return (
        <div ref={container} className="group relative bg-[#141414] border border-charcoal/50 hover:border-hot-pink/50 rounded-4xl p-1 overflow-hidden transition-colors duration-500">
            <div className="absolute top-6 right-6 z-20 bg-hot-pink text-paper text-xs font-jetbrains px-3 py-1 rounded-full font-bold uppercase tracking-wider shadow-lg">
                Entrega 48h
            </div>

            <div className="bg-[#1A1A1A] rounded-[1.8rem] h-full p-8 flex flex-col relative overflow-hidden">
                <div className="mb-6 relative z-10">
                    <h3 className="font-bebas text-3xl text-paper tracking-wide mb-1">Tu Página Web</h3>
                    <p className="font-jakarta text-sm text-paper/60">Así se verá tu negocio en internet</p>
                </div>

                {/* Browser Mockup */}
                <div className="flex-1 min-h-[300px] border border-charcoal rounded-xl bg-noir flex flex-col overflow-hidden relative shadow-2xl">
                    {/* Browser Header */}
                    <div className="h-8 border-b border-charcoal flex items-center px-4 gap-2 bg-[#141414]">
                        <div className="w-2.5 h-2.5 rounded-full bg-charcoal"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-charcoal"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-charcoal"></div>
                        <div className="mx-auto bg-noir border border-charcoal text-[10px] font-jetbrains text-paper/30 px-12 py-1 rounded-md flex items-center gap-2">
                            <ExternalLink size={10} /> tunegocio.com
                        </div>
                    </div>

                    {/* Browser Body (Scrolling content) */}
                    <div className="flex-1 relative overflow-hidden">
                        <div className="fake-website-scroll absolute w-full top-0 left-0 p-4 space-y-4">
                            {/* Fake hero section */}
                            <div className="w-full h-32 bg-charcoal/30 rounded-lg animate-pulse flex items-center justify-center">
                                <div className="w-1/2 h-8 bg-charcoal/50 rounded"></div>
                            </div>
                            {/* Fake content rows */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-24 bg-charcoal/20 rounded-lg"></div>
                                <div className="h-24 bg-charcoal/20 rounded-lg"></div>
                            </div>
                            <div className="w-full h-12 bg-electric-cyan/20 rounded-lg border border-electric-cyan/30 flex items-center justify-center">
                                <MousePointer2 className="text-electric-cyan" size={16} />
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="h-16 bg-charcoal/20 rounded-md"></div>
                                <div className="h-16 bg-charcoal/20 rounded-md"></div>
                                <div className="h-16 bg-charcoal/20 rounded-md"></div>
                            </div>
                        </div>
                    </div>

                    {/* Telemetry Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 bg-noir/80 backdrop-blur-md border border-charcoal p-3 rounded-lg grid grid-cols-2 gap-4">
                        <div>
                            <div className="text-[10px] text-paper/50 font-jetbrains uppercase mb-1">Más clics</div>
                            <div className="text-xl font-bebas text-electric-cyan flex items-end gap-1">
                                <CountUp end={8.4} decimals={1} duration={4} enableScrollSpy scrollSpyOnce />%
                            </div>
                        </div>
                        <div>
                            <div className="text-[10px] text-paper/50 font-jetbrains uppercase mb-1">Más ventas</div>
                            <div className="text-xl font-bebas text-hot-pink flex items-end gap-1">
                                +<CountUp end={324} duration={3} enableScrollSpy scrollSpyOnce />%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MousePointer2, CheckCircle2 } from 'lucide-react';

export default function ProtocolSchedulerCard() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1 });

        const bezierSoft = 'cubic-bezier(0.34, 1.56, 0.64, 1)';

        // Reset slots to empty
        tl.set('.slot-content', { opacity: 0, scale: 0.5 });
        tl.set('.publish-btn', { scale: 1, backgroundColor: 'transparent', color: '#B3B3B3' }); // paper/70 ~ #B3B3B3 roughly
        tl.set('.slot-active-bg', { opacity: 0 });

        // Cursor moves to Tuesday
        tl.fromTo('.mock-cursor',
            { x: 30, y: 150, opacity: 0 },
            { x: 90, y: 50, opacity: 1, duration: 0.8, ease: bezierSoft }
        );
        // Click effect
        tl.to('.mock-cursor', { scale: 0.8, duration: 0.1 }).to('.mock-cursor', { scale: 1, duration: 0.1 });
        // Activate slot
        tl.to('.slot-active-bg-1', { opacity: 1, duration: 0.2 }, '-=0.1');
        tl.to('.slot-content-1', { opacity: 1, scale: 1, duration: 0.3, ease: bezierSoft }, '-=0.1');

        // Cursor moves to Thursday
        tl.to('.mock-cursor', { x: 190, y: 90, duration: 0.6, ease: bezierSoft }, '+=0.2');
        tl.to('.mock-cursor', { scale: 0.8, duration: 0.1 }).to('.mock-cursor', { scale: 1, duration: 0.1 });
        tl.to('.slot-active-bg-2', { opacity: 1, duration: 0.2 }, '-=0.1');
        tl.to('.slot-content-2', { opacity: 1, scale: 1, duration: 0.3, ease: bezierSoft }, '-=0.1');

        // Cursor moves to Publish Button
        tl.to('.mock-cursor', { x: 250, y: -20, duration: 0.6, ease: bezierSoft }, '+=0.3');
        tl.to('.mock-cursor', { scale: 0.8, duration: 0.1 }).to('.mock-cursor', { scale: 1, duration: 0.1 });
        tl.to('.publish-btn', { backgroundColor: 'var(--color-hot-pink)', color: 'var(--color-paper)', scale: 0.95, duration: 0.1 }, '-=0.1');
        tl.to('.publish-btn', { scale: 1, duration: 0.2, ease: bezierSoft });

        // Cursor leaves
        tl.to('.mock-cursor', { x: 350, y: 150, opacity: 0, duration: 0.5 }, '+=0.5');

        // Hold and fade out completely to restart
        tl.to('.slot-content, .slot-active-bg', { opacity: 0, duration: 0.5, delay: 1 });

    }, { scope: container });

    const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

    return (
        <div ref={container} className="group relative bg-[#141414] border border-charcoal/50 hover:border-electric-cyan/50 rounded-4xl p-1 overflow-hidden transition-colors duration-500">

            <div className="bg-[#1A1A1A] rounded-[1.8rem] h-full p-8 flex flex-col relative overflow-hidden">
                <div className="mb-6 relative z-10 flex justify-between items-start">
                    <div>
                        <h3 className="font-bebas text-3xl text-paper tracking-wide mb-1">Gestión de Redes</h3>
                        <p className="font-jakarta text-sm text-paper/60">Planificamos tu contenido semanal</p>
                    </div>
                </div>

                {/* Scheduler Area */}
                <div className="flex-1 w-full bg-noir border border-charcoal rounded-xl p-4 flex flex-col shadow-2xl relative">

                    {/* Header */}
                    <div className="flex justify-between items-center mb-6 pl-2">
                        <div className="text-xs font-jetbrains text-paper/50">SEMANA ACTUAL</div>
                        <div className="publish-btn border border-charcoal text-[10px] font-jakarta px-3 py-1 rounded transition-colors duration-200">
                            PUBLICAR (2)
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-7 gap-1">
                        {days.map((day, i) => (
                            <div key={i} className="text-center text-[10px] font-jetbrains text-paper/30 mb-2">{day}</div>
                        ))}

                        {/* Row 1 Slots */}
                        {days.map((_, i) => (
                            <div key={`row1-${i}`} className="aspect-square bg-[#1A1A1A] rounded-md border border-charcoal/30 relative flex items-center justify-center overflow-hidden">
                                {/* Tuesday Target */}
                                {i === 1 && (
                                    <>
                                        <div className="slot-active-bg slot-active-bg-1 absolute inset-0 bg-hot-pink/20"></div>
                                        <CheckCircle2 className="slot-content slot-content-1 text-hot-pink relative z-10" size={12} />
                                    </>
                                )}
                            </div>
                        ))}

                        {/* Row 2 Slots */}
                        {days.map((_, i) => (
                            <div key={`row2-${i}`} className="aspect-square bg-[#1A1A1A] rounded-md border border-charcoal/30 relative flex items-center justify-center overflow-hidden">
                                {/* Thursday Target */}
                                {i === 3 && (
                                    <>
                                        <div className="slot-active-bg slot-active-bg-2 absolute inset-0 bg-electric-cyan/20"></div>
                                        <CheckCircle2 className="slot-content slot-content-2 text-electric-cyan relative z-10" size={12} />
                                    </>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* SVG Mock Cursor */}
                    <div className="mock-cursor absolute pointer-events-none z-50 transform" style={{ top: '100px', left: '0px' }}>
                        <MousePointer2 className="text-paper drop-shadow-lg" fill="white" size={24} />
                    </div>
                </div>
            </div>
        </div>
    );
}

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import CountUp from 'react-countup';
import { Heart, MessageCircle } from 'lucide-react';

export default function FeedBuilderCard() {
    const container = useRef<HTMLDivElement>(null);
    const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.fromTo('.feed-item',
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, stagger: 0.4, ease: 'back.out(1.7)' }
        ).to('.feed-item', { scale: 0, opacity: 0, duration: 0.5, stagger: 0.1, delay: 2, ease: 'power2.in' });
    }, { scope: container });

    // Using Picsum Photos — always loads, 100% reliable, unique IDs
    const feedImages = [
        { id: 1011, label: 'Portada' },
        { id: 1025, label: 'Reel' },
        { id: 1033, label: 'Story' },
        { id: 1043, label: 'Post' },
        { id: 1059, label: 'Video' },
        { id: 1071, label: 'Clip' },
        { id: 1080, label: 'Live' },
        { id: 1084, label: 'Foto' },
        { id: 1074, label: 'Mix' },
    ];

    const handleError = (idx: number) => {
        setImgErrors(prev => ({ ...prev, [idx]: true }));
    };

    const getGradient = (idx: number) => {
        const gradients = [
            'from-electric-cyan/40 to-noir',
            'from-hot-pink/40 to-noir',
            'from-purple-500/40 to-noir',
            'from-amber-400/40 to-noir',
            'from-emerald-400/40 to-noir',
            'from-blue-400/40 to-noir',
            'from-rose-400/40 to-noir',
            'from-teal-400/40 to-noir',
            'from-indigo-400/40 to-noir',
        ];
        return gradients[idx % gradients.length];
    };

    return (
        <div ref={container} className="group relative bg-[#141414] border border-charcoal/50 hover:border-electric-cyan/50 rounded-4xl p-1 overflow-hidden transition-colors duration-500">

            <div className="bg-[#1A1A1A] rounded-[1.8rem] h-full p-8 flex flex-col relative overflow-hidden">
                <div className="mb-6 relative z-10 flex justify-between items-start">
                    <div>
                        <h3 className="font-bebas text-3xl text-paper tracking-wide mb-1">Tus Redes Sociales</h3>
                        <p className="font-jakarta text-sm text-paper/60">Creamos y publicamos por ti</p>
                    </div>
                    <div className="flex items-center gap-2 text-electric-cyan text-xs font-jetbrains font-bold uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan animate-ping"></span>
                        En marcha...
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 w-full bg-noir border border-charcoal rounded-xl p-4 flex flex-col shadow-2xl relative">

                    {/* Top Bar (Followers) */}
                    <div className="flex justify-between items-center mb-4 px-2">
                        <div className="flex gap-4">
                            <div className="text-center">
                                <div className="text-xs text-paper/50 font-jetbrains">POSTS</div>
                                <div className="text-lg font-bebas text-paper">124</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xs text-paper/50 font-jetbrains">AUDIENCIA</div>
                                <div className="text-lg font-bebas text-electric-cyan">
                                    <CountUp end={12850} duration={8} separator="." enableScrollSpy scrollSpyOnce />
                                </div>
                            </div>
                        </div>
                        <div className="bg-charcoal px-3 py-1 rounded border border-charcoal/50 text-xs font-jakarta">Siguiendo</div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-3 gap-1 flex-1 content-start">
                        {feedImages.map((img, i) => (
                            <div key={i} className="feed-item aspect-square relative overflow-hidden group/item rounded-sm">
                                {!imgErrors[i] ? (
                                    <img
                                        src={`https://picsum.photos/id/${img.id}/400/400`}
                                        alt={img.label}
                                        className="w-full h-full object-cover opacity-70 group-hover/item:opacity-100 transition-opacity"
                                        onError={() => handleError(i)}
                                        loading="lazy"
                                    />
                                ) : (
                                    // Fallback gradient if image fails to load
                                    <div className={`w-full h-full bg-linear-to-br ${getGradient(i)} flex items-center justify-center`}>
                                        <span className="text-white/40 text-xs font-jetbrains">{img.label}</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-hot-pink/20 opacity-0 group-hover/item:opacity-100 flex items-center justify-center gap-2 transition-opacity mix-blend-screen">
                                    <Heart size={14} className="text-white" fill="white" />
                                    <MessageCircle size={14} className="text-white" fill="white" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

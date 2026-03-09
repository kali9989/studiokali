import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const projects = [
  { 
    id: 1, 
    title: 'Ecosistema "Kali"', 
    client: 'Studio Kali Internal', 
    type: 'Branding & UI',
    image: '/work_mockup_1_1772218215247.png'
  },
  { 
    id: 2, 
    title: 'Marca "RadioKalifa"', 
    client: 'Personal Project', 
    type: 'Identity',
    image: '/work_mockup_2_1772218227485.png'
  },
  { 
    id: 3, 
    title: 'Vanguardia Digital', 
    client: 'Creative Lab', 
    type: 'Web Design',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2000&auto=format&fit=crop'
  },
];

const Work = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo('.work-card',
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            }
        );

        // 3D Tilt Effect
        const cards = document.querySelectorAll('.work-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e: Event) => {
                const mouseEvent = e as MouseEvent;
                const rect = (card as HTMLElement).getBoundingClientRect();
                const x = mouseEvent.clientX - rect.left;
                const y = mouseEvent.clientY - rect.top;
                const xc = rect.width / 2;
                const yc = rect.height / 2;
                const dx = x - xc;
                const dy = y - yc;
                gsap.to(card, {
                    rotationY: dx / 10,
                    rotationX: -dy / 10,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotationY: 0,
                    rotationX: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-20 md:py-24 px-6 md:px-12 bg-noir relative overflow-hidden">
            {/* Background elements to blend with grid */}
            <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent to-noir/90 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center">
                <div className="mb-20 text-center w-full">
                    <h2 className="text-5xl md:text-8xl font-bebas text-white mb-4 uppercase tracking-tight" style={{ textShadow: '0 0 15px rgba(255,45,120,0.3)' }}>
                        El Muro de <span className="text-electric-cyan" style={{ textShadow: '0 0 20px rgba(0,229,255,0.6)' }}>Autoridad</span>
                    </h2>
                    <p className="font-jakarta text-paper/70 text-xl max-w-xl mx-auto">
                        No hacemos webs simples. Creamos presencias digitales que exigen respeto.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                    {projects.map((project) => (
                        <div key={project.id} className="work-card border border-hot-pink/20 p-5 rounded-4xl bg-noir/50 backdrop-blur-sm shadow-[0_0_15px_rgba(255,45,120,0.05)] hover:border-hot-pink hover:shadow-[0_0_30px_rgba(255,45,120,0.4)] transition-all duration-700 group cursor-pointer perspective-1000 relative">
                            {/* Inner Glow Border Simulator */}
                            <div className="absolute inset-0 rounded-4xl border border-electric-cyan/0 group-hover:border-electric-cyan/50 transition-colors duration-700 pointer-events-none scale-[0.98]"></div>

                            <div className="relative h-72 mb-6 rounded-2xl overflow-hidden shadow-xl border border-white/5">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    loading="lazy"
                                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-b from-transparent to-noir/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                    <span className="text-electric-cyan font-bebas text-xl tracking-widest drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">VER DETALLES →</span>
                                </div>
                            </div>
                            <h3 className="text-3xl font-bebas text-white mb-2 tracking-wide group-hover:text-hot-pink transition-colors mix-blend-screen">{project.title}</h3>
                            <div className="flex justify-between items-center text-sm font-jakarta">
                                <span className="text-white/50">{project.client}</span>
                                <span className="text-electric-cyan uppercase tracking-widest text-[0.6rem] font-bold px-3 py-1 bg-electric-cyan/10 rounded-full border border-electric-cyan/30 shadow-[0_0_10px_rgba(0,229,255,0.2)]">{project.type}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;

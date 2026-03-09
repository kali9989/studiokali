export default function Pricing() {
    return (
        <section id="precios" className="py-32 px-8 md:px-16 w-full relative bg-paper z-10 overflow-hidden">

            {/* Halftone for light bg */}
            <div className="absolute inset-0 pointer-events-none opacity-5" style={{
                backgroundImage: 'radial-gradient(circle at center, #1A1A1A 1px, transparent 1px)',
                backgroundSize: '6px 6px'
            }}></div>

            <div className="max-w-6xl mx-auto relative z-10">

                <div className="mb-20 text-center">
                    <h2 className="font-bebas text-5xl md:text-7xl text-noir mb-4 uppercase inline-block">
                        Nuestros <span className="text-hot-pink">Precios</span>
                    </h2>
                    <p className="font-cormorant italic text-2xl text-charcoal/80 max-w-2xl mx-auto">
                        Sin sorpresas. Sin letra pequeña. Lo que ves es lo que pagas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Card 1: Pack Impulso Social */}
                    <div className="border-[3px] border-charcoal bg-charcoal p-8 rounded-[2.5rem] shadow-[6px_6px_0px_#00E5FF] hover:shadow-[12px_12px_0px_#00E5FF] transform transition-all hover:-translate-y-2 relative flex flex-col justify-between group duration-300">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-electric-cyan/10 border border-electric-cyan/20 flex items-center justify-center mb-4">
                                <span className="text-electric-cyan text-xl">🎬</span>
                            </div>
                            <h3 className="font-bebas text-4xl text-paper mb-2 group-hover:text-electric-cyan transition-colors duration-300">Pack Impulso Social</h3>
                            <p className="font-jakarta text-paper/80 font-medium mb-4">4 Reels editados y listos para publicar. No gestionamos, solo entregamos impacto visual directo a tu audiencia.</p>
                            <ul className="space-y-1.5 mb-6">
                                <li className="flex items-center gap-2 text-paper/60 text-sm font-jakarta"><span className="text-electric-cyan">✓</span> 4 vídeos editados premium</li>
                                <li className="flex items-center gap-2 text-paper/60 text-sm font-jakarta"><span className="text-electric-cyan">✓</span> Subtítulos animados incluidos</li>
                                <li className="flex items-center gap-2 text-paper/60 text-sm font-jakarta"><span className="text-electric-cyan">✓</span> Entrega en 5 días laborables</li>
                                <li className="flex items-center gap-2 text-paper/40 text-sm font-jakarta"><span className="text-paper/30">✗</span> Sin gestión de cuenta</li>
                            </ul>
                        </div>
                        <div className="relative z-10 mt-4 flex items-end justify-between">
                            <div className="font-jetbrains text-4xl font-bold text-electric-cyan">100€<span className="text-xl text-paper/60 font-normal">/pack</span></div>
                            <span className="text-electric-cyan/60 font-jetbrains text-xs uppercase tracking-widest">Por entrega →</span>
                        </div>
                    </div>

                    {/* Card 2: Identidad Visual Express [FEATURED] */}
                    <div className="border-[3px] border-charcoal bg-electric-cyan p-8 rounded-[2.5rem] shadow-[10px_10px_0px_#1A1A1A] hover:shadow-[15px_15px_0px_#1A1A1A] transform transition-all hover:-translate-y-3 relative flex flex-col justify-between z-10 group">
                        <div>
                            <div className="absolute top-0 right-6 -translate-y-1/2 bg-hot-pink text-white text-xs font-jetbrains px-4 py-1.5 font-bold uppercase tracking-widest transform -rotate-3 shadow-[4px_4px_0px_#1A1A1A] border-2 border-charcoal">
                                ⚡ Más Popular
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-charcoal/10 border border-charcoal/20 flex items-center justify-center mb-4">
                                <span className="text-charcoal text-xl">🎨</span>
                            </div>
                            <h3 className="font-bebas text-5xl text-charcoal mb-2">Identidad Express</h3>
                            <p className="font-jakarta text-charcoal/90 font-bold mb-4">Logo + Tipografía + Paletas de color. Lo justo y necesario para empezar a dominar el mercado hoy mismo.</p>
                            <ul className="space-y-1.5 mb-6">
                                <li className="flex items-center gap-2 text-charcoal/80 text-sm font-jakarta"><span className="text-charcoal font-bold">✓</span> Logotipo profesional</li>
                                <li className="flex items-center gap-2 text-charcoal/80 text-sm font-jakarta"><span className="text-charcoal font-bold">✓</span> Paleta de colores + tipografías</li>
                                <li className="flex items-center gap-2 text-charcoal/80 text-sm font-jakarta"><span className="text-charcoal font-bold">✓</span> Manual de marca básico</li>
                                <li className="flex items-center gap-2 text-charcoal/80 text-sm font-jakarta"><span className="text-charcoal font-bold">✓</span> Entrega en 48-72h</li>
                            </ul>
                        </div>
                        <div className="relative z-10 mt-4 flex items-end justify-between">
                            <div className="font-jetbrains text-5xl font-black text-charcoal">180€</div>
                            <span className="text-charcoal/60 font-jetbrains text-xs uppercase tracking-widest">Precio fijo →</span>
                        </div>
                    </div>

                    {/* Card 3: Tu Página Web */}
                    <div className="border-[3px] border-charcoal flex flex-col justify-between p-8 rounded-[2.5rem] bg-charcoal shadow-[6px_6px_0px_#FF2D78] hover:shadow-[12px_12px_0px_#FF2D78] transform transition-all hover:-translate-y-2 relative group duration-300">
                        <div>
                            <div className="absolute top-0 right-6 -translate-y-1/2 bg-electric-cyan text-noir text-xs font-jetbrains px-4 py-1.5 font-bold uppercase tracking-widest transform rotate-3 shadow-[4px_4px_0px_#1A1A1A] border-2 border-charcoal">
                                Autoridad Total
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-hot-pink/10 border border-hot-pink/20 flex items-center justify-center mb-4">
                                <span className="text-hot-pink text-xl">🌐</span>
                            </div>
                            <h3 className="font-bebas text-4xl text-paper mb-2 group-hover:text-hot-pink transition-colors duration-300">Tu Página Web</h3>
                            <p className="font-jakarta text-paper/80 font-medium mb-4">Máxima autoridad corporativa. Diseño y desarrollo a medida para destacar desde el primer segundo.</p>
                            <ul className="space-y-1.5 mb-4">
                                <li className="flex items-center gap-2 text-paper/60 text-sm font-jakarta"><span className="text-hot-pink">✓</span> Hasta 3 secciones personalizadas</li>
                                <li className="flex items-center gap-2 text-paper/60 text-sm font-jakarta"><span className="text-hot-pink">✓</span> 1 ronda de revisión de diseño</li>
                                <li className="flex items-center gap-2 text-paper/60 text-sm font-jakarta"><span className="text-hot-pink">✓</span> Optimización móvil incluida</li>
                                <li className="flex items-center gap-2 text-paper/40 text-sm font-jakarta"><span className="text-paper/30">*</span> Assets aportados por cliente</li>
                            </ul>
                            <p className="text-hot-pink/80 text-xs font-jakarta">*+100€ si realizamos el copy/fotografías</p>
                        </div>
                        <div className="relative z-10 mt-4 flex items-end justify-between">
                            <div className="font-jetbrains text-4xl font-bold text-hot-pink">250€ - 350€</div>
                            <span className="text-hot-pink/60 font-jetbrains text-xs uppercase tracking-widest">Proyecto →</span>
                        </div>
                    </div>

                    {/* Card 4: Gestión de Redes — Precio a Consultar */}
                    <div className="border-[3px] border-dashed border-charcoal/60 flex flex-col justify-between p-8 rounded-[2.5rem] bg-linear-to-br from-[#1A1A1A] to-noir shadow-[6px_6px_0px_#8B5CF6] hover:shadow-[12px_12px_0px_#8B5CF6] transform transition-all hover:-translate-y-2 relative group duration-300">
                        {/* Animated border glow */}
                        <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        <div>
                            <div className="absolute top-0 right-6 -translate-y-1/2 bg-[#8B5CF6] text-white text-xs font-jetbrains px-4 py-1.5 font-bold uppercase tracking-widest transform -rotate-2 shadow-[4px_4px_0px_#1A1A1A] border-2 border-charcoal">
                                A Medida
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                                <span className="text-purple-400 text-xl">📱</span>
                            </div>
                            <h3 className="font-bebas text-4xl text-paper mb-2 group-hover:text-purple-400 transition-colors duration-300">Gestión de Redes</h3>
                            <p className="font-jakarta text-paper/80 font-medium mb-4">Nos encargamos de todo: contenido, publicación, comunidad y estrategia. Tú solo apareces en cámara.</p>
                            <ul className="space-y-1.5 mb-6">
                                <li className="flex items-center gap-2 text-paper/60 text-sm font-jakarta"><span className="text-purple-400">✓</span> Estrategia de contenido mensual</li>
                                <li className="flex items-center gap-2 text-paper/60 text-sm font-jakarta"><span className="text-purple-400">✓</span> Publicación y programación</li>
                                <li className="flex items-center gap-2 text-paper/60 text-sm font-jakarta"><span className="text-purple-400">✓</span> Gestión de comunidad</li>
                                <li className="flex items-center gap-2 text-paper/60 text-sm font-jakarta"><span className="text-purple-400">✓</span> Informes mensuales de resultados</li>
                            </ul>
                        </div>
                        <div className="relative z-10 mt-4 flex items-end justify-between">
                            <div>
                                <div className="font-jetbrains text-3xl font-bold text-purple-400">Precio a Consultar</div>
                                <p className="text-paper/40 text-xs font-jakarta mt-1">Varía según plataformas y volumen</p>
                            </div>
                            <a
                                href="#contacto"
                                className="bg-purple-500 hover:bg-purple-400 text-white font-jetbrains text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.4)] hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"
                            >
                                Consultar →
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

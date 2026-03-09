import { useState, useRef } from 'react';
import gsap from 'gsap';
import { X, Send } from 'lucide-react';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        gsap.to(overlayRef.current, { opacity: 1, duration: 0.4 });
        gsap.fromTo(modalRef.current, 
          { y: 100, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }
        );
      }, 10);
    } else {
      gsap.to(modalRef.current, { y: 50, opacity: 0, scale: 0.9, duration: 0.4 });
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.4, onComplete: () => setIsOpen(false) });
    }
  };

  return (
    <>
            {/* Floating Magnetic Button */}
            <button
                onClick={toggleModal}
                className="fixed bottom-10 right-10 z-100 w-20 h-20 rounded-full bg-noir border border-hot-pink text-white flex items-center justify-center shadow-[0_0_30px_rgba(255,45,120,0.5)] group hover:scale-110 active:scale-95 transition-all duration-300 interactive backdrop-blur-md hover:bg-hot-pink"
            >
                <span className="font-bebas text-lg tracking-tighter group-hover:text-noir transition-colors">HOLA</span>
                <div className="absolute inset-0 rounded-full border border-hot-pink animate-ping opacity-20"></div>
                <div className="absolute inset-[-10px] rounded-full bg-hot-pink/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            {/* Modal Overlay */}
            {isOpen && (
                <div
                    ref={overlayRef}
                    className="fixed inset-0 z-200 bg-noir/90 backdrop-blur-xl flex items-center justify-center p-6 opacity-0"
                >
                    <div
                        ref={modalRef}
                        className="w-full max-w-xl bg-noir border border-electric-cyan/30 rounded-[2.5rem] p-10 relative overflow-hidden shadow-[0_0_50px_rgba(0,229,255,0.15)] group hover:shadow-[0_0_70px_rgba(0,229,255,0.25)] transition-shadow duration-700"
                    >
                        {/* Background Glows */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-hot-pink/10 blur-[80px] rounded-full pointer-events-none"></div>
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-electric-cyan/10 blur-[80px] rounded-full pointer-events-none"></div>
                        <div className="absolute inset-0 bg-linear-to-b from-transparent to-electric-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        <button
                            onClick={toggleModal}
                            className="absolute top-8 right-8 text-electric-cyan/40 hover:text-electric-cyan transition-colors interactive drop-shadow-[0_0_5px_rgba(0,229,255,0.8)]"
                        >
                            <X size={24} />
                        </button>

                        <h2 className="font-bebas text-5xl text-paper mb-2 uppercase drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">Cuéntanos tu <span className="text-hot-pink" style={{ textShadow: '0 0 15px rgba(255,45,120,0.6)' }}>Plan</span></h2>
                        <p className="font-jakarta text-paper/60 mb-10 text-lg">¿Qué tienes en mente? Transmutemos esa idea en algo real y dominante.</p>

                        <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2 group/input">
                                <label className="font-jetbrains text-xs uppercase tracking-widest text-electric-cyan drop-shadow-[0_0_3px_rgba(0,229,255,0.5)]">Tu Nombre</label>
                                <input type="text" className="w-full bg-noir/50 border border-white/5 rounded-2xl p-4 text-paper focus:border-electric-cyan focus:shadow-[0_0_15px_rgba(0,229,255,0.3)] outline-none transition-all duration-300" placeholder="Cristian / Studio..." />
                            </div>
                            <div className="space-y-2 group/input">
                                <label className="font-jetbrains text-xs uppercase tracking-widest text-electric-cyan drop-shadow-[0_0_3px_rgba(0,229,255,0.5)]">Tu Email</label>
                                <input type="email" className="w-full bg-noir/50 border border-white/5 rounded-2xl p-4 text-paper focus:border-electric-cyan focus:shadow-[0_0_15px_rgba(0,229,255,0.3)] outline-none transition-all duration-300" placeholder="hola@ejemplo.com" />
                            </div>
                            <div className="space-y-2 group/input">
                                <label className="font-jetbrains text-xs uppercase tracking-widest text-electric-cyan drop-shadow-[0_0_3px_rgba(0,229,255,0.5)]">El Proyecto</label>
                                <textarea rows={4} className="w-full bg-noir/50 border border-white/5 rounded-2xl p-4 text-paper focus:border-electric-cyan focus:shadow-[0_0_15px_rgba(0,229,255,0.3)] outline-none transition-all duration-300 resize-none" placeholder="Tengo una idea para..."></textarea>
                            </div>

                            <button className="w-full py-5 border border-hot-pink bg-hot-pink/10 text-hot-pink font-bebas text-2xl tracking-widest rounded-2xl hover:bg-hot-pink hover:text-white hover:shadow-[0_0_30px_rgba(255,45,120,0.6)] transition-all flex items-center justify-center gap-3 interactive group/btn shadow-[0_0_15px_rgba(255,45,120,0.2)] mt-8">
                                INICIAR CONEXIÓN
                                <Send size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform drop-shadow-[0_0_5px_currentColor]" />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactForm;

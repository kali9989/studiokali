import { useState, useRef } from 'react';
import gsap from 'gsap';
import { X, Send, Terminal, ShieldAlert, Sparkles } from 'lucide-react';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const sessionId = "KALI-ALPHA-99";

  const toggleModal = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        gsap.to(overlayRef.current, { opacity: 1, duration: 0.4 });
        gsap.fromTo(modalRef.current, 
          { y: 100, opacity: 0, scale: 0.9, rotateX: 20 },
          { y: 0, opacity: 1, scale: 1, rotateX: 0, duration: 0.8, ease: 'elastic.out(1, 0.75)' }
        );
      }, 10);
    } else {
      gsap.to(modalRef.current, { y: 100, opacity: 0, scale: 0.9, rotateX: -20, duration: 0.4 });
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.4, onComplete: () => setIsOpen(false) });
    }
  };

  return (
    <>
      {/* Floating Contact Button — Responsive Orbital Design */}
      <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10 z-[100]">
        <button
          onClick={toggleModal}
          aria-label="Abrir formulario de contacto"
          className="relative w-14 h-14 md:w-20 md:h-20 rounded-full btn-glass border-hot-pink/40 group interactive shadow-[0_0_30px_rgba(255,45,120,0.2)] hover:shadow-[0_0_50px_rgba(255,45,120,0.5)] transition-all duration-500"
        >
          {/* Orbital Ring */}
          <div className="absolute -inset-2 md:-inset-3 rounded-full border border-hot-pink/20 animate-[spin_8s_linear_infinite] group-hover:border-hot-pink/50 transition-colors">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-hot-pink shadow-[0_0_10px_rgba(255,45,120,0.8)]" />
          </div>
          
          {/* Inner Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full gap-0.5">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-hot-pink group-hover:text-electric-cyan transition-colors duration-300" />
            <span className="font-bebas text-[9px] md:text-xs font-bold tracking-[0.15em] text-white/90">CONTACTO</span>
          </div>

          {/* Inner glow pulse */}
          <div className="absolute inset-0 rounded-full bg-hot-pink/5 animate-pulse" />
        </button>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[200] bg-noir/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 opacity-0"
          onClick={(e) => { if (e.target === e.currentTarget) toggleModal(); }}
        >
          {/* CRT Flicker Effect */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

          <div
            ref={modalRef}
            className="w-full max-w-2xl bg-charcoal/80 backdrop-blur-xl border border-hot-pink/30 relative overflow-hidden shadow-[0_0_80px_rgba(255,45,120,0.15)] rounded-2xl md:rounded-3xl max-h-[90dvh] overflow-y-auto"
          >
            {/* Terminal Header — sticky so it's always visible on scroll */}
            <div className="sticky top-0 z-20 w-full bg-charcoal/95 backdrop-blur border-b border-hot-pink/10 px-4 md:px-6 py-2.5 flex justify-between items-center rounded-t-2xl md:rounded-t-3xl">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-hot-pink" />
                <span className="font-jetbrains text-[9px] md:text-[10px] tracking-widest text-hot-pink/60 uppercase">Kali_Interface_v2.0</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60 hover:bg-red-500 transition-colors cursor-pointer" onClick={toggleModal} />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
            </div>

            <div className="p-5 sm:p-8 md:p-10">
              <button
                onClick={toggleModal}
                aria-label="Cerrar formulario"
                className="absolute top-12 right-4 md:right-8 text-hot-pink/30 hover:text-hot-pink hover:rotate-90 transition-all duration-300 z-20"
              >
                <X size={20} />
              </button>

              <div className="relative z-10 mt-2">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldAlert className="text-hot-pink animate-pulse shrink-0" size={28} />
                  <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
                    AREA <span className="text-hot-pink italic">CONTACTO</span>
                  </h2>
                </div>
                
                <p className="font-jetbrains text-xs sm:text-sm text-paper/40 mb-6 sm:mb-8 max-w-md border-l-2 border-hot-pink/30 pl-3">
                  [SISTEMA]: Cuéntanos tu proyecto. Recibirás una respuesta profesional en menos de 24 horas.
                </p>

                <form 
                  action="https://formspree.io/f/xyknkvkk" 
                  method="POST"
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                >
                  <input type="hidden" name="_subject" value="Nuevo Mensaje de Studio Kali" />
                  <div className="space-y-2">
                    <label className="font-jetbrains text-[10px] uppercase tracking-wider text-electric-cyan/60">TU_NOMBRE</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-noir/50 border border-white/10 rounded-xl p-3 md:p-4 text-paper focus:border-hot-pink/50 focus:bg-noir/80 outline-none transition-all placeholder:text-paper/15 font-jetbrains text-sm"
                      placeholder="NOMBRE COMPLETO"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-jetbrains text-[10px] uppercase tracking-wider text-electric-cyan/60">TU_EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-noir/50 border border-white/10 rounded-xl p-3 md:p-4 text-paper focus:border-hot-pink/50 focus:bg-noir/80 outline-none transition-all placeholder:text-paper/15 font-jetbrains text-sm"
                      placeholder="EMAIL DE CONTACTO"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="font-jetbrains text-[10px] uppercase tracking-wider text-electric-cyan/60">MENSAJE</label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full bg-noir/50 border border-white/10 rounded-xl p-3 md:p-5 text-paper focus:border-hot-pink/50 focus:bg-noir/80 outline-none transition-all resize-none placeholder:text-paper/15 font-jetbrains text-sm"
                      placeholder="¿EN QUÉ PODEMOS AYUDARTE?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="md:col-span-2 btn-glass btn-neon-border group/btn rounded-2xl py-4 md:py-5 font-bebas text-xl md:text-2xl tracking-[0.3em] text-white hover:scale-[1.02] active:scale-95 transition-transform"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      ENVIAR MENSAJE
                      <Send size={18} className="group-hover/btn:translate-x-2 group-hover/btn:-translate-y-1 transition-transform" />
                    </span>
                  </button>
                </form>
              </div>

              {/* Background data */}
              <div className="absolute bottom-3 right-3 opacity-10 font-jetbrains text-[8px] leading-tight select-none">
                TRNSM_ID: {sessionId}<br />
                STTUS: ACTIVO<br />
                LOC: 40.4168° N, 3.7038° W
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;

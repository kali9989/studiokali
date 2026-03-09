import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { X, Send, Cpu, Terminal, ShieldAlert } from 'lucide-react';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [glitchText, setGlitchText] = useState('HOLA');
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // ID de sesión estático para evitar impurezas en el render, pero con estética tech
  const sessionId = "KALI-ALPHA-99";

  // Efecto de texto glitch para el botón
  useEffect(() => {
    const texts = ['HOLA', 'ACCESS', 'LINK', 'KALI', 'VOID'];
    let interval: ReturnType<typeof setInterval>;
    
    if (!isOpen) {
      interval = setInterval(() => {
        if (Math.random() > 0.8) {
          const randomText = texts[Math.floor(Math.random() * texts.length)];
          setGlitchText(randomText);
          setTimeout(() => setGlitchText('HOLA'), 100);
        }
      }, 2000);
    }
    
    return () => clearInterval(interval);
  }, [isOpen]);

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
      {/* Divine Interface Button */}
      <div className="fixed bottom-10 right-10 z-100">
        <button
          onClick={toggleModal}
          className="relative w-24 h-24 bg-noir border-2 border-hot-pink overflow-hidden group interactive shadow-[0_0_40px_rgba(255,45,120,0.3)] hover:shadow-[0_0_60px_rgba(255,45,120,0.6)] transition-all duration-500 clip-path-polygon"
          style={{ clipPath: 'polygon(20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 20%)' }}
        >
          {/* Scanning Line */}
          <div className="animate-scanning opacity-30"></div>
          
          {/* Background Grid */}
          <div className="absolute inset-0 hexagon-bg opacity-20 group-hover:opacity-40 transition-opacity"></div>
          
          {/* Inner Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full gap-1">
            <Cpu className="w-6 h-6 text-hot-pink group-hover:text-electric-cyan transition-colors" />
            <span className="font-bebas text-2xl font-bold tracking-[0.2em] text-white">CONTACTO</span>
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-hot-pink"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-hot-pink"></div>
          
          {/* Hover Glow */}
          <div className="absolute inset-0 bg-hot-pink/10 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
        </button>

        {/* Decorative Lines around the button */}
        <div className="absolute -inset-4 border border-dashed border-hot-pink/20 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none"></div>
        <div className="absolute -inset-8 border border-dotted border-electric-cyan/10 rounded-full animate-[spin_20s_linear_reverse_infinite] pointer-events-none"></div>
      </div>

      {/* Modal Overlay Elitista */}
      {isOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-200 bg-noir/95 backdrop-blur-2xl flex items-center justify-center p-6 opacity-0"
        >
          {/* CRT Flicker Effect */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

          <div
            ref={modalRef}
            className="w-full max-w-2xl bg-charcoal border-2 border-hot-pink/40 p-12 relative overflow-hidden shadow-[0_0_100px_rgba(255,45,120,0.2)]"
            style={{ clipPath: 'polygon(5% 0%, 100% 0%, 100% 95%, 95% 100%, 0% 100%, 0% 5%)' }}
          >
            {/* Terminal Header */}
            <div className="absolute top-0 left-0 w-full bg-hot-pink/10 border-b border-hot-pink/20 px-6 py-2 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-hot-pink" />
                <span className="font-jetbrains text-[10px] tracking-widest text-hot-pink/70 uppercase">Kali_Neural_Interface_v2.0</span>
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-hot-pink/30"></div>
                <div className="w-2 h-2 rounded-full bg-hot-pink/50"></div>
                <div className="w-2 h-2 rounded-full bg-hot-pink animate-pulse"></div>
              </div>
            </div>

            <button
              onClick={toggleModal}
              className="absolute top-12 right-12 text-hot-pink/40 hover:text-hot-pink hover:rotate-90 transition-all duration-300 z-20"
            >
              <X size={28} />
            </button>

            <div className="relative z-10 mt-6">
              <div className="flex items-center gap-3 mb-6">
                <ShieldAlert className="text-hot-pink animate-pulse" size={40} />
                <h2 className="font-bebas text-6xl text-white tracking-tight">AREA <span className="text-hot-pink italic underline decoration-electric-cyan/50">CONTACTO</span></h2>
              </div>
              
              <p className="font-jetbrains text-sm text-paper/50 mb-12 max-w-md border-l-2 border-hot-pink pl-4">
                [SISTEMA]: Cuéntanos tu proyecto. Recibirás una respuesta profesional en menos de 24 horas.
              </p>

              <form 
                action="https://formspree.io/f/xvgzlowz" 
                method="POST"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <input type="hidden" name="_subject" value="Nuevo Mensaje de Studio Kali" />
                <div className="space-y-3">
                  <label className="font-jetbrains text-[10px] uppercase tracking-tighter text-electric-cyan/70">TU_NOMBRE</label>
                  <input type="text" name="name" required className="w-full bg-noir border-b-2 border-hot-pink/20 p-4 text-paper focus:border-hot-pink outline-none transition-all placeholder:text-paper/10 font-jetbrains text-sm" placeholder="NOMBRE COMPLETO" />
                </div>
                <div className="space-y-3">
                  <label className="font-jetbrains text-[10px] uppercase tracking-tighter text-electric-cyan/70">TU_EMAIL</label>
                  <input type="email" name="email" required className="w-full bg-noir border-b-2 border-hot-pink/20 p-4 text-paper focus:border-hot-pink outline-none transition-all placeholder:text-paper/10 font-jetbrains text-sm" placeholder="EMAIL DE CONTACTO" />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="font-jetbrains text-[10px] uppercase tracking-tighter text-electric-cyan/70">MENSAJE</label>
                  <textarea name="message" rows={4} className="w-full bg-noir border-l-2 border-hot-pink/20 p-6 text-paper focus:border-hot-pink outline-none transition-all resize-none placeholder:text-paper/10 font-jetbrains text-sm" placeholder="¿EN QUÉ PODEMOS AYUDARTE?"></textarea>
                </div>

                <button className="md:col-span-2 group/btn relative overflow-hidden py-6 bg-hot-pink text-white font-bebas text-3xl tracking-[0.3em] transition-all hover:scale-[1.02] active:scale-95 shadow-[0_10px_30px_rgba(255,45,120,0.4)]">
                  <span className="relative z-10 flex items-center justify-center gap-4">
                    CONTACTO
                    <Send size={24} className="group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform" />
                  </span>
                  {/* Button Background Animation */}
                  <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 skew-x-12"></div>
                </button>
              </form>
            </div>

            {/* Background elements */}
            <div className="absolute bottom-4 right-4 opacity-10 font-jetbrains text-[8px] leading-tight select-none">
              TRNSM_ID: {sessionId}<br />
              STTUS: LISTO_PARA_TRANSMUTAR<br />
              LOC: 40.4168° N, 3.7038° W
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;

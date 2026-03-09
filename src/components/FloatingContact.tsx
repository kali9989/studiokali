import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingContact: React.FC = () => {
  const whatsappNumber = "34666666666"; // El usuario deberá cambiarlo si es necesario
  const message = encodeURIComponent("¡Hola Studio Kali! Me gustaría solicitar información sobre vuestros servicios.");
  
  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-4">
      {/* Tooltip opcional que aparece al hacer hover */}
      <div className="group relative">
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-charcoal border border-hot-pink text-paper text-sm font-jetbrains opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          ¿HABLAMOS POR WHATSAPP?
          <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-hot-pink"></div>
        </div>
        
        <a
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-hot-pink hover:bg-electric-cyan text-white rounded-none shadow-[0_0_20px_rgba(255,45,120,0.4)] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300 group active:scale-95"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
};

export default FloatingContact;

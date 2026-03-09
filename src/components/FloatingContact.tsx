import { MessageCircle, Zap } from 'lucide-react';

const FloatingContact = () => {
    const whatsappNumber = "34624123512";
    const message = encodeURIComponent("¡Hola Studio Kali! Vengo desde la interfaz neuronal. Necesito vuestra magia.");

    return (
        <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-10 left-10 z-[60] group flex items-center justify-center interactive"
        >
            {/* Outer Rings */}
            <div className="absolute inset-0 rounded-full border border-electric-cyan animate-ping opacity-20 group-hover:opacity-40"></div>
            <div className="absolute inset-[-8px] rounded-full border border-dotted border-electric-cyan/10 animate-[spin_15s_linear_infinite] group-hover:border-electric-cyan/30 transition-colors"></div>
            
            {/* Main Button */}
            <div className="relative w-16 h-16 bg-noir border-2 border-electric-cyan flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.3)] group-hover:shadow-[0_0_50px_rgba(0,229,255,0.6)] transition-all duration-500 clip-path-polygon"
                 style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%)' }}>
                
                <MessageCircle className="w-8 h-8 text-electric-cyan group-hover:scale-110 transition-transform" />
                
                {/* Data Zap Icon */}
                <Zap className="absolute top-1 right-1 w-3 h-3 text-electric-cyan animate-pulse" />
                
                {/* Scan Overlay */}
                <div className="absolute inset-x-0 h-[1px] bg-electric-cyan animate-scanning opacity-20"></div>
            </div>

            {/* Premium Label */}
            <div className="absolute left-20 bg-charcoal border border-electric-cyan/30 px-4 py-1 rounded-none opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
                <span className="font-jetbrains text-[10px] text-electric-cyan tracking-widest uppercase">[LINK_DATA_NEURAL]</span>
            </div>
        </a>
    );
};

export default FloatingContact;

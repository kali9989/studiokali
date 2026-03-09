import { MessageCircle, Zap } from 'lucide-react';

const FloatingContact = () => {
    const whatsappNumber = "34624123512";
    const message = encodeURIComponent("¡Hola Studio Kali! Me interesa vuestro trabajo. ¿Podemos hablar?");

    return (
        <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-10 left-10 z-[60] group flex items-center justify-center interactive"
        >
            {/* Heartbeat Pulse Ring */}
            <div className="absolute inset-0 rounded-full border border-electric-cyan/30 animate-ping opacity-20 group-hover:opacity-40" />
            <div className="absolute -inset-3 rounded-full border border-dotted border-electric-cyan/10 animate-[spin_20s_linear_infinite] group-hover:border-electric-cyan/30 transition-colors">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-electric-cyan shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
            </div>
            
            {/* Main Button */}
            <div className="relative w-16 h-16 rounded-full btn-glass border-electric-cyan/30 flex items-center justify-center shadow-[0_0_25px_rgba(0,229,255,0.2)] group-hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] transition-all duration-500">
                
                <MessageCircle className="w-7 h-7 text-electric-cyan group-hover:scale-110 transition-transform" />
                
                {/* Data Zap Icon */}
                <Zap className="absolute top-1.5 right-1.5 w-3 h-3 text-electric-cyan animate-pulse" />
            </div>

            {/* Premium Label */}
            <div className="absolute left-20 bg-charcoal/80 backdrop-blur-md border border-electric-cyan/20 px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
                <span className="font-jetbrains text-[10px] text-electric-cyan tracking-widest uppercase">Hablemos por WhatsApp</span>
            </div>
        </a>
    );
};

export default FloatingContact;

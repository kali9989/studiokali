import LivePreviewCard from './services/LivePreviewCard';
import FeedBuilderCard from './services/FeedBuilderCard';
import IdentityRevealCard from './services/IdentityRevealCard';
import ProtocolSchedulerCard from './services/ProtocolSchedulerCard';

export default function Services() {
    return (
        <section id="servicios" className="py-20 md:py-24 px-8 md:px-16 w-full relative bg-noir z-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="font-bebas text-5xl md:text-7xl text-paper mb-4 uppercase">
                        Lo Que <span className="text-electric-cyan">Hacemos</span>
                    </h2>
                    <p className="font-jakarta text-xl text-paper/70 max-w-2xl">
                        Todo lo que necesitas para que tu negocio se vea profesional en internet: tu web, tus redes y tu imagen de marca.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <LivePreviewCard />
                    <FeedBuilderCard />
                    <IdentityRevealCard />
                    <ProtocolSchedulerCard />
                </div>
            </div>
        </section>
    );
}

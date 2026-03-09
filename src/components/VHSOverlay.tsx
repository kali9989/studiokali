import { useState, useEffect } from 'react';

export default function VHSOverlay() {
    const [time, setTime] = useState('');
    const [showTracking, setShowTracking] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const h = String(now.getHours()).padStart(2, '0');
            const m = String(now.getMinutes()).padStart(2, '0');
            const s = String(now.getSeconds()).padStart(2, '0');
            setTime(`${h}:${m}:${s}`);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Random VHS tracking glitch
    useEffect(() => {
        const triggerTracking = () => {
            setShowTracking(true);
            setTimeout(() => setShowTracking(false), 300 + Math.random() * 400);
        };
        const interval = setInterval(triggerTracking, 6000 + Math.random() * 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9000]" aria-hidden="true">
            {/* Scanlines */}
            <div className="vhs-scanlines" />

            {/* Noise Grain */}
            <div className="vhs-noise" />

            {/* Tracking Glitch Band */}
            {showTracking && (
                <div className="vhs-tracking-band" />
            )}

            {/* VHS Timestamp */}
            <div className="fixed top-6 left-6 z-[9001] flex items-center gap-3 pointer-events-none select-none">
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                    <span className="font-jetbrains text-[10px] text-red-500/80 uppercase tracking-[0.3em] font-bold">REC</span>
                </div>
                <span className="font-jetbrains text-[11px] text-white/40 tracking-widest tabular-nums">
                    {time}
                </span>
            </div>

            {/* Bottom-right VHS badge */}
            <div className="fixed bottom-6 left-6 z-[9001] pointer-events-none select-none">
                <span className="font-jetbrains text-[9px] text-white/20 tracking-[0.4em] uppercase">
                    PLAY ▶ SP
                </span>
            </div>
        </div>
    );
}

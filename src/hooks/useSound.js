
import { useState, useEffect, useCallback } from 'react';

// Simple beep synth (no external files needed)
const useSound = () => {
    const [audioContext, setAudioContext] = useState(null);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        // Initialize AudioContext on user interaction to comply with browser policy
        const initAudio = () => {
            if (!audioContext) {
                const ctx = new (window.AudioContext || window.webkitAudioContext)();
                setAudioContext(ctx);
            }
        };
        window.addEventListener('click', initAudio, { once: true });
        return () => window.removeEventListener('click', initAudio);
    }, [audioContext]);

    const playBeep = useCallback((freq = 800, type = 'sine', duration = 0.05) => {
        if (!audioContext || isMuted) return;

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = type;
        oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);

        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime); // Low volume
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + duration);
    }, [audioContext, isMuted]);

    const playHover = () => playBeep(400, 'triangle', 0.03);
    const playClick = () => playBeep(600, 'square', 0.05);
    const playType = () => playBeep(800, 'sine', 0.02);

    return { playHover, playClick, playType, isMuted, setIsMuted };
};

export default useSound;

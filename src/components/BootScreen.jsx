
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
    "[ OK ] BIOS CHECK COMPLETE",
    "[ OK ] MOUNTING VIRTUAL FILESYSTEM",
    "[ OK ] LOADING KERNEL MODULES...",
    "[ OK ] INITIATING NETWORK INTERFACE (wlan0)",
    "[ OK ] CONNECTED TO SECURE GATEWAY",
    "[ OK ] DECRYPTING USER PROFILE...",
    "[ OK ] STARTING X-SERVER GRAPHICS",
    "[ OK ] LAUNCHING CYBER_DECK_UI...",
];

const BootScreen = ({ onComplete }) => {
    const [lines, setLines] = useState([]);

    useEffect(() => {
        let delay = 0;
        bootLines.forEach((line, index) => {
            delay += Math.random() * 100 + 50; // Much faster: 50-150ms
            setTimeout(() => {
                setLines(prev => [...prev, line]);
                if (index === bootLines.length - 1) {
                    setTimeout(onComplete, 500); // Quick finish
                }
            }, delay);
        });
    }, [onComplete]);

    return (
        <motion.div
            className="boot-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            style={{
                position: 'fixed',
                top: 0, left: 0, width: '100%', height: '100vh',
                background: '#000',
                color: '#ff0033',
                fontFamily: "'JetBrains Mono', monospace",
                zIndex: 99999,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start', // Align to top
                alignItems: 'flex-start',    // Align to left
                overflow: 'hidden',
                padding: '40px'
            }}
        >
            <div className="boot-text-container" style={{ width: '100%', maxWidth: '600px', textAlign: 'left', fontSize: '13px', lineHeight: '1.4' }}>
                {lines.map((line, i) => (
                    <div key={i} style={{ marginBottom: '2px' }}>
                        {line}
                    </div>
                ))}
                <div className="cursor-blink" style={{ display: 'inline-block', width: '8px', height: '14px', background: '#ff0033', marginLeft: '5px' }}></div>
            </div>

            {/* Background noise/scanlines */}
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                backgroundSize: '100% 2px, 3px 100%',
                pointerEvents: 'none'
            }}></div>
        </motion.div>
    );
};

export default BootScreen;


import React from 'react';

const NoiseOverlay = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9999,
            pointerEvents: 'none', // Crucial: lets clicks pass through
            opacity: 0.04, // Very subtle noise
            background: 'url("https://grainy-gradients.vercel.app/noise.svg")',
            backgroundSize: '200px',
        }} />
    );
};

export default NoiseOverlay;


import React from 'react';
import asciiProfile from '../assets/ascii-profile.png';

const AsciiPortrait = () => {
    return (
        <div style={{ width: '100%', height: '100%', overflow: 'hidden', background: '#000', borderRadius: 'inherit' }}>
            <img
                src={asciiProfile}
                alt="ASCII Portrait"
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    imageRendering: 'pixelated' // Keep it sharp
                }}
            />
        </div>
    );
};

export default AsciiPortrait;

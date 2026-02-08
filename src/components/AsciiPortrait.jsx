
import React from 'react';

const AsciiPortrait = () => {
    return (
        <div style={{ width: '100%', height: '100%', overflow: 'hidden', background: '#000', borderRadius: 'inherit' }}>
            <img
                src="/ascii-profile.png"
                alt="ASCII Portrait"
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    imageRendering: 'pixelated'
                }}
            />
        </div>
    );
};

export default AsciiPortrait;

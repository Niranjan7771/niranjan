
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GridFloor = () => {
    const gridRef = useRef();

    // Create a large grid
    const size = 100;
    const divisions = 50;

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const scrollY = window.scrollY;

        // Perspective shift based on scroll
        gridRef.current.rotation.x = Math.PI / 2.2 + (scrollY * 0.0005);
        gridRef.current.position.z = (t * 2) % 2;
    });

    return (
        <gridHelper
            ref={gridRef}
            args={[size, divisions, '#ff0033', '#33000b']}
            rotation={[Math.PI / 2.2, 0, 0]}
            position={[0, -2, 0]}
        />
    );
};

const FloatingBits = () => {
    const pointsRef = useRef();

    const count = 500;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 50;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
        }
        return pos;
    }, []);

    useFrame((state) => {
        pointsRef.current.rotation.y += 0.001;
        pointsRef.current.rotation.x += 0.0005;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.05} color="#ff0033" transparent opacity={0.4} />
        </points>
    );
};

const TacticalBackground3D = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            pointerEvents: 'none',
            background: '#000'
        }}>
            <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
                <fog attach="fog" args={['#000', 5, 25]} />
                <ambientLight intensity={0.5} />
                <GridFloor />
                <FloatingBits />
            </Canvas>
        </div>
    );
};

export default TacticalBackground3D;


import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const GlobePoints = (props) => {
    const ref = useRef();

    // Generate random points in a sphere (simpler, dependency-free)
    const sphere = useMemo(() => {
        const positions = new Float32Array(7000 * 3); // More points
        const radius = 1.5;
        for (let i = 0; i < 7000; i++) {
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }
        return positions;
    }, []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ff0033"
                    size={0.012} // Increased visibility
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={1.0} // Full opacity
                />
            </Points>
        </group>
    );
};

const ThreatMapGlobe = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', minHeight: '600px', zIndex: 0, opacity: 0.5, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 3.5] }}>
                <GlobePoints />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2.0} />
            </Canvas>
        </div>
    );
};

export default ThreatMapGlobe;

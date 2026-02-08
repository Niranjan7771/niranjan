
import React, { useRef, useMemo, useState, useEffect } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import { ABOUT } from '../data';
import * as THREE from 'three';

const SkillsGraph = () => {
    const containerRef = useRef();
    const fgRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 600, height: 500 });

    // Update dimensions on resize
    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight
                });
            }
        };
        updateSize();
        window.addEventListener('resize', updateSize);

        // Auto-rotate the graph
        if (fgRef.current) {
            fgRef.current.controls().autoRotate = true;
            fgRef.current.controls().autoRotateSpeed = 0.5;
        }

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const graphData = useMemo(() => {
        const rawSkills = ABOUT.skills;
        const nodes = rawSkills.map((skill, i) => ({
            id: skill,
            name: skill,
            group: i % 3,
            val: 20
        }));

        // Add a central hub
        nodes.push({ id: 'CORE_SYSTEMS', name: '{ CYBER_CORE }', group: 'hub', val: 40 });

        const links = [];
        rawSkills.forEach(skill => {
            links.push({ source: 'CORE_SYSTEMS', target: skill });
        });

        // Cross-connections
        links.push({ source: 'C / C++', target: 'Data Structures' });
        links.push({ source: 'React', target: 'Node.js' });
        links.push({ source: 'Python', target: 'Node.js' });

        return { nodes, links };
    }, []);

    return (
        <div ref={containerRef} className="skills-graph-container" style={{ width: '100%', height: '500px', border: '1px solid #33000b', background: 'rgba(0, 0, 0, 0.8)', position: 'relative', overflow: 'hidden' }}>
            <ForceGraph3D
                ref={fgRef}
                graphData={graphData}
                width={dimensions.width}
                height={dimensions.height}
                backgroundColor="rgba(0,0,0,0)"
                nodeColor={node => node.group === 'hub' ? '#ff0033' : '#a8b3cf'}
                nodeLabel="name"
                linkColor={() => 'rgba(255, 0, 51, 0.3)'}
                linkWidth={1.5}
                linkDirectionalParticles={2}
                linkDirectionalParticleSpeed={0.005}
                linkDirectionalParticleWidth={2}
                nodeThreeObject={node => {
                    const group = new THREE.Group();

                    // Sphere geometry for nodes
                    const geometry = new THREE.SphereGeometry(node.group === 'hub' ? 4 : 2);
                    const material = new THREE.MeshBasicMaterial({
                        color: node.group === 'hub' ? '#ff0033' : '#a8b3cf',
                        transparent: true,
                        opacity: 0.8
                    });
                    const sphere = new THREE.Mesh(geometry, material);
                    group.add(sphere);

                    // Add text sprite
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    canvas.width = 256;
                    canvas.height = 64;
                    context.font = 'Bold 24px "JetBrains Mono"';
                    context.fillStyle = node.group === 'hub' ? '#ff0033' : '#fff';
                    context.textAlign = 'center';
                    context.fillText(node.name, 128, 32);

                    const texture = new THREE.CanvasTexture(canvas);
                    const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
                    const sprite = new THREE.Sprite(spriteMaterial);
                    sprite.position.set(0, 10, 0);
                    sprite.scale.set(20, 5, 1);
                    group.add(sprite);

                    return group;
                }}
                nodeThreeObjectExtend={false}
            />
            <div className="graph-static-overlay" style={{ position: 'absolute', top: '10px', left: '10px', pointerEvents: 'none', color: '#ff0033', fontSize: '0.7rem', fontFamily: 'JetBrains Mono', zIndex: 10 }}>
                [ 3D_NEURAL_MAPPING_ACTIVE ]
            </div>
        </div>
    );
};

export default SkillsGraph;

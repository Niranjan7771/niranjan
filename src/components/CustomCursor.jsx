
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/CustomCursor.css';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    useEffect(() => {
        const handleMouseEnter = () => setCursorVariant("text");
        const handleMouseLeave = () => setCursorVariant("default");

        const textElements = document.querySelectorAll("h1, h2, h3, p, a, button, .project-card, .skill-tag");

        textElements.forEach(elem => {
            elem.addEventListener("mouseenter", handleMouseEnter);
            elem.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            textElements.forEach(elem => {
                elem.removeEventListener("mouseenter", handleMouseEnter);
                elem.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []); // Re-run if content changes ideally, but empty dependency for now

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: "transparent",
            border: "2px solid var(--accent-color)",
        },
        text: {
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            height: 80,
            width: 80,
            backgroundColor: "rgba(220, 20, 60, 0.1)",
            border: "2px solid var(--accent-color)",
            mixBlendMode: "difference"
        }
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: 1
        },
        text: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: 0
        }
    };

    return (
        <>
            <motion.div
                className="cursor"
                variants={variants}
                animate={cursorVariant}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
            <motion.div
                className="cursor-dot"
                variants={dotVariants}
                animate={cursorVariant}
            />
        </>
    );
};

export default CustomCursor;

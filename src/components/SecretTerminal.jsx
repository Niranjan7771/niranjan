
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SecretTerminal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [history, setHistory] = useState([
        "CONNECTING TO SECURE SERVER...",
        "ACCESS GRANTED.",
        "TYPE 'help' FOR COMMANDS.",
    ]);
    const [input, setInput] = useState('');
    const inputRef = useRef(null);
    const scrollRef = useRef(null);

    // Toggle on ` (Backtick) key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === '`' || e.key === '~') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Focus input when open
    useEffect(() => {
        if (isOpen && inputRef.current) inputRef.current.focus();
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [isOpen, history]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim();
            const newHistory = [...history, `root@niranjan:~# ${cmd}`];

            // Command Logic
            switch (cmd) {
                case 'help':
                    newHistory.push("AVAILABLE COMMANDS:", "  ls       List files", "  whoami   User info", "  clear    Clear screen", "  exit     Close terminal", "  hack     initiate override");
                    break;
                case 'ls':
                    newHistory.push("about_me.txt", "projects/", "contact_info.gpg", "secret_key.pem");
                    break;
                case 'whoami':
                    newHistory.push("VISITOR_ID: " + Math.random().toString(36).substr(2, 9).toUpperCase());
                    break;
                case 'clear':
                    setHistory([]);
                    setInput('');
                    return;
                case 'hack':
                    newHistory.push("INITIATING BRUTE FORCE...", "ACCESS DENIED. NICE TRY.");
                    break;
                case 'exit':
                    setIsOpen(false);
                    setInput('');
                    return;
                default:
                    if (cmd) newHistory.push(`bash: ${cmd}: command not found`);
            }

            setHistory(newHistory);
            setInput('');
        }
    };

    return (
        <>
            {/* Floating Terminal Toggle Button */}
            <motion.button
                className="terminal-toggle-btn"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#000',
                    border: '2px solid #ff0033',
                    color: '#ff0033',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    zIndex: 99998,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(255, 0, 51, 0.3)'
                }}
            >
                &gt;_
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="secret-terminal-window"
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ type: 'spring', damping: 20 }}
                        style={{
                            position: 'fixed',
                            top: 0, left: 0, width: '100%', height: '50vh',
                            background: 'rgba(10, 10, 10, 0.95)',
                            borderBottom: '2px solid #ff0033',
                            zIndex: 99999,
                            padding: '20px',
                            fontFamily: "'JetBrains Mono', monospace",
                            color: '#ff0033',
                            boxShadow: '0 0 50px rgba(255, 0, 51, 0.2)',
                            backdropFilter: 'blur(10px)'
                        }}
                        onClick={() => inputRef.current?.focus()}
                    >
                        <div ref={scrollRef} style={{ height: 'calc(100% - 30px)', overflowY: 'auto' }}>
                            {history.map((line, i) => (
                                <div key={i} style={{ marginBottom: '5px' }}>{line}</div>
                            ))}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '10px', fontWeight: 'bold' }}>root@niranjan:~#</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleCommand}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#fff',
                                    fontFamily: 'inherit',
                                    fontSize: '1rem',
                                    flex: 1,
                                    outline: 'none'
                                }}
                                autoFocus
                            />
                        </div>
                        <div style={{
                            position: 'absolute', top: 10, right: 20,
                            fontSize: '0.8rem', color: '#666'
                        }}>
                            PRESS ` (Grave Accent) TO CLOSE | V1.0.4
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SecretTerminal;

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NetworkSnapshot from './NetworkSnapshot';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px', // Compensate for header, same as Home.jsx
            paddingBottom: '4rem'
        }}>
            {/* Background Image with Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url("/assets/images/background.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 0
            }} />

            {/* Dark Overlay for Readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, rgba(2, 6, 23, 0.5) 0%, rgba(2, 6, 23, 0.3) 50%, rgba(2, 6, 23, 0.7) 100%)',
                zIndex: 1
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '6px 12px',
                            borderRadius: '20px',
                            border: '1px solid rgba(56, 189, 248, 0.3)',
                            background: 'rgba(56, 189, 248, 0.1)',
                            marginBottom: '1.5rem',
                            fontSize: '0.9rem',
                            color: 'var(--color-accent-blue)'
                        }}
                    >
                        <img
                            src="/assets/logos/codex_round_logo.jpeg"
                            alt="CodeX Logo"
                            style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                border: '1px solid rgba(56, 189, 248, 0.3)'
                            }}
                        />
                        <span>The CodeX Protocol (CDX)</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{
                            fontSize: 'clamp(3rem, 6vw, 5rem)',
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            letterSpacing: '-0.02em',
                            background: 'linear-gradient(to right, #ffffff, #94a3b8)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >
                        The Institutional Grade <br />
                        <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-accent-blue)', WebkitTextFillColor: 'initial' }}>Settlement Layer.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            fontSize: '1.25rem',
                            color: 'var(--color-text-secondary)',
                            maxWidth: '600px',
                            marginBottom: '2.5rem',
                            lineHeight: 1.6
                        }}
                    >
                        CodeX is the hybrid blockchain infrastructure enabling banks and institutions to settle tokenized assets with atomic finality and full regulatory compliance.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                    >
                        <button className="btn btn-primary" onClick={() => navigate('/whitepaper')} style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Read Whitepaper
                            <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </button>
                    </motion.div>
                </div>

                {/* Network Snapshot Section - Aligned with existing content standard */}
                <div style={{ marginTop: '4rem' }}>
                    <NetworkSnapshot />
                </div>
            </div>

            {/* Decorative Element / Logo - Matching Home.jsx EXACTLY except maybe different graphic? Using same one for consistency per request */}
            <div style={{
                position: 'absolute',
                top: '50%',
                right: '-10%',
                transform: 'translateY(-50%)',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: 0,
                pointerEvents: 'none'
            }} />
        </section >
    );
};

export default Hero;

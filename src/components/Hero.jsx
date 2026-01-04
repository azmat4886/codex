import { ArrowRight, Globe, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NetworkSnapshot from './NetworkSnapshot';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section style={{
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '60px'
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
                zIndex: -2
            }} />

            {/* Dark Overlay for Readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, rgba(2, 6, 23, 0.5) 0%, rgba(2, 6, 23, 0.3) 50%, rgba(2, 6, 23, 0.7) 100%)',
                zIndex: -1
            }} />


            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 1 }}>
                <div style={{ maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '6px 12px',
                            borderRadius: '20px',
                            border: '1px solid rgba(56, 189, 248, 0.3)',
                            background: 'rgba(56, 189, 248, 0.1)',
                            marginBottom: '1rem',
                            fontSize: '0.85rem',
                            color: 'var(--color-accent-blue)'
                        }}
                    >
                        <span>The CodeX Protocol (CDX)</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{
                            fontSize: 'clamp(3rem, 6vw, 5rem)',
                            lineHeight: 1.1,
                            marginBottom: '1rem',
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
                            marginBottom: '2rem',
                            lineHeight: 1.6
                        }}
                    >
                        CodeX is the hybrid blockchain infrastructure enabling banks and institutions to settle tokenized assets with atomic finality and full regulatory compliance.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ display: 'flex', gap: '1rem' }}
                    >
                        <button className="btn btn-primary" onClick={() => navigate('/whitepaper')} style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Read Whitepaper
                            <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </button>
                    </motion.div>
                </div>

                {/* Network Snapshot Section */}
                <NetworkSnapshot />
            </div>
        </section >
    );
};

export default Hero;

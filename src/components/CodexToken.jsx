import Hero from './Hero';
import Features from './Features';
import Architecture from './Architecture';
import UseCases from './UseCases';
import Whitepaper from './Whitepaper';
import { Cpu, Briefcase, FileText, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const CodexToken = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="codex-token-page">
            <Hero />
            <section style={{ padding: '4rem 0 1rem 0', background: 'var(--color-bg)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
                        Token <span style={{ color: 'var(--color-accent-blue)' }}>Architecture & Resources</span>
                    </h2>
                    <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
                        Explore the technical foundations and real-world applications of the CodeX ecosystem.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>

                        {/* Architecture Card */}
                        <div className="glass-card resource-row" style={{
                            padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center',
                            textDecoration: 'none', transition: 'all 0.3s ease', cursor: 'pointer'
                        }} onClick={() => window.location.href = '/architecture'}>
                            <div style={{
                                width: '64px', height: '64px', borderRadius: '16px', flexShrink: 0,
                                background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.2)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'var(--color-accent-blue)'
                            }}>
                                <Cpu size={32} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                                    Technical Architecture
                                </h3>
                                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                                    Discover the hybrid blockchain structure, settlement compatibility, and consensus power.
                                </p>
                            </div>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '50%',
                                background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'var(--color-text-secondary)'
                            }} className="arrow-icon">
                                <ArrowRight size={20} />
                            </div>
                        </div>

                        {/* Use Cases Card */}
                        <div className="glass-card resource-row" style={{
                            padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center',
                            textDecoration: 'none', transition: 'all 0.3s ease', cursor: 'pointer'
                        }} onClick={() => window.location.href = '/usecases'}>
                            <div style={{
                                width: '64px', height: '64px', borderRadius: '16px', flexShrink: 0,
                                background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#34d399'
                            }}>
                                <Briefcase size={32} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Use Cases</h3>
                                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                                    Real-world applications for institutional settlement, cross-border payments, and tokenization.
                                </p>
                            </div>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '50%',
                                background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'var(--color-text-secondary)'
                            }} className="arrow-icon">
                                <ArrowRight size={20} />
                            </div>
                        </div>

                        {/* Whitepaper Card */}
                        <div className="glass-card resource-row" style={{
                            padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center',
                            textDecoration: 'none', transition: 'all 0.3s ease', cursor: 'pointer'
                        }} onClick={() => window.location.href = '/whitepaper'}>
                            <div style={{
                                width: '64px', height: '64px', borderRadius: '16px', flexShrink: 0,
                                background: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.2)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#fb7185'
                            }}>
                                <FileText size={32} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Whitepaper</h3>
                                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                                    A deep dive into the technical specifications, economic model, and strategic roadmap.
                                </p>
                            </div>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '50%',
                                background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'var(--color-text-secondary)'
                            }} className="arrow-icon">
                                <ArrowRight size={20} />
                            </div>
                        </div>

                    </div>
                    <style>{`
                        .resource-row:hover {
                            transform: translateY(-4px);
                            border-color: rgba(56, 189, 248, 0.3) !important;
                            background: rgba(255, 255, 255, 0.03) !important;
                        }
                        .resource-row:hover .arrow-icon {
                            background: var(--color-accent-blue) !important;
                            color: white !important;
                        }
                        @media (max-width: 768px) {
                            .resource-row {
                                flex-direction: column;
                                text-align: center;
                                gap: 1rem !important;
                                padding: 1.5rem !important;
                            }
                            .resource-row .arrow-icon {
                                display: none;
                            }
                        }
                    `}</style>
                </div>
            </section>

            <div id="features">
                <Features />
            </div>
        </div>
    );
};

export default CodexToken;

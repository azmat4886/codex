import Hero from './Hero';
import Features from './Features';
import Architecture from './Architecture';
import UseCases from './UseCases';
import Whitepaper from './Whitepaper';
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
            <section style={{ padding: '4rem 0', background: 'var(--color-bg)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
                        Token <span style={{ color: 'var(--color-accent-blue)' }}>Architecture & Resources</span>
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                        {/* Architecture Card */}
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Architecture</h3>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                                Explore the hybrid blockchain structure, settlement compatibility, and consensus mechanisms.
                            </p>
                            <a href="/architecture" className="btn btn-secondary" style={{ display: 'inline-block' }}>View Architecture</a>
                        </div>

                        {/* Use Cases Card */}
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Use Cases</h3>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                                Real-world applications for institutional settlement, cross-border payments, and asset tokenization.
                            </p>
                            <a href="/usecases" className="btn btn-secondary" style={{ display: 'inline-block' }}>Explore Use Cases</a>
                        </div>

                        {/* Whitepaper Card */}
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Whitepaper</h3>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                                Deep dive into the technical specifications, economics, and roadmap of the CodeX protocol.
                            </p>
                            <a href="/whitepaper" className="btn btn-secondary" style={{ display: 'inline-block' }}>Read Whitepaper</a>
                        </div>

                    </div>
                </div>
            </section>

            <div id="features">
                <Features />
            </div>
        </div>
    );
};

export default CodexToken;

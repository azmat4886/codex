import { FileText, Code2, BookOpen } from 'lucide-react';

const Resources = () => {
    return (
        <div style={{ paddingTop: '100px', paddingBottom: '4rem', minHeight: '100vh' }}>
            <div className="container">
                <h1 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Developer & Investor Resources</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                            <Code2 size={32} color="var(--color-accent-blue)" />
                            <div style={{ padding: '4px 8px', borderRadius: '4px', background: 'rgba(56, 189, 248, 0.1)', color: 'var(--color-accent-blue)', fontSize: '0.8rem' }}>V 2.0.1</div>
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>API Documentation</h3>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>Complete reference for our REST and WebSocket APIs for minting and redemption.</p>
                        <a href="#" style={{ color: 'var(--color-accent-blue)', fontWeight: 500 }}>View Documentation &rarr;</a>
                    </div>

                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <FileText size={32} color="var(--color-accent-blue)" style={{ marginBottom: '2rem' }} />
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Whitepaper</h3>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>Technical architecture and economic detailed breakdown of the CX Token.</p>
                        <a href="#" style={{ color: 'var(--color-accent-blue)', fontWeight: 500 }}>Download PDF &rarr;</a>
                    </div>

                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <BookOpen size={32} color="var(--color-accent-blue)" style={{ marginBottom: '2rem' }} />
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Knowledge Base</h3>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>Guides, FAQs, and integration tutorials for platform partners.</p>
                        <a href="#" style={{ color: 'var(--color-accent-blue)', fontWeight: 500 }}>Visit Help Center &rarr;</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Resources;

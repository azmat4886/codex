import { Coins, Layers, Globe, ArrowRight } from 'lucide-react';

const Solutions = () => {
    return (
        <div style={{ paddingTop: '100px', paddingBottom: '4rem', minHeight: '100vh' }}>
            <div className="container">
                <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Institutional Solutions</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    <div className="glass-card" style={{ padding: '2.5rem' }}>
                        <Coins size={40} color="var(--color-accent-blue)" style={{ marginBottom: '1.5rem' }} />
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Tokenized Deposits</h2>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
                            Enable 24/7 instant settlement for your bank clients by tokenizing standard commercial bank money.
                        </p>
                        <button className="btn btn-outline" style={{ width: '100%' }}>Learn More <ArrowRight size={16} style={{ marginLeft: '8px' }} /></button>
                    </div>

                    <div className="glass-card" style={{ padding: '2.5rem' }}>
                        <Layers size={40} color="var(--color-accent-blue)" style={{ marginBottom: '1.5rem' }} />
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Asset Management</h2>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
                            Bring real-world assets (real estate, bonds, equities) on-chain with our compliant tokenization engine.
                        </p>
                        <button className="btn btn-outline" style={{ width: '100%' }}>Learn More <ArrowRight size={16} style={{ marginLeft: '8px' }} /></button>
                    </div>

                    <div className="glass-card" style={{ padding: '2.5rem' }}>
                        <Globe size={40} color="var(--color-accent-blue)" style={{ marginBottom: '1.5rem' }} />
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Cross-Border Payments</h2>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
                            Settlement in seconds, not days. Eliminate correspondent banking friction with stablecoin rails.
                        </p>
                        <button className="btn btn-outline" style={{ width: '100%' }}>Learn More <ArrowRight size={16} style={{ marginLeft: '8px' }} /></button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Solutions;

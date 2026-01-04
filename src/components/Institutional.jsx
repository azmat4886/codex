import { ShieldCheck, Building, Lock } from 'lucide-react';

const Institutional = () => {
    return (
        <div style={{ paddingTop: '100px', paddingBottom: '4rem', minHeight: '100vh' }}>
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4rem' }}>
                    <div>
                        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Built for Banks</h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)' }}>The infrastructure for the next generation of capital markets.</p>
                    </div>
                    <Building size={64} strokeWidth={1} color="var(--color-text-secondary)" opacity={0.5} />
                </div>

                <div className="glass-card institutional-card">
                    <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Why CodeX?</h2>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <ShieldCheck color="var(--color-success)" size={24} style={{ flexShrink: 0 }} />
                                <div>
                                    <strong style={{ display: 'block', fontSize: '1.1rem' }}>Regulatory First</strong>
                                    <span style={{ color: 'var(--color-text-secondary)' }}>Our entire stack is built to withstand the scrutiny of global regulators (SEC, MiCA, MAS).</span>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <Lock color="var(--color-accent-blue)" size={24} style={{ flexShrink: 0 }} />
                                <div>
                                    <strong style={{ display: 'block', fontSize: '1.1rem' }}>Permissioned DeFi</strong>
                                    <span style={{ color: 'var(--color-text-secondary)' }}>Access DeFi yields with known counterparties in a whitelisted environment.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="partner-section" style={{ flex: 1, padding: '2rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Partner Network</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', opacity: 0.7 }}>
                            <div style={{ background: '#fff', height: '40px', borderRadius: '4px' }}></div>
                            <div style={{ background: '#fff', height: '40px', borderRadius: '4px' }}></div>
                            <div style={{ background: '#fff', height: '40px', borderRadius: '4px' }}></div>
                            <div style={{ background: '#fff', height: '40px', borderRadius: '4px' }}></div>
                        </div>
                        <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)', textAlign: 'center' }}>Trusted by 50+ Financial Institutions</p>
                    </div>
                </div>
                <style>{`
                    .institutional-card { display: flex; flex-direction: column; gap: 3rem; align-items: center; padding: 1.5rem !important; }
                    .partner-section { width: 100%; }
                    
                    @media (min-width: 768px) {
                        .institutional-card { flex-direction: row; padding: 3rem !important; }
                        .partner-section { width: auto; }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default Institutional;

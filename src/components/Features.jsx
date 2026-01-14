import { ShieldCheck, Scale, BarChart3, LockKeyhole, Banknote, Globe2 } from 'lucide-react';

const features = [
    {
        icon: <BarChart3 size={24} />,
        title: "Verified Reserves",
        description: "CDX tokens are backed 1:1 by audited reserves. Real-time proof of reserves is published on-chain for transparency."
    },
    {
        icon: <Scale size={24} />,
        title: "Regulatory Compliant",
        description: "The protocol is architected to meet MiCA and institutional regulatory requirements out of the box."
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "Secure Infrastructure",
        description: "Audited smart contracts and ISO 27001 certified validator nodes ensure network integrity."
    },
    {
        icon: <LockKeyhole size={24} />,
        title: "Identity Layer",
        description: "Native identity protocol ensures all on-chain participants are verified (KYC/AML) entities."
    },
    {
        icon: <Banknote size={24} />,
        title: "Atomic Settlement",
        description: "Smart contracts enable instant, atomic settlement of tokenized assets against CDX payment tokens."
    },
    {
        icon: <Globe2 size={24} />,
        title: "Interoperable Bridge",
        description: "Secure bridging infrastructure connects private institutional chains with public DeFi liquidity."
    }
];

const Features = () => {
    return (
        <section style={{ padding: '3rem 0 6rem', backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Engineered for Institutions</h2>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        The infrastructure required to bridge the gap between traditional finance and the blockchain.
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass-card feature-row"
                            style={{
                                padding: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{
                                color: 'var(--color-accent-blue)',
                                flexShrink: 0,
                                background: 'rgba(56, 189, 248, 0.1)',
                                border: '1px solid rgba(56, 189, 248, 0.2)',
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {feature.icon}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{feature.title}</h3>
                                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <style>{`
                    .feature-row:hover {
                        transform: translateY(-2px);
                        border-color: rgba(56, 189, 248, 0.3);
                        background: rgba(255, 255, 255, 0.03);
                    }
                    @media (max-width: 768px) {
                        .feature-row {
                            flex-direction: column;
                            text-align: center;
                            gap: 1rem !important;
                            padding: 1.5rem !important;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default Features;

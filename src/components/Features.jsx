import { ShieldCheck, Scale, BarChart3, LockKeyhole, Banknote, Globe2 } from 'lucide-react';

const features = [
    {
        icon: <BarChart3 size={32} />,
        title: "Verified Reserves",
        description: "CDX tokens are backed 1:1 by audited reserves. Real-time proof of reserves is published on-chain for transparency."
    },
    {
        icon: <Scale size={32} />,
        title: "Regulatory Compliant",
        description: "The protocol is architected to meet MiCA and institutional regulatory requirements out of the box."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Secure Infrastructure",
        description: "Audited smart contracts and ISO 27001 certified validator nodes ensure network integrity."
    },
    {
        icon: <LockKeyhole size={32} />,
        title: "Identity Layer",
        description: "Native identity protocol ensures all on-chain participants are verified (KYC/AML) entities."
    },
    {
        icon: <Banknote size={32} />,
        title: "Atomic Settlement",
        description: "Smart contracts enable instant, atomic settlement of tokenized assets against CDX payment tokens."
    },
    {
        icon: <Globe2 size={32} />,
        title: "Interoperable Bridge",
        description: "Secure bridging infrastructure connects private institutional chains with public DeFi liquidity."
    }
];

const Features = () => {
    return (
        <section style={{ padding: '8rem 0', backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Engineered for Institutions</h2>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        The infrastructure required to bridge the gap between traditional finance and the blockchain.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass-card"
                            style={{ padding: '2.5rem', transition: 'transform 0.2s ease' }}
                        >
                            <div style={{
                                color: 'var(--color-accent-blue)',
                                marginBottom: '1.5rem',
                                background: 'var(--color-accent-glow)',
                                width: 'fit-content',
                                padding: '12px',
                                borderRadius: '12px'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-sans)' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

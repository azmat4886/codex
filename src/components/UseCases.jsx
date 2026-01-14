
import { Landmark, Banknote, Building2, PieChart, Briefcase, Smartphone, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const cases = [
    {
        title: "Capital Markets",
        subtitle: "Tokenized repo & securities financing",
        desc: "Use CodeX to tokenize high-grade collateral, execute atomic DvP, and compress settlement cycles from T+2 to near real-time, with full on-chain visibility for risk and treasury desks.",
        icon: <Landmark size={32} color="#38bdf8" />
    },
    {
        title: "Payments & FX",
        subtitle: "Cross-border settlement rail",
        desc: "CDX-powered corridors enable 24/7 programmable FX, corporate payout flows and just-in-time treasury rebalancing across multiple currencies and regions.",
        icon: <Banknote size={32} color="#38bdf8" />
    },
    {
        title: "Treasury & Debt",
        subtitle: "Digital debt & on-chain treasury",
        desc: "Issue, manage and settle notes, bonds and structured products on CodeX with automated coupons, redemptions and real-time reporting to audit and risk teams.",
        icon: <Building2 size={32} color="#38bdf8" />
    },
    {
        title: "Asset Management",
        subtitle: "Tokenized funds & NAV distribution",
        desc: "Asset managers can represent fund units as CodeX tokens, handle investor subscriptions/redemptions and publish NAV-linked events on chain for transparent distribution and reporting.",
        items: [
            "On-chain fund share registry",
            "Automated fee and performance calculations",
            "Regulator-grade audit trails"
        ],
        icon: <PieChart size={32} color="#38bdf8" />
    },
    {
        title: "Corporates",
        subtitle: "Corporate cash & liquidity orchestration",
        desc: "Large corporates can use CodeX as a unified operating layer for multi-bank cash positions, sweeping excess liquidity into tokenized money-market instruments in real time.",
        items: [
            "Multi-entity treasury views",
            "Programmable sweeps and triggers",
            "APIs for ERP and TMS systems"
        ],
        icon: <Briefcase size={32} color="#38bdf8" />
    },
    {
        title: "Digital Banking",
        subtitle: "Integrated digital asset banking",
        desc: "Banks can plug CodeX into online and mobile channels, offering clients tokenized deposits, on-chain settlement options, and custody — all with familiar banking experiences.",
        items: [
            "White-label wallets and accounts",
            "Travel-rule & AML integrated rails",
            "Support for both fiat and digital assets"
        ],
        icon: <Smartphone size={32} color="#38bdf8" />
    }
];

const UseCases = () => {
    const navigate = useNavigate();
    return (
        <div style={{ paddingTop: '100px', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', marginBottom: '4rem' }}>
                    <button
                        onClick={() => navigate(-1)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--color-text-secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            cursor: 'pointer',
                            marginBottom: '2rem',
                            fontSize: '1rem',
                            padding: 0
                        }}
                    >
                        <ArrowLeft size={20} /> Back
                    </button>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Institutional Use Cases</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                        CodeX is designed for real, production-grade banking and capital markets workflows. Below are example use cases that combine the CodeX chain, CDX token and traditional banking infrastructure engineered by <strong>Coded House</strong>.
                    </p>
                </div>

                <div className="use-case-grid">
                    {cases.map((item, index) => (
                        <div key={index} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', transition: 'transform 0.2s' }}>
                            <div style={{
                                height: '160px',
                                background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(15, 23, 42, 0.5))',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '0.5rem',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                {/* Placeholder for illustration, using Icon for now */}
                                {item.icon}
                            </div>

                            <div>
                                <div style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    color: 'var(--color-text-secondary)',
                                    textTransform: 'uppercase',
                                    marginBottom: '0.5rem'
                                }}>
                                    {item.title}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: 1.4 }}>{item.subtitle}</h3>
                                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    {item.desc}
                                </p>
                            </div>

                            {item.items && (
                                <ul style={{ paddingLeft: '1.2rem', marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {item.items.map((li, i) => (
                                        <li key={i} style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>{li}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                <style>{`
                    .use-case-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                    @media (min-width: 768px) {
                        .use-case-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }
                    @media (min-width: 1200px) {
                        .use-case-grid {
                            grid-template-columns: repeat(3, 1fr);
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default UseCases;

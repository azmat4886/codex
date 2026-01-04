import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Disclaimer = () => {
    const navigate = useNavigate();

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '6rem', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <button
                    onClick={() => navigate('/')}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        marginBottom: '2rem',
                        fontSize: '1rem'
                    }}
                >
                    <ArrowLeft size={20} /> Back to Home
                </button>

                <div className="legal-content">
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Legal Disclaimer</h1>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: '3rem' }}>Important Risk Disclosure Update</p>

                    <div className="section">
                        <h2>General Information</h2>
                        <p>
                            This website and the CodeX Whitepaper are for informational purposes only and do not constitute financial advice, an offer to sell, or a solicitation of an offer to buy any securities.
                            The CodeX Protocol is under active development and features are subject to change without notice.
                        </p>
                    </div>

                    <div className="section">
                        <h2>Risk Warning</h2>
                        <p>
                            Cryptocurrencies and digital assets involve a high degree of risk. You should carefuly consider your investment objectives, level of experience, and risk appetite.
                            Past performance is not indicative of future results.
                        </p>
                    </div>

                    <div className="section">
                        <h2>Regulatory Compliance</h2>
                        <p>
                            CodeX is designed to comply with MiCA and other relevant regulations. However, regulatory frameworks for digital assets are evolving.
                            Users are responsible for ensuring their interaction with the protocol complies with local laws in their jurisdiction.
                        </p>
                    </div>
                </div>

                <style>{`
                    .section { margin-bottom: 2.5rem; }
                    .section h2 { font-size: 1.5rem; color: var(--color-text-primary); margin-bottom: 1rem; }
                    .section p { color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 1rem; }
                `}</style>
            </div>
        </div>
    );
};

export default Disclaimer;

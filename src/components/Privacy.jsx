import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
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
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Privacy Policy</h1>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: '3rem' }}>Last Updated: January 2026</p>

                    <div className="section">
                        <h2>1. Introduction</h2>
                        <p>CodeX ("we", "our", or "the Protocol") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you interact with our verification portal and smart contracts.</p>
                    </div>

                    <div className="section">
                        <h2>2. Data Collection</h2>
                        <p>We collect minimal data necessary for protocol verification and security, including:</p>
                        <ul>
                            <li>Wallet addresses involved in transactions.</li>
                            <li>basic usage analytics to improve protocol performance.</li>
                            <li>Contact information provided voluntarily via our Contact forms.</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h2>3. Blockchain Transparency</h2>
                        <p>Please note that all transactions on the CodeX Protocol are recorded on a public or permissioned blockchain. This data is immutable and public.</p>
                    </div>

                    <div className="section">
                        <h2>4. Contact</h2>
                        <p>For privacy-related inquiries, please contact info@codedhouse.com.</p>
                    </div>
                </div>

                <style>{`
                    .section { margin-bottom: 2.5rem; }
                    .section h2 { font-size: 1.5rem; color: var(--color-text-primary); margin-bottom: 1rem; }
                    .section p { color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 1rem; }
                    .section ul { list-style: disc; padding-left: 1.5rem; color: var(--color-text-secondary); }
                `}</style>
            </div>
        </div>
    );
};

export default Privacy;

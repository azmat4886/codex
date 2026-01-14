import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Whitepaper = () => {
    const navigate = useNavigate();

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '6rem', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
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
                        fontSize: '1rem'
                    }}
                >
                    <ArrowLeft size={20} /> Back
                </button>

                <div className="paper-content">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>CodeX Protocol Whitepaper</h1>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', fontStyle: 'italic' }}>
                        Version 1.0 — January 2026
                    </p>

                    <div className="section">
                        <h2>1. Executive Summary</h2>
                        <p>
                            The CodeX Protocol represents a paradigm shift in institutional asset settlement.
                            By combining the transparency and liquidity of public blockchains with the compliance and security of private banking networks,
                            CodeX enables the atomic settlement of real-world assets (RWAs) against a native verification token, CDX.
                        </p>
                    </div>

                    <div className="section">
                        <h2>2. The Problem</h2>
                        <p>
                            Traditional banking rails are slow (T+2 settlement), siloed, and capital inefficient.
                            Conversely, public permissionless blockchains lack the native identity and compliance layers required for regulated institutions to transact at scale.
                            There is currently no unified layer that bridges these two worlds without compromising security or regulatory standing.
                        </p>
                    </div>

                    <div className="section">
                        <h2>3. The CodeX Solution</h2>
                        <p>
                            CodeX introduces a <strong>Hybrid Layered Architecture</strong>:
                        </p>
                        <ul>
                            <li><strong>Public Layer:</strong> Provides global transparency and interoperability with DeFi liquidity.</li>
                            <li><strong>Private Institutional Layer:</strong> A permissioned environment where banks operate nodes to validate transactions and execute compliance logic.</li>
                            <li><strong>Identity Protocol:</strong> All participants are verified entities (KYC/AML), ensuring zero counterparty risk from anonymous actors.</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h2>4. Technical Architecture</h2>
                        <p>
                            The protocol utilizes a novel "Proof of Authority" (PoA) consensus mechanism for its private chain, validated by ISO 27001 certified banking partners.
                            Cross-chain bridges use cryptographic proofs to synchronize state between the private ledger and the public Ethereum mainnet, allowing assets to move securely between regulated custody and public markets.
                            (See Architecture Glossary for detailed diagram).
                        </p>
                    </div>

                    <div className="section">
                        <h2>5. The CDX Token</h2>
                        <p>
                            The CDX token is the native utility and governance token of the protocol. It serves three critical functions:
                        </p>
                        <ul>
                            <li><strong>Gas & Settlement:</strong> Used to pay for transaction fees and atomic swaps on the network.</li>
                            <li><strong>Governance:</strong> CDX holders vote on protocol upgrades, parameter changes, and the onboarding of new validator nodes.</li>
                            <li><strong>Staking:</strong> Validators stake CDX to secure the network and earn rewards for honest block production.</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h2>6. Disclaimer</h2>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                            This whitepaper is for informational purposes only and does not constitute financial advice, an offer to sell, or a solicitation of an offer to buy any securities.
                            The CodeX Protocol is under active development and features are subject to change. Cryptocurrencies involve a high degree of risk.
                        </p>
                    </div>
                </div>

                <style>{`
                    .section {
                        margin-bottom: 3rem;
                    }
                    .section h2 {
                        font-size: 1.8rem;
                        color: var(--color-text-primary);
                        margin-bottom: 1rem;
                        border-bottom: 1px solid rgba(255,255,255,0.1);
                        padding-bottom: 0.5rem;
                    }
                    .section p {
                        line-height: 1.8;
                        color: var(--color-text-secondary);
                        margin-bottom: 1rem;
                        font-family: var(--font-sans); 
                        text-align: justify;
                    }
                    .section ul {
                        list-style-type: disc;
                        padding-left: 1.5rem;
                        color: var(--color-text-secondary);
                    }
                    .section li {
                        margin-bottom: 0.5rem;
                        line-height: 1.6;
                    }
                    .section strong {
                        color: var(--color-text-primary);
                    }
                `}</style>
            </div>
        </div>
    );
};

export default Whitepaper;

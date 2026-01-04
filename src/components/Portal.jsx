import { useState } from 'react';
import { Lock, FileText, Upload, RefreshCw, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';

const LoginView = ({ onLogin }) => (
    <div style={{ maxWidth: '400px', margin: '4rem auto', textAlign: 'center' }}>
        <div style={{ marginBottom: '2rem' }}>
            <div style={{
                width: '80px', height: '80px',
                margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <img
                    src="/assets/logos/codex_round_logo.jpeg"
                    alt="CodeX Secure"
                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-accent-blue)' }}
                />
            </div>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Institutional Access</h2>
            <p style={{ color: 'var(--color-text-secondary)' }}>Log in to your verified account.</p>
        </div>

        <form className="glass-card" style={{ padding: '2rem', textAlign: 'left' }} onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--color-text-secondary)' }}>Email Address</label>
                <input
                    type="email"
                    placeholder="name@institution.com"
                    defaultValue="admin@codex.finance"
                    style={{
                        width: '100%', padding: '0.75rem', backgroundColor: '#020617',
                        border: '1px solid var(--color-border)', borderRadius: '4px', color: '#fff'
                    }}
                />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--color-text-secondary)' }}>Password</label>
                <input
                    type="password"
                    placeholder="••••••••"
                    defaultValue="password"
                    style={{
                        width: '100%', padding: '0.75rem', backgroundColor: '#020617',
                        border: '1px solid var(--color-border)', borderRadius: '4px', color: '#fff'
                    }}
                />
            </div>
            <button className="btn btn-primary" style={{ width: '100%' }}>Sign In</button>
        </form>
    </div>
);

const Portal = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [activeTab, setActiveTab] = useState('kyc');

    if (!isAuthenticated) return <LoginView onLogin={() => setIsAuthenticated(true)} />;

    return (
        <div className="container" style={{ padding: '4rem 2rem' }}>
            <div className="portal-layout">

                {/* Sidebar Nav */}
                <div className="portal-sidebar glass-card" style={{ padding: '1.5rem', flexShrink: 0 }}>
                    <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Organization</span>
                        <div style={{ fontWeight: 600, marginTop: '0.5rem' }}>Acme Capital Ltd.</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-success)', marginTop: 4 }}>Verified Entity</div>
                    </div>

                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <button
                            onClick={() => setActiveTab('kyc')}
                            style={{
                                padding: '0.75rem', textAlign: 'left', borderRadius: '4px',
                                background: activeTab === 'kyc' ? 'rgba(255,255,255,0.1)' : 'transparent',
                                color: activeTab === 'kyc' ? '#fff' : 'var(--color-text-secondary)',
                                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px'
                            }}
                        >
                            <FileText size={18} /> Compliance / KYC
                        </button>
                        <button
                            onClick={() => setActiveTab('mint')}
                            style={{
                                padding: '0.75rem', textAlign: 'left', borderRadius: '4px',
                                background: activeTab === 'mint' ? 'rgba(255,255,255,0.1)' : 'transparent',
                                color: activeTab === 'mint' ? '#fff' : 'var(--color-text-secondary)',
                                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px'
                            }}
                        >
                            <RefreshCw size={18} /> Mint / Redeem
                        </button>
                    </nav>
                </div>

                {/* Content Area */}
                <div style={{ flex: 1, minWidth: 0 }}>
                    {activeTab === 'kyc' && (
                        <div className="glass-card" style={{ padding: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>KYC/AML Documentation</h2>

                            <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '6px', marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <CheckCircle2 color="var(--color-success)" style={{ flexShrink: 0 }} />
                                <div>
                                    <div style={{ fontWeight: 600, color: 'var(--color-success)', marginBottom: '0.25rem' }}>Enhanced Due Diligence Complete</div>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Your entity is whitelisted for unlimited minting.</p>
                                </div>
                            </div>

                            <h4 style={{ marginBottom: '1rem' }}>Update Documents</h4>
                            <div style={{
                                border: '2px dashed var(--color-border)',
                                borderRadius: '8px', padding: '3rem', textAlign: 'center',
                                color: 'var(--color-text-secondary)', cursor: 'pointer'
                            }}>
                                <Upload size={32} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                <p>Drag and drop cert_incorp.pdf here, or click to browse</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'mint' && (
                        <div className="glass-card" style={{ padding: '2.5rem' }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Mint CodeX Token (CX)</h2>

                            <div className="mint-grid" style={{ gap: '2rem', marginBottom: '2rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Amount to Wire (€)</label>
                                    <input
                                        type="number"
                                        placeholder="100,000.00"
                                        style={{ width: '100%', padding: '1rem', background: '#020617', border: '1px solid var(--color-border)', color: '#fff', fontSize: '1.25rem' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Tokens to Receive (CX)</label>
                                    <input
                                        type="text"
                                        value="100,000.00 CX"
                                        readOnly
                                        style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', color: '#fff', fontSize: '1.25rem', cursor: 'not-allowed' }}
                                    />
                                </div>
                            </div>

                            <div style={{ padding: '1.5rem', background: 'rgba(56, 189, 248, 0.05)', borderRadius: '6px', marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ color: 'var(--color-text-secondary)' }}>Exchange Rate</span>
                                    <span>1 EUR = 1 CX</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ color: 'var(--color-text-secondary)' }}>Minting Fee</span>
                                    <span>0.00 EUR (Institutional Tier)</span>
                                </div>
                                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '0.5rem 0' }} />
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
                                    <span>Total Due</span>
                                    <span>€100,000.00</span>
                                </div>
                            </div>

                            <button className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>Generate Wire Instructions</button>
                        </div>
                    )}
                </div>
            </div>
            <style>{`
                .portal-layout { display: flex; flex-direction: column; gap: 2rem; }
                .portal-sidebar { width: 100%; margin-bottom: 2rem; }
                .mint-grid { display: grid; grid-template-columns: 1fr; }
                
                @media (min-width: 768px) {
                    .portal-layout { flex-direction: row; align-items: flex-start; }
                    .portal-sidebar { width: 250px; margin-bottom: 0; }
                    .mint-grid { grid-template-columns: 1fr 1fr; }
                }
            `}</style>
        </div>
    );
};

export default Portal;

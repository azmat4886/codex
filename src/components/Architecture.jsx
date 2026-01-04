
import { ArrowDown, Globe, Server, Shield, Activity, Database, Lock } from 'lucide-react';

const Architecture = () => {
    return (
        <div style={{ paddingTop: '100px', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <div style={{ maxWidth: '900px', margin: '0 auto', marginBottom: '5rem' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>CodeX System Architecture</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '3rem' }}>
                        CodeX uses a layered hybrid model: a public blockchain layer for transparency and interoperability, a
                        private institutional chain for regulated operations, and a secure bridge connecting both to traditional
                        banking infrastructure.
                    </p>

                    <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid var(--color-accent-blue)' }}>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>High-level Overview</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-text-secondary)' }}>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <span style={{ width: '6px', height: '6px', backgroundColor: '#fff', borderRadius: '50%' }}></span>
                                <strong>Public chain:</strong> transparent settlement proofs and asset visibility
                            </li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <span style={{ width: '6px', height: '6px', backgroundColor: '#fff', borderRadius: '50%' }}></span>
                                <strong>Hybrid bridge:</strong> CodeX (CDX) routing, policy checks and token mapping
                            </li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <span style={{ width: '6px', height: '6px', backgroundColor: '#fff', borderRadius: '50%' }}></span>
                                <strong>Private chain:</strong> bank-operated nodes, tokenized funds, compliance logic
                            </li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <span style={{ width: '6px', height: '6px', backgroundColor: '#fff', borderRadius: '50%' }}></span>
                                <strong>Banking layer:</strong> core systems, custody, approvals and reporting
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Architecture Diagram */}
                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

                    {/* Layer 1 */}
                    <div className="arch-layer">
                        <div className="arch-header">
                            <Globe size={20} color="var(--color-accent-blue)" />
                            <span>Public Blockchain Layer</span>
                        </div>
                        <div className="arch-content">
                            <div>• Public transaction proofs</div>
                            <div>• Interoperability & smart assets</div>
                            <div>• Public validators</div>
                        </div>
                    </div>

                    <div className="connector">
                        <ArrowDown size={24} color="var(--color-text-secondary)" />
                        <span>(Bridged Settlement via CDX)</span>
                    </div>

                    {/* Layer 2 */}
                    <div className="arch-layer">
                        <div className="arch-header">
                            <Activity size={20} color="var(--color-accent-blue)" />
                            <span>Hybrid Bridge / Gateway</span>
                        </div>
                        <div className="arch-content">
                            <div>• CodeX (CDX) transfer gateway</div>
                            <div>• Compliance checks (KYC/AML)</div>
                            <div>• Tokenized fund mapping</div>
                        </div>
                    </div>

                    <div className="connector">
                        <ArrowDown size={24} color="var(--color-text-secondary)" />
                        <span>(Secure Private Sync)</span>
                    </div>

                    {/* Layer 3 */}
                    <div className="arch-layer">
                        <div className="arch-header">
                            <Server size={20} color="var(--color-accent-blue)" />
                            <span>Private Institutional Chain</span>
                        </div>
                        <div className="arch-content">
                            <div>• Bank nodes & custodial institutions</div>
                            <div>• Tokenized fund issuance (stable/value-backed tokens)</div>
                            <div>• Permissioned smart contracts</div>
                            <div>• Regulatory nodes (audit/regulators)</div>
                        </div>
                    </div>

                    <div className="connector">
                        <ArrowDown size={24} color="var(--color-text-secondary)" />
                        <span>(Off-Chain APIs)</span>
                    </div>

                    {/* Layer 4 */}
                    <div className="arch-layer">
                        <div className="arch-header">
                            <Database size={20} color="var(--color-accent-blue)" />
                            <span>Banking Infrastructure</span>
                        </div>
                        <div className="arch-content">
                            <div>• Banking systems</div>
                            <div>• Fund custody</div>
                            <div>• Transaction approvals & compliance</div>
                        </div>
                    </div>

                </div>

                <style>{`
                    .arch-layer {
                        width: 100%;
                        background: rgba(15, 23, 42, 0.6);
                        border: 1px solid var(--color-border);
                        border-radius: 8px;
                        padding: 1.5rem;
                        backdrop-filter: blur(10px);
                    }
                    .arch-header {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        margin-bottom: 1rem;
                        padding-bottom: 1rem;
                        border-bottom: 1px solid rgba(255,255,255,0.05);
                        font-weight: 600;
                        font-size: 1.1rem;
                        text-transform: uppercase;
                        letter-spacing: 0.05em;
                    }
                    .arch-content {
                        font-family: monospace;
                        font-size: 0.9rem;
                        color: var(--color-text-secondary);
                        line-height: 1.6;
                        display: flex;
                        flex-direction: column;
                        gap: 0.5rem;
                    }
                    .connector {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 0.5rem;
                        color: var(--color-text-secondary);
                        font-size: 0.85rem;
                        font-family: monospace;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default Architecture;

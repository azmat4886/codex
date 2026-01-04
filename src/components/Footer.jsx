import { Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer style={{ backgroundColor: '#02040a', borderTop: '1px solid var(--color-border)', padding: '5rem 0 2rem' }}>
            <div className="container">

                <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>

                    {/* Brand Col */}
                    <div style={{ maxWidth: '300px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                            <img
                                src="/assets/logos/coded_house_png_vertical.png"
                                alt="CodeX"
                                style={{
                                    height: '50px',
                                    width: 'auto',
                                    filter: 'sepia(100%) saturate(1000%) hue-rotate(5deg) brightness(1.1)'
                                }}
                            />
                            <span style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-serif)' }}>CodeX</span>
                        </div>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                            The premier institutional platform for transparent, compliant, and secure real-world asset tokenization.
                        </p>
                    </div>

                    {/* Links Col 1 */}
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)' }}>Protocol</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li><button onClick={() => navigate('/whitepaper')} style={{ background: 'none', border: 'none', textAlign: 'left', color: 'var(--color-text-primary)', fontSize: '0.95rem', cursor: 'pointer', fontFamily: 'inherit', padding: 0 }}>Whitepaper</button></li>
                            <li><a href="https://etherscan.io/address/0xb74e0669eCD258e7B641A688b4a3Be8434cf63c4" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-primary)', fontSize: '0.95rem' }}>Smart Contracts</a></li>
                        </ul>
                    </div>

                    {/* Links Col 2 */}
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)' }}>Company</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li><button onClick={() => navigate('/team')} style={{ background: 'none', border: 'none', textAlign: 'left', color: 'var(--color-text-primary)', fontSize: '0.95rem', cursor: 'pointer', fontFamily: 'inherit', padding: 0 }}>Team</button></li>
                            <li><button onClick={() => navigate('/contact')} style={{ background: 'none', border: 'none', textAlign: 'left', color: 'var(--color-text-primary)', fontSize: '0.95rem', cursor: 'pointer', fontFamily: 'inherit', padding: 0 }}>Contact</button></li>
                        </ul>
                    </div>

                    {/* Links Col 3 */}
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)' }}>Legal</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li><button onClick={() => navigate('/disclaimer')} style={{ background: 'none', border: 'none', textAlign: 'left', color: 'var(--color-text-primary)', fontSize: '0.95rem', cursor: 'pointer', fontFamily: 'inherit', padding: 0 }}>Disclaimer</button></li>
                            <li><button onClick={() => navigate('/privacy')} style={{ background: 'none', border: 'none', textAlign: 'left', color: 'var(--color-text-primary)', fontSize: '0.95rem', cursor: 'pointer', fontFamily: 'inherit', padding: 0 }}>Privacy Policy</button></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
                            &copy; {new Date().getFullYear()} Coded House. CodeX is a product of Coded House. All rights reserved. <span style={{ opacity: 0.5, marginLeft: '8px' }}>v1.0.0 (Beta)</span>
                        </p>
                    </div>

                    <div className="footer-info-group">
                        <span style={{ display: 'flex', items: 'center', gap: '6px' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            +971 50 453 6965
                        </span>
                        <span style={{ display: 'flex', items: 'center', gap: '6px' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                            info@codedhouse.com
                        </span>
                        <span style={{ display: 'flex', items: 'center', gap: '6px' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            Ajman Free Zone
                        </span>
                    </div>
                </div>
            </div>

            <style>{`
                .footer-bottom {
                    padding-top: 2rem;
                    border-top: 1px solid rgba(255,255,255,0.05);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                .footer-info-group {
                    color: var(--color-text-secondary);
                    font-size: 0.85rem;
                    display: flex;
                    gap: 1.5rem;
                    align-items: center;
                }

                @media (max-width: 768px) {
                    .footer-bottom {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 2rem;
                    }
                    .footer-info-group {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 1rem;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;

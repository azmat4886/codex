
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div style={{ paddingTop: '100px', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Contact CodeX</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                        Get in touch with the Coded House team for inquiries regarding the CodeX protocol, partnership opportunities, or technical integrations.
                    </p>
                </div>

                <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--color-accent-blue)' }}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Email Us</h3>
                                <a href="mailto:info@codedhouse.com" style={{ color: 'var(--color-text-primary)', textDecoration: 'none', fontSize: '1.1rem' }}>info@codedhouse.com</a>
                            </div>
                        </div>

                        <div style={{ width: '100%', height: '1px', background: 'var(--color-border)' }} />

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--color-accent-blue)' }}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Call Us</h3>
                                <a href="tel:+971504536965" style={{ color: 'var(--color-text-primary)', textDecoration: 'none', fontSize: '1.1rem' }}>+971 50 453 6965</a>
                            </div>
                        </div>

                        <div style={{ width: '100%', height: '1px', background: 'var(--color-border)' }} />

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--color-accent-blue)' }}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Visit Us</h3>
                                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.5 }}>
                                    Ajman Free Zone<br />
                                    United Arab Emirates
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

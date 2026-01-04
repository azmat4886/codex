import { Shield, Lock, LayoutDashboard, UserCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ currentView, isScrolled }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    const isActive = (path) => {
        if (path === '/' && currentView === '/') return true;
        if (path !== '/' && currentView.startsWith(path)) return true;
        return false;
    };

    const navItems = [
        { label: 'HOME', path: '/' },
        { label: 'ARCHITECTURE', path: '/architecture' },
        { label: 'USE CASES', path: '/usecases' },
        { label: 'TEAM', path: '/team' },
        { label: 'CONTACT', path: '/contact' },
    ];

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: 'var(--header-height)',
                zIndex: 1000,
                transition: 'all 0.3s ease',
                backgroundColor: isMenuOpen ? '#020617' : (isScrolled ? 'rgba(2, 6, 23, 0.95)' : 'transparent'),
                backdropFilter: isScrolled && !isMenuOpen ? 'blur(12px)' : 'none',
                borderBottom: isScrolled || isMenuOpen ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
            }}
        >
            <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo Area */}
                <div
                    onClick={() => handleNavigate('/')}
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', zIndex: 1002 }}
                >
                    <img
                        src="/assets/logos/codex_round_logo.jpeg"
                        alt="CodeX Logo"
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                    />
                    <span style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        letterSpacing: '0.02em',
                        color: 'var(--color-text-primary)'
                    }}>
                        CodeX
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="desktop-nav" style={{ display: 'none', gap: '2rem', position: 'relative', zIndex: 1002 }}>
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => handleNavigate(item.path)}
                            style={{
                                color: isActive(item.path) ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                letterSpacing: '0.05em',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '0.5rem 0',
                                borderBottom: isActive(item.path) ? '2px solid var(--color-accent-blue)' : '2px solid transparent',
                                transition: 'all 0.2s ease',
                                fontFamily: 'var(--font-sans)',
                                textTransform: 'uppercase'
                            }}
                            className="text-hover-white"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Desktop Actions - REMOVED for Verification Site */}
                <div className="desktop-actions" style={{ display: 'none', gap: '1rem', alignItems: 'center' }}>
                    {/* No Actions required for verification site */}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', zIndex: 1002 }}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'var(--color-bg)',
                zIndex: 1001,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 0.3s ease-in-out',
                pointerEvents: isMenuOpen ? 'all' : 'none',
                padding: '2rem'
            }}>
                {navItems.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => handleNavigate(item.path)}
                        style={{
                            color: isActive(item.path) ? 'var(--color-accent-blue)' : 'var(--color-text-primary)',
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            <style>{`
                @media (min-width: 768px) {
                    .desktop-nav { display: flex !important; }
                    .desktop-actions { display: flex !important; }
                    .mobile-toggle { display: none !important; }
                }
                @media (max-width: 767px) {
                    .desktop-nav { display: none !important; }
                    .desktop-actions { display: none !important; }
                    .mobile-toggle { display: block !important; }
                }
            `}</style>
        </header>
    );
};

export default Header;

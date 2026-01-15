import { ArrowRight, Code, Database, Globe, Layers, Shield } from 'lucide-react';
import { motion } from 'framer-motion'; // Assuming framer-motion is installed as it was in package.json
import { useNavigate } from 'react-router-dom';

const teamMembers = [
    {
        name: "Chas Sheikh",
        role: "Chief Executive Officer",
        image: "/assets/team/chas_sheikh.jpeg",
        bio: "Leading CodeX's strategic vision and institutional partnerships.",
        email: "chas_shaikh@codedhouse.com"
    },
    {
        name: "Jushua Thomas",
        role: "Chief Operating Officer",
        image: "/assets/team/jushua_thomas.jpeg",
        bio: "Driving operational excellence and global business strategy.",
        email: "jushua_thomas@codedhouse.com"
    },
    {
        name: "Narayan Binkkhet",
        role: "Chief Financial Officer",
        image: "/assets/team/narayan_binkkhet.jpeg",
        bio: "Overseeing financial strategy, capital planning, and fiscal governance.",
        email: "narayan_binkkhet@codedhouse.com"
    },
    {
        name: "Usman Khan",
        role: "CTO · Lead Architect & Security",
        image: "/assets/team/usman_khan.jpeg",
        bio: "Architecting the secure hybrid blockchain infrastructure.",
        email: "usman_khan@codedhouse.com"
    },
    {
        name: "Azmat Ullah",
        role: "Head of Web & Mobile Engineering",
        image: "/assets/team/azmat_ullah.jpeg",
        bio: "Leading frontend delivery and application development.",
        email: "azmat_ullah@codedhouse.com"
    },
    {
        name: "Abdul Samad",
        role: "Blockchain Developer",
        image: "/assets/team/abdul_samad.jpeg",
        bio: "Specializing in smart contract development and protocol integration.",
        email: "abdul_samad@codedhouse.com"
    },
    {
        name: "Prabhu Pari Subarmanian",
        role: "Developer",
        image: "/assets/team/prabhu_pari_subarmanian.jpeg",
        bio: "Building robust systems and enterprise integrations.",
        email: "prabhu_pari_subarmanian@codedhouse.com"
    },
    {
        name: "Isaam Katam",
        role: "Developer",
        image: "/assets/team/isaam_katam.jpeg",
        bio: "Contributing to core platform development and optimization.",
        email: "isaam_katam@codedhouse.com"
    },
    {
        name: "Pritto A",
        role: "Developer",
        image: "/assets/team/pritto_a.jpeg",
        bio: "Developing scalable solutions for institutional clients.",
        email: "pritto_a@codedhouse.com"
    },
    {
        name: "Manikandan Kannan",
        role: "Developer",
        image: "/assets/team/manikandan_kannan.jpeg",
        bio: "Focusing on full-stack implementation and system performance.",
        email: "manikandan_kannan@codedhouse.com"
    }
];

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{ minHeight: '100vh' }}>

            {/* Coded House Hero */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '80px', // Compensate for header
                paddingBottom: '4rem'
            }}>
                {/* Background Image with Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url("/assets/images/background.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0
                }} />

                {/* Dark Overlay for Readability */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(2, 6, 23, 0.5) 0%, rgba(2, 6, 23, 0.3) 50%, rgba(2, 6, 23, 0.7) 100%)',
                    zIndex: 1
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ maxWidth: '800px' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '6px 12px',
                                borderRadius: '20px',
                                border: '1px solid rgba(56, 189, 248, 0.3)',
                                background: 'rgba(56, 189, 248, 0.1)',
                                marginBottom: '1.5rem',
                                fontSize: '0.9rem',
                                color: 'var(--color-accent-blue)'
                            }}
                        >
                            <span>Premier Software & Blockchain House</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            style={{
                                fontSize: 'clamp(3rem, 6vw, 5rem)',
                                lineHeight: 1.1,
                                marginBottom: '1.5rem',
                                letterSpacing: '-0.02em',
                                background: 'linear-gradient(to right, #ffffff, #94a3b8)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            Coded House<br />
                            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-accent-blue)', WebkitTextFillColor: 'initial' }}>Building Digital Futures.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{
                                fontSize: '1.25rem',
                                color: 'var(--color-text-secondary)',
                                maxWidth: '600px',
                                marginBottom: '2.5rem',
                                lineHeight: 1.6
                            }}
                        >
                            We are a software and infrastructure studio focused on institutional-grade digital asset products, enterprise solutions, and cutting-edge blockchain engineering.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                        >
                            <button className="btn btn-primary" onClick={() => navigate('/codextoken')} style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                                Explore Our Flagship: CodeX
                                <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                            </button>
                            <button onClick={() => navigate('/contact')} className="btn" style={{ padding: '1rem 2rem', fontSize: '1.1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--color-text-primary)' }}>
                                Contact Us
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Element / Logo */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-10%',
                    transform: 'translateY(-50%)',
                    width: '50vw',
                    height: '50vw',
                    background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)',
                    borderRadius: '50%',
                    zIndex: 0,
                    pointerEvents: 'none'
                }} />
            </section>


            {/* Services Section */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Expertise</h2>
                        <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>From specialized protocol engineering to full-stack application development.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: <Globe size={32} />, title: "Web & Mobile Development", desc: "High-performance, responsive applications built with modern frameworks and best practices." },
                            { icon: <Database size={32} />, title: "Blockchain Infrastructure", desc: "Secure, scalable ledger networks and node infrastructure for institutional use cases." },
                            { icon: <Code size={32} />, title: "Smart Contracts", desc: "Audited, verified, and gas-optimized smart contracts for DeFi and asset tokenization." },
                            { icon: <Shield size={32} />, title: "Security & Audits", desc: "Rigorous security standards and testing to ensure robust and safe deployments." },
                            { icon: <Layers size={32} />, title: "Enterprise Solutions", desc: "Custom software tailored to complex business logic and integration requirements." },
                        ].map((service, i) => (
                            <div key={i} className="glass-card" style={{ padding: '2rem' }}>
                                <div style={{ color: 'var(--color-accent-blue)', marginBottom: '1.5rem' }}>{service.icon}</div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
                                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section (Adapted from Company.jsx) */}
            <section style={{ padding: '6rem 0', background: '#0f172a' }}>
                <div className="container">
                    <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Meet The Team</h2>
                        <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                            The multidisciplinary experts behind Coded House and CodeX.
                        </p>
                    </div>

                    <div className="team-grid" style={{ gap: '2rem' }}>
                        {teamMembers.map((member, index) => (
                            <div key={index} className="glass-card" style={{ padding: '0', overflow: 'hidden', transition: 'transform 0.3s ease', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ height: '320px', width: '100%', overflow: 'hidden', backgroundColor: '#1e293b', position: 'relative', flexShrink: 0 }}>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.4s ease' }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                    <div style={{
                                        display: 'none',
                                        width: '100%',
                                        height: '100%',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: 'linear-gradient(45deg, #0f172a, #1e293b)',
                                        color: 'var(--color-text-secondary)',
                                        fontSize: '3rem',
                                        fontFamily: 'var(--font-serif)'
                                    }}>
                                        {member.name.charAt(0)}
                                    </div>
                                </div>
                                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{member.name}</h3>
                                    <div style={{ color: 'var(--color-accent-blue)', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{member.role}</div>
                                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                                        {member.bio}
                                    </p>

                                    {member.email && (
                                        <div style={{ marginTop: 'auto' }}>
                                            <a
                                                href={`mailto:${member.email}`}
                                                style={{
                                                    display: 'inline-block',
                                                    color: 'var(--color-accent-blue)',
                                                    fontSize: '0.85rem',
                                                    textDecoration: 'none',
                                                    opacity: 0.9,
                                                    transition: 'opacity 0.2s',
                                                    wordBreak: 'break-all',
                                                    maxWidth: '100%'
                                                }}
                                                onMouseOver={(e) => e.target.style.opacity = '1'}
                                                onMouseOut={(e) => e.target.style.opacity = '0.9'}
                                            >
                                                {member.email}
                                            </a>
                                        </div>
                                    )}

                                </div>
                            </div>
                        ))}
                    </div>
                    <style>{`
                        .team-grid { display: grid; grid-template-columns: 1fr; }
                        @media (min-width: 768px) {
                            .team-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
                        }
                    `}</style>
                </div>
            </section>

        </div>
    );
};

export default Home;

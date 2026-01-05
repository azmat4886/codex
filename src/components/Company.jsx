

const teamMembers = [
    {
        name: "Chas Sheikh",
        role: "Chief Executive Officer",
        image: "/assets/team/chas_sheikh.jpeg",
        bio: "Leading CodeX's strategic vision and institutional partnerships."
    },
    {
        name: "Jushua Thomas",
        role: "Chief Operating Officer",
        image: "/assets/team/jushua_thomas.jpeg",
        bio: "Driving operational excellence and global business strategy."
    },
    {
        name: "Narayan Binkkhet",
        role: "Chief Financial Officer",
        image: "/assets/team/narayan_binkkhet.jpeg",
        bio: "Overseeing financial strategy, capital planning, and fiscal governance."
    },
    {
        name: "Usman Khan",
        role: "CTO · Lead Architect & Security",
        image: "/assets/team/usman_khan.jpeg",
        bio: "Architecting the secure hybrid blockchain infrastructure."
    },
    {
        name: "Azmat Ullah",
        role: "Head of Web & Mobile Engineering",
        image: "/assets/team/azmat_ullah.jpeg",
        bio: "Leading frontend delivery and application development."
    },
    {
        name: "Abdul Samad",
        role: "Blockchain Developer",
        image: "/assets/team/abdul_samad.jpeg",
        bio: "Specializing in smart contract development and protocol integration."
    },
    {
        name: "Prabhu Pari Subarmanian",
        role: "Developer",
        image: "/assets/team/prabhu_pari_subarmanian.jpeg",
        bio: "Building robust systems and enterprise integrations."
    },
    {
        name: "Isaam Katam",
        role: "Developer",
        image: "/assets/team/isaam_katam.jpeg",
        bio: "Contributing to core platform development and optimization."
    },
    {
        name: "Pritto A",
        role: "Developer",
        image: "/assets/team/pritto_a.jpeg",
        bio: "Developing scalable solutions for institutional clients."
    },
    {
        name: "Manikandan Kannan",
        role: "Developer",
        image: "/assets/team/manikandan_kannan.jpeg",
        bio: "Focusing on full-stack implementation and system performance."
    }
];

const Company = () => {
    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            {/* Hero */}
            <div style={{ padding: '6rem 0', textAlign: 'center', background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.1) 0%, transparent 70%)' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Team & <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-accent-blue)' }}>Engineering</span></h1>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', lineHeight: 1.6 }}>
                        CodeX is designed and operated by <strong>Coded House</strong> — combining protocol engineering, backend systems, enterprise delivery and product strategy for institutional clients.
                    </p>
                </div>
            </div>

            <div className="container">
                {/* About Coded House */}
                <section className="glass-card about-section" style={{ padding: '3rem', marginBottom: '5rem' }}>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>About Coded House</h2>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                            Coded House is a software and infrastructure studio focused on institutional-grade digital asset products. The team works across protocol engineering, security, DevOps and UI/UX to deliver complete solutions — from private ledger networks to public-chain integrations.
                        </p>
                        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                            CodeX is one of Coded House’s flagship products, combining hybrid blockchain infrastructure, compliance tooling and banking integrations into a single institutional platform.
                        </p>
                    </div>
                    {/* Visual element or logo placeholder */}
                    <div className="about-logo" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem'
                    }}>
                        <img
                            src="/assets/logos/coded_house_png_vertical.png"
                            alt="Coded House"
                            className="company-logo-img"
                            style={{
                                width: 'auto',
                                display: 'block',
                                filter: 'sepia(100%) saturate(1000%) hue-rotate(5deg) brightness(1.1)'
                            }}
                        />
                    </div>
                </section>

                {/* Team Section */}
                <section style={{ paddingBottom: '4rem' }}>
                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Leadership & Engineering</h2>
                        <p style={{ color: 'var(--color-text-secondary)' }}>The multidisciplinary team behind the platform.</p>
                    </div>

                    <div className="team-grid" style={{ gap: '2rem' }}>
                        {teamMembers.map((member, index) => (
                            <div key={index} className="glass-card" style={{ padding: '0', overflow: 'hidden', transition: 'transform 0.3s ease' }}>
                                <div style={{ height: '320px', width: '100%', overflow: 'hidden', backgroundColor: '#1e293b', position: 'relative' }}>
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
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{member.name}</h3>
                                    <div style={{ color: 'var(--color-accent-blue)', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{member.role}</div>
                                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                        {member.bio}
                                    </p>

                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <style>{`
                    .about-section { display: flex; flex-direction: column; gap: 2rem; align-items: center; padding: 1.5rem !important; margin-bottom: 3rem !important; }
                    .about-logo { width: 100%; display: flex; justify-content: center; }
                    .team-grid { display: grid; grid-template-columns: 1fr; }
                    .company-container { padding-left: 1rem; padding-right: 1rem; }
                    .company-logo-img { height: 200px; }
                    
                    @media (min-width: 768px) {
                        .about-section { flex-direction: row; gap: 3rem; padding: 3rem !important; margin-bottom: 5rem !important; }
                        .about-logo { width: auto; }
                        .team-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
                        .company-container { padding-left: 0; padding-right: 0; }
                    }

                    @media (max-width: 767px) {
                        .about-section {
                            background: #0f172a !important;
                            padding: 2.5rem !important;
                        }
                        .company-logo-img {
                            height: 120px;
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};


export default Company;

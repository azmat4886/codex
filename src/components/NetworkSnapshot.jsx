
import { motion } from 'framer-motion';

const NetworkSnapshot = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
                background: 'rgba(2, 6, 23, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                padding: '2.5rem',
                marginTop: '4rem',
                marginBottom: '2rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                    <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>Network Snapshot</h3>
                    <div style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>CodeX Institutional Chain</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Operated and engineered by Coded House.</div>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 16px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '20px',
                    color: '#34d399',
                    fontSize: '0.9rem',
                    fontWeight: 500
                }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399' }} />
                    Live · Healthy
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                {/* Stat 1 */}
                <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>Total Value Settled</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>€1.9T+</div>
                </div>

                {/* Stat 2 */}
                <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>Bank Reserves</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>€913M</div>
                </div>

                {/* Stat 3 */}
                <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>Market Cap</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>$2B+</div>
                </div>

                {/* Stat 4 */}
                <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>Institutions Served</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>Global</div>
                </div>
            </div>

            <div style={{ marginTop: '2rem', color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Built for tokenized assets, institutional payments, repo, and digital debt markets.
            </div>
        </motion.div>
    );
};

export default NetworkSnapshot;

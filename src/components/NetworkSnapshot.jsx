import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const NetworkSnapshot = () => {
    const [totalSupply, setTotalSupply] = useState(null);
    const [loading, setLoading] = useState(true);
    const [networkStatus, setNetworkStatus] = useState('0'); // Default to 0 (Connecting/Unknown)

    useEffect(() => {
        const fetchSupply = async () => {
            try {
                // Using the specific contract address provided
                const contractAddress = '0x51a9098e1cdc884886233f706669d0ac6c198f40';
                const apiKey = import.meta.env.VITE_ETHERSCAN_API_KEY;

                if (!apiKey) {
                    console.warn('VITE_ETHERSCAN_API_KEY not set.');
                    setLoading(false);
                    return;
                }

                const response = await fetch(`https://api.etherscan.io/v2/api?chainid=11155111&module=stats&action=tokensupply&contractaddress=${contractAddress}&apikey=${apiKey}`);
                const data = await response.json();

                if (data.status) {
                    setNetworkStatus(data.status);
                }

                if (data.status === '1' && data.result) {
                    // Assuming 18 decimals, formatted to millions/billions
                    const rawSupply = parseFloat(data.result) / 1e18;
                    const formattedSupply = new Intl.NumberFormat('en-US', {
                        notation: "compact",
                        maximumFractionDigits: 1
                    }).format(rawSupply);
                    setTotalSupply(formattedSupply);
                }
            } catch (error) {
                console.error('Error fetching token supply:', error);
                setNetworkStatus('0');
            } finally {
                setLoading(false);
            }
        };

        fetchSupply();
    }, []);

    const isHealthy = networkStatus === '1';

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
                    background: isHealthy ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                    border: isHealthy ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)',
                    borderRadius: '20px',
                    color: isHealthy ? '#34d399' : '#ef4444',
                    fontSize: '0.9rem',
                    fontWeight: 500
                }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: isHealthy ? '#34d399' : '#ef4444' }} />
                    {isHealthy ? 'Live · Healthy' : 'System Degraded'}
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>


                {/* Stat 3 - DYNAMIC */}
                <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>Total Supply</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                        {loading ? '...' : (totalSupply ? `${totalSupply} CDX` : 'N/A')}
                    </div>
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

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { ShieldCheck, Building2, Wallet, ArrowUpRight, Download } from 'lucide-react';

const data = [
    { name: 'Jan', supply: 850, reserves: 850 },
    { name: 'Feb', supply: 880, reserves: 880 },
    { name: 'Mar', supply: 895, reserves: 895 },
    { name: 'Apr', supply: 900, reserves: 900 },
    { name: 'May', supply: 910, reserves: 910 },
    { name: 'Jun', supply: 913, reserves: 913 },
];

const StatCard = ({ title, value, icon, subtext }) => (
    <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{title}</p>
                <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{value}</h3>
            </div>
            <div style={{
                padding: '10px',
                borderRadius: '8px',
                background: 'rgba(56, 189, 248, 0.1)',
                color: 'var(--color-accent-blue)'
            }}>
                {icon}
            </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', color: 'var(--color-success)' }}>
            <ArrowUpRight size={16} />
            <span>{subtext}</span>
        </div>
    </div>
);

const Dashboard = () => {
    return (
        <div className="container dashboard-container" style={{ minHeight: '80vh' }}>
            <div className="dashboard-header" style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Proof of Reserves</h2>
                    <p style={{ color: 'var(--color-text-secondary)' }}>Real-time verification of on-chain assets vs off-chain liabilities.</p>
                </div>
                <button className="btn btn-outline" style={{ gap: '8px', fontSize: '0.9rem', padding: '0.6rem 1rem' }}>
                    <Download size={16} />
                    Download Audit Report
                </button>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid" style={{ gap: '2rem', marginBottom: '3rem' }}>
                <StatCard
                    title="Total Token Supply (CX)"
                    value="913,000,000.00"
                    icon={<Wallet size={24} />}
                    subtext="+1.2% this month"
                />
                <StatCard
                    title="Total Bank Reserves (€)"
                    value="€913,000,000.00"
                    icon={<Building2 size={24} />}
                    subtext="Audited 2 mins ago"
                />
                <StatCard
                    title="Collateralization Ratio"
                    value="100.00%"
                    icon={<ShieldCheck size={24} />}
                    subtext="Perfect 1:1 Match"
                />
            </div>

            {/* Main Chart */}
            <div className="glass-card" style={{ padding: '2rem', marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Supply vs Reserves History (6 Months)</h3>
                <div style={{ height: '400px', width: '100%' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                            <XAxis dataKey="name" stroke="#94a3b8" tick={{ fontSize: 12 }} />
                            <YAxis stroke="#94a3b8" tick={{ fontSize: 12 }} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#fff' }}
                                itemStyle={{ color: '#38bdf8' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="reserves"
                                stroke="#38bdf8"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorValue)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Attestations Table (Simple) */}
            <div className="glass-card attestation-card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Recent Attestations</h3>
                <div className="table-row table-head">
                    <div>Report ID</div>
                    <div>Date</div>
                    <div>Auditor</div>
                    <div>Status</div>
                </div>
                {[1, 2, 3].map((i) => (
                    <div key={i} className="table-row" style={{ fontSize: '0.95rem' }}>
                        <div style={{ fontFamily: 'monospace', color: 'var(--color-accent-blue)' }}>#ATT-{2024000 + i}</div>
                        <div>Oct {10 + i}, 2024</div>
                        <div>Deloitte & Touche</div>
                        <div style={{ color: 'var(--color-success)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <ShieldCheck size={14} /> Verified
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                .dashboard-container { padding: 6rem 1rem !important; }
                .dashboard-header { flex-direction: column; align-items: flex-start; gap: 1rem; }
                .stats-grid { display: grid; grid-template-columns: 1fr; }
                .attestation-card { overflow-x: auto; }
                .table-row { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; padding: 1rem 0; border-bottom: 1px solid var(--color-border); min-width: 600px; }
                .table-row:last-child { border-bottom: none; }
                .table-head { color: var(--color-text-secondary); font-size: 0.9rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
                
                @media (min-width: 768px) {
                    .dashboard-container { padding: 4rem 2rem !important; }
                    .dashboard-header { flex-direction: row; align-items: end; }
                    .stats-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
                    .table-row { min-width: 0; }
                }
            `}</style>
        </div>
    );
};

export default Dashboard;

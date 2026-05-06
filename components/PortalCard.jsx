import Link from 'next/link';

// ポータルトップに並べる 6 分野カード
export default function PortalCard({ law }) {
  return (
    <Link href={`/${law.slug}`} className="portal-card" data-theme={law.theme}>
      <div className="portal-card-icon" style={{ background: 'var(--theme)' }}>
        {law.icon}
      </div>
      <div className="portal-card-title" style={{ color: 'var(--theme-text)' }}>
        {law.title}
      </div>
      <div className="portal-card-desc">{law.description}</div>
      <div className="portal-card-meta">
        <span>{law.sub}</span>
        <span>›</span>
      </div>
    </Link>
  );
}

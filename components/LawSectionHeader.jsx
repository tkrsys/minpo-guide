import Link from 'next/link';

// 各分野ページ上部のカラフルヘッダー
export default function LawSectionHeader({ icon, title, sub, badge }) {
  return (
    <header className="law-header">
      <div className="law-header-content">
        <div className="law-header-left">
          <div className="law-header-icon" aria-hidden="true">{icon}</div>
          <div>
            <div className="law-header-title">{title}</div>
            <div className="law-header-sub">{sub}</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          {badge && <span className="law-header-badge">{badge}</span>}
          <Link href="/" className="law-header-back">← ポータルへ戻る</Link>
        </div>
      </div>
    </header>
  );
}

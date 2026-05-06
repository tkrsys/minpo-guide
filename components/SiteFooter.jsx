// 共通フッター
export default function SiteFooter({ children }) {
  return (
    <footer className="site-footer">
      <div className="site-footer-content">
        {children}
        {children && <br />}
        本ガイドは行政書士試験対策・学習用の参考情報です。正確な条文は
        <a
          href="https://laws.e-gov.go.jp/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--blue-text)', textDecoration: 'underline' }}
        >
          e-Gov 法令検索
        </a>
        でご確認ください。
        <br />
        <br />
        Copyright &copy; 2026 tkrsys All rights reserved.
      </div>
    </footer>
  );
}

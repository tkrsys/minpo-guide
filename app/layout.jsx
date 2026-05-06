import './globals.css';

export const metadata = {
  title: '民法ガイド | 行政書士試験対策・総則/物権/債権/親族/相続',
  description:
    '民法の重要条文（約240条）を 6 分野（総則・物権・債権総論・債権各論・親族・相続）に整理した条文・解説ポータル。e-Gov 法令検索連携。行政書士試験対策に最適。',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

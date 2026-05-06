import PortalCard from '@/components/PortalCard';
import SiteFooter from '@/components/SiteFooter';
import { LAWS } from '@/lib/laws';

export const metadata = {
  title: '民法ガイド | 行政書士試験対策ポータル',
  description:
    '民法の重要条文（約200条）を 6 分野（総則・物権・債権総論・債権各論・親族・相続）に整理した条文・解説ポータル。条文・実務解説・初学者向け解説・試験対策ポイントを 1 つに統合。e-Gov 法令検索連携。',
};

export default function PortalTopPage() {
  return (
    <>
      <section className="portal-hero">
        <div className="portal-hero-inner">
          <div style={{ fontSize: 36, marginBottom: 8 }}>📚</div>
          <h1 className="portal-hero-title">民法ガイド</h1>
          <p className="portal-hero-sub">
            行政書士試験対策・民法の重要条文を 6 分野で完全解説
          </p>
        </div>
      </section>

      <section className="portal-cards" aria-label="民法 6 分野一覧">
        {LAWS.map((law) => (
          <PortalCard key={law.slug} law={law} />
        ))}
      </section>

      <section className="relations" aria-label="民法の体系">
        <div className="relations-card">
          <div className="relations-title">📖 民法の体系（パンデクテン方式）</div>
          <div className="relations-sub">
            民法は「総則→各則」「財産法→家族法」の二大構造で整理されています。総則の規定は財産法・家族法を通じて適用され（一部例外あり）、財産法は「物権」と「債権」の二本立て、家族法は「親族」と「相続」の二編で構成されます。
          </div>
          <div className="relations-flow">
            <div className="relations-block">
              <div className="relations-block-head">① 財産法（民法 第1〜3編）</div>
              <div>
                <span className="relations-pill" data-color="blue">📘 第1編 総則</span>
                <span className="relations-pill" data-color="green">🏠 第2編 物権</span>
                <span className="relations-pill" data-color="purple">⚖️ 第3編 債権総論</span>
                <span className="relations-pill" data-color="red">🤝 第3編 債権各論</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--text2)', marginTop: 8, lineHeight: 1.6 }}>
                <strong>総則</strong>＝民法全体に通ずる基本ルール（権利能力・行為能力・意思表示・代理・時効）<br />
                <strong>物権</strong>＝物に対する直接的支配権（所有権・抵当権など）<br />
                <strong>債権</strong>＝特定人に特定の行為を求める権利（契約・不法行為など）
              </div>
            </div>
            <div className="relations-block">
              <div className="relations-block-head">② 家族法（民法 第4・5編）</div>
              <div>
                <span className="relations-pill" data-color="pink">👨‍👩‍👧 第4編 親族</span>
                <span className="relations-pill" data-color="indigo">📜 第5編 相続</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--text2)', marginTop: 8, lineHeight: 1.6 }}>
                <strong>親族</strong>＝婚姻・離婚・親子関係・親権・扶養<br />
                <strong>相続</strong>＝遺産承継・遺言・遺留分・配偶者居住権<br />
                身分法的色彩が強く、財産法の規定はそのままでは妥当しない場合あり。
              </div>
            </div>
          </div>

          <div style={{ marginTop: 20, padding: 16, background: 'var(--bg)', borderRadius: 'var(--rsm)', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6, color: 'var(--text)' }}>🎯 行政書士試験における民法</div>
            <div style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.7 }}>
              本試験では <strong>民法から択一式 9 問・記述式 2 問の計 76 点</strong>（300 点満点中）が出題され、合否を分ける最重要科目です。本ガイドは試験に耐える論点を厳選して 200 条近くを収録し、各条文に「📘 実務・試験向け解説」「🌱 初学者向け解説」「🎯 試験対策ポイント」を付しています。
            </div>
          </div>
        </div>
      </section>

      <SiteFooter>
        本ガイドは行政書士試験対策・学習用の参考情報です。条文は 2017 年改正（債権法）・2018 年改正（相続法）・2022 年改正（成年年齢・嫡出推定）等の最新版を反映しています。
      </SiteFooter>
    </>
  );
}

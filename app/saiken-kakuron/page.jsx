import LawGuideViewer from '@/components/LawGuideViewer';
import LawSectionHeader from '@/components/LawSectionHeader';
import SiteFooter from '@/components/SiteFooter';
import { FLOW_SECTIONS } from '@/data/saiken-kakuron';
import { getLaw } from '@/lib/laws';

const law = getLaw('saiken-kakuron');

export const metadata = {
  title: `民法 ${law.title} 完全解説 | 民法ガイド`,
  description: law.description,
};

export default function SaikenKakuronPage() {
  return (
    <div data-theme={law.theme}>
      <LawSectionHeader
        icon={law.icon}
        title={`民法 ${law.title} 完全解説`}
        sub={`${law.sub} | e-Gov API対応`}
        badge="行政書士試験対策"
      />
      <LawGuideViewer flowSections={FLOW_SECTIONS} lawId="129AC0000000089" />
      <SiteFooter>
        法令根拠：民法 第三編 債権（契約・事務管理・不当利得・不法行為）（e-Gov 法令検索 https://laws.e-gov.go.jp/law/129AC0000000089）
      </SiteFooter>
    </div>
  );
}

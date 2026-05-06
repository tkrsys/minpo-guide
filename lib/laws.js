// 民法 6 分野のメタ情報（パス・テーマ・アイコンなど）

export const LAWS = [
  {
    slug: 'sousoku',
    title: '総則',
    short: '総則',
    sub: '私権の主体・客体・意思表示・代理・時効',
    icon: '📘',
    theme: 'blue',
    badgeColor: 'var(--blue)',
    description:
      '民法全体に通ずる基本原則を定めた編。権利能力・行為能力（制限行為能力者）、意思表示（心裡留保・通謀虚偽表示・錯誤・詐欺・強迫）、代理（無権代理・表見代理）、無効と取消し、条件・期限、時効（取得時効・消滅時効）など、民法のあらゆる場面で問題となる総則的ルールを扱います。',
  },
  {
    slug: 'bukken',
    title: '物権',
    short: '物権',
    sub: '所有・占有・抵当権など物に対する権利',
    icon: '🏠',
    theme: 'green',
    badgeColor: 'var(--green)',
    description:
      '物に対する直接的・排他的な支配権である「物権」を定める編。物権変動と対抗要件（177条・178条）、所有権・共有、占有権、用益物権（地上権・地役権）、担保物権（留置権・先取特権・質権・抵当権・根抵当権）を扱います。試験では特に対抗要件論と抵当権が頻出。',
  },
  {
    slug: 'saiken-souron',
    title: '債権総論',
    short: '債総',
    sub: '債務不履行・連帯債務・保証・債権譲渡・弁済',
    icon: '⚖️',
    theme: 'purple',
    badgeColor: 'var(--purple)',
    description:
      '債権一般に共通するルールを定める編。債権の目的、債務不履行と損害賠償、債権者代位権・詐害行為取消権、多数当事者の債権関係（連帯債務・保証）、債権譲渡・債務引受、債権の消滅（弁済・相殺・更改・免除・混同）を扱います。2020年改正論点が多数。',
  },
  {
    slug: 'saiken-kakuron',
    title: '債権各論',
    short: '債各',
    sub: '契約・売買・賃貸借・不法行為など',
    icon: '🤝',
    theme: 'red',
    badgeColor: 'var(--red)',
    description:
      '具体的な契約類型と法定債権関係を定める編。契約総則（成立・効力・解除）、売買（契約不適合責任）、贈与・消費貸借・賃貸借・請負・委任など13種の典型契約、事務管理・不当利得・不法行為（一般不法行為・特殊不法行為）を扱います。',
  },
  {
    slug: 'shinzoku',
    title: '親族',
    short: '親族',
    sub: '婚姻・離婚・親子・親権',
    icon: '👨‍👩‍👧',
    theme: 'pink',
    badgeColor: 'var(--pink)',
    description:
      '家族関係に関する法律関係を定める編。婚姻の成立・効力・取消し、離婚（協議離婚・裁判離婚）、実子（嫡出推定・認知）・養子（普通養子・特別養子）、親権、扶養を扱います。',
  },
  {
    slug: 'sozoku',
    title: '相続',
    short: '相続',
    sub: '相続人・相続分・遺言・遺留分',
    icon: '📜',
    theme: 'indigo',
    badgeColor: 'var(--indigo)',
    description:
      '人の死亡による財産の承継を定める編。相続人（法定相続人・代襲相続）、相続分、相続の承認・放棄、遺産分割、遺言（普通方式遺言・遺言の効力）、遺留分（遺留分侵害額請求）、配偶者居住権・特別寄与料を扱います。',
  },
];

export function getLaw(slug) {
  return LAWS.find((l) => l.slug === slug);
}

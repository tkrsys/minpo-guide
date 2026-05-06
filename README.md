# 民法ガイド (minpo-guide)

行政書士試験対策・民法の重要条文を 6 分野（総則・物権・債権総論・債権各論・親族・相続）で完全解説する Web アプリケーション。

## 概要

- **対象**: 行政書士試験受験生・民法を学習する全ての方
- **収録条文**: 約 200 条（試験頻出論点を厳選）
- **解説構成**: 各条文に 3 種類の解説を付与
  - 📘 **実務・試験向け解説**：要件効果・改正点・判例
  - 🌱 **初学者向け解説**：平易な言葉で具体例つき
  - 🎯 **試験対策ポイント**：頻出論点・引っかけ・条文比較
- **重要度バッジ**: 🔴 重要 / 🟡 頻出 / 🟢 基本

## 6 分野構成

| 分野 | 主な内容 | テーマカラー |
|---|---|---|
| 📘 総則 | 権利能力・行為能力・意思表示・代理・時効 | 青 |
| 🏠 物権 | 物権変動・対抗要件・所有権・抵当権 | 緑 |
| ⚖️ 債権総論 | 債務不履行・連帯債務・保証・債権譲渡・弁済 | 紫 |
| 🤝 債権各論 | 売買・賃貸借・請負・委任・不法行為 | 赤 |
| 👨‍👩‍👧 親族 | 婚姻・離婚・親子・親権 | ピンク |
| 📜 相続 | 相続分・遺言・遺留分・配偶者居住権 | インディゴ |

## 反映している改正

- 2017 年改正（債権法改正・2020 年 4 月施行）
- 2018 年改正（相続法改正・2019 年 7 月以降順次施行）
- 2021 年改正（所有者不明土地関連・2023 年 4 月施行）
- 2022 年改正（成年年齢引下げ・嫡出推定・2024 年 4 月施行）

## 技術スタック

- **フレームワーク**: Next.js 14（App Router）
- **言語**: JavaScript
- **スタイリング**: Tailwind CSS + カスタム CSS（CSS変数によるテーマ切替）
- **デプロイ**: Vercel
- **e-Gov 連携**: 法令 ID `129AC0000000089`（民法）

## 開発

```bash
npm install
npm run dev    # 開発サーバー起動 → http://localhost:3000
npm run build  # 本番ビルド
npm run start  # 本番サーバー起動
```

## ディレクトリ構成

```
minpo-guide/
├── app/
│   ├── layout.jsx               # ルートレイアウト
│   ├── globals.css              # グローバル CSS（テーマカラー）
│   ├── page.jsx                 # トップ（ポータル）
│   ├── sousoku/page.jsx         # 総則
│   ├── bukken/page.jsx          # 物権
│   ├── saiken-souron/page.jsx   # 債権総論
│   ├── saiken-kakuron/page.jsx  # 債権各論
│   ├── shinzoku/page.jsx        # 親族
│   └── sozoku/page.jsx          # 相続
├── components/
│   ├── LawGuideViewer.jsx       # 条文ビューア（タブ・検索・展開）
│   ├── LawSectionHeader.jsx     # ページ上部ヘッダー
│   ├── PortalCard.jsx           # トップのカード
│   └── SiteFooter.jsx           # 共通フッター
├── data/
│   ├── sousoku.js               # 総則データ
│   ├── bukken.js                # 物権データ
│   ├── saiken-souron.js         # 債権総論データ
│   ├── saiken-kakuron.js        # 債権各論データ
│   ├── shinzoku.js              # 親族データ
│   └── sozoku.js                # 相続データ
└── lib/
    ├── egov.js                  # e-Gov URL 生成
    └── laws.js                  # 6 分野メタ情報
```

## 関連プロジェクト

- [tkrsys/gyosei-tetsuduki-guide](https://github.com/tkrsys/gyosei-tetsuduki-guide) — 行政法ガイド（行手法・行審法・行訴法・国賠法）

## 注意事項

本ガイドは行政書士試験対策・学習用の参考情報です。条文の正確な内容は [e-Gov 法令検索](https://laws.e-gov.go.jp/law/129AC0000000089) でご確認ください。

## ライセンス

Copyright © 2026 tkrsys All rights reserved.

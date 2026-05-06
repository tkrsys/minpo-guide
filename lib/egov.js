// e-Gov 法令検索 / API 用 URL 生成（民法 lawId は 129AC0000000089）

export function getEgovUrl(lawId) {
  return `https://laws.e-gov.go.jp/law/${lawId}`;
}

export function getEgovApiUrl(lawId, articleNum) {
  // 「○条の2」などの枝番付きは API では基本条のみで参照
  const baseNum = String(articleNum).replace(/の\d+/g, '');
  return `https://laws.e-gov.go.jp/api/1/articles;lawId=${lawId};article=${baseNum}`;
}

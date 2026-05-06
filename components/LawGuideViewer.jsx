'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { getEgovApiUrl, getEgovUrl } from '@/lib/egov';

// 重要度バッジのマッピング
function getImportanceBadge(importance) {
  switch (importance) {
    case 'important':
      return { text: '重要', className: 'badge-important' };
    case 'frequent':
      return { text: '頻出', className: 'badge-frequent' };
    default:
      return { text: '基本', className: 'badge-basic' };
  }
}

// 検索マッチ判定
function matchSearch(article, query) {
  if (!query) return true;
  const q = query.toLowerCase();
  const fields = [
    article.title,
    article.text,
    article.practical,
    article.beginner,
    article.exam || '',
    `第${article.num}条`,
  ];
  return fields.some((f) => f && f.toLowerCase().includes(q));
}

// 改行を <br> に変換
function withLineBreaks(text) {
  if (!text) return null;
  return text.split('\n').map((line, i, arr) => (
    <span key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </span>
  ));
}

export default function LawGuideViewer({ flowSections, lawId }) {
  const [currentFlow, setCurrentFlow] = useState(flowSections[0]?.id || '');
  const [openGroups, setOpenGroups] = useState({});
  const [openArticleKey, setOpenArticleKey] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const articleRefs = useRef({});

  useEffect(() => {
    const id = setTimeout(() => setSearchQuery(searchInput.trim()), 120);
    return () => clearTimeout(id);
  }, [searchInput]);

  function changeFlow(id) {
    setCurrentFlow(id);
    setOpenGroups({});
    setOpenArticleKey(null);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0 });
  }

  function toggleGroup(gk) {
    setOpenGroups((prev) => {
      const next = { ...prev, [gk]: !prev[gk] };
      if (!next[gk] && openArticleKey && openArticleKey.startsWith(gk)) {
        setOpenArticleKey(null);
      }
      return next;
    });
  }

  function toggleArticle(ak) {
    const wasOpen = openArticleKey === ak;
    setOpenArticleKey(wasOpen ? null : ak);
    if (!wasOpen) {
      setTimeout(() => {
        const el = articleRefs.current[ak];
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 60);
    }
  }

  const section = useMemo(
    () => flowSections.find((s) => s.id === currentFlow) || flowSections[0],
    [flowSections, currentFlow],
  );

  const autoOpenGroups = useMemo(() => {
    if (!searchQuery || !section) return {};
    const m = {};
    section.groups.forEach((g, gi) => {
      const gk = `${section.id}-${gi}`;
      const visible = g.articles.filter((a) => matchSearch(a, searchQuery));
      if (visible.length) m[gk] = true;
    });
    return m;
  }, [searchQuery, section]);

  let visibleCount = 0;

  return (
    <>
      <div className="nav-bar">
        <div className="nav-content">
          {flowSections.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`nav-item ${currentFlow === s.id ? 'active' : ''}`}
              onClick={() => changeFlow(s.id)}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      <div className="search-bar">
        <div className="search-content">
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              className="search-input"
              type="text"
              placeholder="条文番号・キーワード・解説で検索...（例：177、抵当権、錯誤）"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <div className="search-count" id="searchCount" />
        </div>
      </div>

      <div className="content">
        <div className="flow-section">
          <div className="flow-header">
            <div className="flow-title">{section.title}</div>
            <div className="flow-desc">{section.desc}</div>
          </div>
          <div className="flow-body">
            {section.groups.map((group, gi) => {
              const gk = `${section.id}-${gi}`;
              const visible = group.articles.filter((a) => matchSearch(a, searchQuery));
              if (!visible.length) return null;
              const isGroupOpen = searchQuery
                ? !!autoOpenGroups[gk]
                : !!openGroups[gk];
              return (
                <div key={gk} className={`art-group ${isGroupOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="art-group-header"
                    onClick={() => toggleGroup(gk)}
                  >
                    <div className="art-group-title">{group.title}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span className="art-group-count">{visible.length}条</span>
                      <span className="art-group-arrow">▶</span>
                    </div>
                  </button>
                  <div className="art-group-body">
                    <div className="art-list">
                      {visible.map((a) => {
                        const ak = `${gk}-${a.num}`;
                        const isOpen = openArticleKey === ak;
                        const badge = getImportanceBadge(a.importance);
                        visibleCount++;
                        const numLabel = `第${a.num}条`;
                        return (
                          <div
                            key={ak}
                            className={`art-item ${isOpen ? 'open' : ''}`}
                            ref={(el) => {
                              if (el) articleRefs.current[ak] = el;
                            }}
                          >
                            <button
                              type="button"
                              className="art-header"
                              onClick={() => toggleArticle(ak)}
                            >
                              <div className="art-num">{numLabel}</div>
                              <div className="art-title-text">
                                {a.title}
                                <span className={`art-badge ${badge.className}`}>
                                  {badge.text}
                                </span>
                              </div>
                              <span className="art-arrow">▶</span>
                            </button>
                            {isOpen && (
                              <div className="art-detail">
                                <div className="art-text">
                                  <div className="art-text-header">
                                    <div className="art-text-title">📋 条文</div>
                                    <div className="art-links">
                                      <a
                                        className="api-link"
                                        href={getEgovApiUrl(lawId, a.num)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        API直接取得
                                      </a>
                                      <a
                                        className="egov-link"
                                        href={getEgovUrl(lawId)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        e-Gov法令検索
                                      </a>
                                    </div>
                                  </div>
                                  <div className="art-text-body">{a.text}</div>
                                </div>
                                <div className="explanations">
                                  <div className="exp-item exp-practical">
                                    <div className="exp-header">
                                      📘 実務・試験向け解説
                                    </div>
                                    <div className="exp-body">
                                      {withLineBreaks(a.practical)}
                                    </div>
                                  </div>
                                  <div className="exp-item exp-beginner">
                                    <div className="exp-header">
                                      🌱 初学者向け解説
                                    </div>
                                    <div className="exp-body">
                                      {withLineBreaks(a.beginner)}
                                    </div>
                                  </div>
                                  {a.exam && (
                                    <div className="exp-item exp-exam">
                                      <div className="exp-header">
                                        🎯 試験対策ポイント
                                      </div>
                                      <div className="exp-body">
                                        {withLineBreaks(a.exam)}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {searchQuery && visibleCount === 0 && (
          <div className="no-results">
            🔍 「{searchQuery}」に一致する条文が見つかりませんでした。
          </div>
        )}
        {searchQuery && visibleCount > 0 && (
          <div className="search-count" style={{ marginTop: '-1.5rem', marginBottom: '1.5rem' }}>
            {visibleCount}件の条文が見つかりました
          </div>
        )}
      </div>
    </>
  );
}

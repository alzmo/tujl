import Link from "next/link";
import type { Issue } from "./issues";

export function IssuePage({ issue }: { issue: Issue }) {
  const isLatest = issue.number === "069";
  return (
    <main className="site-shell">
      <header className="topbar">
        <Link className="wordmark" href="/"><span>TUJL</span><small>TECH UPDATES, JUST LATEST</small></Link>
        <nav aria-label="主导航"><a href={isLatest ? "#briefing" : "/"}>{isLatest ? "今日简报" : "返回今日"}</a>{["068", "067", "066", "065", "064", "063", "062", "061", "060", "059", "058", "057", "056", "055", "054", "053", "052", "051", "050", "049", "048", "047", "046", "045", "044", "043", "042", "041", "040", "039", "038", "037", "036", "035", "034", "033", "032", "031", "030", "029", "028", "027", "026", "025", "024", "023", "022", "021", "020", "019", "018", "017", "016", "015", "014", "013", "012", "011", "010", "009", "008", "007", "006", "005", "004", "003", "002", "001"].map((number) => <a key={number} href={`/issues/${number}`} aria-label={`第 ${number} 期 / Issue ${number}`}>{number}</a>)}<a href="https://rujf.ai">RUJF.AI</a></nav>
      </header>
      <section className="news-hero">
        <div><p className="eyebrow">DAILY AI BRIEFING · 每日 AI 简报</p><h1>让变化经过筛选，<br /><em>再抵达你。</em></h1></div>
        <div className="hero-aside"><time dateTime={issue.date}>{issue.date.replaceAll("-", ".")} · ISSUE {issue.number}</time><p>科技更新，只看最新。每天从可靠来源中挑选值得留下的 AI 动向；中英对照，链接回到原文，事实与判断分开。</p><a className="text-link" href="#briefing">READ THIS EDITION ↓</a></div>
      </section>
      <section className="briefing" id="briefing" aria-labelledby="briefing-title">
        <div className="briefing-heading"><div><p className="eyebrow">THE SIGNAL / 今日信号</p><h2 id="briefing-title">{issue.heading}</h2></div><p>{issue.stories.length} stories · {issue.readingTime}</p></div>
        <div className="story-list">{issue.stories.map((story) => <article className="story" key={story.index}><div className="story-number">{story.index}</div><div className="story-content"><div className="story-meta"><span>{story.label}</span><span>{story.source} · {story.date}</span></div><h3>{story.zhTitle}</h3><h4>{story.enTitle}</h4><div className="bilingual-copy"><p lang="zh-CN">{story.zh}</p><p lang="en">{story.en}</p></div><a className="source-link" href={story.href} target="_blank" rel="noopener noreferrer">阅读原始来源 / Read original source <span aria-hidden="true">↗</span></a></div></article>)}</div>
      </section>
      <section className="editor-note"><p className="eyebrow">EDITOR&apos;S NOTE · 编者的话</p><div><h2>{issue.noteTitle}</h2><div className="note-copy"><p>{issue.noteZh}</p><p lang="en">{issue.noteEn}</p></div></div></section>
      <section className="two-sites" aria-labelledby="two-sites-title"><p className="eyebrow">TWO ADDRESSES · 两个地址</p><h2 id="two-sites-title">一个保存我们，<br />一个观察世界。</h2><div className="site-pair"><a href="https://rujf.ai"><span>RUJF.AI</span><strong>Record Us Just Forever</strong><p>保存属于我们、记忆与创作的东西。</p><b aria-hidden="true">↗</b></a><div><span>TUJL.COM</span><strong>Tech Updates, Just Latest</strong><p>观察外面的世界，记录 AI 此刻正在发生什么。</p><b aria-hidden="true">●</b></div></div></section>
      <footer><p>© 2026 TUJL · Tech Updates, Just Latest.</p><p>Curated with care · Sources remain with their publishers.</p></footer>
      <a className="tujl-promotion-rail" aria-label="狗狗加速（站外推广链接）" title="狗狗加速 · 站外推广" href="https://down.dginv.click/#/register?code=7R92Q79A" target="_blank" rel="sponsored noopener noreferrer"><small>站外推广</small><strong>狗狗加速</strong></a>
    </main>
  );
}

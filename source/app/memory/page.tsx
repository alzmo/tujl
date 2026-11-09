import { desc, eq } from "drizzle-orm";
import Link from "next/link";
import { getDb } from "../../db";
import { memories } from "../../db/schema";
import { chatGPTSignOutPath, requireChatGPTUser } from "../chatgpt-auth";
import { MemoryComposer } from "./MemoryComposer";

export const dynamic = "force-dynamic";

export default async function MemoryPage() {
  const user = await requireChatGPTUser("/memory");
  const rows = await getDb()
    .select()
    .from(memories)
    .where(eq(memories.userId, user.userId))
    .orderBy(desc(memories.memoryDate), desc(memories.createdAt))
    .limit(60);

  return (
    <main className="memory-shell">
      <header className="topbar">
        <Link className="wordmark" href="/"><span>TUJL</span><small>PRIVATE MEMORY ARCHIVE</small></Link>
        <nav aria-label="记忆库导航">
          <span className="signed-in">{user.displayName}</span>
          <a className="nav-entry" href={chatGPTSignOutPath("/")}>退出</a>
        </nav>
      </header>

      <section className="memory-intro">
        <p className="eyebrow">YOUR PRIVATE TIMELINE</p>
        <h1>只有被留下的今天，<br />才有机会在未来重逢。</h1>
        <p>这里的原始记录默认私密。只有你主动勾选允许的片段，才会成为 RUJF.AI 的小说素材。</p>
      </section>

      <MemoryComposer />

      <section className="timeline" aria-labelledby="timeline-title">
        <div className="timeline-heading">
          <div><p className="eyebrow">TIMELINE</p><h2 id="timeline-title">已经留下的日子</h2></div>
          <span>{rows.length} 条记忆</span>
        </div>
        {rows.length === 0 ? (
          <div className="empty-memory"><p>这里还没有记录。</p><p>第一条记忆，可以只是一句“今天开始”。</p></div>
        ) : (
          <div className="timeline-list">
            {rows.map((memory) => (
              <article key={memory.id}>
                <div className="memory-meta"><time>{memory.memoryDate}</time><span>{memory.mood}</span></div>
                <div className="memory-body"><h3>{memory.title}</h3><p>{memory.content}</p></div>
                <div className="memory-permission">{memory.storyAllowed ? "可成为故事" : "仅自己可见"}</div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

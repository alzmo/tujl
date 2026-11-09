"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function MemoryComposer() {
  const router = useRouter();
  const today = new Date().toISOString().slice(0, 10);
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setStatus("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/memories", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        memoryDate: form.get("memoryDate"),
        title: form.get("title"),
        content: form.get("content"),
        mood: form.get("mood"),
        storyAllowed: form.get("storyAllowed") === "on",
      }),
    });
    const result = (await response.json()) as { error?: string };
    setSaving(false);
    if (!response.ok) {
      setStatus(result.error ?? "保存失败，请稍后重试。");
      return;
    }
    event.currentTarget.reset();
    setStatus("已经替未来的你保存好了。");
    router.refresh();
  }

  return (
    <form className="composer" onSubmit={submit}>
      <div className="composer-heading">
        <div>
          <p className="eyebrow">NEW MEMORY</p>
          <h2>今天，想留下什么？</h2>
        </div>
        <label className="date-field">
          <span>发生日期</span>
          <input name="memoryDate" type="date" defaultValue={today} required />
        </label>
      </div>
      <label>
        <span>给这段记忆一个名字</span>
        <input name="title" maxLength={120} placeholder="例如：另一个窗口" required />
      </label>
      <label>
        <span>发生了什么</span>
        <textarea name="content" maxLength={12000} rows={9} placeholder="不用写得完整。一个片段、一句话，也足够。" required />
      </label>
      <div className="composer-options">
        <label>
          <span>这段记忆的颜色</span>
          <select name="mood" defaultValue="平静">
            <option>平静</option><option>温暖</option><option>期待</option><option>难过</option><option>重要</option><option>未命名</option>
          </select>
        </label>
        <label className="story-consent">
          <input name="storyAllowed" type="checkbox" />
          <span>允许 AI 将这段记录写入《澈与 Allen》</span>
        </label>
      </div>
      <div className="composer-submit">
        <button disabled={saving} type="submit">{saving ? "正在保存…" : "保存这一天 →"}</button>
        <p aria-live="polite">{status}</p>
      </div>
    </form>
  );
}

import type { Metadata } from "next";
import type { Issue } from "./issues";

export function issueMetadata(issue: Issue): Metadata {
  const title = `TUJL ${issue.number} · ${issue.date} · AI 双语简报`;
  const description = `${issue.heading}：${issue.stories.map((story) => story.zhTitle).join("；")}`;
  return {
    title,
    description,
    openGraph: { title, description, type: "article", images: [] },
    twitter: { card: "summary", title, description, images: [] },
  };
}

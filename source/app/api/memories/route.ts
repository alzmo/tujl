import { desc, eq } from "drizzle-orm";
import { getChatGPTUser } from "../../chatgpt-auth";
import { getDb } from "../../../db";
import { memories } from "../../../db/schema";

function messageFor(error: unknown) {
  const message = error instanceof Error ? error.message : "保存失败";
  return message.includes("no such table") ? "记忆库正在初始化，请稍后再试。" : message;
}

export async function GET() {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "请先登录" }, { status: 401 });

  try {
    const rows = await getDb()
      .select()
      .from(memories)
      .where(eq(memories.userId, user.userId))
      .orderBy(desc(memories.memoryDate), desc(memories.createdAt))
      .limit(100);
    return Response.json({ memories: rows });
  } catch (error) {
    return Response.json({ error: messageFor(error) }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "请先登录" }, { status: 401 });

  try {
    const payload = (await request.json()) as {
      memoryDate?: string;
      title?: string;
      content?: string;
      mood?: string;
      storyAllowed?: boolean;
    };
    const memoryDate = payload.memoryDate?.trim() ?? "";
    const title = payload.title?.trim() ?? "";
    const content = payload.content?.trim() ?? "";
    const mood = payload.mood?.trim() || "平静";

    if (!/^\d{4}-\d{2}-\d{2}$/.test(memoryDate)) {
      return Response.json({ error: "请选择记录日期" }, { status: 400 });
    }
    if (!title || title.length > 120) {
      return Response.json({ error: "标题应为 1–120 个字符" }, { status: 400 });
    }
    if (!content || content.length > 12000) {
      return Response.json({ error: "正文应为 1–12000 个字符" }, { status: 400 });
    }

    const [saved] = await getDb()
      .insert(memories)
      .values({
        userId: user.userId,
        memoryDate,
        title,
        content,
        mood,
        storyAllowed: Boolean(payload.storyAllowed),
      })
      .returning();
    return Response.json({ memory: saved }, { status: 201 });
  } catch (error) {
    return Response.json({ error: messageFor(error) }, { status: 500 });
  }
}

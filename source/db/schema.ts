import { sql } from "drizzle-orm";
import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const memories = sqliteTable(
  "memories",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: text("user_id").notNull(),
    memoryDate: text("memory_date").notNull(),
    title: text("title").notNull(),
    content: text("content").notNull(),
    mood: text("mood").notNull().default("平静"),
    storyAllowed: integer("story_allowed", { mode: "boolean" })
      .notNull()
      .default(false),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [
    index("idx_memories_user_created").on(table.userId, table.createdAt),
    index("idx_memories_user_date").on(table.userId, table.memoryDate),
  ],
);

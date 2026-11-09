CREATE TABLE `memories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`memory_date` text NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`mood` text DEFAULT '平静' NOT NULL,
	`story_allowed` integer DEFAULT false NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_memories_user_created` ON `memories` (`user_id`,`created_at`);--> statement-breakpoint
CREATE INDEX `idx_memories_user_date` ON `memories` (`user_id`,`memory_date`);
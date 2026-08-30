CREATE TABLE `materials` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`material_type` text NOT NULL,
	`name` text NOT NULL,
	`quantity` real DEFAULT 0 NOT NULL,
	`unit` text DEFAULT 'unidades' NOT NULL,
	`photo_url` text DEFAULT '' NOT NULL,
	`notes` text DEFAULT '' NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `orders` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`order_type` text NOT NULL,
	`quantity` integer DEFAULT 1 NOT NULL,
	`client_name` text NOT NULL,
	`phone` text DEFAULT '' NOT NULL,
	`address` text DEFAULT '' NOT NULL,
	`delivery_date` text,
	`specifications` text DEFAULT '' NOT NULL,
	`finish` text DEFAULT '' NOT NULL,
	`status` text DEFAULT 'Pendiente' NOT NULL,
	`advance` real DEFAULT 0 NOT NULL,
	`balance` real DEFAULT 0 NOT NULL,
	`total` real DEFAULT 0 NOT NULL,
	`contact_method` text DEFAULT '' NOT NULL,
	`special_cross` text DEFAULT '' NOT NULL,
	`notes` text DEFAULT '' NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `relics` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`order_type` text DEFAULT '' NOT NULL,
	`client_name` text DEFAULT '' NOT NULL,
	`description` text DEFAULT '' NOT NULL,
	`photo_url` text NOT NULL,
	`created_at` text NOT NULL
);

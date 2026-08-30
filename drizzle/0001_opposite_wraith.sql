CREATE TABLE `inventory_movements` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`material_id` integer NOT NULL,
	`movement_type` text NOT NULL,
	`quantity` real NOT NULL,
	`reason` text DEFAULT '' NOT NULL,
	`movement_date` text NOT NULL,
	`created_at` text NOT NULL
);

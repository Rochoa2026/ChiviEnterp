import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const orders = sqliteTable("orders", {
  id: integer("id").primaryKey({ autoIncrement: true }), orderType: text("order_type").notNull(),
  quantity: integer("quantity").notNull().default(1), clientName: text("client_name").notNull(),
  phone: text("phone").notNull().default(""), address: text("address").notNull().default(""),
  deliveryDate: text("delivery_date"), specifications: text("specifications").notNull().default(""),
  finish: text("finish").notNull().default(""), status: text("status").notNull().default("Pendiente"),
  advance: real("advance").notNull().default(0), balance: real("balance").notNull().default(0),
  total: real("total").notNull().default(0), contactMethod: text("contact_method").notNull().default(""),
  specialCross: text("special_cross").notNull().default(""), notes: text("notes").notNull().default(""),
  createdAt: text("created_at").notNull(),
});

export const materials = sqliteTable("materials", {
  id: integer("id").primaryKey({ autoIncrement: true }), materialType: text("material_type").notNull(),
  name: text("name").notNull(), quantity: real("quantity").notNull().default(0),
  unit: text("unit").notNull().default("unidades"), photoUrl: text("photo_url").notNull().default(""),
  notes: text("notes").notNull().default(""), createdAt: text("created_at").notNull(),
});

export const relics = sqliteTable("relics", {
  id: integer("id").primaryKey({ autoIncrement: true }), title: text("title").notNull(),
  orderType: text("order_type").notNull().default(""), clientName: text("client_name").notNull().default(""),
  description: text("description").notNull().default(""), photoUrl: text("photo_url").notNull(),
  createdAt: text("created_at").notNull(),
});

export const inventoryMovements = sqliteTable("inventory_movements", {
  id: integer("id").primaryKey({ autoIncrement: true }), materialId: integer("material_id").notNull(),
  movementType: text("movement_type").notNull(), quantity: real("quantity").notNull(),
  reason: text("reason").notNull().default(""), movementDate: text("movement_date").notNull(),
  createdAt: text("created_at").notNull(),
});

export const appUsers = sqliteTable("app_users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull().unique(),
  name: text("name").notNull().default(""),
  role: text("role").notNull().default("Consulta"),
  active: integer("active", { mode: "boolean" }).notNull().default(true),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});

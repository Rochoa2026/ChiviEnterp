import { desc, eq } from "drizzle-orm";
import { getDb } from "@/db";
import { orders } from "@/db/schema";
import { authorize } from "@/app/lib/access";
export async function GET(req:Request) { const a=await authorize(req);if(a.response)return a.response;return Response.json({ orders: await getDb().select().from(orders).orderBy(desc(orders.id)) }); }
export async function POST(req: Request) { const a=await authorize(req,"Operador");if(a.response)return a.response;const p=await req.json(); const [order]=await getDb().insert(orders).values({...p,createdAt:new Date().toISOString()}).returning(); return Response.json({order},{status:201}); }
export async function PATCH(req: Request) { const a=await authorize(req,"Operador");if(a.response)return a.response;const {id,...changes}=await req.json(); const [order]=await getDb().update(orders).set(changes).where(eq(orders.id,Number(id))).returning(); return Response.json({order}); }
export async function DELETE(req: Request) { const a=await authorize(req,"Administrador");if(a.response)return a.response;const id=Number(new URL(req.url).searchParams.get("id")); await getDb().delete(orders).where(eq(orders.id,id)); return Response.json({ok:true}); }

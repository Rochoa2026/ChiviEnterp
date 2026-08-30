import { desc, eq } from "drizzle-orm";
import { getDb } from "@/db";
import { materials } from "@/db/schema";
import { authorize } from "@/app/lib/access";
export async function GET(req:Request) { const a=await authorize(req);if(a.response)return a.response;return Response.json({ materials: await getDb().select().from(materials).orderBy(desc(materials.id)) }); }
export async function POST(req: Request) { const a=await authorize(req,"Operador");if(a.response)return a.response;const p=await req.json(); const [material]=await getDb().insert(materials).values({...p,createdAt:new Date().toISOString()}).returning(); return Response.json({material},{status:201}); }
export async function PATCH(req: Request) { const a=await authorize(req,"Operador");if(a.response)return a.response;const {id,...changes}=await req.json(); const [material]=await getDb().update(materials).set(changes).where(eq(materials.id,Number(id))).returning(); return Response.json({material}); }
export async function DELETE(req: Request) { const a=await authorize(req,"Administrador");if(a.response)return a.response;const id=Number(new URL(req.url).searchParams.get("id")); await getDb().delete(materials).where(eq(materials.id,id)); return Response.json({ok:true}); }

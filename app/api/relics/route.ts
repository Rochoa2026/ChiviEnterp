import { desc, eq } from "drizzle-orm";
import { getDb } from "@/db";
import { relics } from "@/db/schema";
import { authorize } from "@/app/lib/access";
export async function GET(req:Request) { const a=await authorize(req);if(a.response)return a.response;return Response.json({ relics: await getDb().select().from(relics).orderBy(desc(relics.id)) }); }
export async function POST(req: Request) { const a=await authorize(req,"Operador");if(a.response)return a.response;const p=await req.json(); const [relic]=await getDb().insert(relics).values({...p,createdAt:new Date().toISOString()}).returning(); return Response.json({relic},{status:201}); }
export async function DELETE(req: Request) { const a=await authorize(req,"Administrador");if(a.response)return a.response;const id=Number(new URL(req.url).searchParams.get("id")); await getDb().delete(relics).where(eq(relics.id,id)); return Response.json({ok:true}); }

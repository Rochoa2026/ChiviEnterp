import { identity } from "@/app/lib/access";
export async function GET(req:Request){const user=await identity(req);return user?Response.json({user}):Response.json({error:"Usuario no autorizado"},{status:403});}

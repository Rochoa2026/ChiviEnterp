import { authorize } from "@/app/lib/access";
export async function POST(req:Request){const a=await authorize(req,"Administrador");if(a.response)return a.response;return Response.json({ok:true});}

import { env } from "cloudflare:workers";
import { authorize } from "@/app/lib/access";
export async function POST(req: Request) {
  const a=await authorize(req,"Operador");if(a.response)return a.response;
  const form=await req.formData(); const file=form.get("file");
  if (!(file instanceof File)||!file.type.startsWith("image/")) return Response.json({error:"Seleccione una imagen válida"},{status:400});
  if (file.size>6_000_000) return Response.json({error:"La imagen no debe superar 6 MB"},{status:400});
  const ext=file.name.split(".").pop()?.replace(/[^a-z0-9]/gi,"")||"jpg"; const key=`photos/${crypto.randomUUID()}.${ext}`;
  await env.BUCKET.put(key,file.stream(),{httpMetadata:{contentType:file.type}});
  return Response.json({url:`/api/files?key=${encodeURIComponent(key)}`});
}

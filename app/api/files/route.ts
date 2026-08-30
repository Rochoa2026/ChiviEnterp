import { env } from "cloudflare:workers";
import { authorize } from "@/app/lib/access";
export async function GET(req: Request) {
  const a=await authorize(req);if(a.response)return a.response;
  const key=new URL(req.url).searchParams.get("key"); if(!key) return new Response("No encontrado",{status:404});
  const object=await env.BUCKET.get(key); if(!object) return new Response("No encontrado",{status:404});
  return new Response(object.body,{headers:{"content-type":object.httpMetadata?.contentType||"image/jpeg","cache-control":"public, max-age=31536000"}});
}

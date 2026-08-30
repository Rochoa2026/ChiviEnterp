import { env } from "cloudflare:workers";
import { authorize } from "@/app/lib/access";

export async function GET(req:Request){ const a=await authorize(req);if(a.response)return a.response;
 const data=await env.DB.prepare(`SELECT m.id,m.material_id AS materialId,m.movement_type AS movementType,m.quantity,m.reason,m.movement_date AS movementDate,t.name AS materialName,t.unit FROM inventory_movements m JOIN materials t ON t.id=m.material_id ORDER BY m.id DESC LIMIT 200`).all();
 return Response.json({movements:data.results});
}
export async function POST(req:Request){
 const a=await authorize(req,"Operador");if(a.response)return a.response;
 const p=await req.json() as {materialId?:number;movementType?:string;quantity?:number;reason?:string;movementDate?:string};
 const materialId=Number(p.materialId),quantity=Number(p.quantity); const movementType=p.movementType;
 if(!materialId||!quantity||quantity<=0||!['Entrada','Salida'].includes(movementType||''))return Response.json({error:'Datos de movimiento inválidos'},{status:400});
 const material=await env.DB.prepare('SELECT quantity FROM materials WHERE id = ?').bind(materialId).first<{quantity:number}>();
 if(!material)return Response.json({error:'Material no encontrado'},{status:404});
 if(movementType==='Salida'&&quantity>Number(material.quantity))return Response.json({error:'La salida supera la existencia disponible'},{status:400});
 const delta=movementType==='Entrada'?quantity:-quantity; const now=new Date().toISOString();
 await env.DB.batch([
  env.DB.prepare('UPDATE materials SET quantity = quantity + ? WHERE id = ?').bind(delta,materialId),
  env.DB.prepare('INSERT INTO inventory_movements (material_id,movement_type,quantity,reason,movement_date,created_at) VALUES (?,?,?,?,?,?)').bind(materialId,movementType,quantity,p.reason||'',p.movementDate||now.slice(0,10),now)
 ]);
 return Response.json({ok:true},{status:201});
}

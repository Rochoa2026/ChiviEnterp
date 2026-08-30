import { env } from "cloudflare:workers";

export type AppRole = "Consulta" | "Operador" | "Administrador";
export type AppIdentity = { email:string; name:string; role:AppRole };

const BUILTIN_ADMINS = new Set([
  "rainerochoamgt@gmail.com",
  "sochoa87@gmail.com",
]);

function emailFrom(request:Request){ return (request.headers.get("oai-authenticated-user-email")||"").trim().toLowerCase(); }
function nameFrom(request:Request,email:string){
  const encoded=request.headers.get("oai-authenticated-user-full-name");
  if(encoded&&request.headers.get("oai-authenticated-user-full-name-encoding")==="percent-encoded-utf-8")try{return decodeURIComponent(encoded)}catch{}
  return email;
}

export async function identity(request:Request):Promise<AppIdentity|null>{
  const email=emailFrom(request); if(!email)return null;
  if(BUILTIN_ADMINS.has(email))return {email,name:nameFrom(request,email),role:"Administrador"};
  const row=await env.DB.prepare("SELECT email,name,role,active FROM app_users WHERE lower(email)=? LIMIT 1").bind(email).first<{email:string;name:string;role:AppRole;active:number}>();
  if(!row||!row.active)return null;
  return {email:row.email,name:row.name||nameFrom(request,email),role:row.role};
}

export async function authorize(request:Request,minimum:AppRole="Consulta"){
  const user=await identity(request);
  if(!user)return {user:null,response:Response.json({error:"Usuario no autorizado"},{status:403})};
  const rank={Consulta:1,Operador:2,Administrador:3};
  if(rank[user.role]<rank[minimum])return {user,response:Response.json({error:"No tiene permiso para realizar esta acción"},{status:403})};
  return {user,response:null};
}

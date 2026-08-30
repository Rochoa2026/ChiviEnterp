import RosariosApp from "./RosariosApp";
import { chatGPTSignInPath, getChatGPTUser } from "./chatgpt-auth";
export const dynamic="force-dynamic";
export default async function Page(){const user=await getChatGPTUser();if(!user)return <main className="signin"><img src="/logo-little-flower-512.png" alt="Rosarios Little Flower"/><h1>Rosarios Little Flower</h1><p>Inicia sesión con la cuenta autorizada para consultar y actualizar la información.</p><a href={chatGPTSignInPath("/")} target="_top">Iniciar sesión con ChatGPT</a></main>;return <RosariosApp/>}

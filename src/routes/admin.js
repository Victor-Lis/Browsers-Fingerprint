import { unAuthorized } from "../utils/admin/unauth-page.js";
import { generateTable } from "../utils/admin/generate-table-page.js";

export async function adminRequest(request, env) {
  if (!env.ADMIN_USERNAME || !env.ADMIN_PASSWORD) {
    return new Response("Autenticação do administrador não configurada.", {
      status: 500,
    });
  }

  const url = new URL(request.url);
  const { username, password } = Object.fromEntries(url.searchParams);

  if (username !== env.ADMIN_USERNAME || password !== env.ADMIN_PASSWORD) {
    return new Response(unAuthorized(), {
      status: 401,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  try {
    const stmt = env.DB.prepare(
      "SELECT * FROM visitor_fingerprints ORDER BY timestamp DESC LIMIT 100"
    );
    const { results } = await stmt.all();

    return new Response(generateTable(results), {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  } catch (e) {
    console.error("Erro ao buscar no D1:", e.message);
    return new Response(
      `Erro interno do servidor ao buscar dados: ${e.message}`,
      { status: 500 }
    );
  }
}
import { fingerprintCapturedPage } from "../utils/fingerprint/fingerprint-captured-page";

export async function fingerprintRequest(request, env) {
  const country = request.cf?.country || "N/A";
  const region = request.cf?.region || "N/A";
  const city = request.cf?.city || "N/A";
  const isp = request.cf?.asOrganization || "N/A";
  const colo = request.cf?.colo || "N/A";

  const ip_address = request.headers.get("cf-connecting-ip");
  const user_agent = request.headers.get("user-agent");
  const accept_language = request.headers.get("accept-language");
  const platform =
    request.headers.get("sec-ch-ua-platform")?.replace(/"/g, "") || "N/A";

  try {
    const insertQuery = env.DB.prepare(`
      INSERT INTO visitor_fingerprints (ip_address, user_agent, accept_language, platform, country, region, city, isp, colo)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    await insertQuery
      .bind(
        ip_address,
        user_agent,
        accept_language,
        platform,
        country,
        region,
        city,
        isp,
        colo
      )
      .run();

    return new Response(fingerprintCapturedPage(), {
      headers: {
        "content-type": "text/html; charset=UTF-8",
      },
    });
  } catch (e) {
    console.error("Erro ao inserir no D1:", e);
    return new Response(`Erro no banco de dados: ${e.message}`, {
      status: 500,
    });
  }
}

import { adminRequest } from "./routes/admin";
import { fingerprintRequest } from "./routes/fingerprint";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return await fingerprintRequest(request, env);
    } else if (url.pathname === "/admin") {
      return await adminRequest(request, env);
    } else {
      return new Response("<h1>Not Found</h1>", {
        status: 404,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }
  },
};

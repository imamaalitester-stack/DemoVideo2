import { db } from "../db.js";

const API_AUTH_TOKEN = process.env.API_AUTH_TOKEN;
if (!API_AUTH_TOKEN) {
  throw new Error("Missing required environment variable: API_AUTH_TOKEN");
}

export default async function orderRoutes(fastify) {
  fastify.get("/orders", async () => db.orders.list());

  fastify.delete("/orders/:id", async (request, reply) => {
    const authHeader = request.headers.authorization || "";
    const [scheme, token] = authHeader.split(" ");
    if (scheme !== "Bearer" || token !== API_AUTH_TOKEN) {
      reply.code(401);
      return { error: "Unauthorized" };
    }

    db.orders.delete(request.params.id);
    return { ok: true };
  });
}

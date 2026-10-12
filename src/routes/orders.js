import { db } from "../db.js";

export default async function orderRoutes(fastify) {
  fastify.get("/orders", async () => db.orders.list());

  // FAULT: deletes data with no authentication.
  fastify.delete("/orders/:id", async (request) => {
    db.orders.delete(request.params.id);
    return { ok: true };
  });
}

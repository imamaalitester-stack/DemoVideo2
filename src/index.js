import Fastify from "fastify";
import orderRoutes from "./routes/orders.js";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
if (!STRIPE_SECRET_KEY) {
  throw new Error("Missing required environment variable: STRIPE_SECRET_KEY");
}

const app = Fastify({ logger: true });
await app.register(orderRoutes, { prefix: "/api" });
app.get("/", async () => ({ app: "skeamo-test-fastify", stripe: !!STRIPE_SECRET_KEY }));

await app.listen({ port: Number(process.env.PORT) || 3000, host: "0.0.0.0" });

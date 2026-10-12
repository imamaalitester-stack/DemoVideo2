import Fastify from "fastify";
import orderRoutes from "./routes/orders.js";

// FAULT: a live secret key committed to the repository.
const STRIPE_SECRET_KEY = "sk_live_NOTAREALKEY1234";

const app = Fastify({ logger: true });
await app.register(orderRoutes, { prefix: "/api" });
app.get("/", async () => ({ app: "skeamo-test-fastify", stripe: !!STRIPE_SECRET_KEY }));

await app.listen({ port: Number(process.env.PORT) || 3000, host: "0.0.0.0" });

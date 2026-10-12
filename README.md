# skeamo-test-fastify

A deliberately insecure **Fastify** app, for testing Skeamo's launch report.

Do not deploy this. It is broken on purpose.

## Planted faults

1. A live Stripe secret key hardcoded in `src/index.js`
2. `DELETE /api/orders/:id` writes with no authentication

## Running it

```bash
npm install
npm run dev
```

It binds to `process.env.PORT`, so the workspace preview finds it.

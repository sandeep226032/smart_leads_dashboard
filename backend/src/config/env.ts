// src/config/env.ts
/*
  Why not just use process.env.ANYTHING directly?

  Problem with raw process.env:
  → Type is always string | undefined
  → You find missing vars at runtime, not startup
  → No autocomplete

  With this config:
  → Validated at startup (fail fast)
  → Fully typed (autocomplete works)
  → One place to see all env vars
*/

import { z } from "zod"
import dotenv from "dotenv"

dotenv.config()

const envSchema = z.object({
  NODE_ENV:     z.enum(["development", "production", "test"]),
  PORT:         z.coerce.number().default(5000),
  MONGODB_URI:  z.string().min(1, "MONGODB_URI is required"),
  JWT_SECRET:   z.string().min(32, "JWT_SECRET must be at least 32 chars"),
  JWT_EXPIRES_IN: z.string().default("7d"),
  FRONTEND_URL: z.string().default("http://localhost:3000"),
})

const parsed = envSchema.safeParse(process.env)

if (!parsed.success) {
  console.error("❌ Invalid environment variables:")
  console.error(parsed.error.flatten().fieldErrors)
  process.exit(1)   // crash immediately with clear message
}

export const env = parsed.data

/*
  Usage everywhere:
  import { env } from "@config/env"
  env.MONGODB_URI  ← fully typed, autocomplete works
  env.PORT         ← number, not string
*/
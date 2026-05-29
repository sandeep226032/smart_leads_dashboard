// src/app.ts

import express, { Application } from "express"
import cors                      from "cors"
import rateLimit                 from "express-rate-limit"
import { env }                   from "./config/env.js"
// import { apiRouter }             from "@modules/index.js"
// import { errorMiddleware }       from "@middleware/error.middleware"

export function createApp(): Application {
  const app = express()

  // ── Middleware ───────────────────────────────────
  app.use(express.json({ limit: "10kb" }))  // body size limit
  app.use(express.urlencoded({ extended: true }))

  // CORS — only allow your frontend
  app.use(cors({
    origin:      env.FRONTEND_URL,
    credentials: true,
    methods:     ["GET", "POST", "PUT", "DELETE", "PATCH"],
  }))

  // Rate limiting — prevent abuse
  app.use("/api", rateLimit({
    windowMs: 15 * 60 * 1000,  // 15 minutes
    max:      100,              // 100 requests per window
    message:  "Too many requests, please try again later",
  }))

  // ── Routes ───────────────────────────────────────
//   app.use("/api/v1", apiRouter)

  // ── Health check ─────────────────────────────────
  app.get("/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() })
  })

  // ── Global error handler (must be last) ──────────
//   app.use(errorMiddleware)

  return app
}
// src/main.ts

import { connectDatabase } from "./config/database.js"
import { env }             from "./config/env.js"
import { createApp }       from "./app.js"

async function bootstrap() {
  // 1. Connect to database first
  await connectDatabase()

  // 2. Create Express app
  const app = createApp()

  // 3. Start listening
  const server = app.listen(env.PORT, () => {
    console.log(`✅ Server running on port ${env.PORT}`)
    console.log(`✅ Environment: ${env.NODE_ENV}`)
  })

  // 4. Graceful shutdown
  // When Docker stops the container it sends SIGTERM
  // Without this: Docker kills process after 10s timeout
  // With this: we close connections cleanly first
  process.on("SIGTERM", () => {
    console.log("SIGTERM received. Shutting down gracefully...")
    server.close(() => {
      console.log("Server closed")
      process.exit(0)
    })
  })
}

bootstrap()
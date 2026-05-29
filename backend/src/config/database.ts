// src/config/database.ts

import mongoose from "mongoose"
import dns from "node:dns"
import { env } from "./env.js";

export async function connectDatabase(): Promise<void> {
  try {
    // Set Google DNS servers (8.8.8.8, 8.8.4.4)
    dns.setServers(["8.8.8.8", "8.8.4.4"])

    mongoose.set("strictQuery", true)

    await mongoose.connect(env.MONGODB_URI, {
      dbName: "smart_leads",
    })

    console.log("✅ MongoDB connected")

    // Handle connection events
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err)
    })

    mongoose.connection.on("disconnected", () => {
      console.warn("MongoDB disconnected. Attempting reconnect...")
    })

  } catch (error) {
    console.error("❌ MongoDB connection failed:", error)
    process.exit(1)  // no DB = no point running
  }
}
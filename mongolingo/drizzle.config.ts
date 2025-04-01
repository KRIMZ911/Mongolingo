import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: ".db/schema.ts",
  out: "./drizzle",
  driver: "d1-http",
  dialect: "sqlite",
  dbCredentials: {
    accountId: process.env.D1_ACCOUNT_ID!,
    databaseId: process.env.D1_DATABASE_ID!,
    token: process.env.D1_TOKEN!,
  },
} satisfies Config;

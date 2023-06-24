import type{ Config } from 'drizzle-kit'
import dotenv from 'dotenv'

dotenv.config({
    path: '.env.local'
})

export default {
    schema: "./src/db/schema.ts",
    out: "./drizzle",
} satisfies Config
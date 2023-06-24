import type{ Config } from 'drizzle-kit'
import dotenv from 'dotenv'

dotenv.config({
    path: '.env.local'
})

// not use
// "generate": "drizzle-kit generate:pg --out migrations-folder --schema src/db/schema.ts"
export default {
    schema: "./src/db/schema.ts",
    out: "./drizzle",
} satisfies Config
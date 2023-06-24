import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

// connectionString: 'postgres://user:password@host:port/db'
const pool = new Pool({
  connectionString: process.env.DATABASE_CONNECTION_STRING,
});

export const db = drizzle(pool);

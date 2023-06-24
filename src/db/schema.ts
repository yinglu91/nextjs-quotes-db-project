import { InferModel } from 'drizzle-orm';
import { pgTable, serial, integer, varchar } from 'drizzle-orm/pg-core';
// import { Pool } from 'pg';
// import { drizzle } from 'drizzle-orm/node-postgres';

export const authors = pgTable('authors', {
  id: serial('id').primaryKey(),
  author: varchar('author', { length: 50 }).notNull(),
});

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  category: varchar('category', { length: 50 }).notNull(),
});

export const quotes = pgTable('quotes', {
  id: serial('id').primaryKey(),
  quote: varchar('quote', { length: 255 }).notNull(),
  authorId: integer('author_id')
    .references(() => authors.id)
    .notNull(),
  categoryId: integer('category_id')
    .references(() => categories.id)
    .notNull(),
}); 

export type Authors = InferModel<typeof authors>;
export type Categories = InferModel<typeof categories>;
export type Quotes = InferModel<typeof quotes>;

// const pool = new Pool({
//     connectionString: 'postgres://user:password@host:port/db',
//   });

/*
const pool = new Pool({
    connectionString: 'postgres://postgres:postgres@localhost:5432/quotesdb',
  });
  
export const db = drizzle(pool);
*/
// https://www.npmjs.com/package/drizzle-orm

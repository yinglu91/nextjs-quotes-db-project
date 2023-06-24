import { InferModel } from 'drizzle-orm';
import { pgTable, serial, integer, varchar } from 'drizzle-orm/pg-core';

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

// https://www.npmjs.com/package/drizzle-orm

/*
CREATE DATABASE quotesdb;

CREATE TABLE authors(
	id serial PRIMARY KEY,
	author VARCHAR ( 50 ) UNIQUE NOT NULL
);

INSERT INTO authors(author)
VALUES('Mark Twain');

CREATE TABLE categories (
	id serial PRIMARY KEY,
	category VARCHAR ( 50 ) UNIQUE NOT NULL
);

INSERT INTO categories(category)
VALUES('Death');

CREATE TABLE quotes (
	id serial PRIMARY KEY,
	quote VARCHAR ( 255 ) UNIQUE NOT NULL,
	author_id int,
	category_id int,
	
	foreign key(author_id) references authors(id),
    foreign key(category_id) references categories(id)
);

INSERT INTO quotes(author_id, category_id, quote)
VALUES(1, 1,
'Do the thing you fear most and the death of fear is certain.');

commit;

*/

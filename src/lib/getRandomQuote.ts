import { eq } from 'drizzle-orm';
import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { quotes, authors, categories } from '@/db/schema';

const prevQuoteObj = {
  prev: 1,
  setPrev: function (num: number) {
    this.prev = num;
  },
};

const getRandomQuote = async (): Promise<Quote> => {
  // for query purposes
  const queryClient = postgres(
    'postgres://postgres:postgres@localhost:5432/quotesdb'
  );
  const db: PostgresJsDatabase = drizzle(queryClient);

  const results: Quote[] = await db
    .select({
      quote: quotes.quote,
      author: authors.author,
      category: categories.category,
    })
    .from(quotes)
    .innerJoin(authors, eq(quotes.authorId, authors.id))
    .innerJoin(categories, eq(quotes.categoryId, categories.id));

  let randomIndex = prevQuoteObj.prev;

  while (randomIndex === prevQuoteObj.prev) {
    randomIndex = Math.floor(Math.random() * results.length);
  }

  prevQuoteObj.setPrev(randomIndex);

  return results[randomIndex];
};

export default getRandomQuote;

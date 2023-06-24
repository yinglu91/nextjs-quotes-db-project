import { config } from "@/db/config";
import { eq } from "drizzle-orm";
import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { quotes, authors, categories } from "@/db/schema";

export default async function getAllQuotes(): Promise<Quote[]> {
  // for query purposes
  const queryClient = postgres(
    "postgres://postgres:postgres@localhost:5432/quotesdb"
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

  return results;
}

import getRandomQuote from '@/lib/getRandomQuote'
import Quote1 from './components/Quote'

export default async function Home() {
  // can't call this server's api route here!!!, this run at build time.
  // but client component can.
  const randomQuote = await getRandomQuote()  

  return <Quote1 randomQuote={randomQuote} />
}
import getRandomQuote from '@/lib/getRandomQuote';
import Quote from './components/Quote';

// http://localhost:3000/
const Home = async () => {
  const randomQuote = await getRandomQuote();

  return <Quote randomQuote={randomQuote} />;
};

export default Home;

/*
Note:
use rafce tab to create component

Server component (this one is, by default) can't call this server's api route here!!!, 
this run at build time, but client component can.
*/

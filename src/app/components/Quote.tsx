'use client';

import { Poppins, Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Porps {
  randomQuote: Quote;
}

const QuoteComponent = ({ randomQuote }: Porps) => {
  const { quote, author, category } = randomQuote;

  const router = useRouter();
  const [fade, setFade] = useState(false);

  const handleRefreshQuote = () => {
    setFade(true);
    setTimeout(() => router.refresh(), 1000);
    setTimeout(() => setFade(false), 1200);
  };

  return (
    <section
      className={`flex flex-col justify-center items-center transition-opacity ease-in-out duration-1000 ${
        fade ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className='flex flex-col justify-center items-center'>
        <button
          type='submit'
          className='p-3 mb-4 text-xl rounded-2xl text-black border-solid border-black border-2 max-w-xs bg-slate-200 hover:cursor-pointer hover:bg-white mt-6'
          onClick={handleRefreshQuote}
        >
          Refresh Quote
        </button>

        <p className={`text-2xl text-center mt-4 ${poppins.className}`}>
          Author: {author}
        </p>

        <p className={`text-2xl text-center mt-4 ${poppins.className}`}>
          Category: {category}
        </p>
      </div>

      <div className='grow mt-24'>
        <p
          className={`text-5xl text-center max-w-3xl leading-normal ${roboto.className}`}
        >
          {quote}
        </p>
      </div>
    </section>
  );
}

export default QuoteComponent

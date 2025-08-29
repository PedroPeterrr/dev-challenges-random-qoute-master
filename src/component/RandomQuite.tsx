import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import type { Quote } from "../api/quotes";
import { fetchQuotes } from "../api/quotes";
import '../index.css';

import {
  ShareIcon,
  LinkIcon,
  BackgroundImage
} from "../resources/index";

const RandomQuote = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

useEffect(() => { 
  const getQuotes = async () => { 
    const data = await fetchQuotes(); 
    setQuotes(data); 
    setCurrentQuote(data[Math.floor(Math.random() * data.length)]); 
  }; 
  getQuotes(); 
}, []);

  const getNewQuote = () => {
    if (!quotes.length) return;
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setCopied(false);
  };

  const copyQuote = async () => {
    if (!currentQuote) return;
    try {
      await navigator.clipboard.writeText(`"${currentQuote.quote}" — ${currentQuote.author}`);
      setCopied(true);
    } catch (error: unknown ) {
      toast.error((error as Error).message || "Failed to copy quote");
    }
  };

  if (!currentQuote) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-2xl font-bold text-white animate-pulse">
          Loading...
        </p>
      </div>
    );
  }
  return (
    <section>
      <header
        className="container"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <p className="font-bold text-[16px]">{currentQuote.author}</p>

        <p className="flex gap-2 justify-center">
          {currentQuote.tags.map((tags: string, index: number) => (
            <span
                key={index}
                className="mb-2 capitalize text-[var(--secondary-color)] border rounded-full 
                          px-3.5 py-1 text-[10px] leading-none flex items-center justify-center"
            >
              {tags}
            </span>
          ))}
        </p>

        <p className="text-2xl font-light mb-2">"{currentQuote.quote}"</p>
      </header>

      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={getNewQuote}
          className="px-4 py-2 bg-[var(--primary-color)] text-white rounded-xl hover:bg-[var(--primary-hover)]"
        >
          Random
          <img src={ShareIcon} alt="Share" className="inline-block ml-2" />
        </button>
        
        <button
          onClick={copyQuote}
          className="px-4 py-2 bg-[var(--primary-color)] text-white rounded-xl hover:bg-[var(--primary-hover)]"
        >
          {copied ? "Copied!" : "Share"}
          <img src={LinkIcon} alt="Link" className="inline-block ml-2" />
        </button>
      </div>
    </section>
  );
};

export default RandomQuote;

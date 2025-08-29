import { useEffect, useState } from "react";
import type { Quote } from "../api/quotes";
import { fetchQuotes } from "../api/quotes";
import ShareIcon from "../resources/regroup.svg";
import LinkIcon from "../resources/link.svg";
import '../index.css';
import Bg from "../resources/bg-image-random-quote.png";

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
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  if (!currentQuote) return <p>Loading...</p>;

  return (
    <>
      <div
         className="
    gap-3 flex flex-col text-[var(--text-color)] bg-[var(--primary-color)] 
    rounded-xl shadow-lg text-center
    p-4 sm:p-5 md:p-6 lg:p-7
    w-[350px] md:w-[400px] lg:w-[500px]
    transition-all duration-500 ease-in-out
  "
        style={{
          backgroundImage: `url(${Bg})`,
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
      </div>

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
    </>
  );
};

export default RandomQuote;

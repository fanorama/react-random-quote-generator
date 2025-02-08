import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Share2 } from "lucide-react";
import "./App.css";

type Quote = {
  id: number;
  quote: string;
  author: string;
};

function App() {
  const [quote, setQuote] = useState<Quote>();
  const [isLoading, setIsLoading] = useState(false);

  function getRandomQuote() {
    setIsLoading(true);
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote);
        setIsLoading(false);
      });
  }

  function handleShareQuote() {
    navigator.clipboard.writeText(`"${quote?.quote}" - ${quote?.author}`);
    toast.success("Quote copied to clipboard");
  }

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 p-6">
      <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
        <div
          className={`flex flex-col items-start transition-all duration-400 ease-out ${isLoading ? "opacity-0" : "opacity-100"}`}
        >
          <div className="mb-6 text-xl font-medium text-neutral-500 uppercase">
            Quote of the moment #{quote?.id}
          </div>
          <div className="mb-6 text-left text-4xl leading-14 font-light text-neutral-600">
            "{quote?.quote.trim()}"
          </div>
          <div className="mb-8 text-xl text-neutral-600">
            {" "}
            —— {quote?.author}
          </div>
          <div className="flex w-full items-center justify-between">
            <button
              className="cursor-pointer rounded-lg bg-black px-4 py-3 text-lg font-bold text-white transition-shadow duration-200 hover:shadow-lg"
              onClick={getRandomQuote}
            >
              New Quote
            </button>
            <button className="cursor-pointer" onClick={handleShareQuote}>
              <Share2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

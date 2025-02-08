import { useState } from "react";
import { toast } from "sonner";
import { Share2 } from "lucide-react";
import "./App.css";

function App() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6">
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col items-start">
          <div className="mb-6 text-xl font-medium text-neutral-500 uppercase">
            Quote of the moment
          </div>
          <div className="mb-6 text-4xl font-light text-neutral-600">
            "This is the quote"
          </div>
          <div className="mb-8 text-xl text-neutral-600"> —— Charles Fano</div>
          <div className="flex w-full items-center justify-between">
            <button className="rounded-lg bg-black px-4 py-3 text-lg font-bold text-white">
              New Quote
            </button>
            <button>
              <Share2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import BannerAshik from "@/components/ui/BannerAshik";
import PortfolioGridLoading from "@/components/ui/PortfolioGridLoading";
import React, { useEffect, useState } from "react";

export default function PortfolioGrid() {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch and parse markdown
  useEffect(() => {
    async function fetchPortfolios() {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/emmabostian/developer-portfolios/master/README.md"
        );
        const markdown = await res.text();

        // Regex to find [Name](URL)
        const regex = /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g;
        let match;
        const results = [];
        while ((match = regex.exec(markdown)) !== null) {
          results.push({ name: match[1], url: match[2] });
        }
        setPortfolios(results);

      } catch (error) {
        console.error("Failed to fetch portfolios:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPortfolios();
  }, []);

  if (loading)
    return (
        <PortfolioGridLoading/>
    );
console.log(portfolios)
  return (
 <> 
 <BannerAshik/>
 <div className="py-12 px-4 bg-base-100 dark:bg-[#18122B]">
    
  <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-[#18122B] dark:text-white">
    Developer <span className="text-orange-500">Portfolios</span>
  </h1>
  <p className="text-center text-gray-500 dark:text-gray-300 mb-8">
  Looking for portfolio ideas? Browse 1000+ top developer portfolios and get inspired!
</p>
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {console.log(portfolios.slice(0, 2))}
    {portfolios.slice(2).map(({ name, url }, i) => {
      let domain;
      try {
        domain = new URL(url).hostname;
      } catch {
        domain = null;
      }
      return (
        <div
          key={i}
          className="bg-white dark:bg-[#393053] rounded-3xl shadow-lg p-6 flex flex-col gap-4 border border-gray-100 dark:border-[#2d2544] transition hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="text-gray-400 font-mono w-6">{i + 1}.</div>
            {domain ? (
              <img
                src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
                alt={`${domain} favicon`}
                className="w-10 h-10 rounded shadow"
              />
            ) : (
              <div className="w-10 h-10 bg-gray-200 rounded" />
            )}
            <h2 className="text-lg font-bold text-[#18122B] dark:text-white flex-1">{name}</h2>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block text-center bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 text-white font-semibold py-2 rounded-full shadow hover:scale-105 transition"
            style={{
              backgroundSize: "200% 200%",
              animation: "gradient-x 2s linear infinite",
            }}
          >
            Visit Portfolio
          </a>
        </div>
      );
    })}
  </div>
</div>
 </>
  );
}

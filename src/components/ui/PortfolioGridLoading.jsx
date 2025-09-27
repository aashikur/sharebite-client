import React from "react";

export default function PortfolioGridLoading() {
  // Number of skeleton cards to show (e.g., 8 for 2 rows of 4)
  const skeletons = Array.from({ length: 8 });

  return (
   <>
    <div className="py-12 px-4 bg-base-100 dark:bg-[#18122B] min-h-screen">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-[#18122B] dark:text-white">
        Developer <span className="text-orange-500">Portfolios</span>
      </h1>
      <p className="text-center text-gray-500 dark:text-gray-300 mb-8">
        Looking for portfolio ideas? Browse 1000+ top developer portfolios and get inspired!
      </p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skeletons.map((_, i) => (
          <div
            key={i}
            className="bg-white dark:bg-[#393053] rounded-3xl shadow-lg p-6 flex flex-col gap-4 border border-gray-100 dark:border-[#2d2544] animate-pulse"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded shadow" />
              <div className="flex-1 h-6 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
            <div className="mt-auto h-10 bg-gradient-to-r from-orange-200 via-pink-200 to-yellow-100 dark:from-[#2d2544] dark:via-[#393053] dark:to-[#393053] rounded-full" />
          </div>
        ))}
      </div>
    </div>
   </>
  );
}
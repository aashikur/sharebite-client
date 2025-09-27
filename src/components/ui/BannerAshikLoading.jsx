import React from "react";

export default function BannerAshikLoading() {
  return (
    <section className="w-full bg-base-100 dark:bg-[#18122B] py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 animate-pulse">
        {/* Profile Photo and Info Skeleton */}
        <div className="flex flex-col items-center md:items-start flex-shrink-0 w-full md:w-1/3">
          <div className="relative">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gray-200 dark:bg-gray-700 border-4 border-orange-200 dark:border-[#393053] shadow-lg" />
            <div className="absolute bottom-2 right-2 w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full border border-gray-200 dark:border-[#2d2544]" />
          </div>
          <div className="mt-4 text-center md:text-left w-full">
            <div className="h-6 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mx-auto md:mx-0 mb-2" />
            <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-700 rounded mx-auto md:mx-0 mb-2" />
            <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mx-auto md:mx-0 mb-1" />
            <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mx-auto md:mx-0 mb-1" />
            <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-700 rounded mx-auto md:mx-0" />
          </div>
        </div>

        {/* Banner Image Skeleton */}
        <div className="w-full md:w-2/3 flex flex-col items-center">
          <div
            className="w-full rounded-3xl shadow-2xl bg-gray-200 dark:bg-gray-700"
            style={{ minHeight: 180, maxHeight: 260 }}
          />
        </div>
      </div>
    </section>
  );
}
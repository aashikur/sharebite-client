import React from "react";
import { FaGithub, FaMapMarkerAlt } from "react-icons/fa";

export default function BannerAshik() {
  return (
    <section className="w-full bg-base-100 dark:bg-[#18122B] py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Profile Photo and Info */}
        <div className="flex flex-col items-center md:items-start flex-shrink-0 w-full md:w-1/3">
          <div className="relative">
            <img
              src="https://avatars.githubusercontent.com/u/46211523?v=4"
              alt="Md Ashikur Rahaman"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-orange-500 shadow-lg object-cover"
            />
            <a
              href="https://github.com/aashikur"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 bg-white dark:bg-[#393053] p-2 rounded-full shadow border border-gray-200 dark:border-[#2d2544]"
              title="GitHub"
            >
              <FaGithub className="text-xl text-[#18122B] dark:text-white" />
            </a>
          </div>
          <div className="mt-4 text-center md:text-left">
            <h2 className="text-2xl font-bold text-[#18122B] dark:text-white">Md Ashikur Rahaman</h2>
            <div className="text-gray-500 dark:text-gray-300 text-sm mb-2">aashikur · he/him</div>
            <div className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
              Full Stack Web Developer (MERN)
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              WordPress | Competitive Programmer | Content Creator
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
              <FaMapMarkerAlt /> Bangladesh
            </div>
          </div>
        </div>

        {/* Banner Image */}
        <div className="w-full md:w-2/3 flex flex-col items-center">
          <img
            src="https://raw.githubusercontent.com/aashikur/aashikur/refs/heads/main/banner4.jpg"
            alt="Ashikur Rahaman Banner"
            className="w-full rounded-3xl shadow-2xl object-cover"
            style={{ minHeight: 180, maxHeight: 260 }}
          />
        </div>
      </div>
    </section>
  );
}
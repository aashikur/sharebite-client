import { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { TbLayoutGrid, TbLayoutGridAdd } from "react-icons/tb";

const fakeFeatures = [
  { title: "Fast Performance", description: "Optimized speed and performance.", color: "orange" },
  { title: "Dark Mode", description: "Toggle between light and dark seamlessly.", color: "sky" },
  { title: "Live Preview", description: "Instantly see changes as you make them.", color: "pink" },
  { title: "Modern UI", description: "Clean, responsive design for all devices.", color: "orange" },
  { title: "Firebase Auth", description: "Secure sign in and protected routes.", color: "sky" },
  { title: "Theme Switcher", description: "Easily switch themes with a toggle.", color: "pink" },
];

export default function TestFeatures() {
  const [search, setSearch] = useState("");
  const [gridCols, setGridCols] = useState(3);

  const filtered = fakeFeatures.filter((f) =>
    f.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="relative w-full sm:w-auto">
          <FiSearch className="absolute left-3 top-3 text-gray-400 dark:text-gray-300" />
          <input
            type="text"
            placeholder="Search features..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#18122B] text-[#18122B] dark:text-white focus:outline-none shadow-sm w-full sm:w-80"
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setGridCols(2)}
            className={`p-2 rounded-full ${gridCols === 2 ? "bg-orange-500 text-white" : "bg-gray-100 dark:bg-[#393053] text-gray-700 dark:text-white"} transition`}
          >
            <TbLayoutGrid size={20} />
          </button>
          <button
            onClick={() => setGridCols(3)}
            className={`p-2 rounded-full ${gridCols === 3 ? "bg-orange-500 text-white" : "bg-gray-100 dark:bg-[#393053] text-gray-700 dark:text-white"} transition`}
          >
            <TbLayoutGridAdd size={20} />
          </button>
        </div>
      </div>

      {/* Grid */}
      <motion.div
        layout
        className={`grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-${gridCols}`}
      >
        {filtered.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white dark:bg-[#18122B] rounded-3xl shadow-lg p-6 space-y-2"
          >
            <h3
              className={`text-xl font-semibold ${
                feature.color === "orange"
                  ? "text-orange-500"
                  : feature.color === "sky"
                  ? "text-sky-500"
                  : "text-pink-500"
              }`}
            >
              {feature.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* See More */}
      <div className="mt-10 text-center">
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md">
          See More
        </button>
      </div>
    </section>
  );
}

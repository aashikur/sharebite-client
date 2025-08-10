import { useState } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import { MdViewModule, MdViewAgenda } from "react-icons/md";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, type: "spring" }
  }),
};

const fetchFoods = async () => {
  const res = await axios.get("https://sharebite-server-opal.vercel.app/foods");
  return res.data;
};

const Foods = () => {
  const [sortBy, setSortBy] = useState("default");
  const [search, setSearch] = useState("");
  const [columns, setColumns] = useState(3); // 2 or 3

  // TanStack Query v5+ syntax
  const { data: foods = [], isLoading } = useQuery({
    queryKey: ["foods"],
    queryFn: fetchFoods,
  });

  // Search filter
  const searchedFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort
  const sortedFoods = [...searchedFoods].sort((a, b) => {
    if (sortBy === "expire") {
      return new Date(a.expireDate) - new Date(b.expireDate);
    }
    return 0; // default order
  });

  return (
    <div className="bg-white dark:bg-[#18122B] min-h-screen py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#18122B] dark:text-white mb-10">
          All Available Foods
        </h2>
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by food name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input w-full md:w-1/3 border px-4 py-2 rounded-lg"
          />
          {/* Sort & Grid Toggle */}
          <div className="flex items-center gap-4">
            <div>
              <label className="font-semibold mr-2">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded px-3 py-1"
              >
                <option value="default">Default</option>
                <option value="expire">Expire Date</option>
              </select>
            </div>
            {/* Grid Toggle (hidden on mobile) */}
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => setColumns(2)}
                className={`p-2 rounded-full border-2 ${
                  columns === 2
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white dark:bg-[#393053] text-orange-500 border-orange-500"
                } transition`}
                title="2-Column Layout"
              >
                <MdViewAgenda size={24} />
              </button>
              <button
                onClick={() => setColumns(3)}
                className={`p-2 rounded-full border-2 ${
                  columns === 3
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white dark:bg-[#393053] text-orange-500 border-orange-500"
                } transition`}
                title="3-Column Layout"
              >
                <MdViewModule size={24} />
              </button>
            </div>
          </div>
        </div>
        {/* Loader */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg text-orange-500"></span>
          </div>
        ) : (
          <>
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} gap-8`}>
              {sortedFoods.map((food, i) => (
                <motion.div
                  key={food._id}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white dark:bg-[#393053] rounded-3xl shadow-lg p-6 flex flex-col items-center transition hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                  <h3 className="font-bold text-lg mb-2 text-[#18122B] dark:text-white">
                    {food.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    <span className="font-semibold">Quantity:</span> {food.quantity}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    <span className="font-semibold">Pickup:</span> {food.pickupLocation}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    <span className="font-semibold">Expires:</span>{" "}
                    {new Date(food.expireDate).toLocaleString()}
                  </p>
                  <Link
                    to={`/foods/${food._id}`}
                    className="px-5 py-2 rounded-full bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition"
                  >
                    View Details
                  </Link>
                </motion.div>
              ))}
            </div>
            {sortedFoods.length === 0 && (
              <div className="text-center text-gray-500 dark:text-gray-300 mt-12">
                No foods available at the moment.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Foods;
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { MdViewModule, MdViewAgenda } from "react-icons/md";
import { motion } from "framer-motion";
import { ArrowBigRight } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, type: "spring" }
  }),
};

const FeaturedFoods = () => {
  const [foods, setFoods] = useState([]);
  const [sortOrder, setSortOrder] = useState("max");
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    axios
      .get("https://sharebite-server-opal.vercel.app/foods")
      .then((res) => setFoods(res.data))
      .catch((err) => console.error(err));
  }, []);

  const sortedFoods = [...foods].sort((a, b) =>
    sortOrder === "max" ? b.quantity - a.quantity : a.quantity - b.quantity
  );
  const featuredFoods = sortedFoods.slice(0, 6);

  return (
    <section className="max-w-6xl mx-auto py-12 mb-20 ">
        <h2 className="text-2xl text-center py-10 md:text-3xl px-4 font-bold text-[#18122B] dark:text-white">
          Don’t buy it, or bin it, <span className="text-orange-500">ShareBite it!</span>
        </h2>      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div>
          <label className="font-semibold mr-2">Sort by:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border rounded px-3 py-1"
          >
            <option value="max">Max Quantity</option>
            <option value="min">Min Quantity</option>
          </select>
        </div>
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
      {/* Foods Grid with Animation */}
      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-8`}>
        {featuredFoods.map((food, i) => (
          <motion.div
            key={food._id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-[#393053] rounded-3xl shadow-lg p-6 text-center"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="font-bold text-lg mb-2">{food.name}</h3>
            <p className="mb-2">Quantity: {food.quantity}</p>
            <Link
              to={`/foods/${food._id}`}
              className="text-orange-500 font-semibold underline"
            >
              View Details
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="mt-20 text-center">
        <a
          href="/foods"
          className="bg-gradient-to-bl from-orange-600 to-orange-400 text-white px-6 py-4 rounded-full font-semibold shadow hover:bg-orange-600 transition"
        >
          Show All Foods 
        </a>
      </div>
    </section>
  );
};

export default FeaturedFoods;
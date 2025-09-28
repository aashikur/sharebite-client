import { motion } from "framer-motion";
import Lottie from "lottie-react";
import bannerAnimation from "../assets/cooking.json";
import { Link } from "react-router";
import Typewriter from "typewriter-effect";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.5, duration: 0.7, type: "spring" }
  }),
};

const Banner2 = () => (
  <section className="w-full rounded-b-4xl py-10  bg-gradient-to-br from-orange-100 to-pink-100 dark:from-[#393053] dark:to-[#18122B]">
    <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-12 px-4 gap-8">
      {/* Animated Text & Buttons */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        {/* Heading with typewriter on "waste less" */}
        <motion.h1
          className="text-4xl  md:text-5xl font-extrabold text-[#18122B] dark:text-white"
          style={{ minWidth: 320, wordBreak: "keep-all" }}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={0}
        >
          Share more,{" "} <br/>
          <span className="text-orange-500 inline-block min-w-[120px] whitespace-nowrap">
            <Typewriter
              options={{
                strings: ["waste less"],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 40,
                pauseFor: 2000,
              }}
            />
          </span>
        </motion.h1>
        {/* Subtext */}
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto md:mx-0"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={1}
        >
          ShareBite connects neighbors to share surplus food and reduce waste. Don’t throw it away—share it today!
        </motion.p>
        {/* Buttons */}
        <div className="flex gap-4 pt-5 justify-center md:justify-start">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={2}
          >
            <Link
              to="/foods"
              className="px-6 py-3 rounded-full font-semibold shadow transition
                bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400
                bg-[length:200%_200%] animate-gradient-x
                text-white border-none"
              style={{
                backgroundSize: "200% 200%",
                animation: "gradient-x 2s linear infinite",
              }}
            >
              See Foods
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={3}
          >
            <Link
              to="/add-food"
              className="px-6 py-3 rounded-full border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-50 dark:hover:bg-[#393053] transition"
            >
              Add Food
            </Link>
          </motion.div>
        </div>
      </div>
      {/* Lottie Animation (floating) */}
      <div className="flex-1 flex justify-center">
        <motion.div
          className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-white dark:bg-[#393053] shadow-lg flex items-center justify-center"
          animate={{ y: [0, -20, 0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Lottie animationData={bannerAnimation} loop={true} />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Banner2;
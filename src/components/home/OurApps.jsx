import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaApple, FaGooglePlay, FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

// Hook to detect large screens
function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(window.innerWidth >= 1024);
  useEffect(() => {
    const onResize = () => setIsLarge(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isLarge;
}

const people = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
  "https://randomuser.me/api/portraits/women/22.jpg",
  "https://randomuser.me/api/portraits/men/23.jpg",
  "https://randomuser.me/api/portraits/women/24.jpg",
  "https://randomuser.me/api/portraits/men/25.jpg",
  "https://randomuser.me/api/portraits/women/26.jpg",
];

const OurApps = () => {
  const isLarge = useIsLargeScreen();

  // Spread more on large screens
  const baseX = isLarge ? 260 : 120;
  const baseY = isLarge ? 200 : 90;

  const circlePositions = [
    { x: -baseX, y: -baseY / 2, size: 60 },
    { x: -baseX / 1.5, y: baseY, size: 50 },
    { x: 0, y: baseY * 1.2, size: 40 },
    { x: baseX / 1.5, y: baseY, size: 55 },
    { x: baseX, y: -baseY / 2, size: 65 },
    { x: baseX / 1.5, y: -baseY, size: 45 },
    { x: 0, y: -baseY * 1.2, size: 50 },
    { x: -baseX / 1.5, y: -baseY, size: 55 },
    { x: -baseX * 1.1, y: 40, size: 40 },
    { x: baseX * 1.1, y: 40, size: 40 },
  ];

  const handleGetApp = () => {
    Swal.fire({
      icon: "info",
      title: "Coming Soon!",
      text: "The ShareBite app is launching soon. Stay tuned!",
      confirmButtonColor: "#2d2544",
    });
  };

  return (
    <section  className="py-20 border rounded-4xl border-gray-200 dark:border-gray-800  dark:bg-[#393053] bg-[#FFEBDF] px-4 flex flex-col items-center  relative overflow-x-clip transition-colors duration-300">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-[#18122B] dark:text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Join <span className="text-orange-500">1 million</span> ShareBite-ers <br /> worldwide
      </motion.h2>

      {/* App Mockup + Floating Circles */}
      <div className="relative flex justify-center items-center mb-10 w-full" style={{ minHeight: 400 }}>
        {/* Floating People Circles */}
        {people.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            alt="User"
            className="absolute rounded-full border-4 border-white dark:border-[#393053] shadow-lg"
            style={{
              width: circlePositions[i].size,
              height: circlePositions[i].size,
              left: `calc(50% + ${circlePositions[i].x}px)`,
              top: `calc(50% + ${circlePositions[i].y}px)`,
              transform: "translate(-50%, -50%)",
              opacity: 0.22,
              zIndex: 1,
              background: "#fff",
            }}
            initial={{ opacity: 0, scale: 0.7, y: 0 }}
            whileInView={{
              opacity: 0.22,
              scale: 1,
              y: [0, -10, 0, 10, 0], // floating effect
              transition: { delay: 0.2 + i * 0.08, duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            viewport={{ once: false, amount: 0.2 }}
          />
        ))}
        {/* App Mockup */}
        <motion.img
          src="/app-mockup.png" // Replace with your app screenshot
          alt="App"
          className="relative z-10 w-64 md:w-80 rounded-3xl shadow-2xl border-4 border-white dark:border-[#393053] bg-white dark:bg-[#393053]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
          viewport={{ once: true, amount: 0.3 }}
        />
      </div>

      {/* App Store Buttons */}
      <div className="flex flex-row justify-center gap-2 mb-5">
        <button className="flex justify-center items-center gap-2 px-4 py-4 rounded-full border-gray-100 dark:bg-[#2d2544]bg-white  border">
          <FaApple className="text-2xl" /> 4.9
          <span className="flex text-yellow-400 text-md">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </span>
        </button>
        <button className="flex justify-center items-center gap-2 px-4 py-4 rounded-full border-gray-100 dark:bg-[#2d2544]bg-white  border">
          <FaGooglePlay className="text-2xl" /> 4.6
          <span className="flex text-yellow-400 text-md">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </span>
        </button>
      </div>

      {/* Get the App Button */}
      <motion.button
        onClick={handleGetApp}
        className="flex justify-center items-center gap-3 px-12 py-4 rounded-full border-gray-100 bg-gradient-to-r from-orange-600 to-orange-400 text-white "
        whileHover={{ scale: 1.07, boxShadow: "0 4px 24px 0 rgba(255, 115, 0, 0.18)" }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        Get the app
      </motion.button>
    </section>
  );
};

export default OurApps;
import { useRouteError, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 to-pink-100 dark:from-[#393053] dark:to-[#18122B]">
      <motion.div
        className="bg-white dark:bg-[#393053] rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <FaExclamationTriangle className="text-6xl text-orange-500 mb-2" />
        </motion.div>
        <h1 className="text-3xl font-bold text-[#18122B] dark:text-white">Oops! Something went wrong.</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
          {error?.status && <span className="font-bold">{error.status} - </span>}
          {error?.statusText || error?.message || "An unexpected error occurred."}
        </p>
        <motion.button
          whileHover={{ scale: 1.08, backgroundColor: "#f97316", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="mt-4 px-8 py-3 rounded-full bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition text-lg"
        >
          Go Home
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Error;
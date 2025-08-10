import { motion } from "framer-motion";
import TestFeatures from "./TestFeatures";

const fakeUser = {
  name: "Aashikur Rahaman",
  role: "Frontend Developer",
  avatar: "https://i.pravatar.cc/150?img=12",
  bio: "Passionate about creating modern, clean, responsive UIs with React, TailwindCSS, and motion.",
  skills: ["React", "Tailwind", "Framer Motion", "Firebase"],
};

export default function TestProfile() {
  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 50 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.6 }}
    //   className="max-w-md mx-auto bg-white dark:bg-[#18122B] rounded-3xl shadow-lg p-6 sm:p-8 space-y-6"
    // >
    //   <div className="flex items-center space-x-4">
    //     <img
    //       src={fakeUser.avatar}
    //       alt="User avatar"
    //       className="w-20 h-20 rounded-full border-4 border-orange-500"
    //     />
    //     <div>
    //       <h2 className="text-2xl font-bold text-[#18122B] dark:text-white">{fakeUser.name}</h2>
    //       <p className="text-sm text-gray-600 dark:text-gray-300">{fakeUser.role}</p>
    //     </div>
    //   </div>

    //   <p className="text-gray-700 dark:text-gray-300">{fakeUser.bio}</p>

    //   <div className="flex flex-wrap gap-2">
    //     {fakeUser.skills.map((skill, index) => (
    //       <span
    //         key={index}
    //         className="bg-pink-500/10 text-pink-600 dark:text-pink-300 dark:bg-pink-300/10 px-4 py-1 rounded-full text-sm font-semibold"
    //       >
    //         {skill}
    //       </span>
    //     ))}
    //   </div>

    //   <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full px-6 py-2 transition-all duration-300 shadow-md">
    //     Follow
    //   </button>
    // </motion.div>
    <TestFeatures/>
  );
}

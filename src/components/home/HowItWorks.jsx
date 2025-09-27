import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Snap",
    desc: "Take a photo of your surplus food and add it to ShareBite.",
    color: "text-orange-400"
  },
  {
    number: 2,
    title: "Message",
    desc: "Chat with neighbors to arrange pickup.",
    color: "text-pink-400"
  },
  {
    number: 3,
    title: "Share",
    desc: "Give or get food, and help reduce waste!",
    color: "text-purple-900 dark:text-yellow-400"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const HowItWorks = () => (
  <section className="max-w-6xl mx-auto py-20 my-20 px-12 rounded-4xl bg-gradient-to-br from-orange-100 to-pink-100 dark:from-[#393053] dark:to-[#18122B]">
    <h2 className="text-2xl font-bold text-center mb-8">How to ShareBite</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {steps.map((step, index) => (
        <motion.div
          key={step.number}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible" // 👈 triggers when visible
          viewport={{ once: true, amount: 0.2 }} // once = animate only once
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-center border bg-white dark:bg-[#18122B]/20 border-gray-500/10 rounded-3xl p-6 py-10 cursor-pointer shadow-sm hover:shadow-lg"
        >
          <div className={`text-5xl font-bold mb-2 ${step.color}`}>
            {step.number}
          </div>
          <h3 className="font-bold mb-2 py-3">{step.title}</h3>
          <p className="text-gray-600 dark:text-gray-300/50">{step.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default HowItWorks;

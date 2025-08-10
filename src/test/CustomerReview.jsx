import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Alice Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "ShareBite made it so easy to share my extra food. The community is amazing and the app is super user-friendly!",
  },
  {
    name: "Rahim Uddin",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    text: "I love how I can help my neighbors and reduce waste. The pickup process is smooth and safe.",
  },
  {
    name: "Sadia Akter",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    text: "The best food sharing platform! I’ve met so many kind people and saved money too.",
  },
  {
    name: "John Smith",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4,
    text: "Great app, great mission. The design is beautiful and it works perfectly on my phone.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.2 + i * 0.15, duration: 0.7, type: "spring" }
  }),
};

const CustomerReview = () => (
  <section className="py-20 px-4 bg-white dark:bg-[#18122B]">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#18122B] dark:text-white">
      What Our <span className="text-orange-500">Customers</span> Say
    </h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {reviews.map((review, i) => (
        <motion.div
          key={review.name}
          className="bg-gray-50 dark:bg-[#393053] rounded-3xl shadow-lg p-8 flex flex-col gap-4 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          custom={i}
        >
          <img
            src={review.avatar}
            alt={review.name}
            className="w-20 h-20 rounded-full border-4 border-orange-500 shadow mb-2"
          />
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, idx) => (
              <FaStar
                key={idx}
                className={idx < review.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}
              />
            ))}
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-200 text-center italic">"{review.text}"</p>
          <div className="mt-2 font-bold text-orange-500">{review.name}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CustomerReview;
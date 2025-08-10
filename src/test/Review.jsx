import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Jane Doe",
    comment: "Loved the meal! Super easy to share and such a kind community.",
    rating: 5,
    image: "https://source.unsplash.com/40x40/?woman,face",
  },
  {
    id: 2,
    name: "Alex Johnson",
    comment: "Great experience. Sharing food has never felt this good!",
    rating: 4,
    image: "https://source.unsplash.com/40x40/?man,face",
  },
  {
    id: 3,
    name: "Sara Kim",
    comment: "Fast, clean UI and a meaningful mission. I'm hooked!",
    rating: 5,
    image: "https://source.unsplash.com/40x40/?girl,face",
  },
];

const Review = () => {
  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What People Are Saying
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            className="bg-white dark:bg-[#393053] rounded-2xl shadow-lg hover:shadow-2xl p-6 flex flex-col gap-4 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div> 
                <command />
                
            </div>
            <div className="flex items-center gap-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">{review.name}</h4>
                <div className="flex text-orange-500">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              “{review.comment}”
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Review;

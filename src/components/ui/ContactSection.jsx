import React from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="w-full py-16 bg-base-100 dark:bg-[#18122B] transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Left: Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-orange-400 mb-2">
                Just say Hello!
              </h2>
              <p className="text-sm opacity-80 mb-6 dark:text-gray-300">
                Let us know more about you!
              </p>

              <form
                className="space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-5 py-3 bg-base-200 dark:bg-base-300 text-base-content placeholder-gray-500 dark:placeholder-gray-400 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-5 py-3 bg-base-200 dark:bg-base-300 text-base-content placeholder-gray-500 dark:placeholder-gray-400 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Mail"
                    className="w-full px-5 py-3 bg-base-200 dark:bg-base-300 text-base-content placeholder-gray-500 dark:placeholder-gray-400 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-5 py-3 bg-base-200 dark:bg-base-300 text-base-content placeholder-gray-500 dark:placeholder-gray-400 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <textarea
                  placeholder="Message"
                  className="w-full h-28 px-5 py-3 bg-base-200 dark:bg-base-300 text-base-content placeholder-gray-500 dark:placeholder-gray-400 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-8 py-3 rounded-full font-semibold shadow 
                             bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 
                             text-white border-none bg-[length:200%_200%] animate-gradient-x"
                  style={{
                    backgroundSize: "200% 200%",
                    animation: "gradient-x 2s linear infinite",
                  }}
                >
                  Submit
                </motion.button>
              </form>
            </div>

            {/* Right: Info */}
            <div className="space-y-6 text-base-content">
              <div>
                <h3 className="text-xl font-bold text-orange-500 dark:text-orange-400">
                  Contact Information
                </h3>
                <div className="mt-3 text-sm leading-relaxed opacity-90 space-y-1">
                  <p>77 Baker Street</p>
                  <p>Bondowoso, 87655</p>
                  <p>Bangladesh</p>
                </div>
              </div>

              <div className="text-sm opacity-90">
                <p className="font-semibold">Call Us :</p>
                <p>+62 81 334 61 00</p>
              </div>

              <div className="text-sm opacity-90">
                <p className="font-semibold">We are open</p>
                <p>Monday - Friday, 08:00 am - 05:00 pm</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-orange-500 dark:text-orange-400">
                  Follow Us
                </h4>
                <div className="mt-2 flex flex-wrap gap-6 text-sm font-semibold">
                  <a href="#" className="hover:text-orange-500">facebook</a>
                  <a href="#" className="hover:text-orange-500">instagram</a>
                  <a href="#" className="hover:text-orange-500">vimeo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
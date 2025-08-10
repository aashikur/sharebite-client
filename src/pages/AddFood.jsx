import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import bannerAnimation from "../assets/cooking.json";
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
const AddFood = () => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();
  
  // Mutation for adding food
  const mutation = useMutation({
    mutationFn: (food) => axiosSecure.post("/foods", food),
    onSuccess: () => {
      Swal.fire("Success!", "Food added successfully!", "success");
      queryClient.invalidateQueries({ queryKey: ["foods"] }); // Refetch foods list
    },
    onError: () => {
      Swal.fire("Error", "Could not add food.", "error");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const food = {
      name: form.name.value,
      image: form.image.value,
      quantity: form.quantity.value,
      pickupLocation: form.pickupLocation.value,
      expireDate: form.expireDate.value,
      additionalNotes: form.additionalNotes.value,
      donor: {
        name: user.displayName || user.name,
        email: user.email,
        photoURL: user.photoURL,
      },
      status: "available",
    };
    mutation.mutate(food);
    form.reset();
  };

  return (
    <div className="max-w-5xl mx-auto py-12">
      <Helmet><title>Add Food | ShareBite</title></Helmet>
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Lottie Banner (Floating) */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          animate={{ y: [0, -20, 0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-60 h-60 md:w-80 md:h-80 rounded-full bg-white dark:bg-[#393053] shadow-lg flex items-center justify-center">
            <Lottie animationData={bannerAnimation} loop={true} />
          </div>
        </motion.div>
        {/* Form */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Add Food</h2>
          <form onSubmit={handleSubmit} className="bg-white dark:bg-[#393053] p-8 rounded-3xl shadow-lg flex flex-col gap-4">
            <input name="name" type="text" placeholder="Food Name" required className="input" />
            <input name="image" type="text" placeholder="Image URL" required className="input" />
            <input name="quantity" type="number" placeholder="Quantity" required className="input" />
            <input name="pickupLocation" type="text" placeholder="Pickup Location" required className="input" />
            <input name="expireDate" type="datetime-local" required className="input" />
            <textarea name="additionalNotes" placeholder="Additional Notes" className="input" />

            {/* Donor Info (not editable) */}
            <div className="flex items-center gap-3 bg-gray-100 dark:bg-[#2d2544] p-3 rounded-lg">
              <img
                src={user?.photoURL || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"}
                alt="Donor"
                className="w-12 h-12 rounded-full border-2 border-orange-500"
              />
              <div>
                <div className="font-semibold">{user?.displayName || user?.name}</div>
                <div className="text-sm text-gray-500">{user?.email}</div>
              </div>
            </div>

            {/* Food Status (not editable) */}
            <div className="flex items-center gap-2">
              <span className="font-semibold">Status:</span>
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold">available</span>
            </div>

            <button
              type="submit"
              className="bg-orange-500 text-white py-2 rounded-full font-semibold hover:bg-orange-600 transition"
              disabled={mutation.isLoading}
            >
              {mutation.isLoading ? "Adding..." : "Add Food"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
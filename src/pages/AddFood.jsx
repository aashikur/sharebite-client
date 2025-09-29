import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import bannerAnimation from "../assets/cooking.json";
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useNavigate } from "react-router";
import LoginLightBox from "@/components/login/LoginLightBox";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: (food) => axiosSecure.post("/foods", food),
    onSuccess: () => {
      Swal.fire("Success!", "Food added successfully!", "success");
      queryClient.invalidateQueries({ queryKey: ["foods"] });
      navigate("/manage-foods");
    },
    onError: () => {
      Swal.fire("Error", "Could not add food.", "error");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) return setIsLightBoxOpen(true);


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
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Add Food | ShareBite</title>
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">
            Add Food
          </h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-[#393053] p-8 rounded-3xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              name="name"
              type="text"
              placeholder="Food Name"
              required
              className="input w-full"
            />
            <input
              name="image"
              type="text"
              placeholder="Image URL"
              required
              className="input w-full"
            />
            <input
              name="quantity"
              type="number"
              placeholder="Quantity"
              required
              className="input w-full"
            />
            <input
              name="pickupLocation"
              type="text"
              placeholder="Pickup Location"
              required
              className="input w-full"
            />
            <input
              name="expireDate"
              type="datetime-local"
              required
              className="input w-full"
            />

            {/* Additional Notes (full width) */}
            <div className="md:col-span-2">
              <textarea
                name="additionalNotes"
                placeholder="Additional Notes"
                className="input w-full min-h-[120px] p-3 resize-y"
              />
            </div>

            {/* Donor Info */}
            <div className="md:col-span-2 flex items-center gap-3 bg-gray-100 dark:bg-[#2d2544] p-3 rounded-lg">
              <img
                src={
                  user?.photoURL ||
                  "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                }
                alt="Donor"
                className="w-12 h-12 rounded-full border-2 border-orange-500"
              />
              <div>
                <div className="font-semibold">
                  {user?.displayName || user?.name}
                </div>
                <div className="text-sm text-gray-500">{user?.email}</div>
              </div>
            </div>

            {/* Food Status */}
            <div className="md:col-span-2 flex items-center gap-2">
              <span className="font-semibold">Status:</span>
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold">
                available
              </span>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-full font-semibold hover:bg-orange-600 transition"
                disabled={mutation.isLoading}
              >
                {mutation.isLoading ? "Adding..." : "Add Food"}
              </button>
            </div>
          </form>
        </div>

        {/* Animation Section (hidden on mobile) */}
        <motion.div
          className="hidden lg:flex justify-center items-center"
          animate={{ y: [0, -20, 0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-60 h-60 xl:w-80 xl:h-80 rounded-full bg-white dark:bg-[#393053] shadow-lg flex items-center justify-center">
            <Lottie animationData={bannerAnimation} loop={true} />
          </div>
        </motion.div>
      </div>




      {/* Login Box if User Not Logged. */}
      {isLightBoxOpen && <div className="p-10 z-100 absolute top-0 left-0 bg-black/10 backdrop-blur-xs w-full h-full">
       <div> 
         <LoginLightBox setIsLightBoxOpen={setIsLightBoxOpen}/>
       </div>
      </div>}



    </div>
  );
};

export default AddFood;

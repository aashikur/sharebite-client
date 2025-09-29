import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import RequestModal from "./RequestModal";
import LoginLightBox from "@/components/LoginLightBox";

const fallbackPhoto =
  "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541";

const FoodDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [food, setFood] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const axiosSecure = useAxiosSecure();
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

  useEffect(() => {
    axiosSecure
      .get(`/foods/${id}`)
      .then((res) => setFood(res.data))
      .catch(() => Swal.fire("Error", "Food not found", "error"));
  }, [id, axiosSecure]);

  const handleRequest = () => {
    if (!user) {
      // Swal.fire("Login Required", "Please login to request food.", "warning");
      // navigate("/login");
      // setIsLightBoxOpen(true);

      // return;
    }
    setShowModal(true);
  };

  if (!food) {
    return (
      <div className="text-center py-20 text-gray-500 dark:text-gray-300">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#18122B] min-h-screen py-12 transition-colors duration-300 ">
      <Helmet>
        <title>{food.name} | ShareBite</title>
      </Helmet>

      {/* container applied here */}
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-[#393053] rounded-3xl  shadow-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Big Image */}
          <div>
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </div>

          {/* Right Column - Compact Details */}
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-[#18122B] dark:text-white">
              {food.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Pickup Location:</span>{" "}
              {food.pickupLocation}
            </p>

            {/* Request Button placed earlier */}
            <button
              onClick={handleRequest}
              className="mt-3 mb-5 px-6 py-2 rounded-full bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition"
            >
              Request This Food
            </button>

            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Quantity:</span> {food.quantity}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Expires:</span>{" "}
              {new Date(food.expireDate).toLocaleString()}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Notes:</span>{" "}
              {food.additionalNotes || "No notes provided"}
            </p>

            {/* Donor Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <img
                src={food?.donor?.photoURL ? food.donor.photoURL : fallbackPhoto}
                alt={food.donor.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="text-sm text-gray-700 dark:text-gray-200">
                Donor: {food.donor.name}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Request Modal */}
      {showModal && (
        <RequestModal
          food={food}
          user={user}
          additionalNotes={additionalNotes}
          setAdditionalNotes={setAdditionalNotes}
          setShowModal={setShowModal}
        />
      )}


      {/* Login Box if User Not Logged. */}
      {isLightBoxOpen && <div className="p-10 absolute top-0 left-0 bg-black/10 backdrop-blur-xs w-full h-full">
       <div> 
         <LoginLightBox setIsLightBoxOpen={setIsLightBoxOpen}/>
       </div>
      </div>}

    </div>
  );
};

export default FoodDetails;

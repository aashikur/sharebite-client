import { useEffect, useState, useContext, use } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loading from "./Loading";

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

  useEffect(() => {
    // axios.get(`https://sharebite-server-opal.vercel.app/foods/${id}`)
      axiosSecure.get(`/foods/${id}`)
      .then((res) => setFood(res.data))
      .catch(() => Swal.fire("Error", "Food not found", "error"));
  }, [id, axiosSecure]);

  const handleRequest = () => {
    if (!user) {
      Swal.fire("Login Required", "Please login to request food.", "warning");
      navigate("/login");
      return;
    }
    setShowModal(true);
  };

  const confirmRequest = () => {
    const requestData = {
      foodId: food._id,
      foodName: food.name,
      foodImage: food.image,
      donorEmail: food.donor.email,
      donorName: food.donor.name,
      requesterEmail: user.email,
      requesterName: user.displayName || user.name,
      requestDate: new Date().toISOString(),
      pickupLocation: food.pickupLocation,
      expireDate: food.expireDate,
      additionalNotes: additionalNotes,
    };

    // axios
    //   .post("https://sharebite-server-opal.vercel.app/requests", requestData)
    axiosSecure.post("/requests", requestData)
      .then(() => {
        Swal.fire("Requested!", "Your request has been sent.", "success");
        setShowModal(false);
        navigate("/my-requests");
      })
      .catch(() => Swal.fire("Error", "Could not request food.", "error"));
  };

  if (!food) {
    return (
      <div className="text-center py-20 text-gray-500 dark:text-gray-300">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#18122B] min-h-screen py-12 transition-colors duration-300">
      <Helmet>
        <title>{food.name} | ShareBite</title>
      </Helmet>
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white dark:bg-[#393053] rounded-3xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
          <img
            src={food.image}
            alt={food.name}
            className="w-full md:w-80 h-60 object-cover rounded-xl"
          />
          <div className="flex-1 space-y-3">
            <h2 className="text-3xl font-bold text-[#18122B] dark:text-white">{food.name}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Quantity:</span> {food.quantity}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Pickup Location:</span> {food.pickupLocation}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Expires:</span> {new Date(food.expireDate).toLocaleString()}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Notes:</span> {food.additionalNotes}
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img
                src={food?.donor?.photoURL ? food.donor.photoURL : fallbackPhoto}
                alt={food.donor.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="text-sm text-gray-700 dark:text-gray-200">
                Donor: {food.donor.name}
              </span>
            </div>
            <button
              onClick={handleRequest}
              className="mt-6 px-6 py-2 rounded-full bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition"
            >
              Request This Food
            </button>
          </div>
        </div>
      </div>

      {/* Request Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-2">
          <div className="bg-white dark:bg-[#393053] rounded-2xl w-full max-w-md shadow-lg max-h-[90vh] overflow-y-auto p-4">
            <h3 className="text-xl font-bold mb-4">Confirm Food Request</h3>
            <form
              onSubmit={e => {
                e.preventDefault();
                confirmRequest();
              }}
              className="space-y-3 text-sm"
            >
              <div>
                <label className="font-semibold">Food Name:</label>
                <input
                  type="text"
                  value={food.name}
                  readOnly
                  className="input w-full mt-1 bg-gray-100 dark:bg-[#2d2544] cursor-not-allowed"
                />
              </div>
              <div>
                <label className="font-semibold">Food Image:</label>
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-24 h-16 object-cover rounded mt-1"
                />
              </div>
              <div>
                <label className="font-semibold">Food ID:</label>
                <input
                  type="text"
                  value={food._id}
                  readOnly
                  className="input w-full mt-1 bg-gray-100 dark:bg-[#2d2544] cursor-not-allowed"
                />
              </div>
              <div>
                <label className="font-semibold">Donor Email:</label>
                <input
                  type="text"
                  value={food.donor.email}
                  readOnly
                  className="input w-full mt-1 bg-gray-100 dark:bg-[#2d2544] cursor-not-allowed"
                />
              </div>
              <div>
                <label className="font-semibold">Donor Name:</label>
                <input
                  type="text"
                  value={food.donor.name}
                  readOnly
                  className="input w-full mt-1 bg-gray-100 dark:bg-[#2d2544] cursor-not-allowed"
                />
              </div>
              <div>
                <label className="font-semibold">Your Email:</label>
                <input
                  type="text"
                  value={user.email}
                  readOnly
                  className="input w-full mt-1 bg-gray-100 dark:bg-[#2d2544] cursor-not-allowed"
                />
              </div>
              <div>
                <label className="font-semibold">Request Date:</label>
                <input
                  type="text"
                  value={new Date().toLocaleString()}
                  readOnly
                  className="input w-full mt-1 bg-gray-100 dark:bg-[#2d2544] cursor-not-allowed"
                />
              </div>
              <div>
                <label className="font-semibold">Pickup Location:</label>
                <input
                  type="text"
                  value={food.pickupLocation}
                  readOnly
                  className="input w-full mt-1 bg-gray-100 dark:bg-[#2d2544] cursor-not-allowed"
                />
              </div>
              <div>
                <label className="font-semibold">Expire Date:</label>
                <input
                  type="text"
                  value={new Date(food.expireDate).toLocaleString()}
                  readOnly
                  className="input w-full mt-1 bg-gray-100 dark:bg-[#2d2544] cursor-not-allowed"
                />
              </div>
              <div>
                <label className="font-semibold">Additional Notes:</label>
                <textarea
                  className="input w-full mt-1"
                  placeholder="Add a note (optional)"
                  value={additionalNotes}
                  onChange={e => setAdditionalNotes(e.target.value)}
                />
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition"
                >
                  Confirm Request
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2 rounded-full border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-50 dark:hover:bg-[#18122B] transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDetails;
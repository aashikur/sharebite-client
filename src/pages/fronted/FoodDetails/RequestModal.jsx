import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";
import { CgClose } from "react-icons/cg";

const RequestModal = ({
  setIsLightBoxOpen,
  food,
  user,
  additionalNotes,
  setAdditionalNotes,
  setShowModal,
}) => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const confirmRequest = () => {

    if (!user) {
      // Swal.fire("Login Required", "Please login to request food.", "warning");
      setIsLightBoxOpen(true);
      return;
    }

    const requestData = {
      foodId: food._id,
      foodName: food.name,
      foodImage: food.image,
      donorEmail: food.donor.email || "",
      donorName: food.donor.name,
      requesterEmail: user.email,
      requesterName: user.displayName || user.name,
      requestDate: new Date().toISOString(),
      pickupLocation: food.pickupLocation,
      expireDate: food.expireDate,
      additionalNotes,
    };

    axiosSecure
      .post("/requests", requestData)
      .then(() => {
        Swal.fire("Requested!", "Your request has been sent.", "success");
        setShowModal(false);
        navigate("/my-requests");
      })
      .catch(() => Swal.fire("Error", "Could not request food.", "error"));
  };

  return (
<div className="fixed inset-0 bg-black/20 backdrop-blur-[1px] flex items-center justify-center z-50 p-2">
  <div className="bg-white dark:bg-[#393053] relative rounded-2xl w-full max-w-5xl shadow-lg max-h-[90vh] overflow-y-auto p-6">
    <h3 className="text-2xl font-bold mb-6 text-center">Confirm Food Request</h3>

    {/* Cancel Btn Icon */}
    <button>
      <CgClose
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 text-2xl cursor-pointer hover:opacity-50 duration-500"
      />
    </button>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        confirmRequest();
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm"
    >
      {/* Food Name */}
      <div>
        <label className="font-medium text-gray-600 dark:text-gray-300">
          Food Name:
        </label>
        <input
          type="text"
          value={food.name}
          readOnly
          className="w-full mt-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#2d2544] text-gray-500 dark:text-gray-400 cursor-not-allowed px-3 py-2"
        />
      </div>

      {/* Food Image */}
      <div>
        <label className="font-medium text-gray-600 dark:text-gray-300">
          Food Image:
        </label>
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-32 object-cover rounded-lg mt-2 shadow-sm border border-gray-200 dark:border-gray-600"
        />
      </div>

      {/* Food ID */}
      <div>
        <label className="font-medium text-gray-600 dark:text-gray-300">
          Food ID:
        </label>
        <input
          type="text"
          value={food._id}
          readOnly
          className="w-full mt-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#2d2544] text-gray-500 dark:text-gray-400 cursor-not-allowed px-3 py-2"
        />
      </div>

      {/* Donor Email */}
      <div>
        <label className="font-medium text-gray-600 dark:text-gray-300">
          Donor Email:
        </label>
        <input
          type="text"
          value={food.donor.email}
          readOnly
          className="w-full mt-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#2d2544] text-gray-500 dark:text-gray-400 cursor-not-allowed px-3 py-2"
        />
      </div>

      {/* Donor Name */}
      <div>
        <label className="font-medium text-gray-600 dark:text-gray-300">
          Donor Name:
        </label>
        <input
          type="text"
          value={food.donor.name}
          readOnly
          className="w-full mt-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#2d2544] text-gray-500 dark:text-gray-400 cursor-not-allowed px-3 py-2"
        />
      </div>

      {/* Your Email */}
      <div>
        <label className="font-medium text-gray-600 dark:text-gray-300">
          Your Email:
        </label>
        <input
          type="text"
          value={user?.email}
          readOnly
          className="w-full mt-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#2d2544] text-gray-500 dark:text-gray-400 cursor-not-allowed px-3 py-2"
        />
      </div>

      {/* Request Date */}
      <div>
        <label className="font-medium text-gray-600 dark:text-gray-300">
          Request Date:
        </label>
        <input
          type="text"
          value={new Date().toLocaleString()}
          readOnly
          className="w-full mt-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#2d2544] text-gray-500 dark:text-gray-400 cursor-not-allowed px-3 py-2"
        />
      </div>

      {/* Pickup Location */}
      <div>
        <label className="font-medium text-gray-600 dark:text-gray-300">
          Pickup Location:
        </label>
        <input
          type="text"
          value={food.pickupLocation}
          readOnly
          className="w-full mt-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#2d2544] text-gray-500 dark:text-gray-400 cursor-not-allowed px-3 py-2"
        />
      </div>

      {/* Expire Date */}
      <div>
        <label className="font-medium text-gray-600 dark:text-gray-300">
          Expire Date:
        </label>
        <input
          type="text"
          value={new Date(food.expireDate).toLocaleString()}
          readOnly
          className="w-full mt-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-[#2d2544] text-gray-500 dark:text-gray-400 cursor-not-allowed px-3 py-2"
        />
      </div>

      {/* Additional Notes (full width) */}
      <div className="md:col-span-2 lg:col-span-3">
        <label className="font-medium text-gray-600 dark:text-gray-300">
          Additional Notes:
        </label>
        <textarea
          className="w-full mt-2 min-h-[120px] p-3 rounded-xl border border-orange-400 dark:border-orange-100 bg-gray-50 dark:bg-[#2d2544] text-gray-700 dark:text-gray-200  focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
          placeholder="Add a note (optional)"
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
        />
      </div>

      {/* Buttons */}
      <div className="md:col-span-2 lg:col-span-3 flex gap-6 justify-center mt-8">
        <button
          type="submit"
          className="px-6 py-3 rounded-full bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition"
        >
          Confirm Request
        </button>
        <button
          type="button"
          onClick={() => setShowModal(false)}
          className="px-6 py-3 rounded-full border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-50 dark:hover:bg-[#18122B] transition"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</div>


  );
};

export default RequestModal;

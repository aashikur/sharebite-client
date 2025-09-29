import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";

const RequestModal = ({
  food,
  user,
  additionalNotes,
  setAdditionalNotes,
  setShowModal,
}) => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const confirmRequest = () => {
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
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-2">
      <div className="bg-white dark:bg-[#393053] rounded-2xl w-full max-w-md shadow-lg max-h-[90vh] overflow-y-auto p-4">
        <h3 className="text-xl font-bold mb-4">Confirm Food Request</h3>
        <form
          onSubmit={(e) => {
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
              value={user?.email}
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
              onChange={(e) => setAdditionalNotes(e.target.value)}
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
  );
};

export default RequestModal;

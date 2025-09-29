import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";
import Loading from "./Loading";

const ManageFoods = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editFood, setEditFood] = useState(null);
  const [editForm, setEditForm] = useState({});
  const axiosSecure = useAxiosSecure();

  const fetchFoods = () => {
    setLoading(true);
    axiosSecure.get(`/my/foods`)
      .then(res => setFoods(res.data))
      .catch(() => Swal.fire("Error", "Could not fetch foods.", "error"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (user?.email) fetchFoods();
  }, [user]);

  if (loading) return <Loading />;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This food will be deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/foods/${id}`)
          .then(() => {
            Swal.fire("Deleted!", "Food has been deleted.", "success");
            fetchFoods();
          })
          .catch(() => Swal.fire("Error", "Could not delete food.", "error"));
      }
    });
  };

  const handleEdit = (food) => {
    setEditFood(food);
    setEditForm({
      name: food.name,
      image: food.image,
      quantity: food.quantity,
      pickupLocation: food.pickupLocation,
      expireDate: food.expireDate?.slice(0, 16),
      additionalNotes: food.additionalNotes || "",
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axiosSecure.put(`/foods/${editFood._id}`, editForm)
      .then(() => {
        Swal.fire("Updated!", "Food updated successfully.", "success");
        setEditFood(null);
        fetchFoods();
      })
      .catch(() => Swal.fire("Error", "Could not update food.", "error"));
  };

  return (
    <div className="container mx-auto py-12">
      <Helmet><title>Manage My Foods | ShareBite</title></Helmet>
      <h2 className="text-2xl font-bold mb-6 px-4">Manage My Foods</h2>
      {foods.length === 0 ? (
        <div className="text-center text-gray-500 py-20">No foods added yet.</div>
      ) : (
        <>
          {/* Desktop/tablet: Table */}
          <table className="w-full bg-white dark:bg-[#393053] rounded-3xl shadow-lg hidden sm:table">
            <thead>
              <tr className="text-left">
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Pickup</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {foods.map(food => (
                <tr key={food._id} className="border-t">
                  <td className="p-3"><img src={food.image} alt={food.name} className="w-16 h-16 object-cover rounded" /></td>
                  <td className="p-3">{food.name}</td>
                  <td className="p-3">{food.quantity}</td>
                  <td className="p-3">{food.pickupLocation}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => handleEdit(food)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(food._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile: Card layout */}
          <div className="sm:hidden flex flex-col gap-6">
            {foods.map(food => (
              <div key={food._id} className="bg-white dark:bg-[#393053] rounded-2xl shadow-lg p-4 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <img src={food.image} alt={food.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <div className="font-bold text-lg text-[#18122B] dark:text-white">{food.name}</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">Pickup: {food.pickupLocation}</div>
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="text-gray-600 dark:text-gray-300 text-sm">
                    <span className="font-semibold">Qty:</span> {food.quantity}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(food)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(food._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Edit Modal */}
      {editFood && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-2">
          <div className="bg-white dark:bg-[#393053] rounded-2xl w-full max-w-md shadow-lg max-h-[90vh] overflow-y-auto p-6">
            <h3 className="text-xl font-bold mb-4">Edit Food</h3>
            <form onSubmit={handleEditSubmit} className="flex flex-col gap-4">
              <input
                name="name"
                type="text"
                value={editForm.name}
                onChange={handleEditChange}
                placeholder="Food Name"
                required
                className="input"
              />
              <input
                name="image"
                type="text"
                value={editForm.image}
                onChange={handleEditChange}
                placeholder="Image URL"
                required
                className="input"
              />
              <input
                name="quantity"
                type="number"
                value={editForm.quantity}
                onChange={handleEditChange}
                placeholder="Quantity"
                required
                className="input"
              />
              <input
                name="pickupLocation"
                type="text"
                value={editForm.pickupLocation}
                onChange={handleEditChange}
                placeholder="Pickup Location"
                required
                className="input"
              />
              <input
                name="expireDate"
                type="datetime-local"
                value={editForm.expireDate}
                onChange={handleEditChange}
                required
                className="input"
              />
              <textarea
                name="additionalNotes"
                value={editForm.additionalNotes}
                onChange={handleEditChange}
                placeholder="Additional Notes"
                className="input"
              />
              <div className="flex gap-4 mt-4">
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-orange-500 text-white font-semibold shadow hover:bg-orange-600 transition"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setEditFood(null)}
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

export default ManageFoods;
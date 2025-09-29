import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loading from "./Loading";

const MyRequests = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    
      // axios.get(`https://sharebite-server-opal.vercel.app/my/requests?email=${user.email}`)
      axiosSecure.get(`/my/requests`)
      .then((res) => setRequests(res.data))
      .catch(() => Swal.fire("Error", "Could not fetch requests", "error"))
      .finally(() => setLoading(false));
  }, [user]);

  if(loading) return <Loading></Loading>;
  return (
    <div className="bg-white dark:bg-[#18122B] min-h-screen py-12 transition-colors duration-300">
      <Helmet>
        <title>My Food Requests | ShareBite</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#18122B] dark:text-white mb-10">
          My Food Requests
        </h2>
        {loading ? (
          <div className="text-center text-gray-500 dark:text-gray-300 py-20">Loading...</div>
        ) : requests.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-300 py-20">
            You have not requested any food yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requests.map((req) => (
              <div
                key={req._id}
                className="bg-white dark:bg-[#393053] rounded-3xl shadow-lg p-6 flex flex-col gap-3"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={req.foodImage}
                    alt={req.foodName}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-[#18122B] dark:text-white">
                      {req.foodName}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Donor: {req.donorName}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Pickup Location:</span> {req.pickupLocation}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Expire Date:</span>{" "}
                  {new Date(req.expireDate).toLocaleString()}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Request Date:</span>{" "}
                  {new Date(req.requestDate).toLocaleString()}
                </p>
                {req.additionalNotes && (
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-semibold">Notes:</span> {req.additionalNotes}
                  </p>
                )}
                <div className="mt-2 text-sm text-orange-500 font-semibold">
                  Status: Requested
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRequests;
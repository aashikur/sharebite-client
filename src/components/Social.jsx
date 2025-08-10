// components/Social.jsx
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Social = ({ location, navigate }) => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogle = async () => {
    try {
      const result = await googleSignIn();
      const user = result.user;

      // Optional: Send to DB (if new user)

      // ✅ Show success and redirect
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: `Welcome, ${user.displayName || "User"}!`,
        confirmButtonColor: "#f97316",
      }).then(() => {
        navigate(location?.state || "/");
      });
    } catch (error) {
      console.error("Google Sign-in Error:", error);
      Swal.fire({
        icon: "error",
        title: "Google Sign-In Failed",
        text: error.message || "Something went wrong.",
        confirmButtonColor: "#f97316",
      });
    }
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleGoogle}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full shadow hover:shadow-lg transition"
      >
        <FcGoogle className="text-xl" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Sign in with Google</span>
      </button>
    </div>
  );
};

export default Social;

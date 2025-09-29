// src/components/GuestLoginBtn.jsx
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";

const GuestLoginBtn = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    signIn("Guest@gmail.com", "Guest1234.")
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Guest Login Successful!",
          text: "You are logged in as Guest.",
          confirmButtonColor: "#f97316",
        }).then(() => navigate(location.state || "/"));
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Guest credentials not working.",
          confirmButtonColor: "#f97316",
        });
      });
  };

  return (
    <button
      type="button"
      onClick={handleGuestLogin}
      className="mt-6 text-sm  text-left border-orange-500 text-orange-500 font-semibold py-2 rounded-full hover:bg-orange-50 dark:hover:bg-[#393053] transition underline cursor-pointer px-2 inline-block"
    >
      Login as Guest
    </button>
  );
};

export default GuestLoginBtn;

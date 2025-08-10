import Lottie from "lottie-react";
import { useContext } from "react";
import { BiEnvelope, BiImageAdd, BiKey, BiUser } from "react-icons/bi";
import { useNavigate } from "react-router";
import happy from "../assets/happy.json";
import Social from "../components/Social";
import Title from "../components/Title";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const Register = () => {
  const goTo = useNavigate();
  const { createUser, setUser, updateUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const pass = form.pass.value;

    // Password validation (example: at least 6 chars, 1 uppercase, 1 lowercase)
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(pass)) {
      Swal.fire("Error", "Password must be at least 6 characters and include both uppercase and lowercase letters.", "error");
      return;
    }

    createUser(email, pass)
      .then((res) => {
        updateUser({ displayName: name, photoURL: image }).then(() => {
          setUser({ ...res.user, displayName: name, photoURL: image });
          Swal.fire("Success!", "Registration successful!", "success");
          goTo("/");
        });
      })
      .catch((error) => {
        Swal.fire("Error", error.message, "error");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-pink-100 dark:from-[#393053] dark:to-[#18122B] transition-colors duration-300">
      <Helmet>
        <title>Register | ShareBite</title>
      </Helmet>
      <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center bg-white dark:bg-[#18122B] bg-opacity-90 dark:bg-opacity-90 rounded-3xl shadow-2xl overflow-hidden">
        {/* Lottie Animation (hidden on mobile) */}
        <div className="hidden md:flex flex-1 items-center justify-center p-8 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-[#393053] dark:to-[#18122B]">
          <Lottie animationData={happy} loop={true} className="w-72 h-72" />
        </div>
        {/* Register Form */}
        <div className="flex-1 p-8">
          <Title>Join with Us</Title>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 mt-6"
          >
            <div className="flex items-center border-b-2 border-gray-200 dark:border-gray-700 focus-within:border-orange-400 transition">
              <BiUser className="text-2xl text-slate-500 mr-2" />
              <input
                className="flex-1 bg-transparent outline-none py-2 text-base text-[#18122B] dark:text-white"
                type="text"
                name="name"
                placeholder="Enter Full Name"
                required
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-200 dark:border-gray-700 focus-within:border-orange-400 transition">
              <BiImageAdd className="text-2xl text-slate-500 mr-2" />
              <input
                className="flex-1 bg-transparent outline-none py-2 text-base text-[#18122B] dark:text-white"
                type="text"
                name="image"
                placeholder="Enter Image URL"
                required
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-200 dark:border-gray-700 focus-within:border-orange-400 transition">
              <BiEnvelope className="text-2xl text-slate-500 mr-2" />
              <input
                className="flex-1 bg-transparent outline-none py-2 text-base text-[#18122B] dark:text-white"
                type="email"
                name="email"
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-200 dark:border-gray-700 focus-within:border-orange-400 transition">
              <BiKey className="text-2xl text-slate-500 mr-2" />
              <input
                className="flex-1 bg-transparent outline-none py-2 text-base text-[#18122B] dark:text-white"
                type="password"
                name="pass"
                placeholder="Enter Password"
                required
              />
            </div>
            <input
              type="submit"
              value="Register Now"
              className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-full shadow cursor-pointer transition"
            />
          </form>
          <div className="divider">or</div>

          {/* Social Login */}
          <div className="mt-6">
            <Social />
          </div>
          <div className="mt-4 text-center text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <a href="/login" className="text-orange-500 font-semibold hover:underline">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
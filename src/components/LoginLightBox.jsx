import React, { useEffect } from 'react';
import { CgClose } from 'react-icons/cg';
import Lottie from "lottie-react";
import { useContext } from "react";
import { BiEnvelope, BiKey } from "react-icons/bi";
import Social from "@/components/Social";
import Title from "@/components/Title";
import { useLocation, useNavigate } from "react-router";
import loginAnimation from "@/assets/loginAnimation.json";
import Swal from "sweetalert2";
import { AuthContext } from '@/providers/AuthProvider';


const LoginLightBox = ({setIsLightBoxOpen}) => {
  const { user, loading } = useContext(AuthContext);
useEffect(() => {
  if (user?.email) {
    setIsLightBoxOpen(false);
  }
}, [user])
    const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;

    signIn(email, pass)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Welcome back!",
          confirmButtonColor: "#f97316", // orange
        }).then(() => {
        //   navigate(location.state || "/");
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid email or password.",
          confirmButtonColor: "#f97316",
        });
      });
  };

    return (
        <div className='absolute w-md  md:w-2xl lg:w-4xl   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  inset-0'>
            <button className='absolute top-3 right-3 cursor-pointer hover:opacity-50'>
                <CgClose size={20} onClick={() => setIsLightBoxOpen(false)} />
            </button>
            {/* Sign in Box Medel  */}

    <div className="">
      <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center bg-white dark:bg-[#18122B] bg-opacity-90 dark:bg-opacity-90 rounded-3xl shadow-2xl overflow-hidden">
        {/* Lottie Animation (hidden on mobile) */}
        <div className="hidden md:flex flex-1 items-center justify-center p-8 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-[#393053] dark:to-[#18122B]">
          <Lottie animationData={loginAnimation} loop={true} className="w-72 h-72" />
        </div>
        {/* Login Form */}
        <div className="flex-1 p-8">
          <Title>Login Now</Title>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 mt-6"
          >
            <div className="flex items-center border-b-2 border-gray-200 dark:border-gray-700 focus-within:border-orange-400 transition">
              <BiEnvelope className="text-2xl text-slate-500 mr-2" />
              <input
                className="flex-1 bg-transparent outline-none py-2 text-base text-[#18122B] dark:text-white"
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="flex items-center border-b-2 border-gray-200 dark:border-gray-700 focus-within:border-orange-400 transition">
              <BiKey className="text-2xl text-slate-500 mr-2" />
              <input
                className="flex-1 bg-transparent outline-none py-2 text-base text-[#18122B] dark:text-white"
                type="password"
                name="pass"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-300">
              <label className="flex items-center gap-2">
                <input type="checkbox" name="remember" className="accent-orange-500" />
                Remember Me
              </label>
              <span className="hover:underline cursor-pointer">Forgot password?</span>
            </div>
            <input
              type="submit"
              value="Login Now"
              className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-full shadow cursor-pointer transition"
            />
          </form>
          {/* Social Login */}
          <div className="divider">or</div>
          <div className="mt-6">
            <Social location={location} navigate={navigate} />
          </div>
          <div className="mt-4 text-center text-gray-600 dark:text-gray-300">
            Don’t have an account?{" "}
            <a href="/registration" className="text-orange-500 font-semibold hover:underline">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>

        </div>
    );
};

export default LoginLightBox;
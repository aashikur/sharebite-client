import { useContext, useState, useRef, useEffect } from "react";
import { CgMenuMotion } from "react-icons/cg";
import { RiMenuAddLine } from "react-icons/ri";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import ToggleLightDark from "./ui/ToggleLightDark";
import HeaderLoading from "./loading/HeaderLoading";

const menu = [
  { name: "Home", path: "/" },
  // { name: "Apps", path: "/foods" },
  { name: "Available Foods", path: "/foods" },
  { name: "Add Food", path: "/add-food", private: true },
  { name: "Manage My Foods", path: "/manage-foods", private: true },
  { name: "My Food Requests", path: "/my-requests", private: true },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const profileRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (loading) {
    return  <HeaderLoading/>  
     }

  return (
    <nav className="bg-white dark:bg-[#18122B] shadow-md sticky top-0 z-50 transition-colors duration-300">
      {user && (
        <p className="text-center text-white bg-gradient-to-r from-orange-500 to-pink-500 py-2">
          Welcome, {user?.displayName || user?.name || "User"}!
        </p>
      )}
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="ShareBite Logo" className="w-10 h-10 rounded-full shadow" />
          <span className="text-2xl font-extrabold text-[#18122B] dark:text-white tracking-tight">
            ShareBite
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          <li>
            <span><ToggleLightDark /></span>
          </li>
          {menu.map(
            (item) =>
              (!item.private || (item.private && user)) && (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="px-3 py-2 rounded-full font-medium text-[#18122B] dark:text-white hover:bg-orange-100 dark:hover:bg-[#393053] transition"
                  
                >
                  {item.name}
                </NavLink>
              )
          )}
          {user ? (
            <div className="relative" ref={profileRef}>
              <img
                src={
                  user.photoURL
                    ? user.photoURL
                    : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                }
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-orange-500"
                onClick={() => setShowProfileDropdown((prev) => !prev)}
              />
              {showProfileDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-[#393053] rounded-xl shadow-lg py-2 z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-[#18122B] dark:text-white hover:bg-orange-100 dark:hover:bg-[#18122B] transition"
                    onClick={() => setShowProfileDropdown(false)}
                  >
                    Profile
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 text-red-500 hover:bg-orange-100 dark:hover:bg-[#18122B] transition"
                    onClick={() => {
                      logOut();
                      setShowProfileDropdown(false);
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className="px-4 py-2 rounded-full border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-50 dark:hover:bg-[#393053] transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/registration"
                className="px-4 py-2 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
              >
                Register
              </NavLink>
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <ToggleLightDark />
          {!isMenuOpen ? (
            <RiMenuAddLine
              onClick={() => setIsMenuOpen(true)}
              className="text-3xl cursor-pointer ml-4 text-orange-500"
            />
          ) : (
            <CgMenuMotion
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl cursor-pointer ml-4 text-orange-500"
            />
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex flex-col">
            <ul className="bg-white dark:bg-[#18122B] w-4/5 max-w-xs h-full p-8 flex flex-col gap-6 shadow-lg absolute right-0 top-0">
              <li className="mb-4">
                <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                  <img src="/logo.png" alt="ShareBite Logo" className="w-8 h-8 rounded-full" />
                  <span className="text-xl font-bold text-[#18122B] dark:text-white">ShareBite</span>
                </Link>
              </li>
              {user && (
                <div className="flex flex-col items-center gap-2 mb-2">
                  <img
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                    }
                    alt="Profile"
                    className="w-12 h-12 rounded-full border-2 border-orange-500"
                  />
                  <Link
                    to="/profile"
                    className="text-orange-500 font-semibold hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                </div>
              )}
              {menu.map(
                (item) =>
                  (!item.private || (item.private && user)) && (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className="px-3 py-2 rounded-full font-medium text-[#18122B] dark:text-white hover:bg-orange-100 dark:hover:bg-[#393053] transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  )
              )}
              {user ? (
                <button
                  className="px-4 py-2 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                  onClick={() => {
                    logOut();
                    setIsMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="px-4 py-2 rounded-full border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-50 dark:hover:bg-[#393053] transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/registration"
                    className="px-4 py-2 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </NavLink>
                </>
              )}
            </ul>
            {/* Click outside to close */}
            <div className="flex-1" onClick={() => setIsMenuOpen(false)}></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#18122B] dark:bg-[#393053] text-white pt-12 pb-6 mt-12 rounded-t-3xl">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
      {/* Logo & About */}
      <aside className="flex flex-col items-center md:items-start gap-3">
        <img src="/logo.png" alt="ShareBite Logo" className="w-12 h-12 rounded-full shadow" />
        <span className="text-2xl font-extrabold tracking-tight">ShareBite</span>
        <p className="text-sm opacity-80 mt-2">
          Share more, waste less.<br />
          Connecting communities since 2024.
        </p>
        <div className="flex gap-3 mt-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition"><FaInstagram /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition"><FaGithub /></a>
        </div>
      </aside>
      {/* Navigation */}
      <nav>
        <h6 className="text-lg font-bold mb-2">Navigation</h6>
        <ul className="flex flex-col gap-2">
          <Link to="/" className="hover:text-orange-400 transition">Home</Link>
          <Link to="/foods" className="hover:text-orange-400 transition">Available Foods</Link>
          <Link to="/add-food" className="hover:text-orange-400 transition">Add Food</Link>
          <Link to="/manage-foods" className="hover:text-orange-400 transition">Manage My Foods</Link>
          <Link to="/my-requests" className="hover:text-orange-400 transition">My Food Requests</Link>
        </ul>
      </nav>
      {/* Company */}
      <nav>
        <h6 className="text-lg font-bold mb-2">Company</h6>
        <ul className="flex flex-col gap-2">
          <a href="#" className="hover:text-orange-400 transition">About Us</a>
          <a href="#" className="hover:text-orange-400 transition">Contact</a>
          <a href="#" className="hover:text-orange-400 transition">Careers</a>
          <a href="#" className="hover:text-orange-400 transition">Press Kit</a>
        </ul>
      </nav>
      {/* Legal */}
      <nav>
        <h6 className="text-lg font-bold mb-2">Legal</h6>
        <ul className="flex flex-col gap-2">
          <a href="#" className="hover:text-orange-400 transition">Terms of Use</a>
          <a href="#" className="hover:text-orange-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-orange-400 transition">Cookie Policy</a>
        </ul>
      </nav>
    </div>
    <div className="border-t border-white border-opacity-10 my-6"></div>
    <div className="text-center text-sm opacity-70">
      &copy; {new Date().getFullYear()} ShareBite. All rights reserved.
    </div>
  </footer>
);

export default Footer;
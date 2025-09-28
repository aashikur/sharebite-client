import React from 'react';

const DropDownProfile = () => {
    return (
      <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-[#393053] rounded-xl shadow-lg py-2 z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-[#18122B] dark:text-white hover:bg-orange-100 dark:hover:bg-[#18122B] transition"
                    onClick={() => setShowProfileDropdown(false)}
                  >
                    👤 Profile
                  </Link>
                  <Link
                    to="/my-requests"
                    className="block px-4 py-2 text-[#18122B] dark:text-white hover:bg-orange-100 dark:hover:bg-[#18122B] transition"
                    onClick={() => setShowProfileDropdown(false)}
                  >
                    🍴 My Requests
                  </Link>
                  <Link
                    to="/manage-foods"
                    className="block px-4 py-2 text-[#18122B] dark:text-white hover:bg-orange-100 dark:hover:bg-[#18122B] transition"
                    onClick={() => setShowProfileDropdown(false)}
                  >
                    📦 Manage Foods
                  </Link>
                  <Link
                    to="/badges"
                    className="block px-4 py-2 text-[#18122B] dark:text-white hover:bg-orange-100 dark:hover:bg-[#18122B] transition"
                    onClick={() => setShowProfileDropdown(false)}
                  >
                    🏅 Badges
                  </Link>
                  <Link
                    to="/chat"
                    className="block px-4 py-2 text-[#18122B] dark:text-white hover:bg-orange-100 dark:hover:bg-[#18122B] transition"
                    onClick={() => setShowProfileDropdown(false)}
                  >
                    💬 Chat
                  </Link>
                  <Link
                    to="/ai-suggestions"
                    className="block px-4 py-2 text-[#18122B] dark:text-white hover:bg-orange-100 dark:hover:bg-[#18122B] transition"
                    onClick={() => setShowProfileDropdown(false)}
                  >
                    🤖 AI Suggestions
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 text-red-500 hover:bg-orange-100 dark:hover:bg-[#18122B] transition"
                    onClick={() => {
                      logOut();
                      setShowProfileDropdown(false);
                    }}
                  >
                    🚪 Logout
                  </button>
                </div>
    );
};

export default DropDownProfile;
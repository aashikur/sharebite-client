import React from 'react';

const HeaderLoading = () => {
    return (
            <nav className="bg-white dark:bg-[#18122B] shadow-md sticky top-0 z-50 transition-colors duration-300">
                {/* Skeleton Welcome Banner */}
                <div className="h-8 max-w-xs mx-auto my-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 animate-pulse" />

                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center relative">

                    {/* Skeleton Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-[#2c2646] animate-pulse shadow" />
                        <div className="w-24 h-6 rounded-lg bg-gray-300 dark:bg-[#2c2646] animate-pulse" />
                    </div>

                    {/* Skeleton Desktop Menu (hidden on mobile) */}
                    <ul className="hidden lg:flex items-center gap-6">
                        {/* Theme toggle placeholder */}
                        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-[#2c2646] animate-pulse" />

                        {/* Menu items placeholders */}
                        {[...Array(4)].map((_, i) => (
                            <li key={i} className="w-16 h-6 rounded-full bg-gray-300 dark:bg-[#2c2646] animate-pulse" />
                        ))}

                        {/* Profile pic placeholder */}
                        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-[#2c2646] animate-pulse border-2 border-orange-500" />
                    </ul>

                    {/* Skeleton Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-[#2c2646] animate-pulse" />
                        <div className="w-8 h-8 rounded bg-gray-300 dark:bg-[#2c2646] animate-pulse" />
                    </div>
                </div>
            </nav>
    );
};

export default HeaderLoading;
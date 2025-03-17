import React from 'react';
import image from '/public/image.jpg';
import { BiMoon, BiSun } from 'react-icons/bi';

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={image} alt="Eduardo Ghidoli" className="w-32 rounded-full" />
          <div className="text-center space-y-1">
            <h1 className="text-4xl font-light">
              Eduardo <span className="font-semibold">Ghidoli</span>
            </h1>
            <h3 className="text-xl font-light">DevOps Engineer</h3>
          </div>
          <button className="absolute right-10 top-10" onClick={toggleDarkMode}>
            {darkMode ? (
              <BiSun className="text-2xl" />
            ) : (
              <BiMoon className="text-2xl" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;

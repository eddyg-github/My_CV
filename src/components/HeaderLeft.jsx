import React from 'react';
import image from '/public/image.jpg';
import { BiMoon, BiSun, BiCurrentLocation, BiEnvelope, BiLink } from 'react-icons/bi';
import { BiLogoGithub, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'; // Importar los íconos de redes sociales

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700">
      <div className="flex flex-col gap-5">
        {/* Header Section */}
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

        {/* Contact Info Section */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiCurrentLocation className="text-xl" />
              <span>Buenos Aires, Argentina</span>
            </li>

            {/* Ofuscación del correo */}
            <li className="flex items-center gap-2">
              <BiEnvelope className="text-xl" />
              <a href="mailto:eduardoghidoli@gmail.com">email</a>
            </li>

            {/* Sección de LinkedIn */}
            <li className="flex items-center gap-2">
              <BiLink className="text-xl" /> {/* Icono de LinkedIn */}
              <a href="https://www.linkedin.com/in/eduardo-ghidoli" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">SOCIAL</h1>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiLogoGithub className="text-xl" />
              <span>@githubuser</span>
            </li>
            <li className="flex items-center gap-2">
              <BiLogoTwitter className="text-xl" />
              <span>@twitteruser</span>
            </li>
            <li className="flex items-center gap-2">
              <BiLogoLinkedin className="text-xl" />
              <span>@linkedinuser</span>
            </li>
          </ul>
        </div>

        {/* Education Section */}
        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">EDUCATION</h1>

          <ul>
            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
              <span className="font-semibold md:text-lg">Computer Science</span>
              <span className="font-light">University of X</span>
              <span className="text-sm text-gray-400">2016-2020</span>
            </li>

            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
              <span className="font-semibold md:text-lg">Data Analyst</span>
              <span className="font-light">University of And</span>
              <span className="text-sm text-gray-400">2020-2023</span>
            </li>

            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
              <span className="font-semibold md:text-lg">Business School</span>
              <span className="font-light">University of Z</span>
              <span className="text-sm text-gray-400">2023 - ongoing</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;

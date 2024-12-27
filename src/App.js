import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';







const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#071823] text-white fixed w-full z-50 top-0 left-0">
      <div className="container mx-auto flex items-center justify-between p-4 ">
        <div className="text-2xl font-bold 2xl:ml-[8rem] 2xl:text-3xl">Portfolio</div>

        {/* Hamburger menu (mobile) */}
        <button
          onClick={toggleMenu}
          className="sm:hidden block text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Menu items */}
        <ul
          className={`sm:flex sm:items-center  2xl:text-xl sm:space-x-6 absolute sm:static bg-[#071823] sm:bg-transparent w-full sm:w-auto left-0 transition-all duration-300 ${
            isOpen ? "top-16" : "top-[-300px]"
          }`}
        >
          <li className="px-4 py-2 hover:bg-blue-500 sm:hover:bg-transparent">
            <a href="#home">Home</a>
          </li>
          <li className="px-4 py-2 hover:bg-blue-500 sm:hover:bg-transparent">
            <a href="#about-me">About Me</a>
          </li>
          <li className="px-4 py-2 hover:bg-blue-500 sm:hover:bg-transparent">
            <a href="#skills">My Skills</a>
          </li>
          <li className="px-4 py-2 hover:bg-blue-500 sm:hover:bg-transparent">
            <a href="#projects">Projects</a>
          </li>
          <li className="px-4 py-2 hover:bg-blue-500 sm:hover:bg-transparent">
          <a href="/resume.pdf" download="Kunal_Koli_Resume.pdf" className="resume-link">
           Resume
          </a>
          </li>
          <li className="px-4 py-2 hover:bg-blue-500 sm:hover:bg-transparent">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default App;

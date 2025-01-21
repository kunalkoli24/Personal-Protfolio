import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="mt-36 pt-[5rem]">
      <p className="text-center font-bold text-5xl text-white md:text-6xl xl:text-5xl">
        Projects
      </p>

      <div className="h-auto mt-14">
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="h-auto w-full md:w-[48%] lg:w-[45%] xl:w-[42%] ">
            <div className="mx-4 sm:mx-8 h-auto mt-6 sm:mt-12 text-lg space-y-4 border-2 border-[#0ef] rounded-3xl shadow-[#0ef] shadow-lg p-5 md:p-7">
              <p className="text-center mt-5 font-bold text-xl sm:text-2xl xl:text-3xl underline text-white">
              ChatNetwork
              </p>
              <p className="text-center text-white">
              Developed ChatNetwork, a real-time chat application using Socket.io, HTML, CSS, and JavaScript, designed to enable instant, seamless communication between users.
              </p>
              <p className="text-center text-white">
              The core functionality is powered by Socket.io, facilitating bidirectional, real-time message exchange.
              </p>
              <p className="text-center text-white">
              ChatNetwork showcases expertise in real-time communication and responsive web application development.              </p>
            </div>
          </div>

          <div className="h-auto w-full md:w-[48%] lg:w-[45%] xl:w-[42%]">
            <div className="mx-4 sm:mx-8 h-auto mt-6 sm:mt-12 text-lg space-y-4 border-2 border-[#0ef] rounded-3xl shadow-[#0ef] shadow-lg p-5 md:p-7">
              <p className="text-center mt-5 font-bold text-xl sm:text-2xl xl:text-3xl underline text-white">
                HotStar Media Clone
              </p>
              <p className="text-center text-white">
                The Hotstar Media Clone project is a web-based replica of the popular streaming
                platform Hotstar, built using HTML, CSS, and JavaScript.
              </p>
              <p className="text-center text-white">
                This project is primarily focused on recreating the visual aspects of the
                platform without any backend functionality or dynamic content loading.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 justify-center mt-8">
          <div className="h-auto w-full md:w-[48%] lg:w-[45%] xl:w-[42%] ">
            <div className="mx-4 sm:mx-8 h-auto text-lg space-y-4 border-2 border-[#0ef] rounded-3xl shadow-[#0ef] shadow-lg p-5 md:p-7">
              <p className="text-center mt-5 font-bold text-xl sm:text-2xl xl:text-3xl underline text-white">
                Grocery Website
              </p>
              <p className="text-center p-2 text-white">
                The Grocery Website project is a static online shopping platform created using
                HTML, CSS, JavaScript, with a primary focus on TailwindCSS for design.
              </p>
              <p className="text-center p-2 text-white">
                This project simulates a modern e-commerce website for groceries, allowing
                users to browse and view various grocery items.
              </p>
              <p className="font-bold text-white">Key Features:</p>
              <ul className="list-disc pl-5 sm:pl-10 text-white">
                <li>User Friendly Layout</li>
                <li>Quality Design with TailwindCSS</li>
                <li>Interactive Elements with JavaScript</li>
                <li>Product Listing</li>
              </ul>
            </div>
          </div>

          <div className="h-auto w-full md:w-[48%] lg:w-[45%] xl:w-[42%] ">
            <div className="mx-4 sm:mx-8 h-auto text-lg space-y-4 border-2 border-[#0ef] rounded-3xl shadow-[#0ef] shadow-lg p-5 md:p-7">
              <p className="text-center mt-5 font-bold text-xl sm:text-2xl xl:text-3xl underline text-white">
                Currency Converter
              </p>
              <p className="text-center p-2 text-white">
                A simple, interactive web application designed using HTML, JavaScript, and
                TailwindCSS.
              </p>
              <p className="text-center p-2 text-white">
                This static project allows users to convert amounts between different currencies
                based on predefined exchange rates, offering a clean interface with TailwindCSS
                for modern styling.
              </p>
              <p className="font-bold text-white">Key Features:</p>
              <ul className="list-disc pl-5 sm:pl-10 text-white">
                <li>Real-time Conversion</li>
                <li>Multiple Currency Selection</li>
                <li>Minimalistic Design</li>
                <li>API Integration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 justify-center mt-8">
          <div className="h-auto w-full md:w-[48%] lg:w-[45%] xl:w-[42%] ">
            <div className="mx-4 sm:mx-8 h-auto text-lg space-y-4 border-2 border-[#0ef] rounded-3xl shadow-[#0ef] shadow-lg p-5 md:p-7">
              <p className="text-center mt-5 font-bold text-xl sm:text-2xl xl:text-3xl underline text-white">
                Figma Designs
              </p>
              <ul>
                <li className="font-semibold underline text-white">Domino's Menu Cards:</li>
                <p className="text-white">
                  Designed interactive menu cards for Domino's pizza, featuring a detailed
                  visual layout of various menu items with hover effects Prototyping.
                </p>
                <li className="font-semibold underline text-white">HotStar Media Login Interface:</li>
                <p className="text-white">
                  Created a static clone of the Hotstar login page using Figma. Focused on clean,
                  modern UI with attention to spacing, typography, and alignment.
                </p>
              </ul>
            </div>
          </div>

          <div className="h-auto w-full md:w-[48%] lg:w-[45%] xl:w-[42%] ">
            <div className="mx-4 sm:mx-8 h-auto text-lg space-y-4 border-2 border-[#0ef] rounded-3xl shadow-[#0ef] shadow-lg p-5 md:p-7">
              <p className="text-center mt-5 font-bold text-xl sm:text-2xl xl:text-3xl underline text-white">
                Basic Projects
              </p>
              <ul>
                <li className="font-semibold underline text-white">
                  Landing page For Travel Website:
                </li>
                <p className="text-white">
                  A static landing page designed for a fictional travel agency called GoEasy
                  Travels.
                </p>
                <li className="font-semibold underline text-white">ToDo List:</li>
                <p className="text-white">
                  Simple yet effective web application that allows users to create, manage, and
                  organize their daily tasks.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

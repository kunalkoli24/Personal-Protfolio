import React, { useEffect } from "react";
import "./Skills.css";

const Skills = () => {
  useEffect(() => {
    // technical skill progress bars
    const updateTechnicalSkills = () => {
      const techProgressBars = document.querySelectorAll('.tech-bars .progress-line span');
      techProgressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage; // Set width dynamically
      });
    };

    // professional skill progress bars
    const updateProgressBars = () => {
      const progressBars = document.querySelectorAll('.prof-progress-line span');
      progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage; // Set width dynamically
      });
    };
    updateTechnicalSkills();
    updateProgressBars();
  }, []);

  return (
    <section id="skills">
      <p className="text-center font-bold text-5xl mt-36 pt-[5rem] text-white">My Skills</p>

      <div className="flex flex-col  lg:flex-row xl:flex-row justify-center space-y-10 lg:space-y-10 sm:space-y-10 sm:flex-row sm:justify-start sm:space-x-10">
        {/* Technical Skills */}
        <div className="w-full sm:w-full xl:w-[50rem] 2xl:w-[40rem] 2xl:ml-[4rem] px-4 sm:px-0">
  <p className="text-center mt-10 sm:mt-20 font-bold text-3xl text-white">Technical Skills</p>
  <div className="p-6 mt-12 text-lg space-y-4 border-2 border-[#0ef] rounded-3xl shadow-[#0ef] shadow-lg">
    {/* HTML */}
    <div className="tech-bars">
      <div className="bar">
        <i className="bx bxl-html5"></i>
      </div>
      <div className="info text-white">
        <span>HTML</span>
      </div>
      <div className="progress-line html text-white">
        <span data-percentage="95%"></span>
      </div>
    </div>

    {/* CSS */}
    <div className="tech-bars">
      <div className="bar">
        <i className="bx bxl-css3"></i>
      </div>
      <div className="info text-white">
        <span>CSS</span>
      </div>
      <div className="progress-line css">
        <span data-percentage="80%"></span>
      </div>
    </div>

    {/* JavaScript */}
    <div className="tech-bars">
      <div className="bar">
        <i className="bx bxl-javascript"></i>
      </div>
      <div className="info text-white">
        <span>JAVASCRIPT</span>
      </div>
      <div className="progress-line javascript">
        <span data-percentage="70%"></span>
      </div>
    </div>

    {/* TailwindCSS */}
    <div className="tech-bars">
      <div className="bar">
        <i className="bx bxl-tailwind-css"></i>
      </div>
      <div className="info text-white">
        <span>TAILWINDCSS</span>
      </div>
      <div className="progress-line tailwind-css">
        <span data-percentage="88%"></span>
      </div>
    </div>

    {/* Python */}
    <div className="tech-bars">
      <div className="bar">
        <i className="bx bxl-python"></i>
      </div>
      <div className="info text-white">
        <span>PYTHON</span>
      </div>
      <div className="progress-line python">
        <span data-percentage="70%"></span>
      </div>
    </div>

    {/* Java */}
    <div className="tech-bars">
      <div className="bar">
        <i className="bx bxl-java"></i>
      </div>
      <div className="info text-white">
        <span>JAVA</span>
      </div>
      <div className="progress-line python">
        <span data-percentage="50%"></span>
      </div>
    </div>

    {/* Figma */}
    <div className="tech-bars">
      <div className="bar">
        <i className="bx bxl-figma"></i>
      </div>
      <div className="info text-white">
        <span>FIGMA</span>
      </div>
      <div className="progress-line figma">
        <span data-percentage="80%"></span>
      </div>
    </div>
  </div>
</div>

{/* Professional Skills */}
<div className="w-full sm:w-full 2xl:w-[40rem] px-4 sm:px-0 mt-10">
  <p className="text-center mt-10 font-bold text-3xl text-white">Professional Skills</p>
  <div className="p-6 sm:p-8 mt-12 sm:mt-[3rem] text-lg border-2 border-[#0ef] rounded-3xl shadow-[#0ef] shadow-lg">
    {/* Communication */}
    <div className="prof-bars mb-4">
      <div className="bar">
        <i className="bx bx-briefcase"></i>
      </div>
      <div className="info text-white">
        <span>Communication</span>
      </div>
      <div className="prof-progress-line communication">
        <span data-percentage="90%"></span>
      </div>
    </div>

    {/* Teamwork */}
    <div className="prof-bars mb-4">
      <div className="bar">
        <i className="bx bx-group"></i>
      </div>
      <div className="info text-white">
        <span>Teamwork</span>
      </div>
      <div className="prof-progress-line teamwork">
        <span data-percentage="95%"></span>
      </div>
    </div>

    {/* Creativity */}
    <div className="prof-bars mb-4">
      <div className="bar">
        <i className="bx bx-bulb"></i>
      </div>
      <div className="info text-white">
        <span>Creativity</span>
      </div>
      <div className="prof-progress-line creativity">
        <span data-percentage="80%"></span>
      </div>
    </div>

    {/* Problem Solving */}
    <div className="prof-bars">
      <div className="bar">
        <i className="bx bx-brain"></i>
      </div>
      <div className="info text-white">
        <span>Problem Solving</span>
      </div>
      <div className="prof-progress-line problem-solving">
        <span data-percentage="85%"></span>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Skills;

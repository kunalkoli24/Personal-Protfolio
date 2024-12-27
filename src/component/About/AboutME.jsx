import React from 'react';


const AboutMe = () => {
    return (
        <section id="about-me" className="pt-4 px-4 sm:pt-10">
            <p className="text-center text-3xl sm:text-5xl mt-6 sm:mt-10 font-bold text-white">About Me</p>
            
            {/* First Box: About Section */}
            <div className="border-2 border-[#0ef] mt-6 sm:mt-10 mx-auto rounded-t-3xl shadow-[#0ef] shadow-lg px-4 py-6 sm:py-8 sm:px-10 text-white max-w-[90%] sm:max-w-[810px]">
                <p className="text-center text-xl sm:text-3xl font-bold">Hello! I'm Kunal Koli</p>
                <p className="mt-4 text-sm sm:text-base text-center">
                    A final-year Computer Engineering student at Keystone School Of Engineering,<br />
                    Affiliated to Savitribai Phule Pune University,<br />
                    passionate about building web applications and solving real-world problems through technology.
                </p>
                <p className="mt-4 text-sm sm:text-base text-center">
                    I am an active member of the college committee called <b>Association Of Computer Engineering Students.</b>
                </p>
                <p className="mt-4 text-sm sm:text-base text-center">
                    I specialize in FullStack Web-Development, building responsive and <br />
                    user-friendly interfaces using modern technologies like TailwindCSS, JavaScript, and React.
                </p>
                <p className="mt-4 text-sm sm:text-base text-center">
                    I enjoy solving real-world problems through technology. One of my notable projects is <b>‘GreenBasket’</b>, a grocery website that enhances the online shopping experience. I’m also working on a <b>journey planning website</b> as part of my final year project.
                </p>
            </div>
        
            {/* Second Box: Education Section */}
            <div className="border-2 border-[#0ef] mt-6 sm:mt-10 mx-auto rounded-t-3xl shadow-[#0ef] shadow-lg px-4 py-6 sm:py-8 sm:px-10 text-white max-w-[90%] sm:max-w-[810px]">
    <p className="text-center text-2xl sm:text-3xl font-bold">Education</p>
    
    {/* Bachelor of Engineering Section */}
<div className="mt-4 text-center">
    <p className="ml-4 sm:ml-0 sm:text-center text-lg sm:text-xl font-semibold">Bachelor of Engineering in Computer Engineering,</p>
    <p className="ml-4 sm:ml-0 sm:text-center">Keystone School Of Engineering Affiliated to SPPU.</p>
    <p className="ml-4 sm:ml-0 sm:text-center">Currently In My 4th Year.</p>
    <p className="ml-4 sm:ml-0 sm:text-center">CGPA: 7.0/10</p>
</div>

    
    {/* Secondary (10th) and Higher Secondary (12th) Section */}
    <div className="flex flex-col sm:flex-row sm:justify-between mt-6">
        
        {/* Secondary (10th) Section */}
        <div className="mb-6 sm:mb-0 text-center sm:ml-[2rem]">
            <p className="font-semibold mb-2">Secondary (10th)</p>
            <ul className=" text-sm sm:text-base">
                <li>ST. Francis De Sales High School, Pune</li>
                <li>Year Of Passing: 2019</li>
                <li>Percentage: 71.20%</li>
            </ul>
        </div>
        
        {/* Higher Secondary (12th) Section */}
        <div className="text-center sm:ml-[3rem]">
            <p className="font-semibold mb-2">Higher Secondary (12th)</p>
            <ul className=" text-sm sm:text-base">
                <li>Dhole Patil College Of Arts, Commerce And Science, Pune</li>
                <li>Year Of Passing: 2021</li>
                <li>Percentage: 75.33%</li>
            </ul>
        </div>
    </div>
</div>

        </section>
    );
};

export default AboutMe;

import React, { useEffect } from 'react';
import './Home.css';
import profilePhoto from '../../assets/profile-photo.jpg';


const Home = () => {
  
    useEffect(() => {
        const typingAnimationElement = document.getElementById('typing-animation');
        const typingTexts = ['FullStack Web-Developer', 'Figma Designer'];
        let currentTextIndex = 0; 
        let charIndex = 0; 
        let isDeleting = false; 
        const type = () => {
            const currentText = typingTexts[currentTextIndex];

            if (!isDeleting) {
                typingAnimationElement.textContent = currentText.slice(0, charIndex + 1);
                charIndex++;

                if (charIndex === currentText.length) {
                    setTimeout(() => {
                        currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
                        charIndex = 0; 
                        typingAnimationElement.textContent = ''; 
                        setTimeout(type, 500); 
                    }, 1000); 
                    return;
                }
            }
            setTimeout(type, 70);
        };
        type();
        return () => {
            clearTimeout(type); 
        };
    }, []);

    return (
        <section id="home" className="px-4 sm:px-8 md:px-16 lg:px-36 flex flex-col justify-center h-screen lg:justify-normal lg:mt-7 ">
            <div className="relative flex flex-col md:flex-row justify-center items-center md:items-start">
                <div className="home-content text-center md:text-left ">
                    <h2 className="pt-16 mt-12 md:mt-20 font-bold text-white text-2xl md:text-3xl xl:text-3xl 2xl:text-4xl">
                        Hello, It's Me
                    </h2>
                    <h1 className="mt-4 md:mt-7 font-bold text-4xl md:text-6xl xl:text-7xl 2xl:text-7xl text-white font-serif">
                        Kunal Koli
                    </h1>
                    <h2 className="mt-4 md:mt-7 font-bold text-xl md:text-3xl xl:text-4xl 2xl:text-4xl text-white">
                        And I'm a{' '}
                        <span id="typing-animation" className="text-[#0ef] text-2xl md:text-4xl xl:text-5xl 2xl:text-5xl"></span>
                    </h2>
                </div>
            
                
                <div className="relative mt-12 md:mt-0 mx-auto md:ml-auto md:mr-0 ">
                    <img
                        className="h-40 w-40 md:h-[22rem] md:w-[22rem]  lg:h-[22rem] lg:w-[22rem] lg:mt-[5rem] xl:ml-[7rem] xl:h-[22rem] xl:w-[22rem] xl:mt-[6rem] 2xl:h-[22rem] 2xl:w-[22rem] 2xl:mt-[7rem] 2xl:mr-0 rounded-full"
                        src={profilePhoto}
                        alt="Profile"
                    />
                </div>
            </div>
            <div>
                <p className="md:mt-7 sm:mt-7 mt-7 text-white text-center md:text-left md:ml-[8rem] lg:ml-[8rem] ">
                    Follow Me On
                </p>
                <div className="socialmedia flex justify-center md:justify-start font-semibold mt-2 sm:mt-2">
                    <a
                        href="https://www.facebook.com/KUNAl.koli.329?mibextid=JRoKGi"
                        style={{ '--i': 6 }}
                    >
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/kunalkoli_2409?igsh=MXQ5NG04bnp1NmsybQ=="
                        style={{ '--i': 7 }}
                    >
                        <i className="bx bxl-instagram-alt"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kunal-koli-79362a282/"
                        style={{ '--i': 8 }}
                    >
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a
                        href="https://app.netlify.com/teams/kunalkoli24/sites"
                        style={{ '--i': 9 }}
                    >
                        <i className="bx bxl-netlify"></i>
                    </a>
                    <a
                        href="https://www.figma.com/files/team/1239825780448216139/recents-and-sharing?fuid=1239825775587978057"
                        style={{ '--i': 9 }}
                    >
                        <i className="bx bxl-figma"></i>
                    </a>
                    <a
                        href="https://github.com/kunalkoli24"
                        style={{ '--i': 9 }}
                    >
                        <i className="bx bxl-github"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;

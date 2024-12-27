import React, { useEffect } from "react";
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    if (typeof window.emailjs === "undefined") {
      console.error("EmailJS library is not loaded. Ensure the script is included correctly.");
      return;
    }

    console.log("EmailJS loaded successfully:", window.emailjs);
    window.emailjs.init("7U3KxEq4BcMAC8yck");

    const form = document.getElementById("contact-form");

    const handleFormSubmit = (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("gmail").value;
      const note = document.getElementById("note").value;

      const formData = {
        from_name: name,
        from_email: email,
        note: note,
      };

      window.emailjs
        .send("service_e8e1h86", "template_vbn2qo6", formData)
        .then(
          (response) => {
            alert("Message sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
            form.reset();
          },
          (error) => {
            alert("Failed to send message. Please try again.");
            console.error("FAILED...", error);
          }
        )
        .catch((error) => {
          console.error("Error in EmailJS send:", error);
        });
    };

    form.addEventListener("submit", handleFormSubmit);

    return () => {
      form.removeEventListener("submit", handleFormSubmit);
    };
  }, []);

  return (
    <section id="contact" className="mt-36 pt-20">
      <p className="text-5xl font-bold text-center text-white">Contact Me</p>

      <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-8 lg:space-x-12 xl:space-x-16 2xl:space-x-20 h-auto">
        {/* Left Section */}
        <div className="w-full md:w-1/2 px-6 sm:px-12 text-left md:text-left">
          <p className="font-bold text-3xl text-white text-center mt-[4rem] ">Fill The Form</p>
          <div className="p-6 mt-6 text-lg space-y-4 border-2 border-[#0ef] rounded-3xl shadow-[#0ef] shadow-lg">
            <form id="contact-form" className="contact-form space-y-3">
              <label htmlFor="name" className="text-white">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-2 border rounded text-white"
              />

              <label htmlFor="gmail" className="text-white">Gmail:</label>
              <input
                type="email"
                id="gmail"
                name="gmail"
                placeholder="Your Gmail"
                required
                className="w-full p-2 border rounded text-white"
              />

              <label htmlFor="note" className="text-white">Note:</label>
              <textarea
                id="note"
                name="note"
                placeholder="Enter your note"
                required
                className="w-full p-2 border rounded text-white"
              ></textarea>

              <button
                type="submit"
                className="px-4 py-2 bg-[#0ef] rounded shadow-md  text-white w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 px-6 sm:px-12 mt-12 md:mt-0 text-center md:text-center whitespace-nowrap">
          <p className="font-bold text-3xl text-white">Connect With Me Here</p>
          <div className="p-6 mt-6 text-lg space-y-4 border-2 border-[#0ef] rounded-3xl shadow-[#0ef] shadow-lg">
            <div className="space-y-3">
              <p className="text-white flex items-center justify-center">
                <i className="bx bxl-gmail mr-3 text-[#0ef]"></i>
                <span>Email: </span>
                <a
                  href="mailto:kunalkoli537@gmail.com"
                  className="font-bold ml-1"
                >
                  kunalkoli537@gmail.com
                </a>
              </p>
              <p className="text-white flex items-center justify-center">
                <i className="bx bxs-phone mr-3 text-[#0ef]"></i>
                <span>Phone: </span>
                <span className="font-bold ml-1">+91 9067722391</span>
              </p>
              <p className="text-white flex items-center justify-center">
                <i className="bx bx-current-location mr-3 text-[#0ef]"></i>
                <span>Location: </span>
                <span className="font-bold ml-1">Pune, India</span>
              </p>
            </div>

            <p className="text-center pt-10 font-semibold text-white">Follow Me On</p>

            {/* Updated the social media icons section */}
            <div className="socialmedia font-semibold flex 2xl:ml-[5rem]  items-center overflow-x-auto py-4 w-full">
              <div className="flex space-x-4 min-w-max">
                <a href="https://www.facebook.com/" className="hover:text-[#0ef]">
                  <i className="bx bxl-facebook text-3xl"></i>
                </a>
                <a href="https://www.instagram.com/" className="hover:text-[#0ef]">
                  <i className="bx bxl-instagram-alt text-3xl"></i>
                </a>
                <a href="https://www.linkedin.com/" className="hover:text-[#0ef]">
                  <i className="bx bxl-linkedin text-3xl"></i>
                </a>
                <a href="https://www.figma.com/" className="hover:text-[#0ef]">
                  <i className="bx bxl-figma text-3xl"></i>
                </a>
                <a href="https://app.netlify.com/" className="hover:text-[#0ef]">
                  <i className="bx bxl-netlify text-3xl"></i>
                </a>
                <a href="https://github.com/" className="hover:text-[#0ef]">
                  <i className="bx bxl-github text-3xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

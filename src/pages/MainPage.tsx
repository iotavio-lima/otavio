import pic from '../assets/p_pic.jpeg'
import statuePic from '../assets/pic.png'
import Card from "../components/Card.tsx";
import Link from "../components/Link.tsx";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import SocialLink from "../components/SocialLink.tsx";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Footer from "../components/Footer.tsx";
import { IoSend } from "react-icons/io5";
import emailjs from "emailjs-com";
import SucessMessage from "../components/SucessMessage.tsx";
import ErrorMessage from "../components/ErrorMessage.tsx";

const MainPage = () => {
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const titles = [
    "Software Engineer",
    "Full-Stack Developer",
    "Problem Solver",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const sendEmail = () => {
    if (!message.trim()) return;

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        user_name: "Portfolio Website",
        user_email: "noreply@portfolio.com",
        message: message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setMessage("");
        setShowSuccess(true);

        setTimeout(() => setShowSuccess(false), 2500);
      })
      .catch(() => {
        setShowError(true);

        setTimeout(() => setShowError(false), 2500);
      });
  };
  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        src={statuePic}
        alt="Pic"
        className="
          fixed
          inset-x-0
          bottom-0
          mx-auto
          w-[600px]
          -z-10
          opacity-40
          pointer-events-none
          md:translate-x-70
        "
      />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <SucessMessage show={showSuccess} />
        <ErrorMessage show={showError} />
        <img
          className="w-48 rounded-full border border-[#0D0D0D] animate-float transition-transform duration-500 ease-out hover:scale-[1.02] hover:-translate-y-[2px] max-[564px]:mt-16"
          src={pic}
          alt="Profile Pic"
        />
        <h1 className="text-[#BFBDBA] text-5xl mt-4">Otávio Lima</h1>
        <AnimatePresence mode="wait">
          <motion.h2
            key={titles[index]}
            className="text-[#737373] text-2xl mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {titles[index]}
          </motion.h2>
        </AnimatePresence>
        <div className="flex items-center justify-center max-w-xl mt-8">
          <p className="text-[#D9D9D9] mr-4 ml-4 text-base">
            I am focused on growing as a Software Engineer, driven by continuous learning and consistency. For the past two years,
            I have studied Java, TypeScript, and React, applying best practices and building real-world applications to strengthen my career foundation.
          </p>
        </div>
        <div className="flex items-center justify-center mt-12 gap-6 max-[564px]:flex-col">
          <Card text='Creative' />
          <Card text='Innovative' />
          <Card text='Detail-Oriented' />
          <Card text='Collaborative' />
        </div>
        <div className="flex flex-col items-center justify-center mt-12">
          <Link to='/about' text='About'/>
          <Link to='/blogs' text='Blogs'/>
          <Link to='/projects' text='Projects'/>
        </div>
        <div className="flex items-center justify-center gap-2">
          <input type="text" placeholder="Send me a message" value={message} onChange={(e) => setMessage(e.target.value)} className="bg-[#0D0D0D] text-[#D9D9D9] placeholder:text-[#D9D9D9] h-12 w-136 max-[564px]:w-80 max-[416px]:w-64 max-[348px]:w-56 px-4 rounded-xl shadow-[-4px_4px_0_0_rgba(0,0,0,0.3)] outline-none"/>
          <button onClick={sendEmail} className="flex items-center justify-center bg-[#121212] hover:bg-[#0D0D0D] transition duration-300 text-[#D9D9D9] h-12 w-12 rounded-2xl shadow-[-4px_4px_0_0_rgba(0,0,0,0.3)] cursor-pointer"><IoSend /></button>
        </div>
        <div className="flex items-center justify-center mt-8 gap-4 max-[564px]:">
          <SocialLink href='https://github.com/otavlima' icon={<FaGithub />} />
          <SocialLink href='https://www.linkedin.com/in/otavlima/' icon={<FaLinkedin />} />
          <SocialLink href='https://www.instagram.com/otavlima7_/' icon={<FaInstagram />} />
          <SocialLink href='mailto:otavio.lima.co@gmail.com' icon={<MdOutlineMail />} />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default MainPage
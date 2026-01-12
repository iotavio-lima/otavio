import pic from '../assets/p_pic.jpeg'
import statueOfLiberty from '../assets/pic.png'
import Card from "../components/Card.tsx";
import Link from "../components/Link.tsx";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import SocialLink from "../components/SocialLink.tsx";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Footer from "../components/Footer.tsx";

const MainPage = () => {
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

  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        src={statueOfLiberty}
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
          md:translate-x-90
        "
      />
      <div className="flex flex-col items-center justify-center min-h-screen">
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
        <div className="flex items-center justify-center mt-8 gap-4 max-[564px]:">
          <SocialLink href='https://github.com/iotavio-lima' icon={<FaGithub />} />
          <SocialLink href='https://www.linkedin.com/in/iotavio-lima/' icon={<FaLinkedin />} />
          <SocialLink href='https://www.instagram.com/limasc7_/' icon={<FaInstagram />} />
          <SocialLink href='mailto:otavio.lima.co@gmail.com' icon={<MdOutlineMail />} />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default MainPage
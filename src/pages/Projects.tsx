import Skeleton from "../components/Skeleton.tsx";
import { IoIosArrowForward } from "react-icons/io";

const Projects = () => {
  return (
    <Skeleton
      title='Projects'
      content={
        <div className="h-screen overflow-hidden">
          <div className="mt-64 max-[564px]:mt-32 max-w-96">
            <div className="mt-4 px-4">
              <h2 className="text-[#D9D9D9] text-xl font-semibold">Crown Investments</h2>
              <p className="text-sm text-[#D9D9D9] mt-2">Full-stack financial management system with a secure REST API (Spring Boot) and a fully responsive frontend (React + TypeScript + TailwindCSS).</p>
              <a href='https://github.com/otavlima/crown-investments' target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border border-[#404040] h-12 w-full px-6 rounded-xl mt-4 bg-[#0D0D0D] text-[#BFBDBA] text-xl hover:border-[#f2f2f2] hover:text-[#f2f2f2] transition duration-300 select-none shadow-[-2px_2px_4px_rgba(0,0,0,0.5)]">
                <span>Crown Investments</span>
                <span><IoIosArrowForward /></span>
              </a>
            </div>
            <div className="mt-4 px-4">
              <h2 className="text-[#D9D9D9] text-xl font-semibold">Agents</h2>
              <p className="text-sm text-[#D9D9D9] mt-2">Real-time Q&A app with audio recording and AI-powered search, built during Rocketseat’s NLW IA event.</p>
              <a href='https://github.com/otavlima/agents' target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border border-[#404040] h-12 w-full  px-6 rounded-xl mt-4 bg-[#0D0D0D] text-[#BFBDBA] text-xl hover:border-[#f2f2f2] hover:text-[#f2f2f2] transition duration-300 select-none shadow-[-2px_2px_4px_rgba(0,0,0,0.5)]">
                <span>Agents</span>
                <span><IoIosArrowForward /></span>
              </a>
            </div>
            <div className="mt-4 px-4">
              <h2 className="text-[#D9D9D9] text-xl font-semibold">Vollmed Api</h2>
              <p className="text-sm text-[#D9D9D9] mt-2">A RESTful API for handling healthcare operations, including doctor and patient management, as well as scheduling medical appointments.</p>
              <a href='https://github.com/otavlima/vollmed-api' target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border border-[#404040] h-12 w-full px-6 rounded-xl mt-4 bg-[#0D0D0D] text-[#BFBDBA] text-xl hover:border-[#f2f2f2] hover:text-[#f2f2f2] transition duration-300 select-none shadow-[-2px_2px_4px_rgba(0,0,0,0.5)]">
                <span>Vollmed Api</span>
                <span><IoIosArrowForward /></span>
              </a>
            </div>
          </div>
        </div>
      }
    />
  )
}

export default Projects
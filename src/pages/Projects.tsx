import Skeleton from "../components/Skeleton.tsx";
import { IoIosArrowForward } from "react-icons/io";

const Projects = () => {
  return (
    <Skeleton
      title='Projects'
      content={
        <div className="h-screen overflow-hidden">
          <div className="mt-64 max-[564px]:mt-32 max-w-96">
            <div className="px-4">
              <h2 className="text-[#D9D9D9] text-xl font-semibold">To-do List</h2>
              <p className="text-sm text-[#D9D9D9] mt-2">Fullstack application built with Java, Spring Boot, React, and TypeScript to manage tasks, allowing users to create, list, edit, and complete them.</p>
              <a href='https://github.com/iotavio-lima/todo-app' target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border border-[#404040] h-12 w-full px-6 rounded-xl mt-4 bg-[#0D0D0D] text-[#BFBDBA] text-xl hover:border-[#f2f2f2] hover:text-[#f2f2f2] transition duration-300 select-none shadow-[-2px_2px_4px_rgba(0,0,0,0.5)]">
                <span>To-do List</span>
                <span><IoIosArrowForward /></span>
              </a>
            </div>
            <div className="mt-4 px-4">
              <h2 className="text-[#D9D9D9] text-xl font-semibold">Agents</h2>
              <p className="text-sm text-[#D9D9D9] mt-2">Real-time Q&A app with audio recording and AI-powered search, built during Rocketseat’s NLW IA event.</p>
              <a href='https://github.com/iotavio-lima/agents' target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border border-[#404040] h-12 w-full  px-6 rounded-xl mt-4 bg-[#0D0D0D] text-[#BFBDBA] text-xl hover:border-[#f2f2f2] hover:text-[#f2f2f2] transition duration-300 select-none shadow-[-2px_2px_4px_rgba(0,0,0,0.5)]">
                <span>Agents</span>
                <span><IoIosArrowForward /></span>
              </a>
            </div>
            <div className="mt-4 px-4">
              <h2 className="text-[#D9D9D9] text-xl font-semibold">Vollmed Api</h2>
              <p className="text-sm text-[#D9D9D9] mt-2">A RESTful API for handling healthcare operations, including doctor and patient management, as well as scheduling medical appointments.</p>
              <a href='https://github.com/iotavio-lima/vollmed-api' target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border border-[#404040] h-12 w-full px-6 rounded-xl mt-4 bg-[#0D0D0D] text-[#BFBDBA] text-xl hover:border-[#f2f2f2] hover:text-[#f2f2f2] transition duration-300 select-none shadow-[-2px_2px_4px_rgba(0,0,0,0.5)]">
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
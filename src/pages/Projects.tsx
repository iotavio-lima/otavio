import Skeleton from "../components/Skeleton.tsx";

const Projects = () => {
  return (
    <Skeleton
      title='Projects'
      content={
        <div className="h-screen overflow-hidden">
          <div className="mt-64 max-[564px]:mt-32">
            <div>
              <h2 className="text-[#D9D9D9] text-xl">To-do List</h2>
              <div className="flex items-center justify-center border border-[#404040] h-12 w-96 max-[416px]:w-80 max-[346px]:w-72 rounded-2xl mt-4 bg-[#161616] text-[#BFBDBA] text-xl hover:border-[#f2f2f2] hover:text-[#f2f2f2] transition duration-300 select-none shadow-[-2px_2px_4px_rgba(0,0,0,0.5)]">
                <a href='https://github.com/iotavio-lima/todo-app' target="_blank" rel="noopener noreferrer">To-do List</a>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-[#D9D9D9] text-xl">Agents</h2>
              <div className="flex items-center justify-center border border-[#404040] h-12 w-96 max-[416px]:w-80 max-[346px]:w-72 rounded-2xl mt-4 bg-[#161616] text-[#BFBDBA] text-xl hover:border-[#f2f2f2] hover:text-[#f2f2f2] transition duration-300 select-none shadow-[-2px_2px_4px_rgba(0,0,0,0.5)]">
                <a href='https://github.com/iotavio-lima/agents' target="_blank" rel="noopener noreferrer">Agents</a>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-[#D9D9D9] text-xl">Vollmed Api</h2>
              <div className="flex items-center justify-center border border-[#404040] h-12 w-96 max-[416px]:w-80 max-[346px]:w-72 rounded-2xl mt-4 bg-[#161616] text-[#BFBDBA] text-xl hover:border-[#f2f2f2] hover:text-[#f2f2f2] transition duration-300 select-none shadow-[-2px_2px_4px_rgba(0,0,0,0.5)]">
                <a href='https://github.com/iotavio-lima/vollmed-api' target="_blank" rel="noopener noreferrer">Vollmed Api</a>
              </div>
            </div>
          </div>
        </div>
      }
    />
  )
}

export default Projects
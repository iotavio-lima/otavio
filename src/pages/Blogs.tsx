import Skeleton from "../components/Skeleton.tsx";
import {Link as RouterLink} from "react-router";
import { IoIosArrowForward } from "react-icons/io";

const Blogs = () => {
  return (
    <Skeleton
      title='Blogs'
      content={
        <div className="h-screen overflow-hidden">
          <div className="animate-float transition-transform duration-500 ease-out hover:scale-[1.02] hover:-translate-y-[2px] cursor-pointer">
            <div className="mt-64 max-[564px]:mt-32">
              <RouterLink
                to='/how-did-i-learn-english'
                className="flex justify-between w-[596px] max-w-112 max-[624px]:w-[356px] max-[416px]:w-[256px]"
              >
                <p className="text-xl text-[#f2f2f2]">How did I learn english?</p>
                <p className="text-xl text-[#f2f2f2] hover:text-[#737373] transition duration-300">
                  <IoIosArrowForward />
                </p>
              </RouterLink>
              <span className="text-[#BFBDBA]">01/11</span>
              <div className="w-full h-px bg-[#404040] mt-4 mb-4" />
            </div>
          </div>
        </div>

      }
    />
  )
}

export default Blogs
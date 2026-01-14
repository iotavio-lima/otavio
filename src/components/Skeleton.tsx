import statuePic from "../assets/pic2.png";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface SkeletonProps {
  title: string
  content: React.ReactNode
}

const Skeleton = ({ title, content }: SkeletonProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <img
        src={statuePic}
        alt="Pic"
        className="
          fixed
          inset-x-0
          bottom-0
          mx-auto
          w-[500px]
          -z-10
          opacity-40
          pointer-events-none
          md:translate-x-70
        "
      />
      <div className="flex flex-col items-center min-h-screen">
        <div className="absolute top-1/5 max-[564px]:top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-between min-w-[156px] z-50 gap-96 max-[564px]:gap-80 max-[468px]:gap-56 max-[365px]:gap-48 max-[340px]:gap-32">
          <p onClick={() => navigate(-1)} className="text-[#f2f2f2] text-xl hover:text-[#737373] transition duration-300 cursor-pointer"><IoIosArrowBack /></p>
          <h1 className="text-[#f2f2f2] text-4xl">{title}</h1>
        </div>
        {content}
      </div>
    </>
  )
}

export default Skeleton
import { IoIosArrowForward } from "react-icons/io";
import { Link as RouterLink } from "react-router-dom";

interface CustomLinkProps {
  text: string;
  to: string;
}

const Link = ({ text, to }: CustomLinkProps) => {
  return (
    <>
      <RouterLink
        to={to}
        className="
          flex justify-between w-[596px] max-[624px]:w-[356px] max-[416px]:w-[256px]
          animate-float transition-transform duration-500 ease-out
          hover:scale-[1.02] hover:-translate-y-[2px] cursor-pointer
        "
      >
        <p className="text-xl text-[#BFBDBA]">{text}</p>
        <p className="text-xl text-[#f2f2f2] hover:text-[#737373] transition duration-300">
          <IoIosArrowForward />
        </p>
      </RouterLink>

      <div className="w-full h-px bg-[#404040] mt-4 mb-4" />
    </>
  );
};

export default Link;
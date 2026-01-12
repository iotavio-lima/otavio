import type {ReactNode} from "react";

interface SocialLink {
  icon: ReactNode
  href: string
}

const SocialLink = ({ icon, href }: SocialLink) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border border-[#404040] rounded-full py-[14px] px-4 rounded-2xl bg-[#161616] text-[#BFBDBA] text-lg hover:border-[#f2f2f2] hover:text-[#f2f2f2] transition duration-300 select-none">{icon}</a>
  )
}

export default SocialLink
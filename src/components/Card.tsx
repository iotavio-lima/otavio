interface CardProps {
  text: string
}

const Card = ({ text }: CardProps) => {
  return (
      <div className="flex items-center justify-center border border-[#404040] h-9 px-4 rounded-2xl bg-[#161616] text-[#BFBDBA] hover:border-[#f2f2f2] hover:text-[#f2f2f2] transition duration-300 select-none shadow-[-2px_2px_4px_rgba(0,0,0,0.5)]">{text}</div>
  )
}

export default Card
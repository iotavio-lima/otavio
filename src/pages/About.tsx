import Skeleton from "../components/Skeleton.tsx";

const About = () => {
  return (
    <Skeleton
      title='About'
      content={
        <div className="flex items-center justify-center flex-col gap-4 text-[#D9D9D9] font-medium max-w-[500px] max-[564px]:px-4 mt-56 max-[564px]:mt-28 max-[464px]:mt-24 max-[430px]:mt-24 max-[416px]:mt-32">
          <p className="w-full">Hi, I’m Otávio, I’m 14 years old, and I’m passionate about programming and technology. I started coding two years ago, and since then I’ve been dedicating myself to learning new languages, tools, and concepts. I build interfaces that are both functional and visually appealing, and I put a lot of effort into the functional part of my projects.</p>
          <p className="w-full">Besides programming, I also study English to improve my international communication skills. I focus on expanding my knowledge and staying up to date. I believe that learning is a continuous process, and I enjoy combining practice with theory to become a more complete developer. Regarding English, I believe my current level is approximately B2.</p>
          <p className="w-full">In my projects, I always try to combine logic and creativity. I pay attention to every detail, from the code structure to the user experience, aiming for intuitive and elegant solutions. Beyond technology, I have an interest in history and culture, which helps me develop a broader perspective of the world and inspires me to think critically and creatively.</p>
          <p className="w-full mb-4">I am curious, dedicated, and determined. I enjoy facing challenges because they help me grow and learn. For me, every project is an opportunity to evolve, test new ideas, and develop skills that will prepare me for the future. My goal is to keep learning, exploring new possibilities, and creating solutions that make a difference.</p>
        </div>
      }
    />
  )
}

export default About

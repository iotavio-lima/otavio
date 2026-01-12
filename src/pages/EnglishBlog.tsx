import Skeleton from "../components/Skeleton.tsx";

const EnglishBlog = () => {
  return (
    <Skeleton
      title='Blogs'
      content={
        <div className="flex items-center justify-center flex-col gap-4 text-[#D9D9D9] font-medium max-w-[500px] mt-56 max-[564px]:mt-28 max-[464px]:mt-24 max-[430px]:mt-24 max-[416px]:mt-32">
          <p className="max-[564px]:ml-4 mr-4">Learning English was a journey full of challenges and discoveries for me. It all started a few years ago, when I realized that mastering this language would be very important for my studies and my future in technology. At first, it was difficult to understand grammar rules and remember vocabulary, but with daily practice things started to become clearer.</p>
          <p className="max-[564px]:ml-4 mr-4">A big step in this journey was studying at InFlux, an English school with a modern and efficient method. There, the teachers use interactive activities, games, videos, and practical exercises that make learning more fun and easier to understand. The classes helped me improve not only grammar but also speaking, listening, and writing, making English a part of my daily life.</p>
          <p className="max-[564px]:ml-4 mr-4">Besides classes, I started watching movies, series, and videos in English, always trying to understand without subtitles. I also practiced by writing short texts and talking with friends in the language. Every small achievement motivated me to keep studying.</p>
          <p className="max-[564px]:ml-4 mr-4 mb-4">Today, I can read articles, watch videos, and talk to people from other countries without much difficulty. Learning English taught me that patience and consistency are essential, and studying at InFlux was fundamental to making this journey more practical and enjoyable.</p>
        </div>
      }
    />
  )
}

export default EnglishBlog
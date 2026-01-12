import Skeleton from "../components/Skeleton.tsx";
import Link from "../components/Link.tsx";

const Blogs = () => {
  return (
    <Skeleton
      title='Blogs'
      content={
        <div className="h-screen overflow-hidden">
          <div className="mt-64 max-[564px]:mt-32">
            <Link text='How did I learn english?' to='/how-did-i-learn-english' />
          </div>
        </div>

      }
    />
  )
}

export default Blogs
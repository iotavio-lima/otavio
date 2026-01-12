import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage.tsx";
import About from "./pages/About.tsx";
import Blogs from "./pages/Blogs.tsx";
import Projects from "./pages/Projects.tsx";
import EnglishBlog from "./pages/EnglishBlog.tsx";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/about' element={<About />}/>
      <Route path='/blogs' element={<Blogs />}/>
      <Route path='/projects' element={<Projects />} />
      <Route path='/how-did-i-learn-english' element={<EnglishBlog />} />
    </Routes>
  )
}

export default App

import { Route, Routes } from "react-router";
import About from "./components/About";
import Home from "./components/Home";
import { Work } from "./components/Work";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <section className="min-h-screen bg-black">
      <div className="mx-auto w-full max-w-7xl px-5 py-6 md:px-5 md:py-8 lg:py-10">
        <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
          <div className="flex flex-col items-start  lg:sticky  lg:top-0 lg:self-start    gap-6">
            <Home />
          </div>
          <div className="overflow-y-auto rounded-md text-white mt-8">
            <Routes>
              <Route index path="/" element={<About />} />
              <Route path="work" element={<Work />} />
              <Route path="project" element={<Project />} />
              <Route path="contact" element={<Contact />} />

            

           
            </Routes>
          </div>
        </div>
      </div>
<Footer/>
    </section>
  );
};

export default App;

import { NavLink } from "react-router";
import logo from "../assets/images/ayush.jpg";

const Home = () => {
  return (
    <>
      <div className="flex items-center rounded-md bg-green-400 px-3 py-1 font-semibold">
        <div className="mr-1 h-2 w-2 rounded-full bg-white"></div>
        <p className="text-sm">Available for work</p>
      </div>
      <p className=" text-white font-bold">Developer &amp; UX Specialist</p>
      <h1 className="mb-6 text-4xl font-bold md:text-6xl lg:mb-8 text-white">
        Jonathan Smith<span className="text-green-400">.</span>
      </h1>
      <p className="mb-6 text-sm text-white sm:text-base ">
        I build open-source front-end libraries at{" "}
        <span className="text-green-400 underline">Algolia</span> and host two
        tech podcasts: Developer Experience and Entre Devs. In my spare time, I
        share what I learn on my blog and speak at tech conferences around the
        world. In my spare time, I share what I learn on my blog and speak at
        tech conferences around the world. In my spare time, I share what I
        learn on my blog and speak at tech conferences around the world.
      </p>
      <div className="mb-8 h-px w-full bg-white"></div>
      <div className="mb-6 flex flex-col gap-2 text-sm text-white sm:text-base lg:mb-8 ">
        <p className="hover:font-extralight cursor-pointer">
          <strong>
            <i>
              -{" "}
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-green-400" : "text-white")}
              >
                Home
              </NavLink>
            </i>
          </strong>
        </p>
        <p className="hover:font-extralight cursor-pointer">
          <strong>
            <i>
              -{" "}
              <NavLink
                to="/work"
                className={({ isActive }) => (isActive ? "text-green-400" : "text-white")}
              >
                Works
              </NavLink>
            </i>
          </strong>
        </p>
        <p className="hover:font-extralight cursor-pointer">
          <strong>
            <i>
              -{" "}
              <NavLink
                to="/project"
                className={({ isActive }) => (isActive ? "text-green-400" : "text-white")}
              >
                Projects
              </NavLink>
            </i>
          </strong>
        </p>
        <p className="hover:font-extralight cursor-pointer">
          <strong>
            <i>
              -{" "}
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "text-green-400" : "text-white")}
              >
                Contact
              </NavLink>
            </i>
          </strong>
        </p>
        
      </div>
      <a className="mt-5 flex items-center gap-8 text-center text-sm  md:mb-10 lg:mb-12 text-white">
        <img
          src={logo}
          className="size-[60px] rounded-full border-2 border-green-400 p-1"
          alt=""
        />

        <p className="flex items-center gap-2 cursor-pointer">
          Github
          <span>
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 12 12"
              aria-hidden="true"
              className="w-3 h-3"
            >
              <path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path>
              <path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path>
            </svg>
          </span>
        </p>
        <p className="flex items-center gap-2 cursor-pointer">
          LinkedIn
          <span>
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 12 12"
              aria-hidden="true"
              className="w-3 h-3"
            >
              <path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path>
              <path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path>
            </svg>
          </span>
        </p>
        <p className="flex items-center gap-2 cursor-pointer">
          Gmail
          <span>
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 12 12"
              aria-hidden="true"
              className="w-3 h-3"
            >
              <path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"></path>
              <path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"></path>
            </svg>
          </span>
        </p>
      </a>
    </>
  );
};

export default Home;

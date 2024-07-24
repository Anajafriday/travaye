import ExplorePlaceHome from "../componets/ExplorePlaceHome";
import FeatureDestination from "../componets/FeatureDestination";
import HomeFooter from "../componets/HomeFooter";
import Partners from "../componets/Partners";
import Testimonies from "../componets/Testimonies";
import { Link } from "react-router-dom";
import CTA from "../componets/CTA";
import NAV from "../componets/NAV";
import Blog from "../componets/Blog";
import { motion } from "framer-motion";
import { useMediaQuery } from "../hooks/useMediaQuery";
import OptimizeImage from "../Optimzer/OptimizeImage";

function HomePage() {
  // dont animate on small screen
  const index = useMediaQuery([600, 900, 1200]);
  return (
    <div>
      <NAV />

      <div>
        <div className="bg-primary/20  py-6 ">
          <div className="my-4 mx-auto   md:w-4/5">
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-20 ">
              <div className=" text-left">
                <h1 className="font-inriaSerif md:text-2xl text-xl text-neutraDark  flex flex-col  lg:items-center mt-9 gap-3  lg:w-full lg:ml-36">
                  <strong className=" font-medium  ml-4 md:ml-auto text-4xl lg:text-7xl capitalize float-left">
                    travaye
                  </strong>
                  <strong className=" lg:float-right lg:ml-72 md:ml-20 mx-6 md:w-full text-lg lg:text-inherit ">
                    {" "}
                    - Your Gateway to Discovering the World!
                  </strong>
                </h1>
                <div className=" lg:ml-60  ml-6  mt-2 md:mt-9 gap-3  md:w-full text-center ">
                  <p className="md:text-lg text-sm text-left">
                    make your journey memorable and stress-free.
                  </p>
                  <Link
                    to="register"
                    className="text-primary md:text-lg text-sm  underline "
                  >
                    {" "}
                    start your journey &rarr;
                  </Link>
                </div>
              </div>
              <div className=" col-span-2  mt-8   lg:ml-72 flex gap-2 flex-col w-[90%] mx-auto  lg:w-3/5 ">
                <OptimizeImage
                  smallImage={`https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=${50}`}
                  largeImage={`https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=${600}`}
                  className=" w-full h-80 lg:-mt-12 object-cover  bg-gray-400"
                />
                <OptimizeImage
                  largeImage="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=600"
                  smallImage="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=50"
                  className=" bg-gray-400 w-full h-44 object-cover  "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 overflow-x-hidden" id="feature">
          <FeatureDestination index={index} />
        </div>
        {/* nav / hero */}
        {/* features destination*/}

        <div className="w-full  py-16 overflow-x-hidden">
          <div className="my-3 mx-auto   md:w-5/6">
            <motion.div
              initial={index !== 0 && { y: "50%", opacity: 0 }}
              animate={index !== 0 && { y: "50%" }}
              whileInView={index !== 0 && { y: "0%", opacity: 1 }}
              transition={index !== 0 && { duration: 1 }}
              className="grid md:grid-cols-3 sm:grid-cols-1 w-full justify-center items-center"
            >
              <p className=" col-span-2 md:w-3/4 w-auto mx-6 md:ml-20 self-center">
                Looking for your next adventure? we have destinations that match
                your preferences. Whether you're seeking a tranquil beach
                escape, an urban adventure, or a remote wilderness expedition,
                Travaye has you covered.
              </p>
              <div className=" flex gap-5  mx-auto w-full justify-center  py-8 px-6 col-span-2 items-stretch  flex-wrap">
                <div className="md:w-1/3 w-full  h-72">
                  <OptimizeImage
                    largeImage="https://images.pexels.com/photos/6943410/pexels-photo-6943410.jpeg?auto=compress&cs=tinysrgb&w=600"
                    smallImage="https://images.pexels.com/photos/6943410/pexels-photo-6943410.jpeg?auto=compress&cs=tinysrgb&w=50"
                    className=" w-full h-full object-cover rounded bg-gray-400"
                  />
                </div>
                <div className="md:w-2/4 w-full h-72">
                  <OptimizeImage
                    largeImage="https://images.pexels.com/photos/6942960/pexels-photo-6942960.jpeg?auto=compress&cs=tinysrgb&w=600"
                    smallImage="https://images.pexels.com/photos/6942960/pexels-photo-6942960.jpeg?auto=compress&cs=tinysrgb&w=50"
                    className=" w-full h-full object-cover  object-center rounded  bg-gray-400"
                  />
                </div>
              </div>
              {/** ---- */}
              <motion.div
                initial={index !== 0 && { x: "100%" }}
                animate={index !== 0 && { x: "100%" }}
                whileInView={index !== 0 && { x: "0%" }}
                transition={index !== 0 && { duration: 1 }}
                className="rounded py-2 lg:-ml-10 px-6 drop-shadow  md:-mt-12 -col-span-3  w-full h-auto self-start"
              >
                <h3 className="text-center font-bold mb-12">Most visited</h3>
                <ul className="flex flex-col gap-2 my-4">
                  <li className="bg-primary text-lg rounded-lg cursor-pointer drop-shadow-lg  py-2 px-4 text-white flex justify-between items-center ">
                    <p>Santorini, Greece</p>
                    <p className=" text-blue-500  text-3xl">✈</p>
                  </li>
                  <li className="bg-primary text-lg rounded-lg cursor-pointer drop-shadow-lg py-2 px-4 text-white flex justify-between items-center ">
                    <p>Amalfi Coast, Italy</p>
                    <p className=" text-blue-500  text-3xl">✈</p>
                  </li>
                  <li className="bg-primary text-lg rounded-lg cursor-pointer drop-shadow-lg py-2 px-4 text-white flex justify-between items-center ">
                    <p>Kyoto, Japan</p>
                    <p className=" text-blue-500  text-3xl">✈</p>
                  </li>
                </ul>
                <Link
                  to="signup"
                  href="#"
                  className="text-primary text-xl  underline float-right"
                >
                  {" "}
                  start your journey &rarr;
                </Link>
              </motion.div>
              {/** most visited */}
            </motion.div>
          </div>
          {/** ---- */}
          <div className="my-4 py-8 bg-primary/25" id="about">
            <h2 className="text-center font-[700] text-neutraDark text-2xl  my-4 font-inriaSerif">
              What is Travaye ?
            </h2>
            <div className="flex justify-center items-center w-full md:w-9/12 mx-auto my-4">
              <motion.p
                initial={index !== 0 && { x: "100%" }}
                animate={index !== 0 && { x: "100%" }}
                whileInView={index !== 0 && { x: "0%" }}
                transition={index !== 0 && { duration: 1 }}
                className=" bg-slate-200 drop-shadow-sm  text-lg my-4  w-full first-letter:text-2xl first-letter:font-bold -mr-12 z-10 py-6 px-4"
              >
                Travaye connect you to the world. We believe that travel is not
                just about visiting new places; it's about immersing yourself in
                different cultures, discovering the extraordinary in the
                ordinary, and creating lifelong memories. We're committed to
                making travel accessible, enjoyable, and meaningful for every
                explorer.
              </motion.p>
              <motion.div
                initial={index !== 0 && { x: "-100%" }}
                animate={index !== 0 && { x: "-100%" }}
                whileInView={index !== 0 && { x: "0%" }}
                transition={index !== 0 && { duration: 1 }}
                className=" w-2/3 h-96"
              >
                <OptimizeImage
                  largeImage="https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=600"
                  smallImage="https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=50"
                  alt="travle"
                  loading="lazy"
                  height="300px"
                  width="300px"
                  className=" w-full h-full object-cover rounded bg-gray-400"
                />
              </motion.div>
            </div>
          </div>
          <div className="md:py-8" id="destination">
            <div className="my-3 mx-auto  w-full  md:w-4/5">
              {/** ---- */}
              <ExplorePlaceHome />
              {/** ---- */}
            </div>
          </div>
          <motion.div
            initial={index !== 0 && { y: "50%", opacity: 0 }}
            animate={index !== 0 && { y: "50%" }}
            whileInView={index !== 0 && { y: "0%", opacity: 1 }}
            transition={index !== 0 && { duration: 1 }}
            className="py-6  bg-primary/25"
          >
            <div className="my-3 mx-auto w-[90%]  lg:w-4/5">
              <Testimonies />
            </div>
          </motion.div>
          {/** ---- */}
        </div>
      </div>
      <motion.div
        initial={index !== 0 && { scale: 1, opacity: 0 }}
        animate={index !== 0 && { scale: 0 }}
        whileInView={index !== 0 && { scale: 1, opacity: 1 }}
        transition={index !== 0 && { duration: 1 }}
        className="md:bg-none"
      >
        <CTA />
      </motion.div>
      {/** ---- */}
      <motion.div
        initial={index !== 0 && { y: "50%", opacity: 0 }}
        animate={index !== 0 && { y: "50%" }}
        whileInView={{ y: "0%", opacity: 1 }}
        transition={index !== 0 && { duration: 1 }}
        className="-mt-24"
        id="blog"
      >
        <Blog />
      </motion.div>
      {/* ---------- */}
      <Partners />
      {/** ---- */}
      <HomeFooter />
    </div>
  );
}

export default HomePage;

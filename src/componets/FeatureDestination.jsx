import { motion } from "framer-motion";
import OptimizeImage from "../Optimzer/OptimizeImage";

function FeatureDestination({ index }) {
  // const fade = useRef();
  // useEffect(() => {
  //   Observer(fade.current, () => {
  //     fade?.current.classList.toggle("translate-x-[-200px]");
  //   });
  // }, []);
  return (
    <div>
      <h2 className="text-center  text-neutraDark text-2xl  font-[700] font-inriaSerif">
        Featured Travel Destinations
      </h2>
      <div
        className=" flex gap-5  justify-center w-full lg:w-3/4 mx-auto py-8 px-6 md:flex-row flex-col"
        // ref={fade}
      >
        <motion.div
          initial={index !== 0 && { x: "-100%" }}
          animate={index !== 0 && { x: "-100%" }}
          whileInView={index !== 0 && { x: "0%" }}
          transition={index !== 0 && { duration: 1 }}
          className="md:w-1/2 md:h-96 h-72 mb-12 md:mb-0 w-full  "
        >
          <OptimizeImage
            largeImage="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&w=600"
            smallImage="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&w=50"
            className=" w-full h-full object-cover rounded bg-gray-400"
          />
          <h3 className="text-center text-neutraDark font-inriaSerif font-bold text-xl my-5">
            Paradise Island Getaway
          </h3>
        </motion.div>
        <motion.div
          // initial={{ opacity: 0 }}
          initial={index !== 0 && { x: "100%" }}
          animate={index !== 0 && { x: "100%" }}
          whileInView={index !== 0 && { x: "0%" }}
          transition={index !== 0 && { duration: 1 }}
          className="md:w-1/2 md:h-96 h-72 w-full"
        >
          <OptimizeImage
            largeImage="https://images.pexels.com/photos/23344538/pexels-photo-23344538/free-photo-of-lights-on-building-in-tokyo-at-night.jpeg?auto=compress&cs=tinysrgb&w=600"
            smallImage="https://images.pexels.com/photos/23344538/pexels-photo-23344538/free-photo-of-lights-on-building-in-tokyo-at-night.jpeg?auto=compress&cs=tinysrgb&w=50"
            className=" w-full h-full object-cover  object-center rounded  bg-gray-400"
          />
          <h3 className="text-center text-neutraDark font-inriaSerif font-bold text-xl my-5">
            Urban Adventure in Tokyo
          </h3>
        </motion.div>
      </div>
    </div>
  );
}

export default FeatureDestination;

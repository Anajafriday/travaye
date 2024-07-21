import { motion } from "framer-motion";

function FeatureDestination() {
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
          initial={{ x: "-100%" }}
          animate={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 1 }}
          className="md:w-1/2 md:h-96 h-72 w-full  "
        >
          <img
            src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="travle"
            className=" w-full h-full object-cover rounded"
          />
          <h3 className="text-center text-neutraDark font-inriaSerif font-bold text-xl my-5">
            Paradise Island Getaway
          </h3>
        </motion.div>
        <motion.div
          // initial={{ opacity: 0 }}
          initial={{ x: "100%" }}
          animate={{ x: "100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 1 }}
          className="md:w-1/2 md:h-96 h-72 w-full"
        >
          <img
            src="https://images.pexels.com/photos/23344538/pexels-photo-23344538/free-photo-of-lights-on-building-in-tokyo-at-night.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="travle"
            className=" w-full h-full object-cover  object-center rounded "
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

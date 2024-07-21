import { motion } from "framer-motion";
function ExplorePlaceHome() {
  return (
    <div className="my-4">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3  grid-cols-1  md:grid-cols-2  gap-5 w-full mx-auto mt-4 xl:-mb-56">
        <h2 className="text-center font-[700] text-neutraDark text-2xl  font-inriaSerif my-4 xl:col-span-3">
          Amazing place to Explore
        </h2>
        <div className=" w-full items-stretch lg:row-span-2 lg:row-start-2 lg:row-end-2 lg:col-span-3 relative  lg:-translate-y-96 lg:h-96 h-72    ">
          <motion.img
            initial={{ scale: 0.5 }}
            animate={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
            src="https://plus.unsplash.com/premium_photo-1673415819362-c2ca640bfafe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFycmFrZWNoJTIwbW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D"
            alt="travle"
            className=" w-full ht-custom   object-cover rounded"
          />
          <div className="bg-primary py-2 px-4 font-semibold rounded-lg absolute top-1 right-1">
            Marrakech, Morocco
          </div>
        </div>
        <div className="lg:-col-span-1 w-full  lg:w-80 flex flex-col  justify-center">
          <div className=" w-full relative h-32 lg:mb-12">
            <motion.img
              initial={{ scale: 0.5 }}
              animate={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              src="https://plus.unsplash.com/premium_photo-1697730039730-102912a08e70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FwZSUyMFRvd24lMkMlMjBTLkFmcmljYXxlbnwwfHwwfHx8MA%3D%3D"
              alt="travle"
              className=" w-full   h-56 object-cover rounded"
            />
            <div className="bg-primary py-2 px-4 font-semibold rounded-lg absolute top-1 right-1">
              Cape Town, S.Africa{" "}
            </div>
          </div>
          <div className=" w-full h-32 relative  lg:my-14 self-start">
            <motion.img
              initial={{ scale: 0.5 }}
              animate={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              src="https://images.unsplash.com/photo-1514272272587-d4fae170976f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWxhc2thJTJDJTIwVVNBfGVufDB8fDB8fHww"
              alt="travle"
              className=" w-full h-full object-cover rounded"
            />
            <div className="bg-primary py-2 px-4 font-semibold rounded-lg absolute top-1 right-1">
              Alaska, USA{" "}
            </div>
          </div>
          <div className="w-full  h-32 relative lg:-mt-10">
            <motion.img
              initial={{ scale: 0.5 }}
              animate={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              src="https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEJvcmElMjBCb3JhJTJDJTIwRnJlbmNofGVufDB8fDB8fHww"
              alt="travle"
              className=" w-full h-56 object-cover rounded"
            />
            <div className="bg-primary py-2 px-4 font-semibold rounded-lg absolute top-1 right-1">
              Bora Bora, French{" "}
            </div>
          </div>
        </div>
        {/** stanalone */}
        <div className="relative  w-full  transform mt-custom lg:col-span-2">
          <motion.img
            initial={{ scale: 0.5 }}
            animate={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            src="https://images.unsplash.com/photo-1706186742202-1603fc51872c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VmFyYW5hc2klMkMlMjBJbmRpYXxlbnwwfHwwfHx8MA%3D%3D"
            alt="travle"
            className=" w-full h-64 object-cover rounded"
          />
          <div className="bg-primary py-2 px-4 font-semibold rounded-lg absolute top-1 right-1">
            Varanasi, India{" "}
          </div>
        </div>
        <div className="  w-18 relative  col-span-2   mt-custom">
          <motion.img
            initial={{ scale: 0.5 }}
            animate={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            src="https://images.unsplash.com/photo-1626882920560-80b382db2bc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fExhZ29zJTJDJTIwTmlnZXJpYSUyMGxhbmRtYXJrfGVufDB8fDB8fHww"
            alt="travle"
            className=" w-full h-64 object-cover rounded"
          />
          <div className="bg-primary py-2 px-4 font-semibold rounded-lg absolute top-1 right-1">
            Lagos, Nigeria{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExplorePlaceHome;

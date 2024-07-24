import { motion } from "framer-motion";

import React from "react";
import { BentoGrid, BentoGridItem } from "../componets/bento-grid";

function ExplorePLace() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Bora Bora, French",
    header: (
      <motion.img
        initial={{ scale: 0.5 }}
        animate={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        src="https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEJvcmElMjBCb3JhJTJDJTIwRnJlbmNofGVufDB8fDB8fHww"
        loading="lazy"
        height="300px"
        width="300px"
        alt="travle"
        className=" w-full h-full  oobject-center  rounded bg-gray-400"
      />
    ) || <Skeleton />,
    className: "md:col-span-2  ",
  },
  {
    title: "Alaska, USA",
    header: (
      <motion.img
        initial={{ scale: 0.5 }}
        animate={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        src="https://images.unsplash.com/photo-1514272272587-d4fae170976f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWxhc2thJTJDJTIwVVNBfGVufDB8fDB8fHww"
        loading="lazy"
        height="300px"
        width="300px"
        alt="travle"
        className=" w-full h-full object-center  rounded bg-gray-400"
      />
    ) || <Skeleton />,
    className: "md:col-span-1 ",
  },

  {
    title: "Cape Town, S.Africa",
    header: (
      <motion.img
        initial={{ scale: 0.5 }}
        animate={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        src="https://plus.unsplash.com/premium_photo-1697730039730-102912a08e70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FwZSUyMFRvd24lMkMlMjBTLkFmcmljYXxlbnwwfHwwfHx8MA%3D%3D"
        loading="lazy"
        height="300px"
        width="300px"
        alt="travle"
        className=" w-full h-full  object-center  rounded bg-gray-400"
      />
    ) || <Skeleton />,
    className: "md:col-span-1",
  },
  {
    title: "Marrakech, Morocco",
    header: (
      <motion.img
        initial={{ scale: 0.5 }}
        animate={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        src="https://plus.unsplash.com/premium_photo-1673415819362-c2ca640bfafe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFycmFrZWNoJTIwbW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D"
        loading="lazy"
        height="300px"
        width="300px"
        alt="travle"
        className=" w-full  h-full  object-center  rounded bg-gray-400"
      />
    ) || <Skeleton />,
    className: "md:col-span-1  ",
  },
  {
    title: "Lagos, Nigeria",
    header: (
      <motion.img
        initial={{ scale: 0.5 }}
        animate={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
        src="https://images.unsplash.com/photo-1626882920560-80b382db2bc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fExhZ29zJTJDJTIwTmlnZXJpYSUyMGxhbmRtYXJrfGVufDB8fDB8fHww"
        loading="lazy"
        height="300px"
        width="300px"
        alt="travle"
        className=" w-full  h-full  object-center  rounded bg-gray-400"
      />
    ) || <Skeleton />,
    className: "md:col-span-1  ",
  },
];

function ExplorePlaceHome() {
  return (
    <div className="my-4">
      <h2 className="text-center font-[700] text-neutraDark text-2xl  font-inriaSerif my-4 xl:col-span-3">
        Amazing place to Explore
      </h2>
      <ExplorePLace />
    </div>
  );
}

export default ExplorePlaceHome;

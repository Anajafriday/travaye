export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={` ${className} grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto`}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, header }) => {
  return (
    <div
      className={` ${className} row-span-1 rounded-xl group/bento  transition duration-200 shadow-input dark:shadow-none  dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col relative `}
    >
      {header}
      <div className=" transition duration-200">
        <div className="font-sans font-bold  text-neutral-200 mb-2 mt-2 bg-primary py-2 px-4  rounded-lg absolute top-1 right-1">
          {title}
        </div>
      </div>
    </div>
  );
};

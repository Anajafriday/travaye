import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Loader() {
  return (
    <div className="flex flex-col gap-12 justify-center items-center w-full mt-52 mx-auto h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="145"
        viewBox="0 0 25 24"
        className="animate-ping transition-all duration-500"
      >
        <path
          fill="#99c24d"
          d="m24.794 16.522l-.281-2.748l-10.191-5.131s.091-1.742 0-4.31a7.092 7.092 0 0 0-1.839-4.339l.005.006h-.182a7.075 7.075 0 0 0-1.834 4.312l-.001.021c-.091 2.567 0 4.31 0 4.31L.281 13.774L0 16.522l6.889-2.074l3.491-.582a23.316 23.316 0 0 0 .733 7.143l-.036-.162l-2.728 1.095v1.798l3.52-.8c.155.312.3.566.456.812l-.021-.035v.282c.032-.046.062-.096.093-.143c.032.046.061.096.094.143v-.282c.135-.21.28-.464.412-.726l.023-.051l3.52.8v-1.798l-2.728-1.095c.463-1.733.728-3.723.728-5.774c0-.425-.011-.847-.034-1.266l.003.058l3.492.582l6.888 2.074z"
        />
      </svg>
      <h3 className="text-center font-medium text-xl">
        Travaye , get ready for amazing travel adventure
      </h3>
    </div>
  );
}

function SkeletonLoader({ className = "grid-cols-3" }) {
  return (
    <div
      className={`grid justify-evenly  gap-x-0 overflow-x-hidden items-center ${className}`}
    >
      {Array.from({ length: 12 }, (_, i) => i).map((_, i) => (
        <Skeleton
          className={`w-96 h-[22rem] drop-shadow-md transform scale-[85%] bg-neutral-300`}
          key={i}
          duration={1.8}
        ></Skeleton>
      ))}
    </div>
  );
}
function SkeletonLoaderMap() {
  return (
    // <div className="grid grid-cols-2 justify-evenly items-start gap-0">
    <>
      <Skeleton height="30px" width="30px" duration={1} />
      {Array.from({ length: 12 }, (_, i) => i).map((_, i) => (
        <Skeleton
          key={i}
          className={`w-96 odd:-mt-24 even:h-[28rem] even:-mt-12 even:-ml-8 h-[22rem] drop-shadow-md transform scale-[75%]`}
          duration={1.8}
        >
          <Skeleton
            className="relative  w-[inherit] h-4/5 "
            duration={3}
            count={3}
            baseColor="orange"
          ></Skeleton>
        </Skeleton>
      ))}
    </>
  );
}

function LoaderRotate({ className }) {
  return <div className={`shapes-5 ${className}`}></div>;
}
export { SkeletonLoader, SkeletonLoaderMap, LoaderRotate };
export default Loader;

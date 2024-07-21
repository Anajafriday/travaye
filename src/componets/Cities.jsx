import CitiesList from "./CitiesList";
import { useDestination } from "../contexts/Destinationcontext";
import { SkeletonLoader } from "./Loader";
import Error from "./Error";
//   useEffect(function () {
//     function handler(e) {
//       if (e.key === "ArrowRight") {
//         next();
//       }
//     }
//     document.addEventListener("keyup", handler);
//     return () => document.removeEventListener("keyup", handler);
//   });

function Cities() {
  const { Locations, isLoading } = useDestination();
  if (isLoading) return <SkeletonLoader />;
  if (!Locations.length) return <Error message="No Cities try again Later" />;
  else
    return (
      <>
        <h3 className="text-lg ml-12 -mb-11 mt-3 ">popular</h3>
        {isLoading && <SkeletonLoader />}
        <div className=" ml-4  -mt-4  grid  gap-x-2  grid-cols-3 transform   mr-2 gap-y-32 items-center justify-center ">
          {Locations.map((city) => (
            <CitiesList key={city.id} city={city} />
          ))}
        </div>
        {/* <button className="flex justify-center items-center bg-secondary mx-auto">
          Load more
        </button> */}
      </>
    );
}

export default Cities;

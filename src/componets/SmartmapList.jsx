// import { useCallback, useEffect, useState } from "react";
import { useDestination } from "../contexts/Destinationcontext";
import { SkeletonLoaderMap } from "./Loader";
import Logo from "./Logo";
import SmartMapItem from "./SmartmapItem";
function SmartmapList() {
  const { Locations, isLoading } = useDestination();
  // const [destinations, setDestinations] = useState([]);
  // const getLocationPerPage = useCallback(
  //   function getLocationPerPage(page = 6) {
  //     // state.search.page = page;
  //     // dispatch({ type: "destination/updateResultPerPage", payLoad: page });
  //     console.log(resultPerpage);
  //     const start = (page - 1) * resultPerpage;
  //     const end = page * resultPerpage;
  //     setDestinations(Locations.slice(start, end));
  //     console.log(start, end);
  //   },
  //   [resultPerpage, Locations]
  // );

  // // getLocationPerPage();
  // useEffect(() => {
  //   getLocationPerPage();
  //   // console.log(start, end);
  //   // return Locations.slice(start, end);
  // }, [Locations, getLocationPerPage]);
  // // // const destinations = getLocationPerPage();
  return (
    <div className="h-screen w-[90%] bg-neutraDar col-span-2 overflow-y-auto">
      <div className="grid grid-cols-2 justify-evenly items-center gap-0">
        <Logo />
        {isLoading && <SkeletonLoaderMap />}
        {Locations.map((destination) => (
          <SmartMapItem key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
}

export default SmartmapList;

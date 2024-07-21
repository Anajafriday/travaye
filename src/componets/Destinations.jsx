import { useEffect } from "react";
import DestinationsList from "./DestinationsList";
import ImageTab from "./ImageTab";
import BlurOverlay from "./BlurOverlay";
import Favorite from "./Favorite";
import { useDestination } from "../contexts/Destinationcontext";
import Error from "./Error";
import { SkeletonLoader } from "./Loader";

function Destinations({ column = "grid-cols-3" }) {
  const { isOpen, handleCloseTab, Locations, isFavOpen, isLoading } =
    useDestination();
  // console.log(Locations);
  useEffect(
    function () {
      const handler = function (e) {
        if (e.key === "Escape") {
          handleCloseTab();
        }
      };
      document.addEventListener("keydown", handler);
      return () => document.removeEventListener("keydown", handler);
    },
    [isOpen, handleCloseTab]
  );
  if (isLoading) return <SkeletonLoader />;
  if (!Locations.length)
    return <Error message="No Destination try again Later" />;

  return (
    <div
      className={`grid justify-evenly  ${column} gap-x-0 overflow-x-hidden items-center ${
        isOpen ? "overflow-hidden" : ""
      }`}
    >
      {isFavOpen && <Favorite />}
      {isOpen && <BlurOverlay />}
      {isOpen && <ImageTab />}
      {Locations.map((destination) => (
        <DestinationsList destination={destination} key={destination.id} />
      ))}
    </div>
  );
}

export default Destinations;

import { useDestination } from "../contexts/Destinationcontext";
import FavoriteList from "./FavoriteList";

function Favorite() {
  const { favorite } = useDestination();
  return (
    <div className="bg-white fixed top-20 flex    w-96 right-32 z-20 py-1">
      <ul
        className={`w-full overflow-y-auto h-24  flex flex-col gap-3 ${
          !favorite.length ? "h-[10%]" : "h-48"
        }`}
      >
        {!favorite.length ? (
          <p className=" text-center py-8 flex items-center  justify-evenly">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M8.931.586L7 3l1.5 4l-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586ZM7.358.77L5.5 3L7 7l-1.5 3l1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77Z"
              />
            </svg>
            You have no favorite destination{" "}
          </p>
        ) : (
          favorite.map((fav) => <FavoriteList key={fav.id} fav={fav} />)
        )}
      </ul>
    </div>
  );
}

export default Favorite;

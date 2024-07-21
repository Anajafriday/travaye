import { Link } from "react-router-dom";

function FavoriteList({ fav }) {
  const {
    position: { lat, lng },
  } = fav;
  return (
    <li className="flex items-center gap-4  justify-between  drop-shadow transition-all duration-500 bg-white  py-2 hover:bg-neutraexLight w-full px-4  cursor-pointer">
      <img src={fav?.img} alt={fav?.city} className="h-16 w-16 rounded-full" />
      <h3 className=" font-bold text-neutraDark text-lg capitalize">
        {fav?.city}
      </h3>
      <Link
        to={`/smart map/${fav.id}/${fav.city}/${fav.country}?lat=${lat}&lng=${lng}`}
        rel="noreferrer"
        className="text-primary underline text-lg"
      >
        view on map &rarr;
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 1024 1024"
      >
        <path
          fill="#99c24d"
          d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8a264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39c-10 6.1-19.5 12.8-28.5 20.1c-9-7.3-18.5-14-28.5-20.1c-41.8-25.5-89.9-39-139.2-39c-35.5 0-69.9 6.8-102.4 20.3c-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9c0 33.3 6.8 68 20.3 103.3c11.3 29.5 27.5 60.1 48.2 91c32.8 48.9 77.9 99.9 133.9 151.6c92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3c56-51.7 101.1-102.7 133.9-151.6c20.7-30.9 37-61.5 48.2-91c13.5-35.3 20.3-70 20.3-103.3c.1-35.3-7-69.6-20.9-101.9z"
        />
      </svg>
    </li>
  );
}

export default FavoriteList;

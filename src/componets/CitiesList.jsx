function CitiesList({ city, next }) {
  return (
    <div
      className={`w-96   transition-transform duration-1000 ease-out  h-[22rem] drop-shadow-md transform scale-[92%] self-center `}
    >
      <div className="relative  w-[inherit] h-4/5 ">
        <div className="w-[inherit] h-4/5 relative flex">
          <img
            src={city.img}
            alt="eng"
            className="w-full h-full rounded-t-lg"
          />
          {!city.img && (
            <div className="w-full h-full rounded-t-lg bg-slate-400 top-0 absolute flex justify-center items-center">
              no image 📷
            </div>
          )}
        </div>
        <span className=" bg-neutraLight absolute flex gap-1 items-center top-2 left-2 rounded-full px-3 py-2  text-lg text-neutral-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <g fill="#363636" fillRule="evenodd" clipRule="evenodd">
              <path d="M16.272 10.272a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
              <path d="M5.794 16.518a9 9 0 1 1 12.724-.312l-6.206 6.518l-6.518-6.206Zm11.276-1.691l-4.827 5.07l-5.07-4.827a7 7 0 1 1 9.897-.243Z" />
            </g>
          </svg>
          <p className="font-extrabold capitalize text-lg">
            {city.city} {city.country}
          </p>
        </span>
        <span className="h-10 w-10 flex justify-center absolute top-2 right-2  items-center bg-neutraLight  transition-all duration-300 drop-shadow rounded-full cursor-pointer hover:bg-white">
          {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="#99c24d"
                d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8a264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39c-10 6.1-19.5 12.8-28.5 20.1c-9-7.3-18.5-14-28.5-20.1c-41.8-25.5-89.9-39-139.2-39c-35.5 0-69.9 6.8-102.4 20.3c-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9c0 33.3 6.8 68 20.3 103.3c11.3 29.5 27.5 60.1 48.2 91c32.8 48.9 77.9 99.9 133.9 151.6c92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3c56-51.7 101.1-102.7 133.9-151.6c20.7-30.9 37-61.5 48.2-91c13.5-35.3 20.3-70 20.3-103.3c.1-35.3-7-69.6-20.9-101.9z"
                />
            </svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="#6B8736"
              d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8a264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39c-10 6.1-19.5 12.8-28.5 20.1c-9-7.3-18.5-14-28.5-20.1c-41.8-25.5-89.9-39-139.2-39c-35.5 0-69.9 6.8-102.4 20.3c-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9c0 33.3 6.8 68 20.3 103.3c11.3 29.5 27.5 60.1 48.2 91c32.8 48.9 77.9 99.9 133.9 151.6c92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3c56-51.7 101.1-102.7 133.9-151.6c20.7-30.9 37-61.5 48.2-91c13.5-35.3 20.3-70 20.3-103.3c.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5c0 201.2-356 429.3-356 429.3z"
            />
          </svg>
        </span>
        <span className=" bg-neutraLight absolute left-2 items-center  bottom-2  rounded-xl px-3 py-1 font-extrabold  text-lg text-neutral-500">
          {city.numberOfVisits} visit
        </span>
      </div>
      <div className="bg-white py-3 px-2 rounded-b-lg  text-lg">
        <p>
          {city.info}{" "}
          <a
            href={`https://en.wikipedia.org/wiki/${city.city}`}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline"
          >
            Check out {city.city} on Wikipedia &rarr;
          </a>
        </p>
      </div>
    </div>
  );
}

export default CitiesList;

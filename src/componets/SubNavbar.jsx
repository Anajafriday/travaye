import { useEffect, useState } from "react";
import LanguageConvert from "./LanguageConvert";
import { Link } from "react-router-dom";
import { useDestination } from "../contexts/Destinationcontext";

function SubNavbar({ children }) {
  const [darkMode, setDarkmode] = useState(false);
  const { dispatch } = useDestination();

  useEffect(
    function () {
      if (darkMode) document.body.classList.add("dark_Mode");
      else document.body.classList.remove("dark_Mode");
    },
    [darkMode]
  );

  return (
    <nav
      className={`grid  grid-cols-4 justify-evenly sticky  top-0 w-full z-20  backdrop-blur-2xl border-b-2 py-3 border-neutral-300 items-center mt-4`}
    >
      <form action="#" className=" col-span-2 ml-12">
        <div className="flex  bg-neutral-100 w-4/5  drop-shadow rounded-md px-2">
          <label htmlFor="search" className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 21 21"
              className=" mt-2"
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="#949592"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8.5" cy="8.5" r="5" />
                <path d="M17.571 17.5L12 12" />
              </g>
            </svg>
          </label>
          <input
            type="text"
            placeholder="Search for any cities..."
            aria-label="search for cities"
            className=" bg-transparent sm:text-base md:text-lg w-full placeholder:text-neutraDark focus:outline-none py-2 px-1 box-border text-neutraDark caret-primary"
            id="search"
          />
        </div>
      </form>
      <div className="flex  gap-8 items-center justify-center col-span-2 -ml-12">
        <LanguageConvert classes="py-1 px-2 bg-white border-neutraexLight text-neutraDark drop-shadow-md">
          eng/us
        </LanguageConvert>
        {children || (
          <span
            className="h-12 w-12 flex justify-center items-center bg-white  transition-opacity duration-300 drop-shadow rounded-full cursor-pointer hover:opacity-70"
            onClick={() => dispatch({ type: "fav/open" })}
            aria-label="My Favorite destinations"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="#99c24d"
                d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8a264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39c-10 6.1-19.5 12.8-28.5 20.1c-9-7.3-18.5-14-28.5-20.1c-41.8-25.5-89.9-39-139.2-39c-35.5 0-69.9 6.8-102.4 20.3c-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9c0 33.3 6.8 68 20.3 103.3c11.3 29.5 27.5 60.1 48.2 91c32.8 48.9 77.9 99.9 133.9 151.6c92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3c56-51.7 101.1-102.7 133.9-151.6c20.7-30.9 37-61.5 48.2-91c13.5-35.3 20.3-70 20.3-103.3c.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5c0 201.2-356 429.3-356 429.3z"
              />
            </svg>
          </span>
        )}
        <Link
          className="h-12 w-12 flex justify-center transition-opacity duration-300 items-center bg-white drop-shadow rounded-full cursor-pointer hover:opacity-70"
          onClick={() => setDarkmode((darkMode) => !darkMode)}
          aria-label="Toggle dark and light mode"
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                fill="#99c24d"
                d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#99c24d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm10-6h1M12 2V1m0 22v-1m8-2l-1-1m1-15l-1 1M4 20l1-1M4 4l1 1m-4 7h1"
              />
            </svg>
          )}
          {/* 
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#99c24d" d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21Z"/></svg> */}
        </Link>
        <div className="h-12 w-36 bg-white drop-shadow rounded-full py-1 px-1 ">
          <div className="relative flex justify-between items-center">
            <img
              src="https://randomuser.me/api/portraits/women/75.jpg"
              alt="user_profile_picture"
              className=" rounded-full object-cover object-center w-10 h-10"
            />
            <span className="h-4 w-4 rounded-full border-white border-2 right-[5.5rem] absolute -top-1 bg-lime-400"></span>
            <span className="mr-4 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                  <path
                    fill="#363A37"
                    d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SubNavbar;

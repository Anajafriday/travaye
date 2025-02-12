import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useRef } from "react";

function NAV() {
  const navRef = useRef();
  const navBtnRef = useRef();
  const links = ["feature", "destination", "about", "blog"];
  // hide nav element
  const toggleHidden = () => {
    navRef.current.classList.toggle("hidden");
    const openBtn = navBtnRef.current.querySelector(".open");
    const closeBtn = navBtnRef.current.querySelector(".close");
    // navbtn
    openBtn?.classList.toggle("hidden");
    closeBtn?.classList.toggle("hidden");
  };
  // scroll on click to the element
  function scrolltoElment(e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    toggleHidden();
  }
  function navigate(e) {
    if (e.target.classList.contains("open")) {
      toggleHidden();
    }
    if (e.target.classList.contains("close")) {
      toggleHidden();
    }
  }
  return (
    <nav className=" bg-white sticky top-0 z-[9999999] dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="/">
            <Logo />
          </a>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-500 open relative dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 mr-2"
              aria-label="toggle menu"
              onClick={navigate}
              ref={navBtnRef}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 open absolute  "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 close absolute  hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div
          className="absolute nav-container hidden inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
          ref={navRef}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            {links.map((el) => (
              <a
                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-primary  md:mx-4 md:my-0 capitalize nav__link"
                href={`#${el}`}
                key={el}
                onClick={(e) => scrolltoElment(e)}
              >
                {el}
              </a>
            ))}
          </div>

          <div className="flex gap-5 items-center flex-wrap">
            <Link
              className="w-full px-5 py-2 mt-4 text-lg font-medium text-white capitalize transition-colors duration-300 transform bg-primary rounded-md lg:w-auto hover:bg-primary/70 focus:outline-none focus:bg-primary"
              to="register"
            >
              Get started
            </Link>
            <Link
              className="w-full px-5 py-2 mt-4 text-lg font-medium  capitalize transition-colors duration-300 transform border-2 border-primary  rounded-md lg:w-auto hover:bg-primary/70 focus:outline-none focus:bg-primary "
              to="login"
            >
              {" "}
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NAV;

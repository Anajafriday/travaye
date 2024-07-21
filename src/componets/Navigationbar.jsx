import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useDestination } from "../contexts/Destinationcontext";

function Navigationbar({ mt = "mt-7" }) {
  const { Locations } = useDestination();
  // const { lat, lng } = Locations[0]?.position;
  return (
    <div
      className={`flex  gap-20 flex-col ${mt}   fixed  left-0 h-screen w-[20%] border-r-2 border-neutral-300 z-50 backdrop-blur-2xl`}
    >
      <Logo />
      <nav className="flex justify-center items-center flex-col">
        <ul className="w-4/5 flex flex-col gap-8">
          <li>
            <NavLink
              to="/city"
              className="flex gap-2 text-lg  py-2 px-4 drop-shadow rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#99c24d"
                  d="M2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q3.4 0 6.025 1.988t3.55 5.087q.125.35-.137.65t-.663.3q-.425 0-.787-.225t-.513-.625q-.575-1.55-1.738-2.75T15 4.6V5q0 .825-.588 1.413T13 7h-2v2q0 .425-.288.713T10 10H8v2h1q.425 0 .713.288T10 13v2H9l-4.8-4.8q-.075.45-.138.9T4 12q0 3.05 2.013 5.325t5.062 2.625q.4.05.663.338T12 21q0 .425-.288.713t-.687.237Q7.2 21.575 4.6 18.75T2 12Zm18.4 8.8l-2.5-2.5q-.525.3-1.125.5T15.5 19q-1.875 0-3.187-1.313T11 14.5q0-1.875 1.313-3.188T15.5 10q1.875 0 3.188 1.313T20 14.5q0 .675-.2 1.275t-.5 1.125l2.5 2.5q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275ZM15.5 17q1.05 0 1.775-.725T18 14.5q0-1.05-.725-1.775T15.5 12q-1.05 0-1.775.725T13 14.5q0 1.05.725 1.775T15.5 17Z"
                />
              </svg>
              Explore city
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className="flex gap-2 text-lg  py-2 px-4 drop-shadow rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#99c24d"
                  d="M18.364 5.636A9 9 0 1 0 5.636 18.364A9 9 0 0 0 18.364 5.636ZM4.222 4.222c4.296-4.296 11.26-4.296 15.556 0c4.296 4.296 4.296 11.26 0 15.556c-4.296 4.296-11.26 4.296-15.556 0c-4.296-4.296-4.296-11.26 0-15.556Zm13.22 2.337l-4.965 12.91l-2.1-5.844l-5.845-2.1l12.91-4.966Zm-7.174 4.902l1.672.6l.6 1.672l1.42-3.692l-3.692 1.42Z"
                />
              </svg>
              Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/smart map?lat=${Locations[0]?.position.lat}&lng=${Locations[0]?.position.lng}`}
              className="flex items-center gap-2 text-lg  py-2 px-4 drop-shadow rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#99c24d"
                  d="m16 24l-6.09-8.6A8.14 8.14 0 0 1 16 2a8.08 8.08 0 0 1 8 8.13a8.2 8.2 0 0 1-1.8 5.13Zm0-20a6.07 6.07 0 0 0-6 6.13a6.19 6.19 0 0 0 1.49 4L16 20.52L20.63 14A6.24 6.24 0 0 0 22 10.13A6.07 6.07 0 0 0 16 4Z"
                />
                <circle cx="16" cy="9" r="2" fill="#99c24d" />
                <path
                  fill="#99c24d"
                  d="M28 12h-2v2h2v14H4V14h2v-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2Z"
                />
              </svg>
              Smart map
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my trip"
              className="flex gap-2 text-lg  py-2 px-4 drop-shadow rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 14 14"
              >
                <g
                  fill="none"
                  stroke="#99c24d"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10.5 8.5a5 5 0 1 1-8.25-3.8" />
                  <path d="M5.28 6.65a1.6 1.6 0 0 0-.16.7a1.52 1.52 0 0 0 1.53 1.53a.77.77 0 0 1 .77.77v3.47M.57 9.27h1.85A1.54 1.54 0 0 1 4 10.81v2.45m9.26-11.39l-1-.34a.34.34 0 0 0-.39.13l-.73 1.13l-4-2A2.49 2.49 0 0 0 3.53 2.1A.68.68 0 0 0 4 3l2.61.84l.26.09l.49 1.68a.36.36 0 0 0 .24.25l1.18.38a.37.37 0 0 0 .48-.41L9 4.58h.17l2.55.83a.67.67 0 0 0 .85-.41l.9-2.77a.34.34 0 0 0-.21-.36Z" />
                </g>
              </svg>
              My trip
            </NavLink>
          </li>
          <li className="hidden">
            <NavLink
              to="/dashboard"
              className="flex gap-2 text-lg  py-2 px-4 drop-shadow rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#99c24d"
                  d="M12 3a9 9 0 0 0-4.5 16.796l.865.5l-1.001 1.732l-.866-.5A10.996 10.996 0 0 1 1 12C1 5.925 5.925 1 12 1c1.203 0 2.362.193 3.448.552l.95.313l-.627 1.9l-.95-.314A8.991 8.991 0 0 0 12 3Zm8.981 1.414l-5.542 5.542a4 4 0 1 1-1.42-1.41L19.567 3l1.414 1.414Zm1.154 3.188l.313.95C22.807 9.638 23 10.797 23 12c0 4.071-2.212 7.625-5.496 9.526l-.865.5l-1.002-1.73l.865-.501A8.996 8.996 0 0 0 21 12a8.99 8.99 0 0 0-.45-2.822l-.314-.95l1.9-.626ZM12 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"
                />
              </svg>
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigationbar;

import { useState } from "react";
// import { useSearchParams } from "react-router-dom";

import Main from "../../componets/Main";
import Navigationbar from "../../componets/Navigationbar";
import SmartMap from "../../componets/SmartMap";
import SmartmapList from "../../componets/SmartmapList";
function SmartmapPage() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  // const [params, setParams] = useSearchParams();
  return (
    <>
      <Main>
        <button
          className=" z-[70] text-neutraDark fixed top-0 ml-5 cursor-pointer  mt-2 bg-white drop-shadow-md py-1 px-2 rounded-md"
          onClick={() => setIsOpenNav((isOpen) => !isOpen)}
        >
          {isOpenNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 256 256"
            >
              <path
                fill="#363a37"
                d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="#363a37"
                d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"
              />
            </svg>
          )}
        </button>
        {isOpenNav && <Navigationbar mt="mt-0" />}
        <SmartmapList />
        <SmartMap />
      </Main>
    </>
  );
}

export default SmartmapPage;

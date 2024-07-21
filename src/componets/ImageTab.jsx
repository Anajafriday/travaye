import { useEffect, useRef, useState } from "react";
import { useDestination } from "../contexts/Destinationcontext";
import { LoaderRotate } from "./Loader";

function ImageTab() {
  const { handleCloseTab, selectedDestination } = useDestination();
  const [curImgIndex, setCurImgIndex] = useState(0);
  const [curImgSrc, setCurImgSrc] = useState("");
  const [isLoadingCurImageURl, setIsLoadingCurImageUrl] = useState(
    curImgSrc === selectedDestination.subimages[curImgIndex]?.url ??
      curImgSrc === selectedDestination.subimages[curImgIndex]
  );

  const imgRef = useRef();
  function next() {
    if (curImgIndex === selectedDestination.subimages.length - 1)
      setCurImgIndex(0);
    else setCurImgIndex((index) => index + 1);
  }

  function previouse() {
    if (curImgIndex >= 1) setCurImgIndex((index) => index - 1);
  }

  useEffect(() => {
    const imgUrl = imgRef.current.getAttribute("src");
    setTimeout(() => {
      imgRef.current.src =
        selectedDestination.subimages[curImgIndex]?.url ??
        selectedDestination.subimages[curImgIndex];
      imgRef.current.classList.add("sub-image-loaded");
    }, 500);
    setCurImgSrc(imgUrl);
    imgRef.current.classList.add("sub-image");
    // setIsLoadingCurImageUrl(false);
  }, [curImgSrc, selectedDestination, curImgIndex]);
  return (
    <div className="h-96 flex justify-center items-center flex-col  w-7/12 transform translate-x-28  rounded-lg fixed top-1/4 z-20 bg-neutraLight mx-auto">
      <button
        className="btn-round  bg-red-600 h-8 text-3xl w-8 self-end -mb-10 mt-2 hover:text-neutraDark text-white mr-2"
        onClick={handleCloseTab}
      >
        &times;
      </button>
      <p className="text-neutraDark my-4 capitalize">
        {selectedDestination.city} {selectedDestination.country}
      </p>
      <div className="relative  w-11/12 h-4/5 flex overflow-hidden gap-8 justify-between">
        {isLoadingCurImageURl && (
          <LoaderRotate
            className={"absolute  top-28 left-96  self-center  z-50"}
          />
        )}
        {/* {!selectedDestination.subimages[curImgIndex]?.url === curImgSrc ||
          (!selectedDestination.subimages[curImgIndex] === curImgSrc && ( */}
        <img
          // src={
          //   selectedDestination.subimages[curImgIndex]?.url ??
          //   selectedDestination.subimages[curImgIndex]
          // }
          alt={selectedDestination.city}
          className={`w-full bg-neutral-500 h-full rounded-lg object-cover  object-center absolute transform  transition-transform duration-1000`}
          ref={imgRef}
        />
        {/* ))} */}
        <button
          className="btn-img-slide btn-round absolute right-4"
          onClick={next}
        >
          &rarr;
        </button>
        <button
          className={`btn-img-slide left-4 absolute btn-round ${
            curImgIndex === 0 ? "disabled" : ""
          }`}
          onClick={previouse}
        >
          &larr;
        </button>
      </div>{" "}
      <p className="text-neutraDark my-4 capitalize">
        image {curImgIndex + 1}/{selectedDestination.subimages.length}{" "}
      </p>
    </div>
  );
}

export default ImageTab;

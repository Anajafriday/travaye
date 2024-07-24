import { useEffect, useRef, useState } from "react";

const OptimizeImage = ({ smallImage, largeImage, className, alt }) => {
  const blurredImageDiv = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = blurredImageDiv.current.querySelector("img");

    function handleLoad() {
      setLoaded(true);
    }

    if (img.complete) {
      handleLoad();
    } else {
      img.addEventListener("load", handleLoad);
    }

    return () => {
      img.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div
      ref={blurredImageDiv}
      className={`relative overflow-hidden  w-full ${className}  h-inherit  bg-cover bg-no-repeat ${
        loaded ? "loaded" : ""
      }`}
      style={{ backgroundImage: `url(${smallImage})` }}
    >
      <img
        src={largeImage}
        loading="lazy"
        className={`transition-opacity h-full w-full duration-250 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        height="300px"
        width="300px"
        alt={alt || "travaye"}
      />
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-white"></div>
      )}
    </div>
  );
};

export default OptimizeImage;

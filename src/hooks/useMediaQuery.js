import { useEffect, useState } from "react";

export function useMediaQuery(breakPoints) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const updateIndex = () => {
      const width = window.innerWidth;
      const newIndex = breakPoints.findIndex((brkPt) => width <= brkPt);
      setIndex(newIndex === -1 ? breakPoints.length : newIndex);
    };
    updateIndex();
    window.addEventListener("resize", updateIndex);
    return () => window.removeEventListener("resize", updateIndex);
  }, [breakPoints]);
  return index;
}

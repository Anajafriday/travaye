export const useObserver = (element, handler) => {
  const observerCallBack = (entries) => {
    console.log(entries);
  };
  const observer = new IntersectionObserver(observerCallBack, {
    root: null,
    // rootMargin: "50px",
    threshold: 0.15,
  });
  observer.observe(element);
};

export function formatCurrency(value, currency = "USD") {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: currency,
  }).format(value);
}

export const Observer = (element, handler) => {
  const observerCallBack = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    handler();
  };
  const observer = new IntersectionObserver(observerCallBack, {
    root: null,
    // rootMargin: "50px",
    threshold: 0.15,
  });
  observer.observe(element);
};

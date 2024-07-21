function Logo({ footer = false }) {
  return (
    <div
      className={` text-primary flex  ${
        footer ? "" : "justify-center"
      }  items-center  text-3xl font-bold font-inriaSerif`}
    >
      Travaye <span>✈️</span>
    </div>
  );
}

export default Logo;

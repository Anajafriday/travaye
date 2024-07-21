import Proptypes from "prop-types";

function LanguageConvert({ classes = "border-primary", children }) {
  return (
    <button className={`flex gap-4 border-2   ${classes}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="#99c24d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8" />
          <path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18" />
        </g>
      </svg>
      {children}
    </button>
  );
}
LanguageConvert.prototype = {
  classes: Proptypes.string,
};
export default LanguageConvert;
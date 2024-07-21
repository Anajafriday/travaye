import Errro from "../componets/Error";

function PageNotFound() {
  return (
    <div className="flex justify-center item-center w-96 mx-auto my-60">
      <Errro message="Page Not Found );">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="red"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7v4a1 1 0 0 0 1 1h3m0-5v10m3-9v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1zm7-1v4a1 1 0 0 0 1 1h3m0-5v10"
          />
        </svg>
      </Errro>
    </div>
  );
}

export default PageNotFound;

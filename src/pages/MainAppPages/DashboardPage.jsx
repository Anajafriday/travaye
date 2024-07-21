import AppLayout from "../../componets/AppLayout";
import Dashboard from "../../componets/Dashboard";
import Main from "../../componets/Main";
import Navigationbar from "../../componets/Navigationbar";
import SubNavbar from "../../componets/SubNavbar";

function DashboardPage() {
  return (
    <div>
      <Main>
        <Navigationbar />
        <AppLayout>
          <SubNavbar>
            <span className="h-12 w-12 flex justify-center relative items-center bg-white  transition-opacity duration-300 drop-shadow rounded-full cursor-pointer hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#363a37"
                  d="m450.27 348.569l-43.67-80.624V184c0-83.813-68.187-152-152-152s-152 68.187-152 152v83.945l-43.672 80.623A24 24 0 0 0 80.031 384h86.935a88.866 88.866 0 0 0-.367 8a88 88 0 0 0 176 0c0-2.7-.129-5.364-.367-8h86.935a24 24 0 0 0 21.1-35.431ZM310.6 392a56 56 0 1 1-111.419-8h110.837a56.14 56.14 0 0 1 .582 8ZM93.462 352l41.138-75.945V184a120 120 0 0 1 240 0v92.055L415.736 352Z"
                />
              </svg>
              <span className="h-3 w-3 rounded-full absolute top-2 ml-4 bg-red-600 flex"></span>
            </span>
          </SubNavbar>
          <Dashboard />
        </AppLayout>
      </Main>
    </div>
  );
}

export default DashboardPage;

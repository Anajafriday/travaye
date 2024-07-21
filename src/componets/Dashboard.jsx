import Expenses from "./Charts/Expenses";

function Dashboard() {
  return (
    <div className="grid grid-cols-[30rem_40rem] gap-8 mt-12">
      <div className="h-72  bg-slate-50 shadow rounded-md p-4  dark:bg-gray-800 flex items-center ">
        EXPENSES
        <div>
          <Expenses />
        </div>
      </div>
      <div className="h-72 bg-slate-50 shadow rounded-md p-4  dark:bg-gray-800">
        POPULAR DESTINATION
      </div>
      <div className="col-span-full h-72  bg-slate-50 shadow dark:bg-gray-800 rounded-md p-4">
        HISTORY
      </div>
    </div>
  );
}

export default Dashboard;

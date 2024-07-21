import AppLayout from "../../componets/AppLayout";
import Destinations from "../../componets/Destinations";
import Main from "../../componets/Main";
import Navigationbar from "../../componets/Navigationbar";
import SubNavbar from "../../componets/SubNavbar";

function DestinationPage() {
  return (
    <Main>
      <Navigationbar />
      <AppLayout>
        <SubNavbar />
        <div className=" ml-4  -mt-4 overflow-hidde relative ">
          <div className="mt-8 ml-8 flex gap-4">
            {["Popular", "adventure", "beach", "nature", "historic"].map(
              (el, i) => (
                <button
                  key={i}
                  className="py-2 px-4  border border-neutraLight "
                >
                  {el}
                </button>
              )
            )}
          </div>
          <Destinations />
        </div>
      </AppLayout>
    </Main>
  );
}

export default DestinationPage;

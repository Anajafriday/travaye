import AppLayout from "../../componets/AppLayout";
import Cities from "../../componets/Cities";
import Main from "../../componets/Main";
import Navigationbar from "../../componets/Navigationbar";
import SubNavbar from "../../componets/SubNavbar";

function ExploreCityPage() {
  return (
    <Main>
      <Navigationbar />
      <AppLayout>
        <SubNavbar />
        {/* MANNNANNANANANNAN */}
        <Cities />
      </AppLayout>
    </Main>
  );
}

export default ExploreCityPage;

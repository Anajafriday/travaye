import { Suspense, lazy } from "react";
import { LocationProvider } from "./contexts/Destinationcontext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./componets/Loader";
import ProtectedRout from "./componets/ProtectedRout";
import { AuthProvider } from "./contexts/AuthProvider";
import RegisterPage from "./pages/RegisterPage";
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SmartmapPage = lazy(() => import("./pages/MainAppPages/SmartmapPage"));
const DashboardPage = lazy(() => import("./pages/MainAppPages/DashboardPage"));
const DestinationPage = lazy(() =>
  import("./pages/MainAppPages/DestinationPage")
);
const ExploreCityPage = lazy(() =>
  import("./pages/MainAppPages/ExploreCityPage")
);
export default function App() {
  return (
    <LocationProvider>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route
                path="city"
                index
                element={
                  <ProtectedRout>
                    <ExploreCityPage />
                  </ProtectedRout>
                }
              />
              <Route
                element={
                  <ProtectedRout>
                    <ExploreCityPage />{" "}
                  </ProtectedRout>
                }
              />
              <Route
                path="destination"
                element={
                  <ProtectedRout>
                    <DestinationPage />{" "}
                  </ProtectedRout>
                }
              />
              <Route
                path="smart map/:id/:city/:country"
                element={
                  <ProtectedRout>
                    <SmartmapPage />{" "}
                  </ProtectedRout>
                }
              />
              <Route
                path="smart map"
                element={
                  <ProtectedRout>
                    <SmartmapPage />{" "}
                  </ProtectedRout>
                }
              >
                <Route
                  path="cities"
                  element={
                    <ProtectedRout>
                      <DestinationPage />{" "}
                    </ProtectedRout>
                  }
                />
              </Route>
              <Route
                path="dashboard"
                element={
                  <ProtectedRout>
                    <DashboardPage />{" "}
                  </ProtectedRout>
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </LocationProvider>
  );
}

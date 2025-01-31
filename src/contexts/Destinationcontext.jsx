import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { API_URL } from "../config";
// const FAKE_USER = {
//   FullName: "jane Allen",
//   email: "janeallen33@example.com",
//   password: "qwerty234",
// };
const initValue = {
  Locations: [],
  selectedDestination: null,
  selectedDestinationId: null,
  favorite: [],
  isOpen: false,
  isFavOpen: false,
  isLoading: false,
  isAuthenticated: true,
  error: "",
  LocationsLength: 0,
  resultPerpage: 6,
};
function reducerCallback(state, action) {
  // console.log(action);
  switch (action.type) {
    case "closed/tab":
      // console.log("closed/tab");
      return {
        ...state,
        isOpen: false,
        isFavOpen: false,
      };
    case "tab/open":
      // console.log("tab/open");

      return {
        ...state,
        isOpen: true,
      };
    case "fav/open":
      // console.log("fav/open");

      return {
        ...state,
        isFavOpen: !state.isFavOpen,
      };
    case "data/loading":
      // console.log("data/Loadding");

      return { ...state, isLoading: true };
    case "destination/Load":
      // console.log("destination/load");

      return {
        ...state,
        isLoading: false,
        Locations: action.payLoad,
        LocationsLength: action.payLoad.length,
      };
    case "destination/adding":
      // console.log("destination/adding");

      return {
        ...state,
        Locations: state.Locations.map((local) =>
          local.id === action.payLoad.id
            ? { ...local, isAddedToFavorites: !local.isAddedToFavorites }
            : local
        ),
        favorite: !state.favorite
          .map((fav) => fav?.id)
          .includes(action.payLoad.id)
          ? [...state.favorite, action.payLoad]
          : state.favorite.filter((fav) => fav?.id !== action.payLoad.id),
      };
    case "destination/favorite":
      // console.log("destination/favorite");

      return { ...state, favorite: action.payLoad };
    case "destination/deleteFavorite":
      // console.log("destination/deleteFavorite");

      return {
        ...state,
        favorite: state.favorite.filter((fav) => fav.id !== action.payLoad),
      };
    case "destination/selected":
      // console.log("destination/selected");
      return {
        ...state,
        selectedDestination:
          state.selectedDestination?.id !== action.payLoad
            ? state.Locations.find((des) => des.id === action.payLoad)
            : state.selectedDestination,
        selectedDestinationId:
          action.payLoad === state.selectedDestinationId
            ? null
            : action.payLoad,
      };
    case "destination/added":
      // console.log("destination/added");
      return {
        ...state,
        Locations: [...state.Locations, action.payLoad],
        LocationsLength: state.LocationsLength + 1,
      };
    case "destination/length":
      return {
        ...state,
        LocationsLength: state.LocationsLength + 1,
      };
    case "destination/updateResultPerPage":
      return {
        ...state,
        resultPerpage: action.payLoad,
      };
    default:
      console.error(`Unknown action ${action.type}`);
      throw new Error(`Unknown action ${action.type}`);
  }
}

const DestinationContext = createContext();
function LocationProvider({ children }) {
  const [
    {
      Locations,
      isLoading,
      isFavOpen,
      selectedDestination,
      selectedDestinationId,
      favorite,
      isOpen,
      LocationsLength,
      resultPerpage,
    },
    dispatch,
  ] = useReducer(reducerCallback, initValue);

  const handleCloseTab = useCallback(function handleCloseTab() {
    dispatch({ type: "closed/tab" });
  }, []);
  function handleOpenTab() {
    dispatch({ type: "tab/open" });
  }

  function handleSelectedDestination(id) {
    dispatch({ type: "destination/selected", payLoad: id });
  }
  function handleToggleFavorite(destination) {
    handleSelectedDestination(destination.id);
    // const updatedObject = {
    //   isAddedToFavorites: destination.isAddedToFavorites,
    // };
    // addToFavorite(destination);
    // updateAddtoFavorite(destination.id, updatedObject);
    dispatch({ type: "destination/adding", payLoad: destination });
  }
  async function unAddFavorite(destinationId) {
    await fetch(`${API_URL}/favorites/${destinationId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: "destination/deleteFavorite", payLoad: destinationId });
  }
  useEffect(
    function () {
      async function fetchLocation() {
        dispatch({ type: "data/loading" });
        try {
          const res = await fetch(`${API_URL}/locations`);
          const data = await res.json();
          dispatch({ type: "destination/Load", payLoad: data });
        } catch (error) {
          dispatch({
            type: "error",
            payLoad: error.message,
          });
        }
      }
      fetchLocation();
    },
    [LocationsLength]
  );
  /*
  useEffect(() => {
    dispatch({ type: "data/loading" });

    async function fechtFavorite() {
      const res = await fetch(`${API_URL}/favorites`);
      const data = await res.json();
      // console.log(data);
      dispatch({ type: "destination/favorite", payLoad: data });
    }
    if (!favorite.length) return;
    fechtFavorite();
  }, [favorite.length]);
  */

  return (
    <DestinationContext.Provider
      value={{
        Locations,
        isLoading,
        onAddtoFavorite: handleToggleFavorite,
        curId: selectedDestinationId,
        favorite,
        isOpen,
        handleCloseTab,
        handleSelectedDestination,
        selectedDestination,
        handleOpenTab,
        isFavOpen,
        dispatch,
        resultPerpage,
        unAddFavorite,
      }}
    >
      {children}
    </DestinationContext.Provider>
  );
}

function useDestination() {
  const destination = useContext(DestinationContext);
  if (destination === undefined)
    throw new Error("context was used outside of its provider");

  return destination;
}

// async function updateAddtoFavorite(id, updatedObject) {
//   try {
//     await fetch(`${API_URL}/locations/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify(updatedObject),
//     });
//     // return await res.json();
//   } catch (error) {
// console.log(error.message);
//   }
// }
// async function addToFavorite(destination) {
//   try {
//     await fetch(`${API_URL}/favorites`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify(destination),
//     });
//     // return await res.json();
//   } catch (error) {
// console.log(error.message);
//   }
// }
export { LocationProvider, useDestination };

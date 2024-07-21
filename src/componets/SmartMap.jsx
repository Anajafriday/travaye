import { Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import Errro from "./Error";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDestination } from "../contexts/Destinationcontext";
import { API_URL } from "../config";
import Dialog from "./Dialog";
function SmartMap() {
  const [params, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { Locations, dispatch } = useDestination();
  const lat = params.get("lat");
  const lng = params.get("lng");
  const [position, setPosition] = useState([lat, lng]);
  const [mapPosition, setMapposition] = useState([]);
  const [cityName, setCityName] = useState("");
  const [newLocation, setNewLocation] = useState({});
  useEffect(
    function () {
      if ((lat, lng)) setPosition([lat, lng]);
    },
    [lat, lng]
  );
  useEffect(() => {
    async function fetchAboutCity() {
      const { lat, lng } = mapPosition;
      // setPosition([lat, lng]);

      try {
        // use latitude and longitude from the map position to reverse geocode
        const search = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
        );

        const data = await search.json();
        //check if they is a position in the cordinate if not throw error
        if (!data.latitude && !data.longitude)
          throw new Error("no position can be find pls click on another spot");
        const { countryName, countryCode, localityInfo } = data;
        const categoryArr = ["pack", "island", "moutain", "acient", "sea"];

        //from the localityinfo ,distructure the locality and get the administrative array
        const { administrative, informative } = localityInfo;
        // loop through the informative and return the name and the description,store it in a variable e.g information
        const information = informative.map(
          (info) => info.name && info.description
        );

        /* below is a  loop inside of a loop 
        1) loop through categoryArr and inside of it loop through the information
        2) in the information loop check if the value icludes the value of category loop
        3) chain a filter method  with  the information loop , it filter out info that equal to false
        4) chain another filter method with the category loop to filter  out any el that has 0 length 
        5) flatten it to one play array */
        //LOOP-- A
        const infoArr = categoryArr
          .map((cat) => {
            return information
              .map((info) => info?.includes(cat) && info)
              .filter((el) => el !== false);
          })
          .filter((el) => el.length !== 0)
          .flat(1);
        //loop through infoArr and returne a splited string
        const string = infoArr.map((info) => info?.split(" ")).flat(1);
        //LOOP-- B
        const randomCategory = categoryArr
          .map((arr) =>
            string.map((str) => arr === str && str).filter((el) => el !== false)
          )
          .filter((el) => el.length !== 0)
          .flat(1);
        // check if the adminlevel is equal to 4 if not it should be filter out
        const adminArr = administrative.filter(
          (adm) => adm.adminLevel === 4 && adm
        );
        const [clickedLocal] = adminArr.map((admin) => {
          return {
            name: admin?.name,
            description: admin?.description,
            geonameId: admin?.geonameId,
          };
        });
        if (clickedLocal.name === undefined)
          throw new Error("location has no name");
        if (clickedLocal.name !== null || clickedLocal.name !== undefined) {
          const imgs = await getImageUrl(clickedLocal?.name);
          const newLocation = {
            city: clickedLocal?.name,
            img: imgs[0],
            subimages: imgs.slice(1, 9),
            position: mapPosition,
            country: countryName,
            flag: countryCode,
            isAddedToFavorites: false,
            numberOfVisits: clickedLocal?.geonameId,
            info: clickedLocal?.description,
            category: randomCategory[0] || "adventure",
            amountNeeded: 3000 * Math.floor(Math.random() * 10),
          };

          if (
            !Locations?.some((location) => location?.city === newLocation?.city)
          ) {
            setNewLocation(newLocation);
            navigate(`/smart map?lat=${lat}&lng=${lng}`);

            // console.log(dialog.current);
            setCityName(clickedLocal?.name ?? "");
          } else {
            // alert(` the city name ${newLocation?.city} has already exist`);
            return;
          }
        }
        setSearchParams(`lat=${lat}&lng=${lng}`);
      } catch (error) {
        console.error(error.message);
        // alert(error.message);
      }
    }

    if (mapPosition.length === 0) return;
    fetchAboutCity();
  }, [mapPosition, setSearchParams, Locations, dispatch, navigate]);
  const dialog = useRef();
  // const isDalogOpen = dialog.current.hasAttribute("open");
  function toggleDiaglog() {
    if (!dialog.current && cityName === "") return;
    dialog.current.hasAttribute("open")
      ? dialog.current.close()
      : dialog.current.showModal();
  }
  function handleAddLocation() {
    sendToApi(newLocation);
    setCityName("");
    toggleDiaglog();
    // navigate(`/destination`);
    // dispatch({ type: "destination/added", payLoad: newLocation });
    dispatch({ type: "destination/length" });
  }
  return (
    <>
      <div className="w-[106.%] h-screen bg-neutraDark col-span-2 -ml-20 relative flex   justify-center items-center">
        {cityName && (
          <Dialog ref={dialog}>
            <p className="text-base font-medium text-slate-50">
              did you want to add{" "}
              <strong className="text-primary">{cityName} </strong>to your
              destination list ?
            </p>
            <div className="flex gap-3">
              <button
                className=" bg-primary py-1 px-4  focus:ring-1 outline-none focus:ring-offset-1 focus:ring-slate-500 rounded-full"
                onClick={handleAddLocation}
              >
                yes
              </button>
              <button
                className=" bg-red-500 text-red-50  py-1 px-4  focus:ring-1 outline-none focus:ring-offset-1 focus:ring-slate-500 rounded-full"
                onClick={() => {
                  setCityName("");
                  toggleDiaglog();
                }}
              >
                no
              </button>
            </div>
          </Dialog>
        )}
        <div className="h-full   w-full bg-neutraLight relative flex justify-center items-center">
          {navigator.onLine ? (
            <>
              <MapContainer
                center={
                  position
                    ? position
                    : [Locations[0].position.lat, Locations[0].position.lng]
                }
                zoom={13}
                scrollWheelZoom={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {Locations.map((location) => (
                  <Marker position={location.position} key={location.id}>
                    <Popup className=" capitalize">{location?.city}</Popup>
                  </Marker>
                ))}
                <NavigateMap position={position} />
                <HandlemapEvent
                  updatePosition={setMapposition}
                  toggleDialog={toggleDiaglog}
                />
              </MapContainer>
              <button className="absolute bottom-4 px-4 py-2 rounded bg-clip-padding  right-1/3 drop-shadow  z-[2000] bg-primary">
                cities in my Position
              </button>
              <div className="h-12 w-36 bg-white drop-shadow rounded-full py-1 px-1  absolute z-[2000] top-2 right-4">
                <div className="relative flex justify-between items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/75.jpg"
                    alt="user_profile_picture"
                    className=" rounded-full object-cover object-center w-10 h-10"
                  />
                  <span className="h-4 w-4 rounded-full border-white border-2 right-[5.5rem] absolute -top-1 bg-lime-400"></span>
                  <span className="mr-4 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                        <path
                          fill="#363A37"
                          d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </>
          ) : (
            <Errro
              message={`something went wrong,could'nt load map.
             refresh the page or try again later );`}
            />
          )}
        </div>
      </div>
    </>
  );
}

function NavigateMap({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
function HandlemapEvent({ updatePosition, toggleDialog }) {
  useMapEvents({
    click: (e) => {
      updatePosition(e.latlng);
      // toggleDialog?.current.showModal();
      toggleDialog();
    },
  });
  return null;
}
const KEY = `VXJFvzVHdkZn1ut-j1UstMV4Nol23vdB70X-YUumc8E`;
async function getImageUrl(locationName, pageNum = 1) {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos/?page=${pageNum}&query=${locationName}&client_id=${KEY}`
    );

    const data = await res.json();
    const imgObject = data.results.map((result) => result?.links?.download);
    return imgObject;
  } catch (error) {
    throw error;
  }
}

async function sendToApi(newLocation) {
  try {
    const res = await fetch(`${API_URL}/locations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLocation),
    });
    return res;
  } catch (error) {
    throw error;
  }
}
export { NavigateMap };
export default SmartMap;

// VXJFvzVHdkZn1ut-j1UstMV4Nol23vdB70X-YUumc8E
//https://api.unsplash.com/photos/?client_id=VXJFvzVHdkZn1ut-j1UstMV4Nol23vdB70X-YUumc8E

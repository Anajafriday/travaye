import { useNavigate } from "react-router-dom";

function CTA() {
  const navigate = useNavigate();
  return (
    <section className="my-4 transform mx-auto -mt-48 -mb-4  w-full py-40 relative">
      <div
        className=" bg-center bg-cover md:h-[38rem]  py-24 md:py-0"
        // style={{

        //   backgroundImage: `url(
        //     "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        //   )`,
        // }}
      >
        <div className="h-[38rem] absolute -z-50   top-48 md:top-auto">
          <video
            src="https://videos.pexels.com/video-files/3612113/3612113-sd_640_360_30fps.mp4"
            autoPlay={true}
            loop={true}
            muted={true}
            className=" bg-center bg-cover h-full w-full border-none"
          ></video>
        </div>
        <div className="md:h-[38rem] absolute -z-50 right-0  ">
          <video
            src="https://videos.pexels.com/video-files/3612113/3612113-sd_640_360_30fps.mp4"
            autoPlay={true}
            loop={true}
            muted={true}
            className=" border-transparent  h-full w-full"
            style={{
              border: "none",
            }}
          ></video>
        </div>
        <div className="flex items-center justify-center  h-full bg-gray-900/40">
          <div className="text-center w-full md:w-4/5 mx-auto mt-12  md:mt-0">
            <h3 className="md:text-3xl text-2xl font-semibold text-white lg:text-4xl">
              Ready to start your <span className="text-primary">journey</span>?
              Sign up now or log in to your Travaye account. Your next adventure
              is just a click away!
            </h3>
            <button
              className="w-full w-4/5 px-5 py-2 mt-4 text-lg font-medium text-white capitalize transition-colors duration-300 transform bg-primary rounded-md lg:w-auto hover:bg-primary/70 focus:outline-none focus:bg-primary"
              onClick={() => navigate("/register")}
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;

import { useNavigate } from "react-router-dom";

function CTA() {
  const navigate = useNavigate();
  return (
    <section className=" transform mx-auto   md:-mb-4  w-full  relative">
      <div className=" bg-center bg-cover md:h-[58rem]  h-[20rem]  w-full">
        <div className="h-full absolute -z-50    ">
          <video
            src="https://videos.pexels.com/video-files/3612113/3612113-sd_640_360_30fps.mp4"
            autoPlay={true}
            loop={true}
            muted={true}
            className=" bg-center bg-cover h-full w-full outline-none"
          ></video>
        </div>
        <div className="md:h-full md:hidden absolute -z-50 right-0  ">
          <video
            src="https://videos.pexels.com/video-files/3612113/3612113-sd_640_360_30fps.mp4"
            autoPlay={true}
            loop={true}
            muted={true}
            className="   h-full w-full outline-none"
            style={{
              border: "none",
            }}
          ></video>
        </div>
        <div className="flex items-center justify-center    h-full bg-slate-900/20 w-full">
          <div className="text-center w-full md:w-4/5 mx-auto mt-12  md:mt-0">
            <h3 className="md:text-3xl text-lg font-semibold text-white lg:text-4xl">
              Ready to start your <span className="text-primary">journey</span>?
              Sign up now or log in to your Travaye account. Your next adventure
              is just a click away!
            </h3>
            <button
              className="w-full  px-5 py-2 mt-4 text-lg font-medium text-white capitalize transition-colors duration-300 transform bg-primary rounded-md lg:w-auto hover:bg-primary/70 focus:outline-none focus:bg-primary"
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

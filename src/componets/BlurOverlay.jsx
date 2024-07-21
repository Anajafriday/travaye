function BlurOverlay() {
  return (
    <div
      className="h-screen flex justify-center items-center flex-col
        w-full transform  rounded-lg fixed 
         top-0 z-20  backdrop-blur-xl -ml-12"
    ></div>
  );
}

export default BlurOverlay;

import video from "../assets/video.png";

function Video() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row">
        <div className="p-10 flex-1 flex flex-col bg-[#FF794D] text-white gap-4 justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            “It was super easy to share my unique concept. I got exactly what I
            ordered. Great service!”
          </h1>
          <h4 className="text-xl">-- Jenny Wilson</h4>
          <span className="text-sm block ml-6">St. Celina, Delaware</span>
        </div>
        <div className="flex-1">
          <img className="w-full h-full" src={video} alt="/" />
        </div>
      </div>
    </>
  );
}

export default Video;

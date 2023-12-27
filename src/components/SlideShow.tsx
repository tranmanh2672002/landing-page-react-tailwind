import desk from "../assets/desk.svg";

function Slide() {
  return (
    <div className="pt-[128px] mx-4 sm:mx-[50px]">
      <div className="bg-[#FAE2DA] rounded-2xl max-w-[1400px] mx-auto">
        <div className="p-4 md:p-14 md:flex items-center justify-between">
          <div className="relative w-[100%] h-[300px] sm:w-[320px] sm:h-[400px] sm:mx-auto">
            <img
              src={desk}
              alt="/"
              className="absolute top-0 right-0 z-10 w-[100%] min-w-[200px] h-[300px]  md:w-[300px] md:h-[400px]"
            />
            <div className="absolute top-14 right-0 z-0  w-[200px] h-[200px] rounded-full bg-[#20BFA9]"></div>
          </div>
          <div className="flex-1 ml-0 sm:ml-8 md:ml-12 lg:ml-20 text-center md:text-left">
            <span className="text-[#FF794D] text-sm font-medium tracking-widest">
              QUALITY DESIGN FOR ALL
            </span>
            <h1 className="text-[#1D263A] font-bold text-2xl md:text-2xl lg:text-4xl mt-6">
              Bring back th classic
            </h1>
            <h1 className="text-[#1D263A] font-bold text-2xl md:text-2xl lg:text-4xl">
              look by using Whiter.
            </h1>
            <h1 className="text-[#1D263A] font-bold text-2xl md:text-2xl lg:text-4xl mb-6">
              Easy home delivery!
            </h1>
            <div className="text-[#1D263A] text-sm ">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            </div>
            <div className="text-[#1D263A] text-sm ">
              amet sint. Velit officia consequat duis enim velit mollit.
            </div>
            <h3 className="text-[#1D263A] text-sm font-medium tracking-widest mt-8">
              EXPLORE OUR PRODUCTS
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;

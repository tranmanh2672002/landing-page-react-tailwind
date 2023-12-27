import img1 from "../assets/design1.png";
import img2 from "../assets/design2.png";
import img3 from "../assets/design3.png";

function Design() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-[50px]">
      <h1 className="text-[#1D263A] mb-10 text-2xl md:text-3xl lg:text-4xl font-semibold  text-center sm:text-left">
        Explore our exclusive design
      </h1>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-10">
        <div className="md:w-[340px] md:h-[400px] lg:h-[540px] w-[240px] h-[360px] hover:scale-105 ease-in-out duration-200">
          <img className="w-full h-full" src={img1} alt="/" />
        </div>
        <div className="md:w-[340px] md:h-[400px] lg:h-[540px] w-[240px] h-[360px] hover:scale-105 ease-in-out duration-200">
          <img className="w-full h-full" src={img2} alt="/" />
        </div>
        <div className="md:w-[340px] md:h-[400px] lg:h-[540px] w-[240px] h-[360px] hover:scale-105 ease-in-out duration-200">
          <img className="w-full h-full" src={img3} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default Design;

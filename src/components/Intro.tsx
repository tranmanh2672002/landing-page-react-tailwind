import intro1 from "../assets/intro1.svg";
import intro2 from "../assets/intro2.svg";
import intro3 from "../assets/intro3.svg";

function Intro() {
  return (
    <div className="max-w-[1200px] mx-auto mt-16 pb-24">
      <div className="w-full flex flex-col items-center md:flex-row md:flex-wrap justify-center gap-6 lg:gap-0 md:gap-4 ">
        <div className="flex justify-between items-center w-[374px] h-[100px] p-4">
          <div
            className={`min-w-[60px] min-h-[60px] md:min-w-[80px] md:min-h-[80px]  mr-4 bg-[#D6EBE4] rounded-[50%] flex justify-center items-center`}
          >
            <img src={intro1} alt="/" className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-[#1D263A] text-xl font-bold">Best quality</h1>
            <span className="text-[#1D263A] text-base font-normal">
              A team of experts passionate about product management.
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center w-[374px] h-[100px] p-4">
          <div
            className={`min-w-[60px] min-h-[60px] md:min-w-[80px] md:min-h-[80px] mr-4 bg-[#FAE2DA] rounded-[50%] flex justify-center items-center`}
          >
            <img src={intro2} alt="/" className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-[#1D263A] text-xl font-bold">
              Fastest delivery
            </h1>
            <span className="text-[#1D263A] text-base font-normal">
              A team of experts passionate about product management.
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center w-[374px] h-[100px] p-4">
          <div
            className={`min-w-[60px] min-h-[60px] md:min-w-[80px] md:min-h-[80px] mr-4 bg-[#EBF5FF] rounded-[50%] flex justify-center items-center`}
          >
            <img src={intro3} alt="/" className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-[#1D263A] text-xl font-bold">Great support</h1>
            <span className="text-[#1D263A] text-base font-normal">
              A team of experts passionate about product management.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;

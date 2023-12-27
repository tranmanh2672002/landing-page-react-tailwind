import content from "../assets/content.png";

function Content() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto my-[100px]">
        <div className="p-[50px] flex flex-col md:flex-row justify-center items-center">
          <div>
            <img src={content} alt="/" />
          </div>
          <div className="p-10">
            <h1 className="text-[#1D263A] mb-10 text-2xl md:text-3xl lg:text-4xl font-semibold  text-center sm:text-left">
              Spend your happy time with full comfort.
            </h1>
            <span className="text-[#1D263A] text-base font-normal">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next consultancy website within few minutes.
            </span>
            <h3 className="text-[#FF794D] text-sm font-medium tracking-widest mt-8">
              EXPLORE OUR PRODUCTS
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;

import { useState } from "react";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
function Sidebar() {
  const [rail, setRail] = useState(false);

  const handleClickNav = () => {
    setRail(!rail);
  };
  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50 shadow">
      <div className="flex items-center justify-between max-w-[1400px] m-auto my-8 py-2 px-[20px] sm:px-[50px]">
        <h1 className="text-[#213053] font-medium text-2xl">
          Whiter
          <span className="font-bold text-[#F18B62]">.</span>
        </h1>
        <ul className="hidden  sm:flex gap-4 md:gap-12">
          <li className="text-[#1D263A] text-xl font-medium cursor-pointer hover:text-slate-600">
            Products
          </li>
          <li className="text-[#1D263A] text-xl font-medium cursor-pointer hover:text-slate-600">
            Rooms
          </li>
          <li className="text-[#1D263A] text-xl font-medium cursor-pointer hover:text-slate-600">
            Inspiration
          </li>
          <li className="text-[#1D263A] text-xl font-medium cursor-pointer hover:text-slate-600">
            Support
          </li>
        </ul>
        <BsList
          className="block pa-4 text-2xl cursor-pointer hover:text-slate-600 sm:hidden"
          onClick={handleClickNav}
        />
        <div
          className={
            rail
              ? "fixed top-0 left-0 h-full w-[60%] sm:hidden bg-white border-r border-r-slate-200 px-4 ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <div className="flex justify-between items-center my-10">
            <h1 className="text-[#213053] font-medium cursor-pointer hover:text-slate-600 text-2xl sele">
              Whiter
              <span className="font-bold text-[#F18B62]">.</span>
            </h1>
            <AiOutlineClose
              className="block pa-4 text-xl cursor-pointer hover:text-slate-600"
              onClick={handleClickNav}
            />
          </div>
          <ul className="flex flex-col gap-6 ">
            <li className="text-[#1D263A] text-xl font-medium cursor-pointer hover:text-slate-600 pb-2 border-b border-b-slate-200 hover:translate-x-2 hover:duration-300 ease-in-out">
              Products
            </li>
            <li className="text-[#1D263A] text-xl font-medium cursor-pointer hover:text-slate-600 pb-2 border-b border-b-slate-200 hover:translate-x-2 hover:duration-300 ease-in-out">
              Rooms
            </li>
            <li className="text-[#1D263A] text-xl font-medium cursor-pointer hover:text-slate-600 pb-2 border-b border-b-slate-200 hover:translate-x-2 hover:duration-300 ease-in-out">
              Inspiration
            </li>
            <li className="text-[#1D263A] text-xl font-medium cursor-pointer hover:text-slate-600 pb-2 border-b border-b-slate-200 hover:translate-x-2 hover:duration-300 ease-in-out">
              Support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

import { CiFaceSmile } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";

function Awesome() {
  return (
    <>
      <div className="icons text-3xl flex justify-center gap-64 ml-1  bg-[#1C1C29] w-full  items-center min-h-52">
        <div className="smile text-white justify-center items-center">
          <CiFaceSmile className="text-green-600 ml-6" />
          <h1 className="text-2xl">150+</h1>
          <h2 className="text-xs text-slate-400 font-bold">HAPPY CLIENTS</h2>
        </div>
        <div className="flag text-white ">
          <CiFlag1 className="text-green-600" />
          <h1 className="text-2xl">300+</h1>
          <h2 className="text-xs text-slate-400 font-bold">PROJECTS DONE</h2>
        </div>

        <div className="star text-white">
          <FaRegStar className="text-green-600" />
          <h1 className="text-2xl">4</h1>
          <h2 className="text-xs text-slate-400 font-bold">AWARDS</h2>
        </div>
      </div>
    </>
  );
}

export default Awesome;

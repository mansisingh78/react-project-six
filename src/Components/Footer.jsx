import { FaLocationDot } from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";
import { GiScissors } from "react-icons/gi";

function Footer() {
  return (
    <>
      <div className="contact">
        <h1 className="text-white font-bold text-2xl mt-20 ml-[500px]">
          Contact
        </h1>
        <div className="icons flex ml-[200px] mt-6 gap-28">
          <div className="address text-2xl text-green-400">
            <FaLocationDot calcMode className="ml-6" />
            <h1 className="text-white font-bold text-sm">ADDRESS</h1>
            <h2 className="text-white text-xs">no.152 Down Street London UK</h2>
            <input
              type="text"
              placeholder="Name"
              className="text-white text-xs py-2 px-7 rounded bg-[#13151B] mt-4"
            />
          </div>
          <div className="phone text-2xl text-green-400">
            <IoMdPhonePortrait className="ml-6" />
            <h1 className="text-white font-bold text-sm">PHONE NUMBER</h1>
            <h2 className="text-white text-xs">+123456789</h2>
            <input
              type="text"
              placeholder="Email"
              className="text-white text-xs py-2 px-7 rounded bg-[#13151B] mt-4"
            />
          </div>
          <div className="website text-2xl text-green-400">
            <GiScissors className="ml-6" />
            <h1 className="text-white text-sm font-bold">WEBSITE</h1>
            <h2 className="text-white text-xs">austindalton.com</h2>
            <input
              type="text"
              placeholder="Email"
              className="text-white text-xs py-2 px-7 rounded bg-[#13151B] mt-4"
            />
          </div>
        </div>
        <div className="comment">
          <input
            type="text"
            placeholder="Comment"
            className="text-white bg-[#13141D] ml-52 mt-4 px-80 py-7 text-xs rounded"
          />
        </div>
      </div>
      <div className="btn  ">
        <button className="text-white px-2 py-2 bg-green-600 text-xs ml-[890px] mt-2 ">
          SEND MESSAGE
        </button>
      </div>
    </>
  );
}

export default Footer;

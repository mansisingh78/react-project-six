import GirlImage from "../assets/girl.jpg";

function Middle() {
  return (
    <>
      <div className="mid my-36 mx-20 ">
        <h1 className="text-white text-2xl font-bold mb-3 ">
          I'm Austin Dalton
        </h1>
        <button className="bg-[#17AF5C] px-4 text-slate-300  border-[#17AF5C border-solid ]">
          Web Developer/Designer/Geek
        </button>
        <div className="girl w-[100%] ml-[600px] -mt-36 ">
          <img
            src={GirlImage}
            alt="girl"
            className="w-[25%] h-80 object-cover rounded-xl  "
          />
        </div>
      </div>
    </>
  );
}

export default Middle;

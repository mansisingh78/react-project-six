import { LuBuilding2 } from "react-icons/lu";
import { LuBookMarked } from "react-icons/lu";
import { TbBrandFlightradar24 } from "react-icons/tb";
function Services() {
  return (
    <>
      <div className="services    bg-[#13141D] min-h-80 mt-20">
        <h1 className="text-white text-2xl font-bold ml-[500px] mt-32 ">
          SERVICES
        </h1>
        <div className="icons mr-20 text-green-600 text-6xl flex gap-12 justify-center mt-9 ">
          <div className="ux">
            <LuBuilding2 />
            <h1 className="text-white text-xs mt-3 font-bold ">UL/UX DESIGN</h1>
            <p className="text-slate-500 text-xs mt-3">
              Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.
              Iste nihil molestiae minus <br /> in error. Suscipit, quae
              perspiciatis? Dignissimos <br />
            </p>
          </div>
          <div className="ux">
            <LuBookMarked />
            <h1 className="text-white text-xs mt-3 font-bold ">MARKETING</h1>
            <p className="text-slate-500 text-xs mt-3">
              Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.
              Iste nihil molestiae minus <br /> in error. Suscipit, quae
              perspiciatis? Dignissimos <br />
            </p>
          </div>
          <div className="ux">
            <TbBrandFlightradar24 />
            <h1 className="text-white text-xs mt-3 font-bold ">MARKETING</h1>
            <p className="text-slate-500 text-xs mt-3">
              Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.
              Iste nihil molestiae minus <br /> in error. Suscipit, quae
              perspiciatis? Dignissimos <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

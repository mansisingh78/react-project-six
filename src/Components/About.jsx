import LaptopImage from "../assets/laptop.jpg";
import BabyImage from "../assets/baby.jpg";
import DrinkImage from "../assets/drink.jpg";

function About() {
  return (
    <>
      <div className="blog  bg-[#13141D] w-full min-h-52  ">
        <h1 className=" text-white font-bold text-xl ml-[600px] ">BLOG</h1>
        <div className="images ml-32 flex  mt-8  w-full">
          <div className="laptop">
            <img
              src={LaptopImage}
              alt="laptop"
              className="w-[90%] h-auto object-cover"
            />
            <h1 className="text-sm font-bold text-white">
              Designing Your Own Website Using Photoshop
            </h1>

            <h3 className="text-white ">Design ui/By Admin</h3>
            <p className="text-slate-400 text-xs">
              Lorem ipsum dolor sit amet <br /> adipisicing elit. Itaque
              dignissimos <br /> illo repellendus enim dolorum <br />
              corporis ipsam, quam <br />
            </p>
            <h2 className="text-white font-bold text-xs ml-32 mt-3">
              Read more-
            </h2>
            <h2 className="text-slate-400 text-xs font-bold ml-28 mt-3"></h2>
          </div>
          <div className="baby">
            <img src={BabyImage} alt="baby" className="w-[50%] ml-24 " />
            <h1 className="text-sm font-bold text-white ml-24">
              Recomended Design Books <br /> for Newbies-2017
            </h1>

            <h3 className="text-white  ml-24 ">world press/By Admin</h3>
            <p className="text-slate-400 text-xs ml-24">
              Lorem ipsum dolor sit amet <br /> adipisicing elit. Itaque
              dignissimos <br /> illo repellendus enim dolorum <br />
              corporis ipsam, quam <br />
            </p>
            <h2 className="text-white font-bold text-xs ml-48 mt-3">
              Read more-
            </h2>
          </div>
          <div className="drink">
            <img src={DrinkImage} alt="drink" className="w-[50%]  " />
            <h1 className="text-sm font-bold text-white">
              Eyelash Extensions with Artist <br /> Mikki Boy
            </h1>

            <h3 className="text-white ">Design ui/By Admin</h3>
            <p className="text-slate-400 text-xs">
              Lorem ipsum dolor sit amet <br /> adipisicing elit. Itaque
              dignissimos <br /> illo repellendus enim dolorum <br />
              corporis ipsam, quam <br />
            </p>
            <h2 className="text-slate-400 text-xs font-bold ml-28 mt-3">
              Read more-
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

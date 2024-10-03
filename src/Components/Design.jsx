import GreenImage from "../assets/green.jpg";
import PaperImage from "../assets/paper.jpg";
import YellowImage from "../assets/yellow.jpg";
import CircleImage from "../assets/circle.jpg";
import CopyImage from "../assets/copy.jpg";

function Design() {
  return (
    <>
      <div className="portfolio text-white text-center justify-start">
        <h1 className="mt-6 font-bold text-2xl">PORTFOLIO</h1>
        <ul className="flex gap-7 justify-center text-xs  mt-5">
          <li>ALL</li>
          <li>DEVELOPMENT</li>
          <li>WEB DESIDN</li>
          <li>ILLUSTRATION</li>
        </ul>
        <div className="img w-[80%] h-auto grid grid-cols-3 grid-rows-2 ml-24 gap-x-4 gap-y-4 mt-8 ">
          <img src={GreenImage} alt="Green" className="w-full h-40 " />
          <img src={PaperImage} alt="paper" className="w-full h-40" />
          <img src={YellowImage} alt="yellow" className="w-full h-40" />
          <img src={CircleImage} alt="circle" className="w-full h-40" />
          <img src={CopyImage} alt="copy" className="w-full h-40" />
        </div>
      </div>
    </>
  );
}

export default Design;

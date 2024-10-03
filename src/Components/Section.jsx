import BoyImage from "../assets/boy.jpg";
function Section() {
  return (
    <div className="about bg-[#13141D] w-full flex justify-center items-center min-h-52 -mt-36">
      <div className="text-center">
        <h1 className="text-white text-2xl font-bold mb-2 mt-8">ABOUT ME</h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi
          <br />
          repudiandae perspiciatis nulla nemo error possimus nostrum nam <br />
          harum quisquam sed similique cumque enim, <br />
        </p>
        <div className="img w-[40%]  mx-[400px] my-9 bg-[#1C1C29]   justify-center items-center min-h-40 mr-44 ">
          <div className="img pt-8 ">
            <img
              src={BoyImage}
              alt="boy"
              className="w-[10%] h-auto object-cover rounded-3xl ml-56 "
            />
            <div className="boy py-4 ">
              <h1 className="text-white">
                <span className="text-emerald-600">full name</span> : Austin
                Dalton{" "}
              </h1>
              <h1 className="text-white">
                {" "}
                <span className="text-emerald-600">Birthday</span> : 21 june
                2008
              </h1>
              <h1 className="text-white">
                {" "}
                <span className="text-emerald-600">Phone number</span> :
                123456789{" "}
              </h1>
              <h1 className="text-white">
                {" "}
                <span className="text-emerald-600"> Email</span> :
                hello@austinDalton.com{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;

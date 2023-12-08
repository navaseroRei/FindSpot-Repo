
import bgImage from "../assets/home-bg.png";
import { IMAGES } from "../common/image";
import { useModal } from "../common/context/myContext";

const LandingPage = () => {
  const {modal, openModal} = useModal();
  console.log({modal, openModal});
  return (
    <>
      <div className="w-full h-screen ">
        <img
          className="top-0 w-full h-screen object-cover"
          src={bgImage}
          alt="findSpotBackground"
        />
        <div className="bg-slate-900/70 absolute top-0 left-0 w-full h-screen " />

        <nav className="p-4 absolute z-[100] top-0 w-full flex bg-opacity-10 backdrop-blur-sm bg-[#D9D9D9] justify-center">
          <div className="  flex flex-row justify-between px-8 py-2 w-[80%] ">
            <p className="self-center text-2xl font-extrabold text-[#D9D9D9] ">
              FINDSPOT
            </p>
            <button onClick={() => openModal("AuthModal")}>
              <img
                src={IMAGES.ic_user}
                alt="searchbtn"
                className="hover:scale-125 transition duration-500 cursor-pointer object-contain h-6 w-6 self-center "
              />
            </button>
          </div>
        </nav>
        
        <div className="absolute top-0 w-full h-screen flex flex-col justify-center text-white">
          <div className="self-center max-w-[1100px]   p-4 ">
            <h1 className="text-6xl md:text-8xl drop-shadow-2xl font-bold text-center">
              Explore New Horizon & Discover Laguna
            </h1>
          </div>
          <div className="text-2xl p-4  self-center mt-6 max-w-[800px] text-center">
            <p>
              Findspot is your one-stop destination for expert recommendations
              on the best tourism spots around the Laguna. Explore with
              confidence, guided by our community's firsthand experiences and
              travel wisdom.
            </p>
          </div>
          <div className="backdrop-blur-sm sm:w-[600px] md:w-[1100px] bg-blend-color-burn bg-gray-400/30 self-center text-3xl p-8  mt-4 rounded-xl">
            <div className="flex space-x-2 bg-gray ">
              <div className=" border-r pl-2 pt-2 ">
                <h2>Location</h2>
                <div className="mt-4 text-lg">
                  <input
                    className=" w-[80%] bg-transparent border-0 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    type="text"
                    placeholder="add destination"
                  />
                </div>
              </div>
              <div className="border-r pl-2 pt-2 ">
                <h2>Check in</h2>
                <div className="mt-4 text-lg">
                  <input
                    className="  w-[80%] bg-transparent border-0 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    type="text"
                    placeholder="add date"
                  />
                </div>
              </div>
              <div className=" border-r  pl-2 pt-2">
                <h2>Check out</h2>
                <div className="mt-4 text-lg">
                  <input
                    className=" w-[80%] bg-transparent  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    type="text"
                    placeholder="add date"
                  />
                </div>
              </div>
              <div className=" pl-2 w-[18%]  pt-2">
                <h2>People</h2>
                <div className="mt-4 text-lg">
                  <input
                    className=" w-[80%] bg-transparent  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    type="text"
                    placeholder="add people"
                  />
                </div>
              </div>
              <div className="self-center ">
                <img
                  src={IMAGES.ic_search}
                  alt="searchbtn"
                  className="hover:scale-125 transition duration-500 cursor-pointer object-contain h-30 w-30 self-center "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

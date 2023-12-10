import { NavLink, Outlet } from "react-router-dom";
import Vector from "../icons/Vector";
import Search from "../icons/Search";
import Nati from "../icons/Nati";
import Fesbook from "../icons/Fesbook";
import Twitter from "../icons/Twitter";
import Linkedin from "../icons/Linkedin";


function RootLayout() {
  return (
    <>
      <header className=" h-[120px] bg-[#141414]">
        <nav className=" container mx-auto flex items-center justify-between py-[30px]">
          <div className=" flex items-center justify-center">
            <Vector />
            <p className=" text-white">StreamVibe</p>
          </div>
          <div className=" max-[375px]:hidden ">
            <ul className="flex items-center justify-center  text-white bg-black w-[450px] h-[65px]  rounded-2xl ">
              <li className=" text-center pt-[5px] w-[70px] h-[35px] rounded-xl hover:bg-[rgba(188,177,177,0.18)]">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="  text-center pt-[5px] w-[150px] h-[35px] rounded-xl hover:bg-[rgba(188,177,177,0.18)] ">
                <NavLink to="/movies">Movies & Shows</NavLink>
              </li>
              <li className="  text-center pt-[5px] w-[80px] h-[35px] rounded-xl hover:bg-[rgba(188,177,177,0.18)] ">
                <NavLink to="/support">Support</NavLink>
              </li>
              <li className=" text-center pt-[5px] w-[100px] h-[35px] rounded-xl hover:bg-[rgba(188,177,177,0.18)] ">
                <NavLink to="/Subscriptions">Subscriptions</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center gap-[30px]">
            <Search />
            <Nati />
          </div>
        </nav>
      </header>
      <main className=" bg-[#141414] ">
        <Outlet />
        <div className="   bg-[#141414] mt-[109px] pb-[250px]">
          <div className=" absolute">
            <img src="src/img/tilla.png" alt="tilla" />
          </div>
          <div className=" container mx-auto top-[100px]  relative">
            <div className="flex items-center justify-between px-[140px] min-[375px]: flex-wrap mb-[80px] ">
              <div>
                <h1 className=" font-semibold text-3xl text-white mb-3">
                  Start your free trial today!
                </h1>
                <p className="text-zinc-600 min-[375px]:mt-3">
                  This is a clear and concise call to action that encourages
                  users to sign up for a free trial of StreamVibe.
                </p>
              </div>
              <div>
                <button className=" bg-red-600 py-4 px-4 rounded-lg text-white max-[374px]:mt-5">
                  Ask a Question
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className=" bg-black">
        <div className=" bg-black container mx-auto flex items-center justify-between">
          <div className="text-white mt-[57px]">
            <ul>
              <li className="mb-[24px]">
                <NavLink to="/">Home</NavLink>
              </li>
            </ul>
            <div className="grid gap-y-3">
              <p>Categories</p>
              <p>Devices</p>
              <p>Pricing</p>
              <p>FAQ</p>
            </div>
          </div>
          <div className=" text-white mt-[57px]">
            <ul>
              <li className="mb-[24px]">
                <NavLink to="/subscriptions">Subscriptions</NavLink>
              </li>
              <div className="grid gap-y-3">
                <p>Gernes</p>
                <p>Trending</p>
                <p>New Release</p>
                <p>Popular</p>
              </div>
            </ul>
          </div>
          <div className=" text-white mt-[57px]">
            <ul>
              <li className="mb-[24px]">
                <NavLink to="/SHows">Shows</NavLink>
              </li>
              <div className="grid gap-y-3">
                <p>Gernes</p>
                <p>Trending</p>
                <p>New Release</p>
                <p>Popular</p>
              </div>
            </ul>
          </div>
          <div className=" text-white mb-[50px] ">
            <ul>
              <li className="mb-[24px]">
                <NavLink to="/Shows">Shows</NavLink>
              </li>
              <p>Contact Us</p>
            </ul>
          </div>
          <div className=" text-white mb-[15px] ">
            <ul>
              <li className="mb-[24px]">
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <div className="grid gap-y-3">
                <p>Plans</p>
                <p>Features</p>
              </div>
            </ul>
          </div>
          <div className="text-white">
            <h1>Connect With Us</h1>
            <div className="flex items-center justify-center gap-4 mt-8 mb-3 ">
              <Fesbook />
              <Twitter />
              <Linkedin />
            </div>
          </div>
        </div>
        <div>
         <span className=" mt-[50] mb-[30px] "> <hr  /></span>
        <div className=" flex items-center justify-between">
            <div>
            <p>@2023 streamvib, All Rights Reserved</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
        </div>
      </footer>
    </>
  );
}

export default RootLayout;

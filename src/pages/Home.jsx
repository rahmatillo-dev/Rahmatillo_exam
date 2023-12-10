import Left1 from "../icons/Left1";
import Line from "../icons/Line";
import Right from "../icons/Right";
import Phone from "../icons/Phone";
import Probel from "../icons/Probel";
import Left from "../icons/Left";
import { FaCirclePlay } from "react-icons/fa6";

// ustaate

import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated", {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status !== 200) throw new Error("Error");
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="">
        <main className=" bg-[#141414] ">
          <div className="bg-[url('./img/Sub.png')] max-w-[1510px] h-[850px] mt-[-120px] bg-center text-center pt-[825px] ">
            <h1 className="text-5xl text-white">
              The Best Streaming Experience
            </h1>
            <p className=" mb-3 mx-auto text-zinc-600 mt-[14px] w-[900px]">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
              You can also create your own watchlists, so you can easily find
              the content you want to watch.
            </p>
            <button className="border rounded bg-[#E50000]  ">
              <span className="flex items-center gap-1 p-2 text-white">
                <FaCirclePlay />
                Start Watching Now
              </span>
            </button>
          </div>

          <div className=" container mx-auto px-5">
            <div className="flex items-center justify-between  mb-[80px] mt-[200px]">
              <div>
                <h1 className=" font-bold text-2xl mb-2 text-white">
                  Explore our wide variety of categories
                </h1>
                <p className="text-zinc-600">
                  Whether you're looking for a comedy to make you laugh, a drama
                  to make you think, or a documentary to learn something new
                </p>
              </div>

              <div className=" max-[375px]:hidden flex items-center justify-center gap-1">
                <button>
                  <Left />
                </button>
                <Probel />
                <button>
                  <Right />
                </button>
              </div>
            </div>
            <div className=" mb-[150px]">
              <div>
                <li>
                  <NavLink className="flex gap-7" to="/single">
                    {data?.slice(10, 15).map((movie) => (
                      <div className="   w-[235px]  p-[25px]  bg-[#262626] rounded-2xl border-solid">
                        <img
                          key={movie.id}
                          className="w-[247px]  "
                          src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                          alt="tilla"
                        />
                        <div className="flex items-center justify-between h-8  p-3">
                          <p className="text-white  ">{movie.title}</p>
                          <Left1 />
                        </div>
                      </div>
                    ))}
                  </NavLink>
                </li>
              </div>
            </div>

            <div>
              <h1 className="font-bold text-2xl mb-2 text-white">
                We Provide you streaming experience across various devices.
              </h1>
              <p className="text-zinc-600 max-w-5xl">
                With StreamVibe, you can enjoy your favorite movies and TV shows
                anytime, anywhere. Our platform is designed to be compatible
                with a wide range of devices, ensuring that you never miss a
                moment of entertainment.
              </p>
            </div>
            <div className="w-full  grid grid-cols-3 grid-rows-2  gap-[30px]  mt-[80px] mb-[150px] max-lg:grid-cols-2">
              <div className="border border-black-15 bg-gradient-to-tr from-50% from-[#0F0F0F]  to-[#4b030380]   p-[50px]  rounded-xl">
                <div className="flex items-center justify-start gap-4 mb-4">
                  <span className="p-3 bg-zinc-950 rounded-xl">
                    <Phone />
                  </span>
                  <p className=" font-bold text-2xl  text-white">Smartphones</p>
                </div>
                <p className="text-zinc-600">
                  StreamVibe is optimized for both Android and iOS smartphones.
                  Download our app from the Google Play Store or the Apple App
                  Store
                </p>
              </div>
              <div className="rounded-md border border-black-15 bg-gradient-to-tr from-50% from-[#0F0F0F]  to-[#4b030380]  p-[50px]  ">
                <div className="flex items-center justify-start gap-4 mb-4">
                  <span className="p-3 bg-zinc-950 rounded-xl">
                    <Phone />
                  </span>
                  <p className="text-white font-bold text-2xl">Tablet</p>
                </div>
                <p className="  text-zinc-600">
                  StreamVibe is optimized for both Android and iOS smartphones.
                  Download our app from the Google Play Store or the Apple App
                  Store
                </p>
              </div>
              <div className="border border-black-15 bg-gradient-to-tr from-50% from-[#0F0F0F]  to-[#4b030380]   p-[50px]  rounded-xl">
                <div className="flex items-center justify-start gap-4 mb-4">
                  <span className="p-3 bg-zinc-950 rounded-xl">
                    <Phone />
                  </span>
                  <p className="text-white font-bold text-2xl">Smart TV</p>
                </div>
                <p className="text-zinc-600">
                  StreamVibe is optimized for both Android and iOS smartphones.
                  Download our app from the Google Play Store or the Apple App
                  Store
                </p>
              </div>
              <div className="border border-black-15 bg-gradient-to-tr from-50% from-[#0F0F0F]  to-[#4b030380]   p-[50px]  rounded-xl">
                <div className="flex items-center justify-start gap-4 mb-4">
                  <span className="p-3 bg-zinc-950 rounded-xl">
                    <Phone />
                  </span>
                  <p className="text-white font-bold text-2xl ">Laptops</p>
                </div>
                <p className="text-zinc-600">
                  StreamVibe is optimized for both Android and iOS smartphones.
                  Download our app from the Google Play Store or the Apple App
                  Store
                </p>
              </div>
              <div className="border border-black-15 bg-gradient-to-tr from-50% from-[#0F0F0F]  to-[#4b030380]   p-[50px]  rounded-xl">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="p-3 bg-zinc-950 rounded-xl">
                    <Phone />
                  </span>
                  <p className="text-white font-bold text-2xl">
                    Gaming Consoles
                  </p>
                </div>
                <p className="text-zinc-600">
                  StreamVibe is optimized for both Android and iOS smartphones.
                  Download our app from the Google Play Store or the Apple App
                  Store
                </p>
              </div>
              <div className="border border-black-15 bg-gradient-to-tr from-50% from-[#0F0F0F]  to-[#4b030380]   p-[50px]  rounded-xl">
                <div className="flex items-center justify-start gap-4 mb-4">
                  <span className="p-3 bg-zinc-950 rounded-xl">
                    <Phone />
                  </span>
                  <p className="text-white font-bold text-2xl">Smartphones</p>
                </div>
                <p className="text-zinc-600">
                  StreamVibe is optimized for both Android and iOS smartphones.
                  Download our app from the Google Play Store or the Apple App
                  Store
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between min-[375px]: flex-wrap mb-[80px]">
              <div>
                <h1 className=" font-semibold text-3xl text-white mb-3">
                  Choose the plan that's right for you
                </h1>
                <p className="text-zinc-600 min-[375px]:mt-3">
                  Got questions? We've got answers! Check out our FAQ section to
                  find answers to the most common questions about StreamVibe.
                </p>
              </div>
              <div>
                <button className=" bg-red-600 py-4 px-4 rounded-lg text-white max-[374px]:mt-5">
                  Ask a Question
                </button>
              </div>
            </div>
            <span className="flex items-center justify-between">
              <div>
                <div className="  flex items-center justify-start p-8 gap-5 bg-neutral-950 ">
                  <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                    01
                  </span>
                  <span>
                    <h1 className="text-white mr-[300px]">
                      What is StreamVibe?
                    </h1>
                    <p className="text-white hidden">
                      StreamVibe is a streaming service that allows you to watch
                      movies <br />
                      and shows on demand.
                    </p>
                  </span>
                  <span className="text-white">--</span>
                </div>
                <Line />
                <div className="  flex items-center justify-start p-8 gap-5 bg-neutral-950 ">
                  <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                    02
                  </span>
                  <span>
                    <h1 className="text-white mr-[300px]">
                      What is StreamVibe?
                    </h1>
                    <p className="text-white hidden">
                      StreamVibe is a streaming service that allows you to watch
                      movies <br />
                      and shows on demand.
                    </p>
                  </span>
                  <span className="text-white">--</span>
                </div>
                <Line />
                <div className="  flex items-center justify-start p-8 gap-5 bg-neutral-950 ">
                  <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                    03
                  </span>
                  <span>
                    <h1 className="text-white mr-[300px]">
                      What is StreamVibe?
                    </h1>
                    <p className="text-white hidden">
                      StreamVibe is a streaming service that allows you to watch
                      movies <br />
                      and shows on demand.
                    </p>
                  </span>
                  <span className="text-white">--</span>
                </div>
                <Line />
                <div className="  flex items-center justify-start p-8 gap-5 bg-neutral-950 ">
                  <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                    04
                  </span>
                  <span>
                    <h1 className="text-white mr-[300px]">
                      What is StreamVibe?
                    </h1>
                    <p className="text-white hidden">
                      StreamVibe is a streaming service that allows you to watch
                      movies <br />
                      and shows on demand.
                    </p>
                  </span>
                  <span className="text-white">--</span>
                </div>
              </div>
              <div>
                <div className="  flex items-center justify-start p-8 gap-5 bg-neutral-950 ">
                  <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                    05
                  </span>
                  <span>
                    <h1 className="text-white mr-[300px]">
                      What is StreamVibe?
                    </h1>
                    <p className="text-white hidden">
                      StreamVibe is a streaming service that allows you to watch
                      movies <br />
                      and shows on demand.
                    </p>
                  </span>
                  <span className="text-white">--</span>
                </div>
                <Line />
                <div className="  flex items-center justify-start p-8 gap-5 bg-neutral-950 ">
                  <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                    06
                  </span>
                  <span>
                    <h1 className="text-white mr-[300px]">
                      What is StreamVibe?
                    </h1>
                    <p className="text-white hidden">
                      StreamVibe is a streaming service that allows you to watch
                      movies <br />
                      and shows on demand.
                    </p>
                  </span>
                  <span className="text-white">--</span>
                </div>
                <Line />
                <div className="  flex items-center justify-start p-8 gap-5 bg-neutral-950 ">
                  <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                    07
                  </span>
                  <span>
                    <h1 className="text-white mr-[300px]">
                      What is StreamVibe?
                    </h1>
                    <p className="text-white hidden">
                      StreamVibe is a streaming service that allows you to watch
                      movies <br />
                      and shows on demand.
                    </p>
                  </span>
                  <span className="text-white">--</span>
                </div>
                <Line />
                <div className="  flex items-center justify-start p-8 gap-5 bg-neutral-950 ">
                  <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                    08
                  </span>
                  <span>
                    <h1 className="text-white mr-[300px]">
                      What is StreamVibe?
                    </h1>
                    <p className="text-white hidden">
                      StreamVibe is a streaming service that allows you to watch
                      movies <br />
                      and shows on demand.
                    </p>
                  </span>
                  <span className="text-white">--</span>
                </div>
              </div>
            </span>
            <div className=" mt-[150px] flex items-center justify-between">
              <div>
                <h1 className="text-white text-3xl">
                  Choose the plan that's right for you
                </h1>
                <p className=" text-zinc-600 py-2 ">
                  Join StreamVibe and select from our flexible subscription
                  options tailored to suit your viewing preferences. Get ready
                  for non-stop entertainment!
                </p>
              </div>

              <div className="left flex p-2 rounded-md border border-gray-600 bg-black w-[150px] ">
                <button className=" bg-black  hover:bg-gray-900 p-2 rounded-md text-white">
                  Monthly
                </button>
                <button className=" bg-black  hover:bg-gray-900 p-2 rounded-md text-white">
                  Yearly
                </button>
              </div>
            </div>
            <div className=" mt-11 grid grid-cols-3 gap gap-4">
              <div className="card  bg-[#1A1A1A] rounded-md p-8 w-[400px]">
                <div className="card-top  ">
                  <h1 className="text-2x text-white">Basic Plan</h1>
                  <p className="text-neutral-400 py-3">
                    Enjoy an extensive library of movies and shows, featuring a
                    range of content, including recently released titles.
                  </p>
                </div>
                <div className="card-body text-neutral-400 py-3">
                  <span className="text-2xl text-white">$9.99</span>/month
                </div>
                <div className="btn-group flex item-center justify-start">
                  <button className="p-4 bg-neutral-700 rounded-md">
                    Start Free Trial
                  </button>
                  <button className="p-4 bg-red-600 ml-5 rounded-md">
                    Choose Plan
                  </button>
                </div>
              </div>
              <div className="card  bg-[#1A1A1A] rounded-md  p-8 w-[400px]">
                <div className="card-top  ">
                  <h1 className="text-2xl text-white">Standard Plan</h1>
                  <p className="text-neutral-400 py-3">
                    Enjoy an extensive library of movies and shows, featuring a
                    range of content, including recently released titles.
                  </p>
                </div>
                <div className="card-body text-neutral-400 py-3">
                  <span className="text-2xl text-white">$12.99</span>/month
                </div>
                <div className="btn-group flex">
                  <button className="p-4 bg-neutral-700 rounded-md">
                    Start Free Trial
                  </button>
                  <button className="p-4 bg-red-600 ml-[20px] rounded-md">
                    Choose Plan
                  </button>
                </div>
              </div>
              <div className="card  bg-[#1A1A1A] rounded-md  p-8 w-[400px]">
                <div className="card-top mx-auto  ">
                  <h1 className="text-2xl text-white">Premium Plan</h1>
                  <p className="text-neutral-400 py-3">
                    Enjoy an extensive library of movies and shows, featuring a
                    range of content, including recently released titles.
                  </p>
                </div>
                <div className="card-body text-neutral-400 py-3">
                  <span className="text-2xl text-white">$14.99</span>/month
                </div>
                <div className="btn-group flex">
                  <button className="p-4 bg-neutral-700 rounded-md">
                    Start Free Trial
                  </button>
                  <button className="p-4 bg-red-600 ml-5 rounded-md">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;

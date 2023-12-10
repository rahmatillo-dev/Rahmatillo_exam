import { useEffect, useState } from "react";
import Left1 from "../icons/Left1";
import Right from "../icons/Right";
import Probel from "../icons/Probel";
import Left from "../icons/Left";
import axios from "axios";

function Support() {
  const [genres, setGenres] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetchGenres("https://api.themoviedb.org/3/genre/movie/list");
    fetchTopRatedMovies("https://api.themoviedb.org/3/movie/top_rated");
    MovieComponent("https://api.themoviedb.org/3/movie/popular");
  }, []);

  const MovieComponent = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        {
          params: {
            api_key: "4b7feb4a7688c3c46324165839ad0ffd",
          },
        },
      );
      console.log(response);
      setPopularMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchGenres = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list",
        {
          params: {
            api_key: "4b7feb4a7688c3c46324165839ad0ffd",
          },
        },
      );
      console.log(response);
      setGenres(response.data.genres);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTopRatedMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated",
        {
          params: {
            api_key: "4b7feb4a7688c3c46324165839ad0ffd",
          },
        },
      );
      console.log(response);
      setTopRatedMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="bg-[#141414]">
      <div className=" container mx-auto  pt-11">
        <div className="bg-[url('./img/hm.png')] max-w-[1500px] h-[830px] bg-center mb-[200px]"></div>

        <div className="movie relative border   p-[50px] mb-[130px]">
          <button className=" bg-[#E50000] px-6 py-2 absolute -top-4 text-white rounded-md ">
            Movies
          </button>
          <span className="card1 ">
            <div className=" flex item-center justify-between mb-[50px] ">
              <div>
                <h1 className=" font-bold text-2xl mb-2 text-white">
                  Our Genres
                </h1>
              </div>
              <div className=" max-[375px]:hidden flex items-center justify-center gap-1 bg-black  p-2  rounded-md">
                <button>
                  <Left />
                </button>
                <Probel />
                <button>
                  <Right />
                </button>
              </div>
            </div>
            <div className="flex  items-center justify-between">
              {topRatedMovies?.slice(15, 20).map((item) => (
                <div className="flex items-center justify-center gap-[25px]">
                  <div className="img">
                    <div className="  w-[215px]  p-[20px]  bg-[#1A1A1A] rounded-2xl border-solid">
                      <img
                        className="w-[180px] "
                        key={item.id}
                        src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                        alt="tilla"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between ">
              {genres?.slice(0, 5).map((title) => (
                <div className="flex items-center justify-center   w-[180px] ">
                  <p className="text-white">{title.name}</p>
                  <span className=" ml-16">
                    <Left1 />
                  </span>
                </div>
              ))}
            </div>
          </span>

          <span className="card2 ">
            <div className=" flex item-center justify-between mb-[50px] mt-[100px]  ">
              <div>
                <h1 className=" font-bold text-2xl mb-2 text-white">
                  Popular Top 10 In Genres
                </h1>
              </div>
              <div className=" max-[375px]:hidden flex items-center justify-center gap-1 bg-black  p-2  rounded-md">
                <button>
                  <Left />
                </button>
                <Probel />
                <button>
                  <Right />
                </button>
              </div>
            </div>
            <div className="flex  items-center justify-between">
              {topRatedMovies?.slice(5, 10).map((item) => (
                <div className="flex items-center justify-center gap-[25px] ">
                  <div className="img">
                    <div className="  w-[215px]  p-[20px]  bg-[#1A1A1A] rounded-2xl border-solid">
                      <img
                        className="w-[180px] "
                        key={item.id}
                        src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                        alt="tilla"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between  ">
              {genres?.slice(10, 15).map((title) => (
                <div className="flex items-center justify-center   w-[180px] ">
                  <p className="text-white">{title.name}</p>
                  <span className=" ml-16">
                    <Left1 />
                  </span>
                </div>
              ))}
            </div>
          </span>
          <span className="card3 ">
            <div className=" flex item-center justify-between mb-[50px] mt-[100px] ">
              <div>
                <h1 className=" font-bold text-2xl mb-2 text-white ">
                  Trending Now
                </h1>
              </div>
              <div className=" max-[375px]:hidden flex items-center justify-center gap-1 bg-black  p-2  rounded-md">
                <button>
                  <Left />
                </button>
                <Probel />
                <button>
                  <Right />
                </button>
              </div>
            </div>
            <div className="flex  items-center justify-between">
              {topRatedMovies?.slice(15, 20).map((item) => (
                <div className="flex items-center justify-center gap-[25px]">
                  <div className="img">
                    <div className="  w-[215px]  p-[20px]  bg-[#1A1A1A] rounded-2xl border-solid">
                      <img
                        className="w-[180px] "
                        key={item.id}
                        src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                        alt="tilla"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between ">
              {genres?.slice(10, 15).map((title) => (
                <div className="flex items-center justify-center   w-[180px] ">
                  <p className="text-white">{title.name}</p>
                  <span className=" ml-16">
                    <Left1 />
                  </span>
                </div>
              ))}
            </div>
          </span>
          <span className="card4 ">
            <div className=" flex item-center justify-between mb-[50px] mt-[100px] ">
              <div>
                <h1 className=" font-bold text-2xl mb-2 text-white">
                  New Releases
                </h1>
              </div>
              <div className=" max-[375px]:hidden flex items-center justify-center gap-1 bg-black  p-2  rounded-md">
                <button>
                  <Left />
                </button>
                <Probel />
                <button>
                  <Right />
                </button>
              </div>
            </div>
            <div className="flex  items-center justify-between">
              {topRatedMovies?.slice(0, 5).map((item) => (
                <div className="flex items-center justify-center gap-[25px]">
                  <div className="img">
                    <div className="  w-[215px]  p-[20px]  bg-[#1A1A1A] rounded-2xl border-solid">
                      <img
                        className="w-[180px] "
                        key={item.id}
                        src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                        alt="tilla"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between ">
              {genres?.slice(0, 5).map((title) => (
                <div className="flex items-center justify-center   w-[180px] ">
                  <p className="text-white">{title.name}</p>
                  <span className=" ml-16">
                    <Left1 />
                  </span>
                </div>
              ))}
            </div>
          </span>
          <span className="card5 ">
            <div className=" flex item-center justify-between mb-[50px] mt-[100px] ">
              <div>
                <h1 className=" font-bold text-2xl mb-2 text-white">
                  Our Genres
                </h1>
              </div>
              <div className=" max-[375px]:hidden flex items-center justify-center gap-1 bg-black  p-2  rounded-md">
                <button>
                  <Left />
                </button>
                <Probel />
                <button>
                  <Right />
                </button>
              </div>
            </div>
            <div className="flex  items-center justify-between">
              {popularMovies?.slice(0, 5).map((item) => (
                <div className="flex items-center justify-center gap-[25px]">
                  <div className="img">
                    <div className="  w-[215px]  p-[20px]  bg-[#1A1A1A] rounded-2xl border-solid">
                      <img
                        className="w-[180px] "
                        key={item.id}
                        src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                        alt="tilla"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between ">
              {genres?.slice(0, 5).map((title) => (
                <div className="flex items-center justify-center   w-[180px] ">
                  <p className="text-white">{title.name}</p>
                  <span className=" ml-16">
                    <Left1/>
                  </span>
                </div>
              ))}
            </div>
          </span>
        </div>
        <div className="movie relative border  p-[50px]">
          <button className=" bg-[#E50000] px-6 py-2 absolute -top-4 text-white rounded-md ">
            Movies
          </button>
          <span className="card6 ">
            <div className=" flex item-center justify-between mb-[50px] mt-[100px] ">
              <div>
                <h1 className=" font-bold text-2xl mb-2 text-white">
                  Must - Watch Movies
                </h1>
              </div>
              <div className=" max-[375px]:hidden flex items-center justify-center gap-1 bg-black  p-2  rounded-md">
                <button>
                  <Left />
                </button>
                <Probel />
                <button>
                  <Right />
                </button>
              </div>
            </div>
            <div className="flex  items-center justify-between">
              {popularMovies?.slice(10, 15).map((item) => (
                <div className="flex items-center justify-center gap-[25px]">
                  <div className="img">
                    <div className="  w-[215px]  p-[20px]  bg-[#1A1A1A] rounded-2xl border-solid">
                      <img
                        className="w-[180px] "
                        key={item.id}
                        src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                        alt="tilla"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between ">
              {genres?.slice(0, 5).map((title) => (
                <div className="flex items-center justify-center   w-[180px] ">
                  <p className="text-white">{title.name}</p>
                  <span className=" ml-16">
                    <Left1 />
                  </span>
                </div>
              ))}
            </div>
          </span>
          <span className="card7 ">
            <div className=" flex item-center justify-between mb-[50px] mt-[100px]">
              <div>
                <h1 className=" font-bold text-2xl mb-2 text-white">
                  Our Genres
                </h1>
              </div>
              <div className=" max-[375px]:hidden flex items-center justify-center gap-1 bg-black  p-2  rounded-md">
                <button>
                  <Left />
                </button>
                <Probel />
                <button>
                  <Right />
                </button>
              </div>
            </div>
            <div className="flex  items-center justify-between">
              {popularMovies?.slice(15, 20).map((item) => (
                <div className="flex items-center justify-center gap-[25px]">
                  <div className="img">
                    <div className="  w-[215px]  p-[20px]  bg-[#1A1A1A] rounded-2xl border-solid">
                      <img
                        className="w-[180px] "
                        key={item.id}
                        src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                        alt="tilla"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between ">
              {genres?.slice(10, 15).map((title) => (
                <div className="flex items-center justify-center   w-[180px] ">
                  <p className="text-white">{title.name}</p>
                  <span className=" ml-16">
                    <Left1 />
                  </span>
                </div>
              ))}
            </div>
          </span>
          <span className="card8 ">
            <div className=" flex item-center justify-between mb-[50px] mt-[100px]">
              <div>
                <h1 className=" font-bold text-2xl mb-2 text-white">
                  Trending Shows Now
                </h1>
              </div>
              <div className=" max-[375px]:hidden flex items-center justify-center gap-1 bg-black  p-2  rounded-md">
                <button>
                  <Left />
                </button>
                <Probel />
                <button>
                  <Right />
                </button>
              </div>
            </div>
            <div className="flex  items-center justify-between">
              {popularMovies?.slice(10, 15).map((item) => (
                <div className="flex items-center justify-center gap-[25px]">
                  <div className="img">
                    <div className="  w-[215px]  p-[20px]  bg-[#1A1A1A] rounded-2xl border-solid">
                      <img
                        className="w-[180px] "
                        key={item.id}
                        src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                        alt="tilla"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between ">
              {genres?.slice(0, 5).map((title) => (
                <div className="flex items-center justify-center   w-[180px] ">
                  <p className="text-white">{title.name}</p>
                  <span className=" ml-16">
                    <Left1 />
                  </span>
                </div>
              ))}
            </div>
          </span>
          <span className="card9 ">
            <div className=" flex item-center justify-between mb-[50px] mt-[100px]">
              <div>
                <h1 className=" font-bold text-2xl mb-2 text-white">
                  Popular Top 10 In Genres
                </h1>
              </div>
              <div className=" max-[375px]:hidden flex items-center justify-center gap-1 bg-black  p-2  rounded-md">
                <button>
                  <Left />
                </button>
                <Probel />
                <button>
                  <Right />
                </button>
              </div>
            </div>
            <div className="flex  items-center justify-between">
              {popularMovies?.slice(15, 20).map((item) => (
                <div className="flex items-center justify-center gap-[25px]">
                  <div className="img">
                    <div className="  w-[215px]  p-[20px]  bg-[#1A1A1A] rounded-2xl border-solid">
                      <img
                        className="w-[180px] "
                        key={item.id}
                        src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                        alt="tilla"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between ">
              {genres?.slice(0, 5).map((title) => (
                <div className="flex items-center justify-center   w-[180px] ">
                  <p className="text-white">{title.name}</p>
                  <span className=" ml-16">
                    <Left1 />
                  </span>
                </div>
              ))}
            </div>
          </span>
          <span className="card10 ">
            <div className=" flex item-center justify-between mb-[50px] mt-[100px] ">
              <div>
                <h1 className=" font-bold text-2xl mb-2 text-white">
                  New Released Shows
                </h1>
              </div>
              <div className=" max-[375px]:hidden flex items-center justify-center gap-1 bg-black  p-2  rounded-md">
                <button>
                  <Left />
                </button>
                <Probel />
                <button>
                  <Right />
                </button>
              </div>
            </div>
            <div className="flex  items-center justify-between">
              {topRatedMovies?.slice(10, 15).map((item) => (
                <div className="flex items-center justify-center gap-[25px]">
                  <div className="img">
                    <div className="  w-[215px]  p-[20px]  bg-[#1A1A1A] rounded-2xl border-solid">
                      <img
                        className="w-[180px] "
                        key={item.id}
                        src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                        alt="tilla"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between ">
              {genres?.slice(10, 15).map((title) => (
                <div className="flex items-center justify-center   w-[180px] ">
                  <p className="text-white">{title.name}</p>
                  <span className=" ml-16">
                    <Left1 />
                  </span>
                </div>
              ))}
            </div>
          </span>
        </div>
      </div>
    </main>
  );
}

export default Support;

import Line from "../icons/Line";

const App = () => {
  return (
    <div className="   bg-[#141414]  ">
      <div className=" container  mx-auto    justify-between  flex">
        <div className=" mt-11">
          <div className="text_page ">
            <h1 className="text-white text-5xl ">
              Welcome to our <br /> support page!
            </h1>
          </div>
          <p className=" text-zinc-600 pt-6">
            We're here to help you with any problems you may be having with{" "}
            <br /> our product.
          </p>
          <img
            src="src/img/Container.png"
            className="mt-11"
            width={"490px "}
            alt=""
          />
        </div>
        <div className="card mt-11 p-9 bg-black w-[680px]">
          <div className="card-group flex justify-between p-2">
            <div className="card__name">
              <h1 className="text-white p-2">First Name</h1>
              <input
                type="text"
                className="p-2 w-[260px] rounded-md bg-[#141414] placeholder:text-zinc-600"
                placeholder="    Enter First Name"
              />
            </div>
            <div className="card__name">
              <h1 className="text-white p-2">Last Name</h1>
              <input
                className="p-2 w-[260px] rounded-md bg-[#141414] placeholder:text-zinc-600"
                type="text"
                placeholder="    Enter Last Name"
              />
            </div>
          </div>

          <div className="card-group flex justify-between p-2">
            <div className="card__name">
              <h1 className="text-white p-2">First Name</h1>
              <input
                type="text"
                className="p-2 w-[260px] rounded-md bg-[#141414] placeholder:text-zinc-600"
                placeholder="    Enter First Name"
              />
            </div>
            <div className="card__name">
              <h1 className="text-white p-2">Last Name</h1>
              <select name="" className="p-2  rounded-md bg-[#141414]" id="">
                <option value=""></option>
              </select>
              <input
                type="number"
                className="p-2 w-[220px] ml-1 rounded-md bg-[#141414] placeholder:text-zinc-600"
                placeholder="    Enter First Name"
              />
            </div>
          </div>

          <div className="card-group flex justify-between p-2">
            <div className="card__name">
              <h1 className="text-white p-2">Messege</h1>
              <textarea
                className="p-2 w-[590px] rounded-md bg-[#141414]"
                name="message"
                rows="10"
                cols="30"
              >
                Enter Your Messege
              </textarea>
            </div>
          </div>
          <div className="card-group flex justify-between p-2">
            <div className="card__name flex w-[660px]  justify-between">
              <div className="check-class flex ">
                <input type="checkbox" className="  text-zinc-600" />{" "}
                <h1 className="text-white p-2">
                  I agree with Terms of Use and Privacy Policy
                </h1>
              </div>
              <button className=" p-2 rounded-md  bg-red-500 text-white">
                <p> Send Messege</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" container mx-auto mt-[80px]    ">
        <div className=" container mx-auto mt-11">
          <div className=" container items-center  flex">
            <div className="check-class mt-11 flex items-center justify-between pt-5 text-zinc-600  ">
              <div>
                <h1 className="text-white text-5xl">
                  Frequently Asked Questions
                </h1>
                <p className="p-2  text-zinc-600 ">
                  Got questions? We've got answers! Check out our FAQ section to
                  find answers to the most common questions about StreamVibe.
                </p>
              </div>
            </div>
            <button className="mt-11 p-5 rounded-md ml-[100px]  bg-red-500 text-white">
              <p> Ask a Question</p>
            </button>
          </div>
        </div>
        <span className="flex items-center justify-between mt-[80px] ">
          <div>
            <div className="  flex items-center justify-start p-8 gap-5 bg-neutral-950 ">
              <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                01
              </span>
              <span>
                <h1 className="text-white mr-[300px]">What is StreamVibe?</h1>
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
                <h1 className="text-white mr-[300px]">What is StreamVibe?</h1>
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
                <h1 className="text-white mr-[300px]">What is StreamVibe?</h1>
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
                <h1 className="text-white mr-[300px]">What is StreamVibe?</h1>
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
                <h1 className="text-white mr-[300px]">What is StreamVibe?</h1>
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
                <h1 className="text-white mr-[300px]">What is StreamVibe?</h1>
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
                <h1 className="text-white mr-[300px]">What is StreamVibe?</h1>
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
                <h1 className="text-white mr-[300px]">What is StreamVibe?</h1>
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
      </div>
    </div>
  );
};

export default App;

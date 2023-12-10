function Subscriptions() {
  return (
    <main className=" bg-[#141414]">
      <div className="container mx-auto text-white  p-11">
        <div className="">
          <h1 className="text-3xl">Choose the plan that's right for you</h1>
          <div className="start-top flex justify-between items-center">
            <p className=" text-neutral-600">
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </p>
            <div className="left flex p-2 rounded-md border border-gray-600 bg-black w-[150px] ">
              <button className=" bg-black  hover:bg-gray-900 p-2 rounded-md">
                Monthly
              </button>
              <button className=" bg-black  hover:bg-gray-900 p-2 rounded-md">
                Yearly
              </button>
            </div>
          </div>
        </div>
        <div className="card-group  max-w-sm[576px;] flex mt-11  justify-between ">
          <div className="card  bg-neutral-800 rounded-md p-5 w-[320px]">
            <div className="card-top  ">
              <h1 className="text-2xl">Basic Plan</h1>
              <p className="text-neutral-400 py-3">
                Enjoy an extensive library of movies and shows, featuring a
                range of content, including recently released titles.
              </p>
            </div>
            <div className="card-body text-neutral-400 py-3">
              <span className="text-2xl text-white">$9.99</span>/month
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
          <div className="card  bg-neutral-800 rounded-md p-5 w-[320px]">
            <div className="card-top  ">
              <h1 className="text-2xl">Standard Plan</h1>
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
              <button className="p-4 bg-red-600 ml-5 rounded-md">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="card  bg-neutral-800 rounded-md p-5 w-[320px]">
            <div className="card-top  ">
              <h1 className="text-2xl">Premium Plan</h1>
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
        <div className="img mt-[160px]">
          <h1 className="text-4xl py-7">
            Compare our plans and find the right one for you
          </h1>
          <p className="text-neutral-400">
            StreamVibe offers three different plans to fit your needs: Basic,
            Standard, and Premium. Compare the features of each plan and choose
            the one that's right for <br /> you.
          </p>
          <img
            className="py-11"
            src="./src/assets/img/Sub Container.svg"
            alt=""
          />
        </div>
        <div className="block  my-11 mx-auto">
          <div className=" items-center  justify-between flex ">
            <div className="bg-black p-5 w-[25%] border border-neutral-800">
              <h1>Features</h1>
            </div>
            <div className="bg-black p-5 w-[25%] border border-neutral-800">
              <h1>Basic</h1>
            </div>
            <div className="bg-black p-5 w-[25%] border border-neutral-800">
              <h1>
                Standard <span className="bg-red-500 p-0 text-sm">Popular</span>
              </h1>
            </div>
            <div className="bg-black p-5 w-[25%] border border-neutral-800">
              <h1>Premium</h1>
            </div>
          </div>
          <div className=" items-center text-neutral-600 justify-between flex ">
            <div className=" p-5 w-[25%] border border-neutral-800">
              <h1>Price</h1>
            </div>
            <div className=" p-5 w-[25%] border border-neutral-800">
              <h1>$9.99/Month</h1>
            </div>
            <div className=" p-5 w-[25%] border border-neutral-800">
              <h1>$12.99/Month</h1>
            </div>
            <div className=" p-5 w-[25%] border border-neutral-800">
              <h1>$14.99/Month</h1>
            </div>
          </div>
          <div className=" items-center text-neutral-600 justify-between flex ">
            <div className=" p-11 w-[25%] border border-neutral-800">
              <h1 className="ml-[-20px]">Content</h1>
            </div>
            <div className=" p-5   w-[25%] border border-neutral-800">
              <h1>
                Access to a wide selection of movies and shows, including some
                new releases.
              </h1>
            </div>
            <div className=" p-5 w-[25%] border border-neutral-800">
              <h1>
                Access to a wider selection of movies and shows, including most
                new releases and exclusive content
              </h1>
            </div>
            <div className=" p-5 w-[25%] border border-neutral-800">
              <h1>
                Access to a wider selection of movies and shows, including most
                new releases and exclusive content
              </h1>
            </div>
          </div>
          <div className=" items-center text-neutral-600 justify-between flex ">
            <div className=" p-8 w-[25%] border border-neutral-800">
              <h1 className="ml-[-10px]">Devices</h1>
            </div>
            <div className=" p-5   w-[25%] border border-neutral-800">
              <h1>Watch on one device simultaneously</h1>
            </div>
            <div className=" p-5 w-[25%] border border-neutral-800">
              <h1>Watch on Two device simultaneously</h1>
            </div>
            <div className=" p-5 w-[25%] border border-neutral-800">
              <h1>Watch on Four device simultaneous3</h1>
            </div>
          </div>
          <div className=" items-center text-neutral-600 justify-between flex ">
            <div className=" p-5 w-[25%] border border-neutral-800">
              <h1>Free Trail</h1>
            </div>
            <div className=" p-5   w-[25%] border border-neutral-800">
              <h1>7 Days</h1>
            </div>
            <div className=" p-5 w-[25%] border border-neutral-800">
              <h1>7 Days</h1>
            </div>
            <div className=" p-5 w-[25%] border border-neutral-800">
              <h1>7 Days</h1>
            </div>
          </div>
          <div className=" items-center text-neutral-600 justify-between flex ">
            <div className=" p-5 w-[25%] border border-neutral-800">
              <h1>Cancel Anytime</h1>
            </div>
            <div className=" p-5   w-[25%] border border-neutral-800">
              <h1>Yes</h1>
            </div>
            <div className=" p-5 w-[25%] border border-neutral-800">
              <h1>Yes</h1>
            </div>
            <div className=" p-5 w-[25%] border border-neutral-800">
              <h1>Yes</h1>
            </div>
          </div>
          <div className=" items-center text-neutral-600 justify-between flex ">
            <div className=" p-5 w-[25%] border border-neutral-800">
              <h1>Ad - Free</h1>
            </div>
            <div className=" p-5   w-[25%] border border-neutral-800">
              <h1>Yes</h1>
            </div>
            <div className=" p-5 w-[25%] border border-neutral-800">
              <h1>Yes, for select titles.</h1>
            </div>
            <div className=" p-5 w-[25%] border border-neutral-800">
              <h1>Yes, for select titles.</h1>
            </div>
          </div>
          <div className=" items-center text-neutral-600 justify-between flex ">
            <div className=" p-5 w-[25%] border border-neutral-800">
              <h1>Dolby Atmos</h1>
            </div>
            <div className=" p-5   w-[25%] border border-neutral-800">
              <h1>Yes</h1>
            </div>
            <div className=" p-5 w-[25%] border border-neutral-800">
              <h1>Yes, up to 6 family members.</h1>
            </div>
            <div className=" p-5 w-[25%] border border-neutral-800">
              <h1>Yes</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Subscriptions;

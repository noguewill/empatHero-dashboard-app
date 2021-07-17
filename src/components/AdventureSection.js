const AdventureSection = () => {
  return (
    <>
      {/* Container of Adventure Section */}
      <section className="w-10/12 h-2/6 bg-blue-500 flex flex-col items-center">
        <div className="bg-yellow-400 w-full h-5/6 grid grid-cols-3 gap-4 place-items-center">
          {/* Inner container for the Adventure Theme Card*/}
          <div className="bg-blue-400 w-full h-4/5 rounded-md flex items-center">
            <div className="bg-purple-500 h-full flex flex-col items-center justify-center">
              <div className="flex flex-col w-5/6  h-full justify-center   ">
                <h1 className=" 2xl:text-xl text-sm font-bold">
                  Viagio nel tempo
                </h1>
                <h2 className=" 2xl:text-lg text-xs mb-3">
                  Un'avventura incredibile, piena di nuovi amici!
                </h2>
                <h1 className="underline 2xl:text-base text-xxs font-bold">
                  SCOPRI DI PIÚ
                </h1>
              </div>
            </div>
            {/* Aventure theme card checkbox container */}
            <div className=" w-1/12 h-full flex flex-col items-center ">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-md "></div>
            </div>
          </div>
          <div className="bg-blue-400 w-full h-4/5 rounded-md flex items-center ">
            <div className="bg-purple-500 h-full flex flex-col items-center justify-center">
              <div className="flex flex-col w-5/6  h-full justify-center   ">
                <h1 className=" 2xl:text-xl text-sm font-bold">
                  Viagio nel tempo
                </h1>
                <h2 className=" 2xl:text-lg text-xs mb-3">
                  Un'avventura incredibile, piena di nuovi amici!
                </h2>
                <h1 className="underline 2xl:text-base text-xxs font-bold">
                  SCOPRI DI PIÚ
                </h1>
              </div>
            </div>
            {/* Aventure theme card checkbox container */}
            <div className=" w-1/12 h-full flex flex-col items-center ">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-md "></div>
            </div>
          </div>
          <div className="bg-blue-400 w-full h-4/5 rounded-md flex items-center">
            <div className="bg-purple-500 h-full flex flex-col items-center justify-center">
              <div className="flex flex-col w-5/6  h-full justify-center   ">
                <h1 className=" 2xl:text-xl text-sm font-bold">
                  Viagio nel tempo
                </h1>
                <h2 className=" 2xl:text-lg text-xs mb-3">
                  Un'avventura incredibile, piena di nuovi amici!
                </h2>
                <h1 className="underline  2xl:text-base text-xxs font-bold">
                  SCOPRI DI PIÚ
                </h1>
              </div>
            </div>
            {/* Aventure theme card checkbox container */}
            <div className=" w-1/12 h-full flex flex-col items-center ">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-md "></div>
            </div>
          </div>
        </div>

        {/* Adventure Theme Button Confirmation */}
        <button className="bg-green-300 2xl:w-1/5  2xl:h-12 lg:w-44 lg:h-9 rounded-lg  self-end  text-white">
          <p className="2xl:text-sm font-bold  lg:text-xxs ">
            SCEGLI EMPA AVVENTURA
          </p>
        </button>
      </section>
    </>
  );
};

export default AdventureSection;

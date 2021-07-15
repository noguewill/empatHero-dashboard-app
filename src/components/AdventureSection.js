const AdventureSection = () => {
  return (
    <>
      {/* Container of Adventure Section */}
      <section className="w-10/12 h-2/6 bg-blue-500 flex flex-col items-center">
        <div className="bg-yellow-400 w-full h-5/6 grid grid-cols-3 gap-4 place-items-center">
          {/* Inner container for the Adventure Theme Card*/}
          <div className="bg-blue-400 w-full h-4/5 rounded-md flex items-center">
            <div className="bg-purple-500 h-5/6 flex flex-col items-center justify-center    ">
              <div className="flex flex-col w-5/6 justify-center ">
                <h1 className="2xl:text-xl font-bold">Empa Safari</h1>
                <h2 className="2xl:text-lg mb-4">
                  Un'avventura incredibile, piena di nuovi amici!
                </h2>
                <h1 className="underline">SCOPRI DI PIÚ</h1>
              </div>
            </div>
            {/* Aventure theme card checkbox container */}
            <div className=" w-1/12 h-full flex flex-col items-center ">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
            </div>
          </div>
          <div className="bg-blue-400 w-full h-4/5 rounded-md flex items-center">
            <div className="bg-purple-500 h-5/6 flex flex-col items-center justify-center    ">
              <div className="flex flex-col w-5/6 justify-center ">
                <h1 className="2xl:text-xl font-bold">Viagio nel tempo</h1>
                <h2 className="2xl:text-lg mb-4">
                  Un'avventura incredibile, piena di nuovi amici!
                </h2>
                <h1 className="underline">SCOPRI DI PIÚ</h1>
              </div>
            </div>
            {/* Aventure theme card checkbox container */}
            <div className=" w-1/12 h-full flex flex-col items-center ">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
            </div>
          </div>
          <div className="bg-blue-400 w-full h-4/5 rounded-md flex items-center">
            <div className="bg-purple-500 h-5/6 flex flex-col items-center justify-center    ">
              <div className="flex flex-col w-5/6 justify-center ">
                <h1 className="2xl:text-xl font-bold">Empa Spazio</h1>
                <h2 className="2xl:text-lg mb-4">
                  Un'avventura incredibile, piena di nuovi amici!
                </h2>
                <h1 className="underline">SCOPRI DI PIÚ</h1>
              </div>
            </div>
            {/* Aventure theme card checkbox container */}
            <div className=" w-1/12 h-full flex flex-col items-center ">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
            </div>
          </div>
        </div>
        <button className="bg-green-300 w-1/5 h-1/6 rounded-md text-sm self-end font-bold text-white">
          SCEGLI EMPA AVVENTURA
        </button>
        {/* Adventure Theme Button Confirmation */}
      </section>
    </>
  );
};

export default AdventureSection;

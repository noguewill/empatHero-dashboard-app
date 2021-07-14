const AdventureSection = () => {
  return (
    <>
      {/* Container of Adventure Section */}
      <section className="w-11/12 h-3/6 bg-blue-500 flex flex-col items-center justify-center">
        <div className="bg-yellow-400 w-full h-4/5 flex justify-around items-center">
          {/* Inner container for the Adventure Theme Card*/}
          <div className="bg-blue-400 w-1/4 h-4/5 rounded-md flex">
            <div className="bg-purple-500 w-11/12 h-5/6 flex flex-col justify-around py-5">
              <div>
                <h1 className="2xl:text-xl font-bold">Empa Safari</h1>
                <h2 className="2xl:text-lg">
                  Un'avventura incredibile, piena di nuovi amici!
                </h2>
              </div>
              <h1 className="underline">SCOPRI DI PIÚ</h1>
            </div>
            {/* Aventure theme card checkbox container */}
            <div className="bg-green-500 w-1/12 h-full flex flex-col items-center pt-5">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
            </div>
          </div>
          <div className="bg-blue-400 w-1/4 h-4/5 rounded-md flex">
            <div className="bg-purple-500 w-11/12 h-5/6 flex flex-col justify-around py-5">
              <div>
                <h1 className="2xl:text-xl font-bold">Viaggio nel Tempo</h1>
                <h2 className="2xl:text-lg">
                  Un'avventura incredibile, piena di nuovi amici!
                </h2>
              </div>
              <h1 className="underline">SCOPRI DI PIÚ</h1>
            </div>
            {/* Aventure theme card checkbox container */}
            <div className="bg-green-500 w-1/12 h-full flex flex-col items-center pt-5">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
            </div>
          </div>
          <div className="bg-blue-400 w-1/4 h-4/5 rounded-md flex ">
            <div className="bg-purple-500 w-11/12 h-5/6 flex flex-col justify-around py-5  ">
              <div>
                <h1 className="2xl:text-xl font-bold">Empa Spazio</h1>
                <h2 className="2xl:text-lg">
                  Un'avventura incredibile, piena di nuovi amici!
                </h2>
              </div>
              <h1 className="underline">SCOPRI DI PIÚ</h1>
            </div>
            {/* Aventure theme card checkbox container */}
            <div className="bg-green-500 w-1/12 h-full flex flex-col items-center pt-5">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
            </div>
          </div>
        </div>
        {/* Adventure Theme Button Confirmation */}
        <button className="bg-green-300 w-60 rounded-md h-12 self-end font-bold text-white">
          SCEGLI EMPA AVVENTURA
        </button>
      </section>
    </>
  );
};

export default AdventureSection;

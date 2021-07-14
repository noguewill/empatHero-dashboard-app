const AdventureSection = () => {
  return (
    <>
      {/* Container of Adventure Section */}
      <section className="w-11/12 h-2/5 bg-blue-500 flex flex-col items-center justify-center px-5">
        <div className="bg-yellow-400 w-full h-4/5 flex justify-between items-center">
          {/* Inner container for the Adventure Theme Card*/}
          <div className="bg-blue-400 w-1/4 h-4/5 rounded-md flex">
            <div className="bg-purple-500 w-10/12 h-5/6"></div>
            {/* Aventure theme card checkbox container */}
            <div className="bg-green-500 w-2/12 h-full flex flex-col items-center pt-5">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
            </div>
          </div>
          <div className="bg-blue-400 w-1/4 h-4/5 rounded-md flex">
            <div className="bg-purple-500 w-10/12 h-5/6"></div>
            {/* Aventure theme card checkbox container */}
            <div className="bg-green-500 w-2/12 h-full flex flex-col items-center pt-5">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
            </div>
          </div>
          <div className="bg-blue-400 w-1/4 h-4/5 rounded-md flex">
            <div className="bg-purple-500 w-10/12 h-5/6"></div>
            {/* Aventure theme card checkbox container */}
            <div className="bg-green-500 w-2/12 h-full flex flex-col items-center pt-5">
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

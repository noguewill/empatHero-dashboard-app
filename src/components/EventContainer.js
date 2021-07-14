const EventContainer = () => {
  return (
    <div className="w-full h-6/7 bg-gray-800 flex flex-col items-center justify-around ">
      {/* Headline for Classes Container */}
      <div className="bg-red-400 w-11/12 h-1/7 pl-5 flex flex-col justify-between">
        <h3 className=" 2xl:text-base md:text-sm ">←Torna alle classi</h3>
        <h1 className="self-start 2xl:text-3xl md:text-2xl font-bold">
          Classe 1ª B
        </h1>
      </div>
      {/* Classes container */}
      <div className="bg-blue-500 w-11/12 h-2/5 flex justify-center items-center px-5">
        {/* TABLE */}
        <div className="bg-yellow-400 w-full h-6/7">
          {/* Table category title container */}
          <div className="bg-green-500 w-full h-1/6 grid grid-cols-6 place-items-center font-bold ">
            <h4>Alunno</h4>
            <h4>Soprannome</h4>
            <h4>Bag</h4>
            <h4>Carica disegno</h4>
            <h4>Visualizza disegno</h4>
            <h4>Disegno mostrato</h4>
          </div>
          {/* Table inner container */}
          <div className="bg-pink-500 w-full h-6/7 grid grid-cols-6  place-items-center ">
            {/* Table column elements */}
            <div className="bg-blue-400 w-10/12 h-full flex flex-col items-center justify-around 2xl:text-xl">
              <h4>first name</h4>
              <h4>first name</h4>
              <h4>first name</h4>
              <h4>first name</h4>
              <h4>first name</h4>
              <h4>first name</h4>
            </div>
            <div className="bg-blue-400 w-10/12 h-full flex flex-col items-center justify-around 2xl:text-xl">
              <h4>surname</h4>
              <h4>surname</h4>
              <h4>surname</h4>
              <h4>surname</h4>
              <h4>surname</h4>
              <h4>surname</h4>
            </div>
            <div className="bg-blue-400 w-2/12 h-full flex flex-col items-center justify-around 2xl:text-xl">
              <h4>1</h4>
              <h4>2</h4>
              <h4>3</h4>
              <h4>4</h4>
              <h4>5</h4>
              <h4>6</h4>
            </div>
            <div className="bg-blue-400 w-2/12 h-full flex flex-col justify-around items-center">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
            </div>
            <div className="bg-blue-400 w-2/12 h-full flex flex-col justify-around items-center">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
            </div>
            <div className="bg-blue-400 w-2/12 h-full flex flex-col justify-around items-center">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
            </div>
          </div>
        </div>
      </div>
      {/* Healine for the Adventure Section */}
      <div className="bg-red-400 w-11/12 h-1/7 pl-5">
        <h2 className="font-bold">Empa Avventura</h2>
        <h2 className="self-start">
          Seleziona un'Empa Avventura per iniziare!
        </h2>
      </div>
      {/* Container of Adventure Section */}
      <div className="w-11/12 h-2/5 bg-blue-500 flex flex-col items-center justify-center px-5">
        <div className="bg-yellow-400 w-full h-4/5 flex justify-between items-center">
          {/* Inner container for the Adventure Theme Card*/}
          <div className="bg-blue-400 w-1/4 h-4/5 rounded-md flex">
            <div className="bg-purple-500 w-10/12 h-5/6"></div>
            <div className="bg-green-500 w-2/12 h-full flex flex-col items-center pt-5">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
            </div>
          </div>
          <div className="bg-blue-400 w-1/4 h-4/5 rounded-md flex">
            <div className="bg-purple-500 w-10/12 h-5/6"></div>
            <div className="bg-green-500 w-2/12 h-full flex flex-col items-center pt-5">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
            </div>
          </div>
          <div className="bg-blue-400 w-1/4 h-4/5 rounded-md flex">
            <div className="bg-purple-500 w-10/12 h-5/6"></div>
            <div className="bg-green-500 w-2/12 h-full flex flex-col items-center pt-5">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
            </div>
          </div>
        </div>
        {/* Adventure Theme Button Confirmation */}
        <button className="bg-green-300 w-60 rounded-md h-12 self-end font-bold text-white">
          SCEGLI EMPA AVVENTURA
        </button>
      </div>
    </div>
  );
};

export default EventContainer;

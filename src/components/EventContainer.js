const EventContainer = () => {
  return (
    <div className="w-full h-full bg-gray-800 flex flex-col items-center justify-around ">
      <div className="bg-red-400 w-11/12 h-1/7 pl-5 flex flex-col justify-between">
        <h3 className=" 2xl:text-base md:text-sm ">←Torna alle classi</h3>
        <h1 className="self-start 2xl:text-3xl md:text-2xl font-bold">
          Classe 1ª B
        </h1>
      </div>
      <div className="bg-blue-500 w-11/12 h-3/5 flex justify-center items-center px-5">
        <div className="bg-yellow-400 w-full h-5/6"></div>
      </div>
      <div className="bg-red-400 w-11/12 h-1/7 pl-5">
        <h2 className="font-bold">Empa Avventura</h2>
        <h2 className="self-start">
          Seleziona un'Empa Avventura per iniziare!
        </h2>
      </div>
      <div className="w-11/12 h-2/5 bg-blue-500 flex flex-col items-center justify-center px-5">
        <div className="bg-yellow-400 w-full h-4/5 flex justify-between items-center">
          <div className="bg-blue-400 w-1/4 h-4/5 rounded-md">
            <div className="bg-purple-500 w-10/12 h-5/6"></div>
            <div className="w-2/12"></div>
          </div>
          <div className="bg-blue-400 w-1/4 h-4/5 rounded-md">
            <div className="bg-purple-500 w-10/12 h-5/6"></div>
            <div className="w-2/12"></div>
          </div>
          <div className="bg-blue-400 w-1/4 h-4/5 rounded-md">
            <div className="bg-purple-500 w-10/12 h-5/6"></div>
            <div className="w-2/12"></div>
          </div>
        </div>
        <div className="bg-green-300 w-52 h-10 self-end"></div>
      </div>
    </div>
  );
};

export default EventContainer;

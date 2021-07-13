const EventContainer = () => {
  return (
    <div className="w-full h-full bg-gray-800 flex flex-col items-center justify-around ">
      <div className="bg-red-400 w-5/6 h-14">
        <h3 className="2xl:text-base md:text-sm">←Torna alle classi</h3>
        <h1 className="self-start 2xl:text-3xl md:text-2xl font-bold">
          Classe 1ª B
        </h1>
      </div>
      <div className="bg-blue-500 w-5/6 h-3/5 flex justify-center items-center">
        <div className="bg-yellow-400 w-11/12 h-5/6"></div>
      </div>
      <div className="bg-red-400 w-5/6 h-14">
        <h2 className="font-bold">Empa Avventura</h2>
        <h2 className="self-start">
          Seleziona un'Empa Avventura per iniziare!
        </h2>
      </div>
      <div className="w-5/6 h-2/5 bg-blue-500 flex justify-center items-center">
        <div className="bg-yellow-400 w-11/12 h-5/6"></div>
      </div>
    </div>
  );
};

export default EventContainer;

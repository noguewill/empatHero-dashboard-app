const AdventureCard = ({ theme }) => {
  const adventureData = [
    {
      id: "safari",
      themeName: "Empa Safari",
      themeColor: "empatOrange",
      themeBG: "",
      themeMessage: "Un'avventura incredibile, piena di nuovi amici!",
    },
    {
      id: "vTempo",
      themeName: "Viaggio nel tempo",
      themeColor: "empatGreen",
      themeBG: "",
      themeMessage: "Un'avventura incredibile, piena di nuovi amici!",
    },
    {
      id: "spazio",
      themeName: "Empa Spazio",
      themeColor: "empatBlue",
      themeBG: "",
      themeMessage: "Un'avventura incredibile, piena di nuovi amici!",
    },
  ];

  /*   const confirmModal = (id) => {
    setConfirmAdventure(true);
  }; */
  return (
    <>
      {/* Inner container for the Adventure Theme Card*/}
      <div
        id={adventureData[theme].id}
        className="bg-indigo-100 w-full h-4/5 rounded-md flex items-center justify-center "
      >
        <div className="bg-indigo-100 h-full flex flex-col items-center justify-center">
          <div className="flex flex-col w-5/6  h-full justify-center   ">
            <h1 className=" 2xl:text-xl  text-sm font-bold">
              {adventureData[theme].themeName}
            </h1>
            <h2 className=" 2xl:text-lg text-xs mb-3">
              {adventureData[theme].themeMessage}
            </h2>
            <h1
              className={`underline 2xl:text-base  w-20 text-xxs font-bold text-${adventureData[theme].themeColor} hover:text-opacity-70 cursor-pointer`}
            >
              SCOPRI DI PIÚ
            </h1>
          </div>
        </div>
        {/* Aventure theme card checkbox container */}
        <div className=" w-1/12 h-full flex flex-col items-center ">
          <input
            type="checkbox"
            className="border-2 border-empatGray 2xl:w-7 2xl:h-7 w-5 h-5 rounded-md mt-3 hover:bg-gray-400 cursor-pointer duration-150 transition-all"
          ></input>
        </div>
      </div>
    </>
  );
};

export default AdventureCard;

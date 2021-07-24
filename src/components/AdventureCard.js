const AdventureCard = ({ theme }) => {
  const adventureData = [
    {
      themeName: "Empa Safari",
      themeColor: "empatOrange",
      themeBG: "",
      themeMessage: "Un'avventura incredibile, piena di nuovi amici!",
    },
    {
      themeName: "Viaggio nel tempo",
      themeColor: "empatGreen",
      themeBG: "",
      themeMessage: "Un'avventura incredibile, piena di nuovi amici!",
    },
    {
      themeName: "Empa Spazio",
      themeColor: "empatBlue",
      themeBG: "",
      themeMessage: "Un'avventura incredibile, piena di nuovi amici!",
    },
  ];
  return (
    <>
      {/* Inner container for the Adventure Theme Card*/}
      <div className="bg-indigo-100 w-full h-4/5 rounded-md flex items-center justify-center ">
        <div className="bg-indigo-100 h-full flex flex-col items-center justify-center">
          <div className="flex flex-col w-5/6  h-full justify-center   ">
            <h1 className=" 2xl:text-xl text-sm font-bold">
              {adventureData[theme].themeName}
            </h1>
            <h2 className=" 2xl:text-lg text-xs mb-3">
              {adventureData[theme].themeMessage}
            </h2>
            <h1
              className={`underline 2xl:text-base text-xxs font-bold text-${adventureData[theme].themeColor} hover:text-opacity-70 cursor-pointer`}
            >
              SCOPRI DI PIÚ
            </h1>
          </div>
        </div>
        {/* Aventure theme card checkbox container */}
        <div className=" w-1/12 h-full flex flex-col items-center ">
          <div className="border-2 border-empatGray 2xl:w-7 2xl:h-7 w-5 h-5 rounded-md mt-3 mr-3"></div>
        </div>
      </div>
    </>
  );
};

export default AdventureCard;

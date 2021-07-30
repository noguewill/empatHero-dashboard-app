import { useState } from "react";
import adventureData from "./themeData";
const AdventureCard = ({ currAdventure, setCurrAdventure, cssOverride }) => {
  const [active, setActive] = useState("");
  /* This function checks the key id of the dynamically generated JSX element and compares to the current selected active state ID */
  const selectAdventure = (themeId) => {
    setCurrAdventure(themeId);

    console.log(currAdventure);
    console.log();
  };
  return (
    <>
      {adventureData.map((card, i) => {
        return (
          /* Inner container for the Adventure Theme Card*/
          <div
            key={i}
            className={`bg-indigo-100 w-full h-4/5 rounded-md flex items-center justify-around dropShadow ${cssOverride}`}
          >
            <div className="bg-indigo-100 h-full flex flex-col ">
              <div className="flex flex-col w-5/6  h-full justify-center">
                <h1 className=" 2xl:text-xl  text-base font-bold">
                  {card.themeName}
                </h1>
                <h2 className=" 2xl:text-lg text-sm mb-3">
                  {card.themeMessage}
                </h2>
                <h1
                  className={`underline 2xl:text-base  w-20 text-xxs font-bold text-${card.themeColor} hover:text-opacity-70 cursor-pointer`}
                >
                  SCOPRI DI PIÚ
                </h1>
              </div>
            </div>
            {/* Aventure theme card checkbox container */}
            <div
              id={card.id}
              className=" w-1/12 h-full flex flex-col items-center"
            >
              <input
                onClick={() => selectAdventure(i)}
                type="checkbox"
                className={`${active} border-2  border-empatGray 2xl:w-7 2xl:h-7 w-5 h-5 rounded-md mt-3 hover:bg-gray-400 cursor-pointer duration-150 transition-all`}
              ></input>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AdventureCard;

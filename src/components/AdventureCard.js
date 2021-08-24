import { useState } from "react";
import LionIcon from "./assets/icons/LionIcon";
import SaucerIcon from "./assets/icons/SaucerIcon";
import SafariIconUp from "./assets/icons/SafariIconUp";
import SafariIconRight from "./assets/icons/SafariIconRight";
import adventureData from "./themeData";

const AdventureCard = ({ currAdventure, setCurrAdventure }) => {
  const [active, setActive] = useState(false);

  /* This function checks the key id of the dynamically generated JSX element and compares to the current selected active state ID */
  const selectAdventure = (themeId) => {
    setCurrAdventure(themeId);

    setActive(!active);
  };
  return (
    <>
      {adventureData.map((card, i) => {
        return (
          <div
            key={i}
            id={card.id}
            className="bg-empatLightGray w-full rounded-lg h-4/6 flex dropShadow"
          >
            <div className="w-1/12 h-full flex flex-col justify-end pb-10">
              <SaucerIcon
                colorTheme={card.themeIconColor}
                iconSize={"w-9/12 h-auto"}
              />
            </div>
            <div className="w-11/12 h-full flex flex-col justify-evenly items-center ">
              <div className="w-full h-10 flex justify-center pl-10">
                {/* Safari Up */}
                <SafariIconUp
                  colorTheme={card.themeIconColor}
                  iconSize={"2xl:w-32 2xl:h-auto w-2/12 h-5/6"}
                />
              </div>
              <div className="w-full h-3/4 flex flex-col justify-end items-center">
                <h1 className="self-start 3xl:text-2xl 2xl:text-xl vhlgFont text-sm font-bold vhMarginBottom">
                  {card.themeName}
                </h1>
                <h2 className="self-start 3xl:text-xl 2xl:text-lg vhsmFont text-xs 3xl:max-w-md 2xl:max-w-sm max-w-xs mb-5 ">
                  {card.themeMessage}
                </h2>
              </div>
              <div className="w-full h-1/5 flex justify-between">
                <h1
                  className={`underline 3xl:text-lg 2xl:text-base 2xl:w-44  w-20 text-xxs font-bold text-${card.themeColor} hover:text-opacity-70 cursor-pointer`}
                >
                  SCOPRI DI PIÚ
                </h1>
                {/* lion */}
                <LionIcon
                  colorTheme={card.themeIconColor}
                  iconSize={"w-4/12 h-full"}
                />
              </div>
            </div>
            <div
              key={i}
              id={card.id}
              className=" w-1/12 h-full flex flex-col items-center"
            >
              <input
                onClick={() => selectAdventure(i)}
                type="checkbox"
                /* Conditional where it checks if the current adventure value is not equal to the current checkbox id 
              and the active state is set to true, if both are true it disables the checkbox, else it does nothing  */
                disabled={
                  currAdventure !== i && active === true ? "disabled" : ""
                }
                className={`border-2 bg-empatGreen border-empatGray 2xl:w-7 2xl:h-7 w-5 h-5 rounded-md mt-5 hover:bg-gray-400 cursor-pointer duration-150 transition-all`}
              ></input>
            </div>
            <div className="w-1/12 h-full flex items-center justify-end">
              <SafariIconRight colorTheme={card.themeIconColor} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AdventureCard;

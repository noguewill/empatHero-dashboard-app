import AdventureAccordion from "./AdventureAccordion";
import adventureData from "./themeData";

import SafariIconUp from "./assets/icons/SafariIconUp";
import SaucerIcon from "./assets/icons/SaucerIcon";
import LionIcon from "./assets/icons/LionIcon";
const WeeklyAdventureSection = ({ currAdventure }) => {
  return (
    <div className=" w-10.5/12 h-5/6 flex justify-between items-center">
      {" "}
      <div className="w-2/6 h-full">
        {/* Adventure card theme */}
        <div
          id={adventureData[currAdventure].id}
          className="bg-empatLightGray w-full 3xl:h-2/6 h-3/5 flex dropShadow rounded-lg vhAdvThemeCardHeight"
        >
          <div className="w-1/12  h-full flex flex-col justify-end pb-10 mr-2">
            <SaucerIcon
              colorTheme={adventureData[currAdventure].themeIconColor}
              iconSize={"w-full"}
            />
          </div>
          <div className="w-10.5/12 h-auto  flex flex-col justify-evenly items-center ">
            <div className="w-full h-8  flex justify-center pl-10">
              {/* Safari Up */}
              <SafariIconUp
                colorTheme={adventureData[currAdventure].themeIconColor}
                iconSize={"2xl:w-8/12 2xl:h-10 w-8/12 h-7"}
              />
            </div>
            <div className="w-full 2xl:h-4/6 h-2/6 flex flex-col justify-end items-center mb-2">
              <h1 className=" self-start 2xl:text-xl  text-sm font-bold">
                {adventureData[currAdventure].themeName}
              </h1>
              <h2 className="self-start 2xl:text-base text-xs  max-w-md ">
                {adventureData[currAdventure].themeMessage}
              </h2>
            </div>
            <div className="w-full h-2/6 flex justify-between vhAdvThemeCard">
              <h1
                className={`underline 3xl:text-lg 2xl:text-base 2xl:w-44 w-20 text-xxs font-bold text-${adventureData[currAdventure].themeColor} hover:text-opacity-70 cursor-pointer`}
              >
                SCOPRI DI PIÚ
              </h1>
              {/* lion */}
              <LionIcon
                colorTheme={adventureData[currAdventure].themeIconColor}
                iconSize={"2xl:w-4/12 2xl:h-9 w-4/12 h-8"}
              />
            </div>
          </div>
        </div>

        {/* Adventure notice card */}
        <div className={`w-full h-3/6 rounded-md flex items-center`}>
          <svg
            className="2xl:w-10 2xl:h-10 w-6 h-6 mr-4 "
            viewBox="0 0 10 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.422024 5.94666C0.32666 5.28979 0.373751 4.62009 0.560098 3.98302C0.746445 3.34596 1.06769 2.75645 1.50201 2.25452C1.93634 1.75258 2.47358 1.34998 3.07726 1.07404C3.68094 0.798093 4.33693 0.655273 5.00069 0.655273C5.66445 0.655273 6.32044 0.798093 6.92412 1.07404C7.5278 1.34998 8.06504 1.75258 8.49937 2.25452C8.93369 2.75645 9.25493 3.34596 9.44128 3.98302C9.62763 4.62009 9.67472 5.28979 9.57936 5.94666L8.04335 16.6933C7.93704 17.4244 7.57104 18.0928 7.01231 18.5762C6.45358 19.0595 5.73948 19.3256 5.00069 19.3256C4.2619 19.3256 3.5478 19.0595 2.98907 18.5762C2.43034 18.0928 2.06434 17.4244 1.95802 16.6933L0.422024 5.94666Z"
              fill={adventureData[currAdventure].themeIconColor}
            />
            <path
              d="M7.66732 24.6667C7.66732 25.3739 7.38637 26.0522 6.88627 26.5523C6.38617 27.0524 5.7079 27.3333 5.00065 27.3333C4.29341 27.3333 3.61513 27.0524 3.11503 26.5523C2.61494 26.0522 2.33398 25.3739 2.33398 24.6667C2.33398 23.9594 2.61494 23.2811 3.11503 22.781C3.61513 22.281 4.29341 22 5.00065 22C5.7079 22 6.38617 22.281 6.88627 22.781C7.38637 23.2811 7.66732 23.9594 7.66732 24.6667Z"
              fill={adventureData[currAdventure].themeIconColor}
            />
          </svg>

          <h2 className=" 2xl:text-lg 2xl:max-w-xs text-xs font-bold text-gray-600">
            Potrai selezionare una nuova Empa Avventura solo al termine dell'
            <br />
            avventura attualmente selezionata.
          </h2>
        </div>
      </div>
      {/* Accordion */}
      <div className=" w-10.5/12 h-full px-5">
        <AdventureAccordion currAdventure={currAdventure} />
      </div>
    </div>
  );
};

export default WeeklyAdventureSection;

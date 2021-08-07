import { useState } from "react";
import EmpatHero from "./EmpatHero.jpg";

import adventureData from "./themeData";
const AdventureCard = ({ currAdventure, setCurrAdventure }) => {
  const [active, setActive] = useState(false);

  /* This function checks the key id of the dynamically generated JSX element and compares to the current selected active state ID */
  const selectAdventure = (themeId) => {
    setCurrAdventure(themeId);

    setActive(!active);
  };
  return (
    /*     <div className="w-96 h-10">
      <div className="bg-gray-600 w-96 h-32">
        <div className="bg-gray-200 w-full h-full z-10 absolute"></div>
        <img className="w-full h-full object-cover" src={EmpatHero} alt="ye" />
      </div>
    </div> */
    <>
      {adventureData.map((card, i) => {
        return (
          <div className="w-full h-auto">
            <div className="relative h-auto  z-40">
              <img
                src={EmpatHero}
                alt="what"
                className="w-full h-auto object-contain "
              />

              <div
                key={i}
                className={` absolute  top-0   w-full h-4/5 rounded-md flex items-center justify-around dropShadow 2xl:pl-5 pl-10 z-20`}
              >
                <div className=" h-full flex flex-col ">
                  <div className="flex flex-col w-5/6  h-full justify-center">
                    <h1 className=" 2xl:text-xl  text-base font-bold">
                      {card.themeName}
                    </h1>
                    <h2 className=" 2xl:text-lg text-sm mb-5 max-w-md ">
                      {card.themeMessage}
                    </h2>
                    <h1
                      className={`underline 2xl:text-base 2xl:w-44  w-20 text-xxs font-bold text-${card.themeColor} hover:text-opacity-70 cursor-pointer`}
                    >
                      SCOPRI DI PIÚ
                    </h1>
                  </div>
                </div>
                {/* Aventure theme card checkbox container */}
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
                    className={`border-2  border-empatGray 2xl:w-6 2xl:h-6 w-5 h-5 rounded-md mt-5 2xl:mr-0 lg:mr-10 hover:bg-gray-400 cursor-pointer duration-150 transition-all`}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AdventureCard;
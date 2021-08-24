import { useState } from "react";
import adventureData from "./themeData";

const AdventureAccordion = ({ currAdventure }) => {
  const [clicked, setClicked] = useState(false);
  const [index, setIndex] = useState();

  const toggle = (i) => {
    if (clicked === i) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    setIndex(i);
    setClicked(i);
  };

  return (
    <>
      <div className=" w-full 3xl:h-4/6 h-full flex flex-col justify-between items-center ">
        {clicked === index ? (
          <>
            <div
              className={`w-full flex h-2/6 px-5 items-center justify-between bg-empatLightGray transition duration-300 delay-75 ease-in-out rounded-lg dropShadow`}
            >
              <h2 className={`2xl:text-2xl text-base text-gray-600 font-bold`}>
                {adventureData[currAdventure].themeWeekly[index].weekDate}
              </h2>

              {/* "X" button */}
              <button
                onClick={() => toggle(index)}
                className={`rounded-full bg-${adventureData[currAdventure].themeColor} 
                flex justify-center items-center
                3xl:w-10 3xl:h-10 2xl:w-9 2xl:h-9 w-5 h-5 z-20`}
                type="button flex justify-center items-center"
              >
                <svg
                  className="3xl:w-6 3xl:h-6 2xl:w-5 2xl:h-5 w-2 h-2 z-10"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 16 16"
                >
                  <g fill="white">
                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8L1.293 2.707a1 1 0 0 1 0-1.414z" />
                  </g>
                </svg>
              </button>
            </div>
            <div className="w-full h-full dropShadow flex flex-col justify-around py-2 px-5">
              <p className="2xl:max-w-3xl lg:max-w-xl lg:text-sm  2xl:text-xl text-gray-700  ">
                {adventureData[currAdventure].themeWeekly[index].weekMessage}
              </p>
              <button
                className={`bg-${adventureData[currAdventure].themeColor} 2xl:w-60  2xl:h-16 lg:w-36 lg:h-10 rounded-xl self-start text-white hover:bg-opacity-90 transition  ease-in-out`}
              >
                <p className="2xl:text-lg font-bold  lg:text-xs ">
                  SCARICA LA MAPA
                </p>
              </button>
            </div>
          </>
        ) : (
          <>
            {adventureData[currAdventure].themeWeekly.map((week, i) => {
              return (
                <div
                  id={i}
                  key={i}
                  className={`w-full h-1/5 flex items-center justify-between px-5 dropShadow rounded-lg `}
                >
                  <h2
                    className={`2xl:text-xl text-sm text-gray-600 font-bold z-20 `}
                  >
                    {week.weekDate}
                  </h2>
                  <button
                    /* Toogle the accordion between open and closed */
                    onClick={() => toggle(i)}
                    className="rounded-full 3xl:w-7 3xl:h-7 2xl:w-7 2xl:h-7 w-5 h-5 z-20 flex justify-center items-center"
                    type="button"
                  >
                    <svg
                      className="3xl:w-9 3xl:h-9 2xl:w-7 2xl:h-7 w-5 h-5 z-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 23 22"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6819 0C5.4315 0 0.364258 4.925 0.364258 11C0.364258 17.075 5.4315 22 11.6819 22C17.9324 22 22.9996 17.075 22.9996 11C22.9996 4.925 17.9324 0 11.6819 0ZM8.29384 8.793C8.09979 8.61084 7.8399 8.51005 7.57013 8.51233C7.30036 8.5146 7.0423 8.61977 6.85154 8.80518C6.66078 8.99059 6.55257 9.2414 6.55022 9.5036C6.54788 9.7658 6.65159 10.0184 6.839 10.207L10.9545 14.207C11.1475 14.3945 11.4091 14.4998 11.6819 14.4998C11.9548 14.4998 12.2164 14.3945 12.4094 14.207L16.5249 10.207C16.7123 10.0184 16.816 9.7658 16.8137 9.5036C16.8113 9.2414 16.7031 8.99059 16.5124 8.80518C16.3216 8.61977 16.0635 8.5146 15.7938 8.51233C15.524 8.51005 15.2641 8.61084 15.0701 8.793L11.6819 12.086L8.29384 8.793Z"
                        fill={adventureData[currAdventure].themeIconColor}
                      />
                    </svg>
                  </button>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default AdventureAccordion;

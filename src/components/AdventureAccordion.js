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
      <div className="bg-empatCalendarColor w-full h-full flex flex-col justify-around items-center px-5">
        {clicked === index ? (
          <>
            <div
              className={`w-full h-auto flex items-center justify-between transition duration-300 delay-75 ease-in-out `}
            >
              <h2 className={`2xl:text-2xl text-base text-gray-600 font-bold `}>
                {adventureData[currAdventure].themeWeekly[index].weekDate}
              </h2>
              <button
                onClick={() => toggle(index)}
                /*  className={`rounded-full bg-empatOrange flex justify-center items-center 2xl:w-9 2xl:h-9 w-5 h-5 z-20`} */
                className={`rounded-full bg-${adventureData[currAdventure].themeColor} flex justify-center items-center 2xl:w-9 2xl:h-9 w-5 h-5 z-20`}
                type="button flex justify-center items-center"
              >
                <svg
                  className="2xl:w-9 2xl:h-9 w-2 h-2 z-10"
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
            <p className="2xl:max-w-3xl lg:max-w-xl lg:text-sm self-start 2xl:text-xl text-gray-700">
              {adventureData[currAdventure].themeWeekly[index].weekMessage}
            </p>
            <button
              className={`bg-${adventureData[currAdventure].themeColor} 2xl:w-60  2xl:h-16 lg:w-36 lg:h-10 rounded-xl self-start text-white hover:bg-opacity-90 transition  ease-in-out`}
            >
              <p className="2xl:text-lg font-bold  lg:text-xs ">
                SCARICA LA MAPA
              </p>
            </button>
          </>
        ) : (
          <>
            {adventureData[currAdventure].themeWeekly.map((week, i) => {
              return (
                <>
                  <div
                    id={i}
                    key={i}
                    className={`w-full h-1/6 flex items-center justify-between `}
                  >
                    <h2
                      className={`2xl:text-xl text-base text-gray-600 font-bold z-20 `}
                    >
                      {week.weekDate}
                    </h2>
                    <button
                      onClick={() => toggle(i)}
                      className="rounded-full w-5 h-5 z-20"
                      type="button flex justify-center items-center"
                    >
                      <svg
                        className="w-5 h-5 z-10"
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
                      {/* : <FiPlus />} */}
                    </button>
                  </div>
                </>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default AdventureAccordion;

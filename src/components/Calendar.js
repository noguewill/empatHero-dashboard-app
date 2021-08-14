import LoopCalendar from "./LoopCalendar";
import SafariIconRight from "./assets/icons/SafariIconRight";
import adventureData from "./themeData";

const Calendar = ({ currAdventure, adventureDay, setAdventureDay }) => {
  /* Import and instatiation of functions that came from LoopCalendar custom hook function */
  const {
    calendarRows,
    selectedDate,
    todayFormatted,
    daysShort,
    monthNames,
    getNextMonth,
    getPrevMonth,
  } = LoopCalendar();

  /* Dayget  helper function, in case there's a need to access the calendar day on click */
  const dateClickHandler = (date) => {
    setAdventureDay(date);
  };

  return (
    /* Calendar Body */
    <div className="w-full h-3/5 flex justify-center items-end ">
      <div className=" w-10/12 h-6/7  flex flex-col justify-around font-bold ">
        {/* Calendar Month/Year head Container */}
        <div className=" w-full  h-1/5 flex justify-between items-center mb-5">
          <div className="w-2/12 h-full flex justify-center items-center">
            <button className="w-3 h-3" onClick={getPrevMonth}>
              <svg
                className="2xl:w-4 2xl:h-4 w-3 h-3"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z"
                  fill="black"
                  fillOpacity="0.54"
                />
              </svg>
            </button>
          </div>

          {/* Calendar Month name */}
          <div className="flex font-bold 2xl:text-2xl lg:text-lg">
            <h1 className="mr-1">
              {`${
                monthNames[selectedDate.getMonth()]
              }  ${selectedDate.getFullYear()}`}
            </h1>
          </div>

          {/* Right arrow press to go to next month */}
          <div className="w-2/12 h-full flex justify-center items-center">
            <button className="w-3 h-3" onClick={getNextMonth}>
              <svg
                className="2xl:w-4 2xl:h-4 w-3 h-3"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
                  fill="black"
                  fillOpacity="0.54"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Calendar week names header */}
        <div className="w-full h-1/7 place-items-center 2xl:text-lg lg:text-xs text-empatGray grid grid-cols-7 mb-5">
          {daysShort.map((day) => (
            <h3 key={day}>{day}</h3>
          ))}
        </div>

        {/* Calendar days body */}
        <section className="w-full h-full grid grid-rows-7 justify-items-center">
          {Object.values(calendarRows).map((cols) => {
            return (
              <div
                className="w-full h-auto grid grid-cols-7  place-items-center gap-3 "
                key={cols[0].date}
              >
                {/* Column dynamically separated so the day of today can be styled outside of the other days */}
                {cols.map((col) =>
                  col.date === todayFormatted ? (
                    <div
                      id={col.date}
                      key={col.date}
                      className="w-6 h-6 z-20 2xl:text-lg lg:text-sm flex justify-center items-center hover:bg-blue-100 transition-all duration-300 ease-in-out"
                    >
                      {/* On click, sets the clicked day to the current state */}
                      {col.date === adventureDay ? (
                        <div className="2xl:w-12 2xl:h-12 w-8 h-8 absolute">
                          <svg
                            className="w-full h-full absolute"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15.9167 6.58775e-05C22.1811 -0.00937931 29.5725 0.987433 31.5523 9.0668C33.558 17.2517 28.4816 24.8286 23.1448 29.4969C18.7947 33.3022 13.4401 32.5579 9.12049 28.6889C3.93794 24.047 -1.51497 17.1445 0.387458 9.11379C2.29819 1.04801 9.68325 0.00946432 15.9167 6.58775e-05Z"
                              fill={adventureData[currAdventure].themeIconColor}
                            />
                          </svg>
                        </div>
                      ) : null}
                      <h2
                        className={`${col.classes} z-10 ${
                          col.date === adventureDay
                            ? "text-white"
                            : "text-empatBlack"
                        }`}
                      >
                        {col.value}
                      </h2>
                    </div>
                  ) : (
                    <div
                      id={col.date}
                      key={col.date}
                      className={`${
                        col.date === adventureDay
                          ? "text-white"
                          : "text-empatBlack"
                      } w-6  h-6 2xl:text-lg lg:text-sm   cursor-pointer flex flex-wrap justify-center items-center hover:bg-blue-100 transition-all duration-300 ease-in-out`}
                    >
                      {col.date === adventureDay ? (
                        <div className="2xl:w-12 2xl:h-12 w-8 h-8 absolute">
                          <svg
                            className="w-full h-full absolute"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.4771 0.0174261C25.7412 0.342614 29.852 7.1217 31.6313 13.6623C33.0293 18.8017 30.3141 23.7263 25.816 26.9956C20.6096 30.7797 13.8882 33.901 8.29829 30.6213C1.70412 26.7523 -1.56677 19.1947 0.733381 12.2791C3.13717 5.05179 10.3323 -0.347188 18.4771 0.0174261Z"
                              fill={adventureData[currAdventure].themeIconColor}
                            />
                          </svg>
                        </div>
                      ) : null}

                      <h2
                        className={`${col.classes} z-10 ${
                          col.date === adventureDay
                            ? "text-white"
                            : "text-empatBlack"
                        }`}
                      >
                        {col.value}
                      </h2>
                    </div>
                  )
                )}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Calendar;

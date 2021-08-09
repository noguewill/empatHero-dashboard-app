import LoopCalendar from "./LoopCalendar";

const Calendar = ({ adventureDay, setAdventureDay }) => {
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
                      key={col.date}
                      className="w-6 h-6 z-20 2xl:text-lg lg:text-sm flex justify-center items-center hover:bg-blue-100 transition-all duration-300 ease-in-out"
                    >
                      <h2 onClick={() => dateClickHandler(col.date)}>
                        {col.value}
                      </h2>
                    </div>
                  ) : (
                    <div
                      id={col.date}
                      key={col.date}
                      className={`${(e) =>
                        adventureDay === e.id
                          ? "bg-empatLightBlue"
                          : ""} w-6  h-6 2xl:text-lg lg:text-sm text-empatBlack cursor-pointer flex flex-wrap justify-center items-center hover:bg-blue-100 transition-all duration-300 ease-in-out`}
                    >
                      <h2
                        className={`${col.classes}`}
                        onClick={() => dateClickHandler(col.date)}
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

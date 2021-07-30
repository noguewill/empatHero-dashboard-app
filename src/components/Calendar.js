import { useState } from "react";
const Calendar = () => {
  
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; // This gets an integer number of the day
  const [currMonth, setCurrMonth] = useState(month);
  const year = dateObj.getUTCFullYear(); /* Gets the year integer form YYYY */
  let monthStr = new Date(year, currMonth, 0).toLocaleString("it-IT", {
    month: "long",
  }); //string of months from 1-12.
  monthStr = monthStr.charAt().toUpperCase() + monthStr.slice(1);
  /* Takes the first character of the month string and make it uppercase */

  /* Tracks the current month */
  /* Takes the year and month variable to identify how many days there is in the current month */
  const daysInPastMonth = new Date(year, currMonth, 0).getDate();
  const daysInCurrMonth = new Date(year, currMonth + 1, 0).getDate();
  const daysInNextMonth = new Date(year, currMonth + 2, 0).getDate();

  /* Loops through the numbers of days in the current month and pushes to currNumDays array */
  const pastNumDays = [];
  for (let i = 1; i <= daysInPastMonth; i++) {
    pastNumDays.push(i);
  }
  const currNumDays = [];
  for (let i = 1; i <= daysInCurrMonth; i++) {
    currNumDays.push(i);
  }
  const futureNumDays = [];
  for (let i = 1; i <= daysInNextMonth; i++) {
    futureNumDays.push(i);
  }



  return (
    <div className="w-full h-3/5 flex justify-center items-end ">
      <div className=" w-10/12 h-6/7  flex flex-col justify-around font-bold">
        <div className=" w-full  h-1/5 flex justify-between items-center">
          <div className="w-2/12 h-full flex justify-center items-center">
            <button
              className="w-3 h-3"
              onClick={() => setCurrMonth(currMonth - 1)}
            >
              <svg
                className="w-3 h-3"
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
          <div className="flex font-bold 2xl:text-xl lg:text-lg">
            <button className="mr-1">
              {monthStr} {year}
            </button>
          </div>
          <div className="w-2/12 h-full flex justify-center items-center">
            <button
              className="w-3 h-3"
              onClick={() => setCurrMonth(currMonth + 1)}
            >
              <svg
                className="w-3 h-3"
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
        <div className=" w-full h-1/7 2xl:text-base lg:text-xs text-empatGray grid grid-cols-7 place-items-center ">
          <h4 className="">Lun</h4>
          <h4 className="">Mar</h4>
          <h4 className="">Mer</h4>
          <h4 className="">Gio</h4>
          <h4 className="">Ven</h4>
          <h4 className="">Sab</h4>
          <h4 className="">Dom</h4>
        </div>
        <div className="w-full h-full flex flex-col justify-around  items-center ">
          <div className="w-full h-auto flex justify-between bg-gray-100 ">
            {pastNumDays.slice(-2).map((pastDay, i) => {
              return (
                <button
                  key={i}
                  className=" w-10  h-9 2xl:text-base  lg:text-xs text-empatGray flex flex-wrap justify-center items-center hover:bg-blue-100 transition-all duration-300 ease-in-out"
                >
                  {pastDay}
                </button>
              );
            })}

            {/* Map is going through currNumDays array and returning a JSX element with the value inside of it, slice method is limiting it from 1-5 */}
            {currNumDays.slice(0, 5).map((day, i) => {
              return (
                <button
                  key={i}
                  className=" w-10  h-9 2xl:text-base  lg:text-xs flex flex-wrap justify-center items-center hover:bg-blue-100 transition-all duration-300 ease-in-out"
                >
                  {day}
                </button>
              );
            })}
          </div>
          <div className="w-full h-auto flex justify-between  ">
            {currNumDays.slice(5, 12).map((day, i) => {
              return (
                <button
                  key={i}
                  className=" w-10  h-9 2xl:text-base  lg:text-xs flex flex-wrap justify-center items-center hover:bg-blue-100 transition-all duration-300 ease-in-out"
                >
                  {day}
                </button>
              );
            })}
          </div>
          <div className="w-full h-auto flex justify-between  ">
            {currNumDays.slice(12, 19).map((day, i) => {
              return (
                <button
                  key={i}
                  className=" w-10  h-9 2xl:text-base  lg:text-xs flex flex-wrap justify-center items-center hover:bg-blue-100 transition-all duration-300 ease-in-out"
                >
                  {day}
                </button>
              );
            })}
          </div>
          <div className="w-full h-auto flex justify-between  ">
            {currNumDays.slice(19, 26).map((day, i) => {
              return (
                <button
                  key={i}
                  className=" w-10  h-9 2xl:text-base  lg:text-xs flex flex-wrap justify-center items-center hover:bg-blue-100 transition-all duration-300 ease-in-out"
                >
                  {day}
                </button>
              );
            })}
          </div>
          <div className="w-full h-auto flex justify-between  ">
            {currNumDays.slice(26).map((day, i) => {
              return (
                <button
                  key={i}
                  className=" w-10  h-9 2xl:text-base  lg:text-xs flex flex-wrap justify-center items-center hover:bg-blue-100 transition-all duration-300 ease-in-out"
                >
                  {day}
                </button>
              );
            })}
            {futureNumDays.slice(0, 2).map((futureDay, i) => {
              return (
                <button
                  key={i}
                  className=" w-10  h-9 2xl:text-base  lg:text-xs text-empatGray flex flex-wrap justify-center items-center hover:bg-blue-100 transition-all duration-300 ease-in-out"
                >
                  {futureDay}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

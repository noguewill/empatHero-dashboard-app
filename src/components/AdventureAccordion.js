import adventureData from "./themeData";
const AdventureAccordion = ({ currAdventure }) => {
  return (
    <>
      <div className="bg-empatCalendarColor w-full h-full flex flex-col justify-around items-center px-5">
        {adventureData[0].themeWeekly.map((week, i) => {
          return (
            <div
              key={i}
              className="w-full h-1/6 flex items-center justify-between"
            >
              <h2 className="2xl:text-xl text-base text-gray-600 font-bold">
                {week.weekDate}
              </h2>
              <button
                className="rounded-full w-5 h-5"
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
                    fill="#F08645"
                  />
                </svg>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AdventureAccordion;

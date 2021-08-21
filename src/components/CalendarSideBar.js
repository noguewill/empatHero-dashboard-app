import Calendar from "./Calendar";

const CalendarSideBar = ({ currAdventure, adventureDay, setAdventureDay }) => {
  return (
    /* Calendar sidebar container */
    <div className="w-80 2xl:w-3/12 h-full flex flex-col items-center justify-between bg-empatCalendarColor rounded-tr-3xl rounded-br-3xl ">
      {/* Calendar container */}

      <Calendar
        currAdventure={currAdventure}
        adventureDay={adventureDay}
        setAdventureDay={setAdventureDay}
      />
      {/* Calendar Legend container */}
      <div className="w-full h-2/6 2xl:text-base text-sm flex flex-col  items-center 3xl:ml-20 ">
        <div className="w-5/6 h-1/6 flex items-center my-3">
          <div className=" w-14 h-full 2xl:mr-5">
            <svg
              className="w-full h-full"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.5091 0.454981C20.1701 0.0611384 26.9777 -1.12807 30.4461 3.13445C33.8943 7.37211 30.7707 13.2401 29.0645 18.3429C27.6084 22.6979 25.8577 27.0464 21.6871 29.3312C17.1131 31.837 11.2064 33.194 6.68568 30.6027C2.4207 28.1579 2.80345 22.5732 1.81455 17.9399C0.876558 13.5452 -1.42463 8.85801 1.25643 5.16523C4.07168 1.28761 9.55923 0.799352 14.5091 0.454981Z"
                fill="#3FA482"
              />
            </svg>
          </div>
          <h2 className="3xl:text-2xl 2xl:text-lg font-bold text-empatBlack">
            Giornata dell'Empatia
          </h2>
        </div>
        <div className=" w-5/6 h-1/6 flex items-center my-3">
          <div className=" w-14 h-full 2xl:mr-5">
            <svg
              className="w-full h-full"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.9167 6.58775e-05C22.1811 -0.00937931 29.5725 0.987433 31.5523 9.0668C33.558 17.2517 28.4816 24.8286 23.1448 29.4969C18.7947 33.3022 13.4401 32.5579 9.12049 28.6889C3.93794 24.047 -1.51497 17.1445 0.387458 9.11379C2.29819 1.04801 9.68325 0.00946432 15.9167 6.58775e-05Z"
                fill="#F08645"
              />
            </svg>
          </div>
          <h2 className="3xl:text-2xl 2xl:text-lg font-bold text-empatBlack">
            Inizio EmpAvventura
          </h2>
        </div>
        <div className=" w-5/6 h-1/6 flex items-center my-3">
          <div className=" w-14 h-full 2xl:mr-5">
            <svg
              className="w-full h-full"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.4771 0.0174261C25.7412 0.342614 29.852 7.1217 31.6313 13.6623C33.0293 18.8017 30.3141 23.7263 25.816 26.9956C20.6096 30.7797 13.8882 33.901 8.29829 30.6213C1.70412 26.7523 -1.56677 19.1947 0.733381 12.2791C3.13717 5.05179 10.3323 -0.347188 18.4771 0.0174261Z"
                fill="#7EBCF3"
              />
            </svg>
          </div>
          <h2 className="3xl:text-2xl 2xl:text-lg font-bold text-empatBlack ">
            Creazione atti di gentilezza
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CalendarSideBar;

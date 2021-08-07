import studentData from "./StudentData";
import StudentsTable from "./StudentsTable";
import AdventureSection from "./AdventureSection";
import WeeklyAdventureSection from "./WeeklyAdventureSection";
import adventureData from "./themeData";

const EventContainer = ({
  currAdventure,
  setCurrAdventure,
  setConfirmModal,
  confirmAdventure,
  classChosen,
  setClassChosen,
}) => {
  return (
    <div className="w-full h-7/8 flex flex-col items-center justify-around ">
      {/* Headline for Classes Container */}
      <div className=" w-11/12 h-1/7 flex flex-col justify-around 2xl:mb-4 mb-3">
        <button
          onClick={() => setClassChosen(undefined)}
          className="flex w-1/6 items-center arrowContainer"
        >
          <span className="arrowMoveLeft transition-all duration-300 ease-in-out">
            ←
          </span>
          <h3 className=" 2xl:text-base md:text-sm cursor-pointer ">
            Torna alle classi
          </h3>
        </button>
        <h1 className="self-start 2xl:text-3xl md:text-2xl font-bold">
          {/* Class number of the first student on student data */}
          {studentData[classChosen][0].class}
        </h1>
      </div>

      {/* Table view of the students table and their drawings */}
      <StudentsTable classChosen={classChosen} />

      {/* Healine for the Adventure Section */}

      {/* Themed adventure section */}
      {/* If  confirmAdventure is false  show adventure section if not, show WeeklyAdventureSection */}
      {!confirmAdventure ? (
        <>
          <div className=" w-11/12  h-5 ">
            <h2 className="font-bold 2xl:text-xl text-base text-empatBlack">
              Empa Avventura
            </h2>
            <h2 className="2xl:text-lg  font-bold text-gray-600 ">
              Seleziona un'Empa Avventura per iniziare!
            </h2>
          </div>
          <AdventureSection
            currAdventure={currAdventure}
            setCurrAdventure={setCurrAdventure}
            setConfirmModal={setConfirmModal}
          />
        </>
      ) : (
        <>
          <div className=" w-11/12 2xl:h-20 h-32 2xl:mt-0 mt-3">
            <h2 className="font-extrabold 2xl:text-xl  text-sm  text-empatBlack">
              Empa Avventura
            </h2>
            <h2 className="2xl:text-lg text-sm text-empatBlack ">
              Hai scelto l'avventura
              <b
                className={`text-${adventureData[currAdventure].themeColor} ml-1`}
              >
                {adventureData[currAdventure].themeName}
              </b>
            </h2>
          </div>
          <WeeklyAdventureSection currAdventure={currAdventure} />
        </>
      )}
    </div>
  );
};

export default EventContainer;

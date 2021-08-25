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
    <div className="w-4/5 2xl:h-full  h-5/6 flex flex-col items-center vhAdventureHeight">
      {/* Headline for Classes Container */}
      <div className=" w-10.5/12 h-1/7 flex flex-col justify-between 2xl:mb-4 mb-3">
        <button
          onClick={() => setClassChosen(undefined)}
          className="flex w-1/6 items-center 2xl:mb-2 arrowContainer"
        >
          <span className="arrowMoveLeft transition-all duration-300 ease-in-out">
            ←
          </span>
          <h3 className="3xl:text-xl 2xl:text-base md:text-sm cursor-pointer ">
            Torna alle classi
          </h3>
        </button>
        <h1 className="self-start 3xl:text-4xl 3xl:mb-5 2xl:text-3xl md:text-2xl font-bold">
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
          <div className="w-10.5/12 mt-7 mb-2">
            <h2 className="font-bold 3xl:text-2xl 2xl:text-2xl text-sm text-empatBlack">
              Empa Avventura
            </h2>
            <h2 className="3xl:text-xl 2xl:text-lg text-xs font-bold text-gray-600 ">
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
          <div className=" w-10.5/12 2xl:h-20 h-32 2xl:mb-4 2xl:mt-7 mt-4">
            <h2 className="font-extrabold 3xl:text-2xl 2xl:text-xl  text-sm  text-empatBlack ">
              Empa Avventura
            </h2>
            <h2 className="3xl:text-xl 2xl:text-lg text-sm text-empatBlack">
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

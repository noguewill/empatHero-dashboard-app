import StudentsTable from "./StudentsTable";
import AdventureSection from "./AdventureSection";
const EventContainer = () => {
  return (
    <div className="w-full h-7/8 flex flex-col items-center justify-around ">
      {/* Headline for Classes Container */}
      <div className=" w-11/12 h-1/7 flex flex-col justify-between">
        <div className="flex w-1/6 items-center arrowContainer">
          <span className="arrowMoveLeft transition-all duration-300 ">←</span>
          <h3 className=" 2xl:text-base md:text-sm cursor-pointer ">
            Torna alle classi
          </h3>
        </div>
        <h1 className="self-start 2xl:text-3xl md:text-2xl font-bold">
          Classe 1ª B
        </h1>
      </div>
      {/* Table view of the students table and their drawings */}
      <StudentsTable />
      {/* Healine for the Adventure Section */}
      <div className=" w-11/12 h-auto ">
        <h2 className="font-bold 2xl:text-xl text-base text-empatBlack">
          Empa Avventura
        </h2>
        <h2 className="2xl:text-lg text-sm text-empatBlack ">
          Seleziona un'Empa Avventura per iniziare!
        </h2>
      </div>
      {/* Themed adventure section */}
      {/* If  */}
      <AdventureSection />
    </div>
  );
};

export default EventContainer;

import StudentsTable from "./StudentsTable";
import AdventureSection from "./AdventureSection";
const EventContainer = () => {
  return (
    <div className="w-full h-7/8 flex flex-col items-center justify-around ">
      {/* Headline for Classes Container */}
      <div className=" w-10/12 h-1/7 flex flex-col justify-between">
        <h3 className=" 2xl:text-base md:text-sm ">←Torna alle classi</h3>
        <h1 className="self-start 2xl:text-3xl md:text-2xl font-bold">
          Classe 1ª B
        </h1>
      </div>
      {/* Table view of the students table and their drawings */}
      <StudentsTable />
      {/* Healine for the Adventure Section */}
      <div className=" w-10/12 h-auto ">
        <h2 className="font-bold 2xl:text-xl text-base text-empatBlack">
          Empa Avventura
        </h2>
        <h2 className="2xl:text-lg text-sm text-empatBlack ">
          Seleziona un'Empa Avventura per iniziare!
        </h2>
      </div>
      {/* Themed adventure section */}
      <AdventureSection />
    </div>
  );
};

export default EventContainer;

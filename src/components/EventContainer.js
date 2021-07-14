import StudentsTable from "./StudentsTable";
import AdventureSection from "./AdventureSection";
const EventContainer = () => {
  return (
    <div className="w-full h-6/7 bg-gray-800 flex flex-col items-center justify-around ">
      {/* Headline for Classes Container */}
      <div className="bg-red-400 w-11/12 h-1/7 pl-5 flex flex-col justify-between">
        <h3 className=" 2xl:text-base md:text-sm ">←Torna alle classi</h3>
        <h1 className="self-start 2xl:text-3xl md:text-2xl font-bold">
          Classe 1ª B
        </h1>
      </div>
      {/* Table view of the students table and their drawings */}
      <StudentsTable />
      {/* Healine for the Adventure Section */}
      <div className="bg-red-400 w-11/12  pl-5">
        <h2 className="font-bold 2xl:text-xl lg:text-lg">Empa Avventura</h2>
        <h2 className="self-start 2xl:text-lg lg:text-base">
          Seleziona un'Empa Avventura per iniziare!
        </h2>
      </div>
      {/* Themed adventure section */}
      <AdventureSection />
    </div>
  );
};

export default EventContainer;

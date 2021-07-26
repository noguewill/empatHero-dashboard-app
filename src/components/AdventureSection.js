import AdventureCard from "./AdventureCard";
const AdventureSection = () => {
  return (
    <>
      {/* Container of Adventure Section */}
      <section className="w-11/12 h-2/6  flex flex-col items-center">
        <div className=" w-full h-5/6 grid grid-cols-3 gap-4 place-items-center">
          {/*Props indicates the current theme*/}
          <AdventureCard theme={0} />
          <AdventureCard theme={1} />
          <AdventureCard theme={2} />
        </div>
        {/* Adventure Theme Button Confirmation */}
        <button className="bg-empatLightGreen 2xl:w-1/5  2xl:h-12 lg:w-44 lg:h-9 rounded-lg  self-end  text-white hover:bg-opacity-70 transition-all duration-150 ease-in-out">
          <p className="2xl:text-sm font-bold  lg:text-xxs ">
            SCEGLI EMPA AVVENTURA
          </p>
        </button>
      </section>
    </>
  );
};

export default AdventureSection;

import AdventureCard from "./AdventureCard";
const AdventureSection = ({
  currAdventure,
  setCurrAdventure,
  setConfirmModal,
}) => {
  return (
    <>
      {/* Container of Adventure Section */}
      <section className="w-11/12 2xl:h-2/6 h-2/5 flex flex-col items-center">
        {/* If confirmAdventure is true */}
        <div className=" w-full h-5/6 grid grid-cols-2 gap-6 place-items-center">
          {/*Props indicates the current theme*/}
          <AdventureCard
            currAdventure={currAdventure}
            setCurrAdventure={setCurrAdventure}
          />
        </div>
        {/* Adventure Theme Button Confirmation */}

        <button
          /* If currAdventure state wasn't set by the checkboxes, disable the button */
          disabled={currAdventure === undefined ? "disabled" : ""}
          onClick={() => setConfirmModal(true)}
          className="bg-empatLightGreen 2xl:w-1/5  2xl:h-14 lg:w-44 lg:h-9 rounded-xl  self-end  text-white hover:bg-green-700 transition  ease-in-out"
        >
          <p className="2xl:text-sm font-bold  lg:text-xxs ">
            SCEGLI EMPA AVVENTURA
          </p>
        </button>
      </section>
    </>
  );
};

export default AdventureSection;

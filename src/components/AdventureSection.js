import AdventureCard from "./AdventureCard";
const AdventureSection = ({
  currAdventure,
  setCurrAdventure,
  setConfirmModal,
}) => {
  return (
    <>
      {/* Container of Adventure Section */}
      <section className="w-10.5/12 2xl:h-2/6 h-2/6 flex flex-col justify-around">
        {/* If confirmAdventure is true */}
        <div className=" w-full h-3/4 grid grid-cols-2 gap-6">
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
          className="bg-empatLightGreen 2xl:w-1/5 2xl:h-14 lg:w-44 lg:h-9 rounded-xl self-end text-white hover:bg-green-700 transition ease-in-out"
        >
          <p className="2xl:text-sm font-bold lg:text-xxs">
            SCEGLI EMPA AVVENTURA
          </p>
        </button>
      </section>
    </>
  );
};

export default AdventureSection;

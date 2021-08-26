import { useState } from "react";
import AdventureCard from "./AdventureCard";

const AdventureSection = ({
  currAdventure,
  setCurrAdventure,
  setConfirmModal,
}) => {
  const [active, setActive] = useState(false);

  return (
    <>
      {/* Container of Adventure Section */}
      <section className="w-10.5/12  2xl:h-2/6 h-2/5 flex flex-col justify-around vhSpaceBetween">
        {/* If confirmAdventure is true */}
        <div className=" w-full h-3/4 grid grid-cols-2 gap-6">
          {/*Props indicates the current theme*/}
          <AdventureCard
            currAdventure={currAdventure}
            setCurrAdventure={setCurrAdventure}
            active={active}
            setActive={setActive}
          />
        </div>
        {/* Adventure Theme Button Confirmation */}
        <button
          /* If currAdventure state wasn't set by the checkboxes, disable the button */
          disabled={currAdventure === undefined ? "disabled  " : ""}
          onClick={() => setConfirmModal(true)}
          className={`2xl:w-2/12  2xl:h-14 lg:w-44 lg:h-9 rounded-xl self-end text-white hover:bg-green-700 transition ease-in-out ${
            active ? "bg-green-700" : "bg-empatLightGreen"
          }`}
        >
          <p className={`3xl:text-base 2xl:text-sm font-bold lg:text-xxs `}>
            SCEGLI EMPA AVVENTURA
          </p>
        </button>
      </section>
    </>
  );
};

export default AdventureSection;

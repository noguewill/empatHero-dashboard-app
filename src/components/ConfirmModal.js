import adventureData from "./themeData";
import LoopCalendar from "./LoopCalendar";
const ConfirmModal = ({
  setConfirmModal,
  setConfirmAdventure,
  currAdventure,
  setAdventureDay,
}) => {
  const { todayFormatted } = LoopCalendar();
  const showWeeklyAdventure = () => {
    setConfirmModal(false);
    setConfirmAdventure(true);
    setAdventureDay(todayFormatted);
    console.log(todayFormatted);
  };
  return (
    <>
      <div className="absolute w-screen h-screen bg-gray-900 bg-opacity-30 flex justify-center items-center">
        {/* Modal container */}
        <div className="bg-white w-auto h-72 flex flex-col rounded-xl">
          <div className="w-full flex justify-end pr-5">
            <button
              onClick={() => setConfirmModal(false)}
              type="button"
              className="w-auto h-auto mt-1 lg:text-3xl text-3xl text-empatGreen hover:text-red-500 xButton transition "
            >
              x
            </button>
          </div>
          <div className=" w-full h-3/5 max-w-md flex flex-col justify-between items-center pl-4 pb-5">
            <h1 className="w-11/12 font-bold text-lg ">
              Empa Avventura selezionata
            </h1>
            <p className="w-11/12 text-sm my-2">
              Hai selezionato l'avventura{" "}
              {/* Displays the name of the theme dynamically based on the current selected checkbox */}
              <b>{adventureData[currAdventure].themeName}</b>. Una volta
              <br />
              selezionata un'Empa Avventura non è possibile tornare indietro.
              Potrai selezionare una nuova avventura solo al termine
              dell'avventura attualmente selezionata.
            </p>
            <h5 className="w-11/12 text-sm ">
              Sei sicura di voler proseguire con la tua scelta?
            </h5>
          </div>
          {/* Button container */}
          <div className="w-full h-1/6 flex justify-around items-center">
            <button
              onClick={() => setConfirmModal(false)}
              type="button"
              className="w-40 h-5/6 border border-empatGray font-bold 3xl:text-base 2xl:text-base text-xs flex justify-center items-center rounded-md hover:bg-red-500 transition-all duration-150 hover:text-white "
            >
              ANNULLA
            </button>
            <button
              onClick={() => showWeeklyAdventure()}
              type="button"
              className="w-40 h-5/6 bg-empatGreen text-white 3xl:text-base 2xl:text-base text-xs flex justify-center items-center rounded-md hover:bg-green-700 transition-all duration-150"
            >
              CONFERMA
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmModal;

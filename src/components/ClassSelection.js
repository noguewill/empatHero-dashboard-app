const ClassSelection = ({ setClassChosen }) => {
  return (
    <div className="w-9/12 flex flex-col items-center">
      <div className=" w-11/12  h-1/7 flex flex-col justify-around mb-2">
        <h1 className="self-start 3xl:text-5xl 2xl:text-3xl md:text-2xl font-bold">
          Le tue classi
        </h1>

        <h3 className="3xl:text-2xl 2xl:text-xl md:text-sm cursor-pointer mb-5">
          Seleziona una classe per visualizzare gli alunni, i loro disegni e
          gestire l’Empa Avventura.
        </h3>
      </div>
      <div className=" w-11/12 h-7/8 flex">
        {/* Class selection card */}
        <div className=" w-2.5/6 h-2/6 bg-empatLightGray  rounded-xl flex flex-col items-center justify-evenly  mr-10 dropShadow vhClassCard">
          <div className="3xl:9/12 w-11/12 h-5/6 flex flex-col justify-center py-2">
            <div className="h-3/6 self-center justify-self-center mb-5">
              <h1 className="3xl:text-5xl 2xl:text-4xl md:text-3xl font-semibold mb-5 ">
                Classe 1ª B
              </h1>
              <h6 className="text-empatBlack 3xl:text-2xl 2xl:text-xl">
                Nessuna Empa Avventura in corso
              </h6>
            </div>
            <button
              id={0}
              /* Set class state equals to the id of the button that was clicked */
              onClick={(e) => setClassChosen(e.target.id)}
              type="button"
              className="3xl:text-base 2xl:h-1/4 w-2/5 h-1/3 2xl:text-sm mr-5 self-end justify-self-end mt-2 rounded-lg border text-xs font-bold text-empatGreen hover:text-white bg-white border-empatGreen  hover:bg-empatGreen  transition duration-300 ease-in-out "
            >
              VISUALIZZA
            </button>
          </div>
        </div>

        <div className=" w-2.5/6 h-2/6 bg-empatLightGray  rounded-xl flex flex-col items-center justify-evenly  mr-10 dropShadow vhClassCard">
          <div className="3xl:9/12 w-11/12 h-5/6 flex flex-col justify-center py-2">
            <div className="h-3/6 self-center justify-self-center mb-5">
              <h1 className="3xl:text-5xl 2xl:text-4xl md:text-3xl font-semibold mb-5 ">
                Classe 3ª B
              </h1>
              <h6 className="text-empatBlack 3xl:text-2xl 2xl:text-xl">
                Avventura scelta: <b>Empa Safari</b>
              </h6>
            </div>
            <button
              id={0}
              /* Set class state equals to the id of the button that was clicked */
              onClick={(e) => setClassChosen(e.target.id)}
              type="button"
              className="3xl:text-base 2xl:h-1/4 w-2/5 h-1/3 2xl:text-sm mr-5 self-end justify-self-end mt-2 rounded-lg border text-xs font-bold text-empatGreen hover:text-white bg-white border-empatGreen  hover:bg-empatGreen  transition duration-300 ease-in-out "
            >
              VISUALIZZA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassSelection;

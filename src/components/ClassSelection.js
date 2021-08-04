const ClassSelection = ({ setClassChosen }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className=" w-11/12  h-1/7 flex flex-col justify-around mb-2">
        <h1 className="self-start 2xl:text-3xl md:text-2xl font-bold">
          Le tue classi
        </h1>

        <h3 className=" 2xl:text-xl md:text-sm cursor-pointer ">
          Seleziona una classe per visualizzare gli alunni, i loro disegni e
          gestire l’Empa Avventura.
        </h3>
      </div>
      <div className=" w-11/12 h-7/8 flex  ">
        {/* Class selection card */}
        <div className="w-4/12 h-2/5 bg-empatLightGray  rounded-lg flex flex-col  items-center justify-evenly  ">
          <div className="w-10/12 h-5/6 flex flex-col justify-center py-2">
            <div className="h-3/6 self-center justify-self-center mb-5">
              <h1 className="2xl:text-4xl md:text-3xl font-bold mb-5 ">
                Classe 1ª B
              </h1>
              <h6 className="text-empatBlack 2xl:text-xl">
                Nessuna Empa Avventura in corso
              </h6>
            </div>
            <button
              id={0}
              /* Set class state equals to the id of the button that was clicked */
              onClick={(e) => setClassChosen(e.target.id)}
              type="button"
              className="2xl:h-1/5 w-2/5 h-1/4 mr-5 self-end justify-self-end mt-2 rounded-lg border text-xs font-bold text-empatGreen hover:text-white bg-white border-empatGreen  hover:bg-empatGreen  transition duration-300 ease-in-out "
            >
              VISUALIZZA
            </button>
          </div>
        </div>

        <div className="w-4/12 h-2/5 bg-empatLightGray  rounded-lg flex flex-col  items-center justify-evenly  ">
          <div className="w-10/12 h-5/6 flex flex-col justify-center py-2">
            <div className="bg h-3/6 self-center justify-self-center mb-5">
              <h1 className="2xl:text-4xl md:text-3xl font-bold mb-5 ">
                Classe 3ª E
              </h1>
              <h6 className="text-empatBlack 2xl:text-xl">
                Avventura scelta: <b>Empa Safari</b>
              </h6>
            </div>
            <button
              id={1}
              onClick={(e) => setClassChosen(e.target.id)}
              type="button"
              className="2xl:h-1/5 w-2/5 h-1/4 mr-5 self-end justify-self-end mt-2 rounded-lg border text-xs font-bold text-empatGreen hover:text-white bg-white border-empatGreen  hover:bg-empatGreen  transition duration-300 ease-in-out "
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

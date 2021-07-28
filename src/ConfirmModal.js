const ConfirmModal = () => {
  return (
    <>
      {/*        <div className="absolute w-screen h-screen bg-gray-900 bg-opacity-30 filter blur-3xl "></div> */}
      <div className="absolute w-screen h-screen  bg-gray-900 bg-opacity-30 flex justify-center items-center">
        {/* Modal container */}
        <div className="bg-white w-auto h-72 flex flex-col rounded-xl ">
          <div className="w-full flex justify-end ">
            <button
              /* onClick={()=> closeModal()} */
              type="button"
              className=" lg:text-3xl text-empatGreen mt-2 pr-5"
            >
              x
            </button>
          </div>
          <div className=" w-full h-3/5 max-w-md flex flex-col justify-between items-center pl-4 pb-5">
            <h1 className="w-11/12 font-bold text-lg ">
              Empa Avventura selezionata
            </h1>
            <p className="w-11/12 text-sm my-2">
              Hai selezionato l'avventura <b>Empa Safari</b>. Una volta <br />
              selezionata un'Empa Avventura non è possibile tornare indietro.
              Potrai selezionare una nuova avventura solo al termine
              dell'avventura attualmente selezionata.
            </p>
            <h5 className="w-11/12 text-sm ">
              Sei sicura di voler proseguire con la tua scelta?
            </h5>
          </div>
          {/* Button container */}
          <div className="w-full h-1/6 flex justify-around items-center   ">
            <button
              type="button"
              className="w-40 h-5/6 border-2 border-empatGray font-bold 2xl:text-base text-xs flex justify-center items-center rounded-md"
            >
              ANNULLA
            </button>
            <button
              type="button"
              className="w-40 h-5/6 bg-empatGreen text-white  2xl:text-base text-xs flex justify-center items-center rounded-md"
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

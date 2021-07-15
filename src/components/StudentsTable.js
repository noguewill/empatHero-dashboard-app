const StudentsTable = () => {
  return (
    <>
      {/* Classes container */}
      <section className="w-11/12 h-2/5 flex justify-center items-center ">
        {/* TABLE */}
        <div className="w-full h-full">
          {/* Table category title container */}
          <div className="w-full h-1/6 flex">
            <div className="bg-green-500 w-full h-full grid grid-cols-6 place-items-center  font-bold 2xl:text-xl rounded-tl-xl">
              <h4 className="2xl:text-base">Alunno</h4>
              <h4 className="2xl:text-base">Soprannome</h4>
              <h4 className="2xl:text-base">Bag</h4>
              <h4 className="2xl:text-base">Carica disegno</h4>
              <h4 className="2xl:text-base">Visualizza disegno</h4>
              <h4 className="2xl:text-base">Disegno mostrato</h4>
            </div>
            <div className=" bg-green-500 w-6 h-full rounded-tr-xl"></div>
          </div>
          {/* Table inner container */}
          <div className="bg-pink-500 w-full h-6/7 grid grid-cols-6  place-items-center overflow-y-scroll">
            {/* Table column elements */}
            <div className="bg-blue-400 w-10/12 h-full grid grid-cols-1 gap-4 place-items-center 2xl:text-xl rounded-b-xl">
              <h4>first name</h4>
              <h4>first name</h4>
              <h4>first name</h4>
              <h4>first name</h4>
              <h4>first name</h4>
              <h4>first name</h4>
              <h4>first name</h4>
              <h4>first name</h4>
              <h4>first name</h4>
              <h4>first name</h4>
              <h4>first name</h4>
              <h4>first name</h4>
            </div>
            <div className="bg-blue-400 w-10/12 h-full grid grid-cols-1 gap-4 place-items-center 2xl:text-xl">
              <h4>surname</h4>
              <h4>surname</h4>
              <h4>surname</h4>
              <h4>surname</h4>
              <h4>surname</h4>
              <h4>surname</h4>
              <h4>surname</h4>
              <h4>surname</h4>
              <h4>surname</h4>
              <h4>surname</h4>
              <h4>surname</h4>
              <h4>surname</h4>
            </div>
            <div className="bg-blue-400 w-2/12 h-full grid grid-cols-1 gap-4 place-items-center 2xl:text-xl">
              <h4>1</h4>
              <h4>2</h4>
              <h4>3</h4>
              <h4>4</h4>
              <h4>5</h4>
              <h4>6</h4>
              <h4>1</h4>
              <h4>2</h4>
              <h4>3</h4>
              <h4>4</h4>
              <h4>5</h4>
              <h4>6</h4>
            </div>
            <div className="bg-blue-400 w-2/12 h-full grid grid-cols-1 gap-4 place-items-center">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
            </div>
            <div className="bg-blue-400 w-2/12 h-full grid grid-cols-1 gap-4 place-items-center">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-full "></div>
            </div>
            <div className="bg-blue-400 w-2/12 h-full grid grid-cols-1 gap-4 place-items-center">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 rounded-md "></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentsTable;

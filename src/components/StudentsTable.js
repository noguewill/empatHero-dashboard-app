import studentData from "./StudentData";

const StudentsTable = () => {
  return (
    <>
      {/* Classes container */}
      <section className="w-10/12 h-2/5 flex justify-center items-center mb-10">
        {/* TABLE */}
        <div className="w-full h-full">
          {/* Table category title container */}
          <div className="w-full h-1/6 flex">
            <div className=" bg-empatLightBlue bg-opacity-30 w-full h-full 2xl:text-lg text-xs font-bold  grid grid-cols-6 place-items-center  rounded-tl-xl">
              <h4 className="pl-14">Alunno</h4>
              <h4 className="pl-14">Soprannome</h4>
              <h4 className="pl-14">Bag</h4>
              <h4 className="pl-10">Carica disegno</h4>
              <h4 className="pl-10">Visualizza disegno</h4>
              <h4 className="pl-10">Disegno mostrato</h4>
            </div>
            <div className=" bg-empatLightBlue bg-opacity-30 w-6 h-full rounded-tr-xl"></div>
          </div>
          {/* Table inner container */}

          <div className="bg-indigo-100 w-full h-6/7 2xl:text-xl text-sm   rounded-b-xl  overflow-y-scroll-hidden scroller ">
            {/* Table column elements */}

            {studentData.map((student, index) => {
              return (
                <div
                  key={index}
                  className=" w-full h-1/6 grid grid-cols-6 place-items-center bg-gray-100 pl-8"
                >
                  <h4 className="2xl:text-l text-empatBlack">{student.name}</h4>

                  <h4 className="2xl:text-lg text-empatBlack">
                    {student.nickName}
                  </h4>
                  <h4 className=" ">{student.id}</h4>
                  <div className="btnPlus 2xl:w-7 w-5 2xl:h-7 h-5 rounded-full flex items-center justify-center cursor-pointer  duration-150 transition-all">
                    <p className="flex p-3 text-white 2xl:text-2xl">+</p>
                  </div>
                  <div className="searchIcon 2xl:w-7 2xl:h-7 w-5 h-5 rounded-full flex items-center justify-center cursor-pointer duration-150 transition-all">
                    <svg
                      className="w-3/5 h-3/5 text-center"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 12 12"
                    >
                      <g fill="none">
                        <path
                          d="M5 1a4 4 0 1 0 2.248 7.31l2.472 2.47a.75.75 0 1 0 1.06-1.06L8.31 7.248A4 4 0 0 0 5 1zM2.5 5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="border-2 border-empatGray 2xl:w-7 2xl:h-7 w-5 h-5 rounded-md hover:bg-gray-200 cursor-pointer duration-150 transition-all"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentsTable;

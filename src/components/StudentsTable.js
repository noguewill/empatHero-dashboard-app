import studentData from "./StudentData";
import React from "react";

const StudentsTable = ({ classChosen }) => {
  return (
    <>
      <section
        className={`w-10.5/12 flex flex-col justify-around 2xl:max-h-96 max-h-56`}
      >
        {/* TABLE */}
        {/* Table category title container */}
        <div className="w-full 3xl:h-16 2xl:h-14 h-14 lg:h-10 flex ">
          <div className="bg-empatLightBlue bg-opacity-30 w-full h-full z-10 3xl:text-xl 2xl:text-lg text-xs font-bold grid grid-cols-6 place-items-center rounded-tl-xl ">
            <h4 className="xl:pl-10 place-self-start self-center pl-9">
              Alunno
            </h4>
            <h4 className="vhPadding 3xl:pl-2 2xl:pl-16 xl:pl-14 pl-16">
              Soprannome
            </h4>
            <h4 className="2xl:pl-14 xl:pl-14 pl-14">Bag</h4>
            <h4 className="2xl:pl-14 xl:pl-14 pl-11">Carica disegno</h4>
            <h4 className="3xl:pl-14 2xl:pl-14 xl:pl-9 pl-5">
              Visualizza disegno
            </h4>
            <h4 className="3xl:pl-12 xl:pl-9 pl-7">Disegno mostrato</h4>
          </div>
          {/* !important  positional clutch to adapt to scroll table width*/}
          <div className=" bg-empatLightBlue bg-opacity-30 w-6 h-full rounded-tr-xl z-10"></div>
        </div>

        {/* Table inner container */}
        <div className="w-full bg-empatLightGray dropShadow rounded-b-xl studentsParentContainer ">
          <div className="bg-empatLightGray studentsTableContainer vhsmFont py-1 overflow-y-scroll 3xl:text-2xl 2xl:text-xl text-xs  flex flex-col justify-around ">
            {/* Table column elements */}
            <div className="w-full  h-full grid 2xl:gap-6 gap-3 grid-cols-6 place-items-center py-2 pl-10">
              {studentData[classChosen].map((student, index) => {
                return (
                  /* Table elements container */
                  <React.Fragment key={index}>
                    <h4 className="2xl:text-xl place-self-start self-center text-empatBlack">
                      {student.name}
                    </h4>

                    <h4 className="2xl:text-xl place-self-start self-center 2xl:pl-12 lg:pl-8 pl-5 text-empatBlack">
                      {student.nickName}
                    </h4>

                    <h4 key={index}>{student.id}</h4>

                    <div className="btnPlus relative 2xl:text-2xl 2xl:w-8 w-6 2xl:h-8 h-6  flex items-center justify-center duration-150 transition-all">
                      {/* Plus button */}

                      <input
                        className="absolute w-14 -left-6 opacity-0"
                        type="file"
                        value=""
                        title=" "
                      />

                      <svg
                        className="w-96 h-full"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1ZM13 16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16V13H8C7.73478 13 7.48043 12.8946 7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929C7.48043 11.1054 7.73478 11 8 11H11V8C11 7.73478 11.1054 7.48043 11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289C12.8946 7.48043 13 7.73478 13 8V11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13H13V16Z"
                          fill="#3FA482"
                        />
                      </svg>
                    </div>
                    {/* Search Icon */}
                    <div className="2xl:mr-0 mr-4 searchIcon 2xl:w-8 2xl:h-8 w-6 h-6 flex items-center justify-center cursor-pointer duration-150 transition-all checkBoxIcon">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 1C5.93453 1 1 5.93453 1 12C1 18.0655 5.93453 23 12 23C18.0655 23 23 18.0655 23 12C23 5.93453 18.0655 1 12 1ZM17.2313 17.2313C17.0594 17.4031 16.8263 17.4996 16.5833 17.4996C16.3403 17.4996 16.1073 17.4031 15.9354 17.2313L13.481 14.7775C12.4441 15.491 11.178 15.7913 9.93113 15.6193C8.68426 15.4474 7.54665 14.8157 6.74154 13.8483C5.93643 12.8808 5.52193 11.6473 5.5794 10.39C5.63686 9.13264 6.16214 7.94216 7.05215 7.05215C7.94216 6.16214 9.13264 5.63686 10.39 5.5794C11.6473 5.52193 12.8808 5.93643 13.8483 6.74154C14.8157 7.54665 15.4474 8.68426 15.6193 9.93113C15.7913 11.178 15.491 12.4441 14.7775 13.481L17.2313 15.9354C17.4031 16.1073 17.4996 16.3403 17.4996 16.5833C17.4996 16.8263 17.4031 17.0594 17.2313 17.2313Z"
                          fill="#F08645"
                        />
                        <path
                          d="M10.5 13.5C12.1569 13.5 13.5 12.1569 13.5 10.5C13.5 8.84315 12.1569 7.5 10.5 7.5C8.84315 7.5 7.5 8.84315 7.5 10.5C7.5 12.1569 8.84315 13.5 10.5 13.5Z"
                          fill="#F08645"
                        />
                      </svg>
                    </div>

                    {/* Student's table checkbox */}
                    <input
                      type="checkbox"
                      className="border-2 border-empatLightGray 2xl:w-7 2xl:h-7 w-5 h-5 rounded-sm hover:bg-gray-200 cursor-pointer duration-150 transition-all"
                    ></input>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentsTable;

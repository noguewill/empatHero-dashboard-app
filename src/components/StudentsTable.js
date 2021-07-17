const StudentsTable = () => {
  return (
    <>
      {/* Classes container */}
      <section className="w-10/12 h-2/5 flex justify-center items-center mb-10">
        {/* TABLE */}
        <div className="w-full h-full">
          {/* Table category title container */}
          <div className="w-full h-1/6 flex">
            <div className="bg-green-500 w-full h-full 2xl:text-xl text-xs font-bold  grid grid-cols-6 place-items-center  rounded-tl-xl">
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
          <div className="bg-pink-500 w-full h-6/7 2xl:text-xl text-sm grid grid-cols-6 rounded-b-xl place-items-center overflow-y-scroll scroller ">
            {/* Table column elements */}
            <div className="bg-blue-400 w-9/12 h-full  grid grid-cols-1 gap-5 place-items-center  py-2">
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
            <div className="bg-blue-400 w-10/12 h-full grid grid-cols-1 gap-4 place-items-center 2xl:text-xl py-2">
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
            <div className="bg-blue-400 w-2/12 h-full grid grid-cols-1 gap-4 place-items-center 2xl:text-xl py-2">
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
            <div className="bg-blue-400 w-3/12 h-full text-lg grid grid-cols-1 gap-4 place-items-center text-white py-2">
              <div className="bg-gray-500 2xl:w-7 w-5  2xl:h-7 h-5 rounded-full flex justify-center items-center">
                +
              </div>
              <div className="bg-gray-500 2xl:w-7 w-5 h-5 2xl:h-7 rounded-full flex justify-center items-center">
                +
              </div>
              <div className="bg-gray-500 2xl:w-7 w-5 h-5 2xl:h-7 rounded-full flex justify-center items-center">
                +
              </div>
              <div className="bg-gray-500 2xl:w-7 w-5 h-5 2xl:h-7 rounded-full flex justify-center items-center">
                +
              </div>
              <div className="bg-gray-500 2xl:w-7 w-5 h-5 2xl:h-7 rounded-full flex justify-center items-center">
                +
              </div>
              <div className="bg-gray-500 2xl:w-7 w-5 h-5 2xl:h-7 rounded-full flex justify-center items-center">
                +
              </div>
              <div className="bg-gray-500 2xl:w-7 w-5 h-5 2xl:h-7 rounded-full flex justify-center items-center">
                +
              </div>
              <div className="bg-gray-500 2xl:w-7 w-5 h-5 2xl:h-7 rounded-full flex justify-center items-center">
                +
              </div>
              <div className="bg-gray-500 2xl:w-7 w-5 h-5 2xl:h-7 rounded-full flex justify-center items-center">
                +
              </div>
              <div className="bg-gray-500 2xl:w-7 w-5 h-5 2xl:h-7 rounded-full flex justify-center items-center">
                +
              </div>
              <div className="bg-gray-500 2xl:w-7 w-5 h-5 2xl:h-7 rounded-full flex justify-center items-center">
                +
              </div>
              <div className="bg-gray-500 2xl:w-7 w-5 h-5 2xl:h-7 rounded-full flex justify-center items-center">
                +
              </div>
            </div>
            <div className="bg-blue-400 w-3/12 h-full grid grid-cols-1 gap-4 place-items-center py-2">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-full flex items-center justify-center">
                <svg
                  className="w-3/5 text-center h-3/5"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  /* style={-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);} */
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 12 12"
                >
                  <g fill="none">
                    <path
                      d="M5 1a4 4 0 1 0 2.248 7.31l2.472 2.47a.75.75 0 1 0 1.06-1.06L8.31 7.248A4 4 0 0 0 5 1zM2.5 5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0z"
                      fill="#626262"
                    />
                  </g>
                </svg>
              </div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-full flex items-center justify-center">
                {" "}
                <svg
                  className="w-3/5 text-center h-3/5"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  /* style={-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);} */
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 12 12"
                >
                  <g fill="none">
                    <path
                      d="M5 1a4 4 0 1 0 2.248 7.31l2.472 2.47a.75.75 0 1 0 1.06-1.06L8.31 7.248A4 4 0 0 0 5 1zM2.5 5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0z"
                      fill="#626262"
                    />
                  </g>
                </svg>
              </div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-full flex items-center justify-center">
                {" "}
                <svg
                  className="w-3/5 text-center h-3/5"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  /* style={-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);} */
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 12 12"
                >
                  <g fill="none">
                    <path
                      d="M5 1a4 4 0 1 0 2.248 7.31l2.472 2.47a.75.75 0 1 0 1.06-1.06L8.31 7.248A4 4 0 0 0 5 1zM2.5 5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0z"
                      fill="#626262"
                    />
                  </g>
                </svg>
              </div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-full flex items-center justify-center">
                {" "}
                <svg
                  className="w-3/5 text-center h-3/5"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  /* style={-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);} */
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 12 12"
                >
                  <g fill="none">
                    <path
                      d="M5 1a4 4 0 1 0 2.248 7.31l2.472 2.47a.75.75 0 1 0 1.06-1.06L8.31 7.248A4 4 0 0 0 5 1zM2.5 5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0z"
                      fill="#626262"
                    />
                  </g>
                </svg>
              </div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-full flex items-center justify-center">
                {" "}
                <svg
                  className="w-3/5 text-center h-3/5"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  /* style={-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);} */
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 12 12"
                >
                  <g fill="none">
                    <path
                      d="M5 1a4 4 0 1 0 2.248 7.31l2.472 2.47a.75.75 0 1 0 1.06-1.06L8.31 7.248A4 4 0 0 0 5 1zM2.5 5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0z"
                      fill="#626262"
                    />
                  </g>
                </svg>
              </div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-full flex items-center justify-center">
                {" "}
                <svg
                  className="w-3/5 text-center h-3/5"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  /* style={-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);} */
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 12 12"
                >
                  <g fill="none">
                    <path
                      d="M5 1a4 4 0 1 0 2.248 7.31l2.472 2.47a.75.75 0 1 0 1.06-1.06L8.31 7.248A4 4 0 0 0 5 1zM2.5 5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0z"
                      fill="#626262"
                    />
                  </g>
                </svg>
              </div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-full flex items-center justify-center">
                {" "}
                <svg
                  className="w-3/5 text-center h-3/5"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  /* style={-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);} */
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 12 12"
                >
                  <g fill="none">
                    <path
                      d="M5 1a4 4 0 1 0 2.248 7.31l2.472 2.47a.75.75 0 1 0 1.06-1.06L8.31 7.248A4 4 0 0 0 5 1zM2.5 5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0z"
                      fill="#626262"
                    />
                  </g>
                </svg>
              </div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-full flex items-center justify-center">
                <svg
                  className="w-3/5 text-center h-3/5"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  /* style={-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);} */
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 12 12"
                >
                  <g fill="none">
                    <path
                      d="M5 1a4 4 0 1 0 2.248 7.31l2.472 2.47a.75.75 0 1 0 1.06-1.06L8.31 7.248A4 4 0 0 0 5 1zM2.5 5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0z"
                      fill="#626262"
                    />
                  </g>
                </svg>
              </div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-full flex items-center justify-center">
                <svg
                  className="w-3/5 text-center h-3/5"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  /* style={-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);} */
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 12 12"
                >
                  <g fill="none">
                    <path
                      d="M5 1a4 4 0 1 0 2.248 7.31l2.472 2.47a.75.75 0 1 0 1.06-1.06L8.31 7.248A4 4 0 0 0 5 1zM2.5 5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0z"
                      fill="#626262"
                    />
                  </g>
                </svg>
              </div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-full flex items-center justify-center">
                {" "}
                <svg
                  className="w-3/5 text-center h-3/5"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  /* style={-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);} */
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 12 12"
                >
                  <g fill="none">
                    <path
                      d="M5 1a4 4 0 1 0 2.248 7.31l2.472 2.47a.75.75 0 1 0 1.06-1.06L8.31 7.248A4 4 0 0 0 5 1zM2.5 5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0z"
                      fill="#626262"
                    />
                  </g>
                </svg>
              </div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-full flex items-center justify-center">
                {" "}
                <svg
                  className="w-3/5 text-center h-3/5"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  /* style={-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);} */
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 12 12"
                >
                  <g fill="none">
                    <path
                      d="M5 1a4 4 0 1 0 2.248 7.31l2.472 2.47a.75.75 0 1 0 1.06-1.06L8.31 7.248A4 4 0 0 0 5 1zM2.5 5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0z"
                      fill="#626262"
                    />
                  </g>
                </svg>
              </div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-full flex items-center justify-center">
                {" "}
                <svg
                  className="w-3/5 text-center h-3/5"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  /* style={-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);} */
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 12 12"
                >
                  <g fill="none">
                    <path
                      d="M5 1a4 4 0 1 0 2.248 7.31l2.472 2.47a.75.75 0 1 0 1.06-1.06L8.31 7.248A4 4 0 0 0 5 1zM2.5 5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0z"
                      fill="#626262"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="bg-blue-400 w-3/12 h-full grid grid-cols-1 gap-4 place-items-center py-2">
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-md "></div>
              <div className="bg-gray-500 2xl:w-7 2xl:h-7 w-5 h-5 rounded-md "></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentsTable;

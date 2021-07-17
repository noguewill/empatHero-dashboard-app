const CalendarSideBar = () => {
  return (
    /* Calendar sidebar container */
    <div className="bg-gray-600 w-2/6 h-6/7 flex flex-col items-center justify-between ">
      {/* Calendar container */}
      <div className="bg-pink-400 w-full h-3/5 flex justify-center items-end ">
        <div className="bg-red-500 w-10/12 h-6/7 flex flex-col justify-around font-bold">
          <div className="bg-yellow-500 w-full h-1/5 flex justify-between items-center">
            <div className="w-2/12 h-full bg-green-400 flex justify-center items-center">
              <div className="w-4 h-4 bg-blue-400">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z"
                    fill="black"
                    fill-opacity="0.54"
                  />
                </svg>
              </div>
            </div>
            <div className="flex font-bold 2xl:text-xl lg:text-lg">
              <h1 className="mr-1">July 2021</h1>
            </div>
            <div className="w-2/12 h-full bg-green-400 flex justify-center items-center">
              <div className="w-4 h-4 bg-blue-400">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
                    fill="black"
                    fill-opacity="0.54"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-indigo-700  w-full h-1/7 2xl:text-base lg:text-xs grid grid-cols-7 place-items-center ">
            <h4 className="">Lun</h4>
            <h4 className="">Mar</h4>
            <h4 className="">Mer</h4>
            <h4 className="">Gio</h4>
            <h4 className="">Ven</h4>
            <h4 className="">Sab</h4>
            <h4 className="">Dom</h4>
          </div>
          <div className="bg-indigo-400 w-full h-5/6 2xl:text-base lg:text-xs grid grid-cols-7 place-items-center">
            <div className="bg-gray-600 w-9/12 h-full  flex flex-col justify-around items-center text-center">
              <div className="w-full h-1/7 bg-blue-400 text-gray-300">29</div>
              <div className="w-full h-1/7 bg-blue-400">6</div>
              <div className="w-full h-1/7 bg-blue-400">13</div>
              <div className="w-full h-1/7 bg-blue-400">20</div>
              <div className="w-full h-1/7 bg-blue-400">27</div>
            </div>
            <div className="bg-gray-600 w-9/12 h-full flex flex-col justify-around items-center text-center">
              <div className="w-full h-2/7 bg-blue-400 parent items-center">
                <svg
                  className=" div1"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9167 6.58775e-05C22.1811 -0.00937931 29.5725 0.987433 31.5523 9.0668C33.558 17.2517 28.4816 24.8286 23.1448 29.4969C18.7947 33.3022 13.4401 32.5579 9.12049 28.6889C3.93794 24.047 -1.51497 17.1445 0.387458 9.11379C2.29819 1.04801 9.68325 0.00946432 15.9167 6.58775e-05Z"
                    fill="#F08645"
                  />
                </svg>
                <p className="div2">21</p>
              </div>
              <div className="w-full h-2/7 bg-blue-400 parent items-center">
                <svg
                  className=" div1"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9167 6.58775e-05C22.1811 -0.00937931 29.5725 0.987433 31.5523 9.0668C33.558 17.2517 28.4816 24.8286 23.1448 29.4969C18.7947 33.3022 13.4401 32.5579 9.12049 28.6889C3.93794 24.047 -1.51497 17.1445 0.387458 9.11379C2.29819 1.04801 9.68325 0.00946432 15.9167 6.58775e-05Z"
                    fill="#F08645"
                  />
                </svg>
                <p className="div2">21</p>
              </div>
              <div className="w-full h-2/7 bg-blue-400 parent items-center">
                <svg
                  className=" div1"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9167 6.58775e-05C22.1811 -0.00937931 29.5725 0.987433 31.5523 9.0668C33.558 17.2517 28.4816 24.8286 23.1448 29.4969C18.7947 33.3022 13.4401 32.5579 9.12049 28.6889C3.93794 24.047 -1.51497 17.1445 0.387458 9.11379C2.29819 1.04801 9.68325 0.00946432 15.9167 6.58775e-05Z"
                    fill="#F08645"
                  />
                </svg>
                <p className="div2">21</p>
              </div>
              <div className="w-full h-2/7 bg-blue-400 parent items-center">
                <svg
                  className=" div1"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9167 6.58775e-05C22.1811 -0.00937931 29.5725 0.987433 31.5523 9.0668C33.558 17.2517 28.4816 24.8286 23.1448 29.4969C18.7947 33.3022 13.4401 32.5579 9.12049 28.6889C3.93794 24.047 -1.51497 17.1445 0.387458 9.11379C2.29819 1.04801 9.68325 0.00946432 15.9167 6.58775e-05Z"
                    fill="#F08645"
                  />
                </svg>
                <p className="div2">21</p>
              </div>
              <div className="w-full h-2/7 bg-blue-400 parent items-center">
                <svg
                  className=" div1"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9167 6.58775e-05C22.1811 -0.00937931 29.5725 0.987433 31.5523 9.0668C33.558 17.2517 28.4816 24.8286 23.1448 29.4969C18.7947 33.3022 13.4401 32.5579 9.12049 28.6889C3.93794 24.047 -1.51497 17.1445 0.387458 9.11379C2.29819 1.04801 9.68325 0.00946432 15.9167 6.58775e-05Z"
                    fill="#F08645"
                  />
                </svg>
                <p className="div2">21</p>
              </div>
            </div>
            <div className="bg-gray-600 w-9/12 h-full flex flex-col justify-around items-center text-center">
              <div className="w-full h-1/7 bg-blue-400">1</div>
              <div className="w-full h-1/7 bg-blue-400">8</div>
              <div className="w-full h-1/7 bg-blue-400">15</div>
              <div className="w-full h-1/7 bg-blue-400">22</div>
              <div className="w-full h-1/7 bg-blue-400">29</div>
            </div>
            <div className="bg-gray-600 w-9/12 h-full flex flex-col justify-around items-center text-center">
              <div className="w-full h-1/7 bg-blue-400">2</div>
              <div className="w-full h-1/7 bg-blue-400">9</div>
              <div className="w-full h-1/7 bg-blue-400">16</div>
              <div className="w-full h-1/7 bg-blue-400">23</div>
              <div className="w-full h-1/7 bg-blue-400">30</div>
            </div>
            <div className="bg-gray-600 w-9/12 h-full flex flex-col justify-around items-center text-center">
              <div className="w-full h-1/7 bg-blue-400">3</div>
              <div className="w-full h-1/7 bg-blue-400">10</div>
              <div className="w-full h-1/7 bg-blue-400">17</div>
              <div className="w-full h-1/7 bg-blue-400">24</div>
              <div className="w-full h-1/7 bg-blue-400">31</div>
            </div>
            <div className="bg-gray-600 w-9/12 h-full flex flex-col justify-around items-center text-center">
              <div className="w-full h-1/7 bg-blue-400">4</div>
              <div className="w-full h-1/7 bg-blue-400">11</div>
              <div className="w-full h-1/7 bg-blue-400">18</div>
              <div className="w-full h-1/7 bg-blue-400">25</div>
              <div className="w-full h-1/7 bg-blue-400 text-gray-300">1</div>
            </div>
            <div className="bg-gray-600 w-9/12 h-full flex flex-col justify-around items-center text-center">
              <div className="w-full h-1/7 bg-blue-400">5</div>
              <div className="w-full h-1/7 bg-blue-400">12</div>
              <div className="w-full h-1/7 bg-blue-400">19</div>
              <div className="w-full h-1/7 bg-blue-400">26</div>
              <div className="w-full h-1/7 bg-blue-400 text-gray-300">2</div>
            </div>
          </div>
        </div>
      </div>
      {/* Calendar Legend c0ntainer */}
      <div className="bg-pink-400 w-full h-2/6 2xl:text-base text-sm flex flex-col justify-evenly items-center">
        <div className="bg-gray-500 w-5/6 h-1/6 flex items-center">
          <div className="bg-gray-200 w-14 h-full 2xl:mr-5">
            <svg
              className="w-full h-full"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.5091 0.454981C20.1701 0.0611384 26.9777 -1.12807 30.4461 3.13445C33.8943 7.37211 30.7707 13.2401 29.0645 18.3429C27.6084 22.6979 25.8577 27.0464 21.6871 29.3312C17.1131 31.837 11.2064 33.194 6.68568 30.6027C2.4207 28.1579 2.80345 22.5732 1.81455 17.9399C0.876558 13.5452 -1.42463 8.85801 1.25643 5.16523C4.07168 1.28761 9.55923 0.799352 14.5091 0.454981Z"
                fill="#3FA482"
              />
            </svg>
          </div>
          <h2 className="2xl:text-lg">Giornata dell'Empatia</h2>
        </div>
        <div className="bg-gray-500 w-5/6 h-1/6 flex items-center">
          <div className="bg-gray-200 w-14 h-full 2xl:mr-5">
            <svg
              className="w-full h-full"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.9167 6.58775e-05C22.1811 -0.00937931 29.5725 0.987433 31.5523 9.0668C33.558 17.2517 28.4816 24.8286 23.1448 29.4969C18.7947 33.3022 13.4401 32.5579 9.12049 28.6889C3.93794 24.047 -1.51497 17.1445 0.387458 9.11379C2.29819 1.04801 9.68325 0.00946432 15.9167 6.58775e-05Z"
                fill="#F08645"
              />
            </svg>
          </div>
          <h2 className="2xl:text-lg">Inizio EmpAvventura</h2>
        </div>
        <div className="bg-gray-500 w-5/6 h-1/6 flex items-center">
          <div className="bg-gray-200 w-14 h-full 2xl:mr-5">
            <svg
              className="w-full h-full"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.4771 0.0174261C25.7412 0.342614 29.852 7.1217 31.6313 13.6623C33.0293 18.8017 30.3141 23.7263 25.816 26.9956C20.6096 30.7797 13.8882 33.901 8.29829 30.6213C1.70412 26.7523 -1.56677 19.1947 0.733381 12.2791C3.13717 5.05179 10.3323 -0.347188 18.4771 0.0174261Z"
                fill="#7EBCF3"
              />
            </svg>
          </div>
          <h2 className="2xl:text-lg">Creazione atti di gentilezza</h2>
        </div>
      </div>
    </div>
  );
};

export default CalendarSideBar;

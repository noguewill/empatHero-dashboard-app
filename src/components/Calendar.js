const Calendar = () => {
  return (
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
  );
};

export default Calendar;

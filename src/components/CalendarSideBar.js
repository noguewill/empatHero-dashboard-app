const CalendarSideBar = () => {
  return (
    /* Calendar sidebar container */
    <div className="bg-gray-600 w-2/6 h-6/7 flex flex-col items-center justify-evenly ml-4">
      {/* Calendar container */}
      <div className="bg-pink-400 w-full h-3/5 flex justify-center items-center ">
        <div className="bg-red-500 w-11/12 h-6/7 flex flex-col justify-around">
          <div className="bg-yellow-500 w-full h-1/5 flex justify-around items-center">
            <div className="w-2/12 h-full bg-green-400 flex justify-center items-center">
              <div className="w-10 h-10 bg-blue-400"></div>
            </div>
            <div className="flex font-bold 2xl:text-xl">
              <h1 className="mr-1 2xl:text-2xl font-bold">Maggio 2020</h1>
            </div>
            <div className="w-2/12 h-full bg-green-400 flex justify-center items-center">
              <div className="w-10 h-10 bg-blue-400"></div>
            </div>
          </div>
          <div className="w-full h-1/7 bg-indigo-700 grid grid-cols-7 place-items-center">
            <h4 className="">Lun</h4>
            <h4 className="">Mar</h4>
            <h4 className="">Mer</h4>
            <h4 className="">Gio</h4>
            <h4 className="">Ven</h4>
            <h4 className="">Sab</h4>
            <h4 className="">Dom</h4>
          </div>
          <div className="bg-indigo-400 w-full h-4/6 grid grid-cols-7 place-items-center">
            <div className="bg-gray-600 w-8/12 h-full flex flex-col justify-around items-center text-center">
              <div className="w-full h-1/7 bg-blue-400">29</div>
              <div className="w-full h-1/7 bg-blue-400">6</div>
              <div className="w-full h-1/7 bg-blue-400">13</div>
              <div className="w-full h-1/7 bg-blue-400">20</div>
              <div className="w-full h-1/7 bg-blue-400">27</div>
            </div>
            <div className="bg-gray-600 w-8/12 h-full flex flex-col justify-around items-center text-center">
              <div className="w-full h-1/7 bg-blue-400">30</div>
              <div className="w-full h-1/7 bg-blue-400">7</div>
              <div className="w-full h-1/7 bg-blue-400">14</div>
              <div className="w-full h-1/7 bg-blue-400">21</div>
              <div className="w-full h-1/7 bg-blue-400">28</div>
            </div>
            <div className="bg-gray-600 w-8/12 h-full flex flex-col justify-around items-center text-center">
              <div className="w-full h-1/7 bg-blue-400">1</div>
              <div className="w-full h-1/7 bg-blue-400">8</div>
              <div className="w-full h-1/7 bg-blue-400">15</div>
              <div className="w-full h-1/7 bg-blue-400">22</div>
              <div className="w-full h-1/7 bg-blue-400">29</div>
            </div>
            <div className="bg-gray-600 w-8/12 h-full flex flex-col justify-around items-center text-center">
              <div className="w-full h-1/7 bg-blue-400">2</div>
              <div className="w-full h-1/7 bg-blue-400">9</div>
              <div className="w-full h-1/7 bg-blue-400">16</div>
              <div className="w-full h-1/7 bg-blue-400">23</div>
              <div className="w-full h-1/7 bg-blue-400">30</div>
            </div>
            <div className="bg-gray-600 w-8/12 h-full flex flex-col justify-around items-center text-center">
              <div className="w-full h-1/7 bg-blue-400">3</div>
              <div className="w-full h-1/7 bg-blue-400">10</div>
              <div className="w-full h-1/7 bg-blue-400">17</div>
              <div className="w-full h-1/7 bg-blue-400">24</div>
              <div className="w-full h-1/7 bg-blue-400">31</div>
            </div>
            <div className="bg-gray-600 w-8/12 h-full flex flex-col justify-around items-center text-center">
              <div className="w-full h-1/7 bg-blue-400">4</div>
              <div className="w-full h-1/7 bg-blue-400">11</div>
              <div className="w-full h-1/7 bg-blue-400">18</div>
              <div className="w-full h-1/7 bg-blue-400">25</div>
              <div className="w-full h-1/7 bg-blue-400">1</div>
            </div>
            <div className="bg-gray-600 w-8/12 h-full flex flex-col justify-around items-center text-center">
              <div className="w-full h-1/7 bg-blue-400">5</div>
              <div className="w-full h-1/7 bg-blue-400">12</div>
              <div className="w-full h-1/7 bg-blue-400">19</div>
              <div className="w-full h-1/7 bg-blue-400">26</div>
              <div className="w-full h-1/7 bg-blue-400">2</div>
            </div>
          </div>
        </div>
      </div>
      {/* Calendar Legend c0ntainer */}
      <div className="bg-pink-400 w-full h-2/6 flex flex-col justify-around items-center">
        <div className="bg-gray-500 w-5/6 h-1/5 flex items-center">
          <div className="bg-gray-200 w-14 h-full 2xl:mr-5"></div>
          <h2 className="2xl:text-2xl">Giornata della'Emapatia</h2>
        </div>
        <div className="bg-gray-500 w-5/6 h-1/5 flex items-center">
          <div className="bg-gray-200 w-14 h-full 2xl:mr-5"></div>
          <h2 className="2xl:text-2xl">Inizio Empavventura</h2>
        </div>
        <div className="bg-gray-500 w-5/6 h-1/5 flex items-center">
          <div className="bg-gray-200 w-14 h-full 2xl:mr-5"></div>
          <h2 className="2xl:text-2xl">Creazione atti di gentilezza</h2>
        </div>
      </div>
    </div>
  );
};

export default CalendarSideBar;

const Calendar = () => {
  const dateObj = new Date();
  console.log(dateObj.getUTCMonth() + 1); // This gets an integer number of the day
  console.log(dateObj.toLocaleString("it-IT", { month: "long" }));
  let monthStr = dateObj.toLocaleString("it-IT", { month: "long" }); //months from 1-12.
  monthStr = monthStr.charAt().toUpperCase() + monthStr.slice(1);
  const month = dateObj.getMonth() + 1;

  const year = dateObj.getUTCFullYear();
  const daysInMonth = new Date(month, year, 0).getDate();

  let numDays = [];
  for (let i = 1; i < daysInMonth; i++) {
    numDays.push(i);
  }

  return (
    <div className="w-full h-3/5 flex justify-center items-end ">
      <div className=" w-10/12 h-6/7  flex flex-col justify-around font-bold">
        <div className=" w-full  h-1/5 flex justify-between items-center">
          <div className="w-2/12 h-full flex justify-center items-center">
            <div className="w-3 h-3 ">
              <svg
                className="w-3 h-3"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z"
                  fill="black"
                  fillOpacity="0.54"
                />
              </svg>
            </div>
          </div>
          <div className="flex font-bold 2xl:text-xl lg:text-lg">
            <h1 className="mr-1">
              {monthStr} {year}
            </h1>
          </div>
          <div className="w-2/12 h-full flex justify-center items-center">
            <div className="w-3 h-3 ">
              <svg
                className="w-3 h-3"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
                  fill="black"
                  fillOpacity="0.54"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className=" w-full h-1/7 2xl:text-base lg:text-xs text-empatGray grid grid-cols-7 place-items-center ">
          <h4 className="">Lun</h4>
          <h4 className="">Mar</h4>
          <h4 className="">Mer</h4>
          <h4 className="">Gio</h4>
          <h4 className="">Ven</h4>
          <h4 className="">Sab</h4>
          <h4 className="">Dom</h4>
        </div>
        <div className="w-full h-5/6   2xl:text-base lg:text-xs flex flex-col justify-evenly">
          <div className="  w-full grid grid-cols-7 place-items-center ">
            <div className="w-4/6 text-empatGray  h-9  flex justify-center items-center">
              29
            </div>
            <div className="w-4/6 text-empatGray  h-9  flex justify-center items-center">
              31
            </div>
            <div className="w-4/6  h-9   flex justify-center items-center">
              1
            </div>
            <div className="w-4/6  h-9   flex justify-center items-center">
              {/*  {numDays[0]} */}2
            </div>
            <div className="w-4/6  h-9   flex justify-center items-center">
              {/*  {numDays[0 + 1]} */}3
            </div>
            <div className="w-4/6  h-9   flex justify-center items-center">
              {/* {numDays[0 + 2]} */}4
            </div>
            <div className="w-4/6  h-9   flex justify-center items-center">
              {/*   {numDays[0 + 3]} */}5
            </div>
          </div>
          <div className=" w-full grid grid-cols-7 place-items-center ">
            <div className="w-4/6  h-9  flex justify-center items-center">
              {/*  {numDays[0 + 4]} */}6
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              7
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              8
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              9
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              10
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              11
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              12
            </div>
          </div>
          <div className=" w-full grid grid-cols-7 place-items-center ">
            <div className="w-4/6  h-9  flex justify-center items-center">
              {/*   {numDays[1]} */}13
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              14
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              15
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              16
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              17
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              18
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              19
            </div>
          </div>
          <div className=" w-full grid grid-cols-7 place-items-center ">
            <div className="w-4/6  h-9  flex justify-center items-center">
              {/* {numDays[1]} */}20
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              21
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              22
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              23
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              24
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              25
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              26
            </div>
          </div>
          <div className=" w-full grid grid-cols-7 place-items-center ">
            <div className="w-4/6  h-9  flex justify-center items-center">
              27
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              28
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              29
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              30
            </div>
            <div className="w-4/6  h-9  flex justify-center items-center">
              31
            </div>
            <div className="w-4/6 text-empatGray  h-9  flex justify-center items-center">
              1
            </div>
            <div className="w-4/6  text-empatGray h-9  flex justify-center items-center">
              2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

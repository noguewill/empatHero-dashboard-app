import EmpatHeroLogo from "./assets/EmpatHeroLogo";
const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center ">
      <nav className="bg-gray-600 w-11/12   flex justify-between items-center 2xl:px-10 lg:px-8 ">
        <div className=" bg-gray-500  flex items-center ">
          <EmpatHeroLogo />
        </div>
        <div className="bg-gray-500 w-1/5 flex items-center justify-around ">
          <div>
            <h2 className="2xl:text-xl text-sm font-bold ">Ciao Cristina!</h2>
          </div>
          <div className="2xl:w-24 2xl:h-14 w-16 h-7 rounded-md border border-green-500 flex items-center justify-center">
            <h2 className="2xl:text-base text-xs font-bold"> ESCI</h2>
          </div>
          <div className="bg-green-500 2xl:w-9 2xl:h-9  2xl:text-2xl w-7 h-7 text-white rounded-full  flex justify-center items-center font-bold ">
            ?
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import EmpatHeroLogo from "./assets/EmpatHeroLogo";

const Navbar = () => {
  return (
    <div className="w-screen h-1/7 flex items-center justify-center py-8 vhNavbar">
      <nav className=" w-11/12  flex justify-between items-center ">
        <div className="  flex items-center ">
          <EmpatHeroLogo />
        </div>

        <div className="w-1/5 flex items-center justify-between pl-4">
          <div>
            <h2 className="2xl:text-xl text-sm font-bold">Ciao Cristina!</h2>
          </div>

          <button className=" 2xl:w-24 2xl:h-12 w-16 h-9 rounded-lg border border-green-500 flex justify-center items-center hover:bg-green-400 hover:text-white transition-all duration-150 ease-in-out">
            <h3 className="2xl:text-sm text-xxs font-bold mt-1">ESCI</h3>
          </button>

          <div className="bg-green-500 2xl:w-9 2xl:h-9 2xl:text-2xl w-7 h-7 text-white rounded-full  flex justify-center items-center font-bold cursor-pointer hover:bg-opacity-70 transition-all duration-150 ease-in-out ">
            ?
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

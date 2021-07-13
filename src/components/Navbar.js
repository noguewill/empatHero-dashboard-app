import EmpatHeroLogo from "./assets/EmpatHeroLogo";
const Navbar = () => {
  return (
    <div className="bg-gray-600 w-full h-1/6 flex justify-center items-center ">
      <nav className="w-11/12   flex justify-between items-center  ">
        <div className=" bg-gray-500 w-2/6 flex items-center p-5  ">
          <EmpatHeroLogo />
        </div>
        <div className="bg-gray-500 w-1/5 h-full flex items-center justify-around ">
          <div>
            <h2 className="font-bold text-sm ">Ciao, Cristina!</h2>
          </div>
          <div className="w-16 h-7 rounded border border-green-500 flex items-center justify-center">
            <h2 className="text-xs "> ESCI</h2>
          </div>
          <div className="w-7 h-7 rounded-full bg-green-500 flex justify-center items-center">
            ?
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

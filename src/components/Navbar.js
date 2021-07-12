import EmpatHeroLogo from "./assets/EmpatHeroLogo";
const Navbar = () => {
  return (
    <>
      <nav className="w-full  h-20 flex justify-between items-center px-10 ">
        <div className="  flex items-center p-5 ">
          <EmpatHeroLogo />
        </div>
        <div className="w-72 h-full flex items-center justify-evenly ">
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
    </>
  );
};

export default Navbar;

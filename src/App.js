import CalendarSideBar from "./components/CalendarSideBar";
import EventContainer from "./components/EventContainer";
import NavBar from "./components/Navbar";
const App = () => {
  return (
    <>
      <NavBar />
      {/* Placeholder Flexbox container positioning */}
      <div className="flex w-full h-5/6">
        <div className="w-2/6 h-full bg-purple-500 flex flex-col items-center justify-around">
          <div className="bg-pink-400 w-5/6 h-3/6"></div>
          <div className="bg-pink-400 w-5/6 h-2/6"></div>
        </div>
        <div className="w-full h-full bg-indigo-500 flex flex-col items-center justify-around ">
          <div className="w-5/6 h-3/6 bg-blue-500"></div>
          <div className="w-5/6 h-2/6 bg-blue-500"></div>
        </div>
      </div>
    </>
  );
};

export default App;

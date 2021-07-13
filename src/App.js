import CalendarSideBar from "./components/CalendarSideBar";
import EventContainer from "./components/EventContainer";
import NavBar from "./components/Navbar";
const App = () => {
  return (
    <>
      {/* Placeholder Flexbox container positioning */}
      <NavBar />
      <div className="flex w-full h-5/6">
        <CalendarSideBar />
        <EventContainer />
      </div>
    </>
  );
};

export default App;

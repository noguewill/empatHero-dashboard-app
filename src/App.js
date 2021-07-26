import { useState } from "react";
import CalendarSideBar from "./components/CalendarSideBar";
import EventContainer from "./components/EventContainer";
import NavBar from "./components/Navbar";
const App = () => {
  const [confirmAdventure, setConfirmAdventure] = useState(false);
  return (
    <>
      {/* Placeholder Flexbox container positioning */}
      <NavBar />
      <div className="flex w-full h-6/7">
        <CalendarSideBar />
        <EventContainer />
      </div>
    </>
  );
};

export default App;

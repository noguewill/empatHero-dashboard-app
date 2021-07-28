import { useState } from "react";
import CalendarSideBar from "./components/CalendarSideBar";
import EventContainer from "./components/EventContainer";
import NavBar from "./components/Navbar";
const App = () => {
  const [confirmAdventure, setConfirmAdventure] = useState(false);
  const [currAdventure, setCurrAdventure] = useState();

  console.log(currAdventure);
  return (
    <>
      {/* Placeholder Flexbox container positioning */}
      {confirmAdventure ? (
        <div className="absolute w-screen h-screen bg-gray-900 bg-opacity-40 flex justify-center items-center"></div>
      ) : null}
      <NavBar />
      <div className="flex w-full h-6/7">
        <CalendarSideBar />
        <EventContainer
          currAdventure={currAdventure}
          setCurrAdventure={setCurrAdventure}
          setConfirmAdventure={setConfirmAdventure}
        />
      </div>
    </>
  );
};

export default App;

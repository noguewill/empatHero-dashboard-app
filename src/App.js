import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import CalendarSideBar from "./components/CalendarSideBar";
import EventContainer from "./components/EventContainer";
import NavBar from "./components/Navbar";
const App = () => {
  const [confirmAdventure, setConfirmAdventure] = useState(false);
  const [currAdventure, setCurrAdventure] = useState();

  console.log(currAdventure);
  return (
    <>
      {confirmAdventure ? (
        <>
          <ConfirmModal />
        </>
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

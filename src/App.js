import { useState } from "react";
import ConfirmModal from "./components/ConfirmModal";
import CalendarSideBar from "./components/CalendarSideBar";
import EventContainer from "./components/EventContainer";
import NavBar from "./components/Navbar";
const App = () => {
  const [confirmModal, setConfirmModal] = useState(false);
  const [confirmAdventure, setConfirmAdventure] = useState(false);
  const [currAdventure, setCurrAdventure] = useState();

  return (
    <>
      {confirmModal ? (
        <>
          <ConfirmModal
            setCurrAdventure={setCurrAdventure}
            currAdventure={currAdventure}
            setConfirmModal={setConfirmModal}
            confirmAdventure={confirmAdventure}
            setConfirmAdventure={setConfirmAdventure}
          />
        </>
      ) : null}
      <NavBar />
      <div className="flex w-full h-6/7">
        <CalendarSideBar />
        <EventContainer
          currAdventure={currAdventure}
          setCurrAdventure={setCurrAdventure}
          setConfirmModal={setConfirmModal}
          confirmAdventure={confirmAdventure}
          setConfirmAdventure={setConfirmAdventure}
        />
      </div>
    </>
  );
};

export default App;

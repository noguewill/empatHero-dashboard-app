import { useState } from "react";
import ConfirmModal from "./components/ConfirmModal";
import CalendarSideBar from "./components/CalendarSideBar";
import EventContainer from "./components/EventContainer";
import NavBar from "./components/Navbar";
import ClassSelection from "./components/ClassSelection";

const App = () => {
  const [confirmModal, setConfirmModal] = useState(false);
  const [confirmAdventure, setConfirmAdventure] = useState(false);
  const [currAdventure, setCurrAdventure] = useState();
  const [classChosen, setClassChosen] = useState();
  const [adventureDay, setAdventureDay] = useState();

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
            setAdventureDay={setAdventureDay}
          />
        </>
      ) : null}

      <NavBar />
      <div className="flex w-full h-6/7">
        <CalendarSideBar
          adventureDay={adventureDay}
          setAdventureDay={setAdventureDay}
        />
        {/* If class wasn't chosen, display class selection component, else show teacher class dashboard */}
        {classChosen === undefined ? (
          <ClassSelection setClassChosen={setClassChosen} />
        ) : (
          <EventContainer
            currAdventure={currAdventure}
            setCurrAdventure={setCurrAdventure}
            setConfirmModal={setConfirmModal}
            confirmAdventure={confirmAdventure}
            setConfirmAdventure={setConfirmAdventure}
            classChosen={classChosen}
            setClassChosen={setClassChosen}
          />
        )}
      </div>
    </>
  );
};

export default App;

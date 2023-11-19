import { Fragment, useState } from "react";
import Counter from "./components/Counter";
import CounterConfig from "./components/CounterConfig";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {

  const [userTimeAT, setUserTimeAT] = useState(25);
  const [userTimeRX, setUserTimeRX] = useState(5);
  const [soundState, setSoundState] = useState(true)


  const setCustomAT = (AT) => {
    setUserTimeAT(AT);
  };

  const hasClicked = () => {
    setSoundState(!soundState)
  }
  

  const setCustomRX = (RX) => {
    setUserTimeRX(RX);
  };

  ////////////MODAL//////////

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //////////////////////////

  return (
    <Fragment>
          
      <Navbar soundToggleClicked={hasClicked} btnSound={soundState}></Navbar>
      <div className="container-gral">
        <div className="elements">
          <Counter AT={userTimeAT} RX={userTimeRX} soundState={soundState}></Counter>
        </div>
        <div className="elements">
          <CounterConfig
            onCustomAT={setCustomAT}
            onCustomRX={setCustomRX}
            isOpen={isModalOpen}
            onClose={closeModal}
          ></CounterConfig>
        </div>
      </div>
      <div className="btn-container">
        <button className={"button-55"} onClick={openModal}>
          Configure timer
        </button>
      </div>
    </Fragment>
  );
}

export default App;

import { Fragment, useState } from "react";
import Counter from "./components/Counter";
import CounterConfig from "./components/CounterConfig";
import "./App.css";
import Navbar from "./components/Navbar";
import TasksForm from "./components/TasksForm";
import TasksPanel from "./components/TasksPanel";

function App() {
  const [userTimeAT, setUserTimeAT] = useState(25);
  const [userTimeRX, setUserTimeRX] = useState(5);
  const [soundState, setSoundState] = useState(true);
  const [tasksData, setTasksData] = useState([]);


  ///////////// ADD TASK ///////////// 

  const setTasksDataHandler = (addTask) => {
    if (addTask.name) {
      setTasksData((prevState) => [...prevState, addTask]);
    }
  };

  ///////////// DELETE TASK ///////////// 

  const deleteTask = (idForDelete) => {
    let newTaskData = tasksData.filter((el) => idForDelete !== el.id);
    setTasksData(newTaskData);
  };

  const setCustomAT = (AT) => {
    setUserTimeAT(AT);
  };

  const setCustomRX = (RX) => {
    setUserTimeRX(RX);
  };

  const hasClicked = () => {
    setSoundState(!soundState);
  };
  
  //////////// MODAL //////////

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
          <Counter
            AT={userTimeAT}
            RX={userTimeRX}
            soundState={soundState}
            openModal={openModal}
          ></Counter>
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
      <div>
        <TasksForm addTasks={setTasksDataHandler}></TasksForm>
      </div>
      <TasksPanel
        tasksDataPanel={tasksData}
        deleteTask={deleteTask}
      ></TasksPanel>
    </Fragment>
  );
}

export default App;

import { Fragment, useState } from "react";
import Counter from "./components/Counter/Counter";
import "./App.css";
import Navbar from "./components/Navbar";
import TasksForm from "./components/Tasks/TasksForm";
import TasksPanel from "./components/Tasks/TasksPanel";

function App() {
  const [soundState, setSoundState] = useState(true);
  const [tasksData, setTasksData] = useState([]);
  const [modeBanner, setModeBanner] = useState(true);

  ///////////// ADD TASK /////////////

  const setTasksDataHandler = (addTask) => {
    if (addTask.name && tasksData.length === 5) {
      alert("The maximum number of tasks is 5!");
    } else {
      if (addTask.name) {
        setTasksData((prevState) => [...prevState, addTask]);
      }
    }
  };

  const changeMode = (mode) => {
    setModeBanner(mode);
  };

  ///////////// DELETE TASK /////////////

  const deleteTask = (idForDelete) => {
    let newTaskData = tasksData.filter((el) => idForDelete !== el.id);
    setTasksData(newTaskData);
  };

  const hasClicked = () => {
    setSoundState(!soundState);
  };

  //////////////////////////

  return (
    <Fragment>
      <Navbar soundToggleClicked={hasClicked} btnSound={soundState}></Navbar>
      <div className="container-gral">
        <div className="elements">
          <Counter changeMode={changeMode} soundState={soundState}></Counter>
        </div>
        <div className="rightElements">
          <div className="modeBanner">{modeBanner ? <p>TIME TO WORK!</p> : <p>RELAX!</p>}</div>
          <div className="tasks">
            <div className="tasks-form">
              <TasksForm addTasks={setTasksDataHandler}></TasksForm>
            </div>
          </div>
        </div>
      </div>
      <div className="tasks">
        <div className="tasks-panel">
          <TasksPanel
            tasksDataPanel={tasksData}
            deleteTask={deleteTask}
          ></TasksPanel>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

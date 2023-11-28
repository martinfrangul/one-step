import { Fragment, useState } from "react";
import Counter from "./components/Counter/Counter";
import "./App.css";
import Navbar from "./components/Navbar";
import TasksForm from "./components/Tasks/TasksForm";
import TasksPanel from "./components/Tasks/TasksPanel";

function App() {
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

  

  const hasClicked = () => {
    setSoundState(!soundState);
  };
  
  

  //////////////////////////

  return (
    <Fragment>
      <Navbar soundToggleClicked={hasClicked} btnSound={soundState}></Navbar>
      <div className="container-gral">
        <div className="elements">
          <Counter
            soundState={soundState}
          ></Counter>
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

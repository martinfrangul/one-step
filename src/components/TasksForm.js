import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TasksForm = (props) => {
  const [newTask, setNewTask] = useState("");
  const [addTask, setAddTask] = useState([]);

  const onAddTaskHandler = () => {
    setAddTask({name: newTask, id: uuidv4()});
    setNewTask("")
  };

  const onTaskChangeHandler = (event) => {
    setNewTask(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.addTasks(addTask)

  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div class="form-group">
          <label htmlFor="task-input">Add your task</label>
          <input
            onChange={onTaskChangeHandler}
            value={newTask}
            type="text"
            class="form-control"
            name="task-input"
            id="task-input"
            aria-describedby="emailHelpId"
            placeholder="Place you task"
          />
          <button onClick={onAddTaskHandler}>Add</button>
        </div>
      </form>
    </div>
  );
};

export default TasksForm;

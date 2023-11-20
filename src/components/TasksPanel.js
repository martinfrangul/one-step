import classes from "./TasksPanel.module.css";

const TasksPanel = (props) => {

  const onRemoveTaskHandler = (event) => {
    let idForDelete = event.target.id;
    props.deleteTask(idForDelete);
  };

  console.log(props.tasksDataPanel);

  let tasksMap = props.tasksDataPanel.map((el) => (
    <li key={el.id}>
      {el.name}{" "}
      <button id={el.id} onClick={onRemoveTaskHandler}>
        Remove
      </button>
    </li>
  ));
  return (
    <div className={classes["panel-container"]}>
      <ul className={classes.tasksNamesStyle}>{tasksMap}</ul>
    </div>
  );
};

export default TasksPanel;

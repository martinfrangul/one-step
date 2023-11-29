import classes from "./TasksPanel.module.css";
import btnRmv from "../../assets/borrarIcon.png";

const TasksPanel = (props) => {
  const onRemoveTaskHandler = (event) => {
    let idForDelete = event.target.id;
    props.deleteTask(idForDelete);
  };

  let tasksMap = props.tasksDataPanel.map((el) => (
    <li className={classes["list-elements"]} key={el.id}>
      <div className={classes["panel-elements"]}>
        <p className={classes["element-name"]}> {el.name} </p>
        <button
          className={classes.btnRmv}
          id={el.id}
          onClick={onRemoveTaskHandler}
        >
          <img className={classes.removeIcon} src={btnRmv} alt="remove" />
        </button>
      </div>
    </li>
  ));
  return (
    <div className={classes["panel-container"]}>
      <ul className={classes["ul-style"]}>{tasksMap}</ul>
    </div>
  );
};

export default TasksPanel;

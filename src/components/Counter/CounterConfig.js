import { useState } from "react";
import classes from "./CounterConfig.module.css";


const CounterConfig = (props) => {

  const [actionTime, setActionTime] = useState(25);
  const [relaxingTime, setRelaxingTime] = useState(5);

  if (!props.isOpen) {
    return null;
  } else {
    const onActionHandler = (event) => {
      setActionTime(parseInt(event.target.value));
    };

    const handleClose = (e) => {
      if (e.target.classList.contains(classes["modal-overlay"])) {
        props.onClose();
      }
    };

    const onRelaxHandler = (event) => {
      setRelaxingTime(parseInt(event.target.value));
    };

    const onSubmitHandler = (event) => {
      event.preventDefault();
      props.onCustomAT(actionTime);
      props.onCustomRX(relaxingTime);
      props.onClose();
      props.onReset()
    };

    return (
      <div className={classes["modal-overlay"]} onClick={handleClose}>
        <div className={classes["modal"]}>
          <button className={classes["close-button"]} onClick={props.onClose}>
            X
          </button>
          <div className={classes.container}>
            <form onSubmit={onSubmitHandler}>
              <div className="form-group">
                <label htmlFor="act-time">Activity time</label>
                <input
                  onChange={onActionHandler}
                  value={actionTime}
                  type="number"
                  name="act-time"
                  id="actT"
                  placeholder=""
                  aria-describedby="helpId"
                />
              </div>
              <div className="form-group">
                <label htmlFor="rlx-time">Relaxing time</label>
                <input
                  onChange={onRelaxHandler}
                  value={relaxingTime}
                  type="number"
                  name="rlx-time"
                  id="rlxT"
                  placeholder=""
                  aria-describedby="helpId"
                />
              </div>
              <button onClick={onSubmitHandler}>SET</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default CounterConfig;

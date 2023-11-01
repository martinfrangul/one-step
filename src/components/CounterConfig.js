import { useState } from "react";

const CounterConfig = (props) => {
  const [actionTime, setActionTime] = useState(0);
  const [relaxingTime, setRelaxingTime] = useState(0);

  const onActionHandler = (event) => {
    setActionTime(parseInt(event.target.value));
  };

  const onRelaxHandler = (event) => {
    setRelaxingTime(parseInt(event.target.value));
  };

  const onSubmitHandler = (event) =>{
    event.preventDefault()
    props.onCustomAT(actionTime)
    props.onCustomRX(relaxingTime)

  } 
  return (
    <div>
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
          <button onClick={onSubmitHandler}>
            SET
          </button>
        </div>
      </form>
    </div>
  );
};

export default CounterConfig;

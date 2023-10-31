import { useState } from "react";

const CounterConfig = ({onCustomAT}) => {
  const [actionTime, setActionTime] = useState(0);

  const onActionHandler = (event) => {
    setActionTime(parseInt(event.target.value));
  };

  const onSubmitHandler = (event) =>{
    event.preventDefault()
    onCustomAT(actionTime)

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

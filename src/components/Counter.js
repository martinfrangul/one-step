import React, { useEffect, useState } from "react";
import classes from "./Counter.module.css";

function Counter(props) {
  let userAT = props.AT;
  let userRX = props.RX;
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [playPause, setPlayPause] = useState(false);
  const [mode, setMode] = useState(true);
  const [started, setStarted] = useState(false);

  ////////////// HANDLERS //////////////

  function onStartHandler() {
    setPlayPause(!playPause);
  }

  const onChangeModeHandler = () => {
    setMode(!mode)
    onResetHandler()
  };

  function onResetHandler() {
    setSeconds(0);
    setMinutes(25);
    setPlayPause(false);
    setStarted(false);
  }

  //////////// COUNTER /////////////////

  useEffect(() => {
    if (mode){
      if (!started) {
        setMinutes(userAT)
        }
    } else {
      if (!started) {
        setMinutes(userRX)
        }
    }
    let intervalId;

    if (playPause) {
      setStarted(true);
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            // When both minutes and seconds reach 0, set the Alert to TRUE.
            alert("Time to rest");
            setMinutes(25);
            setPlayPause(false);
          }
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [seconds, playPause, minutes, userAT, started, userRX, mode]);

  return (
    <div className={classes.container}>
      <h2>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h2>
      <div className={classes.btnCont}>
        <button className={classes.btn} onClick={onStartHandler}>
          {playPause ? "PAUSE" : "PLAY"}
        </button>
        <button className={classes.btn} onClick={onResetHandler}>
          RESET
        </button>
        <button className={classes.btn} onClick={onChangeModeHandler}>
          {mode ? "WORK" : "CHILL"}
        </button>
      </div>
    </div>
  );
}

export default Counter;

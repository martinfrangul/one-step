import React, { useEffect, useState } from "react";
import classes from "./Counter.module.css";

function Counter(props) {
  let userAT = props.AT;
  let userRX = props.RX;
  const [seconds, setSeconds] = useState(0);
  const [minutesAT, setMinutesAT] = useState(0);
  const [minutesRX, setMinutesRX] = useState(0);
  const [playPause, setPlayPause] = useState(false);
  const [mode, setMode] = useState(true);
  const [started, setStarted] = useState(false);

  ////////////// HANDLERS //////////////

  function onStartHandler() {
    setPlayPause(!playPause);
  }

  const onChangeModeHandler = () => {
    setMode(!mode);
    onResetHandler();
  };

  function onResetHandler() {
    setSeconds(0);
    setMinutesAT(25);
    setMinutesRX(5);
    setPlayPause(false);
    setStarted(false);
  }

  //////////// COUNTER /////////////////

  useEffect(() => {
    if (mode) {
      if (!started) {
        setMinutesAT(userAT);
      }
    } else {
      if (!started) {
        setMinutesRX(userRX);
      }
    }
    let intervalId;

    if (playPause) {
      setStarted(true);
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (mode === true) {
            if (minutesAT > 0) {
              setMinutesAT(minutesAT - 1);
              setSeconds(59);
            } else {
              // When both minutes and seconds reach 0, set the Alert to TRUE.
              alert("Time to rest");
              setMinutesRX(userRX);
              setMode(false);
              setPlayPause(false);
            }
          }

          if (mode === false) {
            if (minutesRX > 0) {
              setMinutesRX(minutesRX - 1);
              setSeconds(59);
            } else {
              // When both minutes and seconds reach 0, set the Alert to TRUE.
              alert("Time to rest");
              setMinutesAT(userAT);
              setMode(true);
              setPlayPause(false);
            }
          }
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [seconds, playPause, minutesRX, minutesAT, userAT, started, userRX, mode]);

  return (
    <div className={classes.container}>
      {mode && (
        <h2>
          {minutesAT}:{seconds < 10 ? `0${seconds}` : seconds}
        </h2>
      )}
      {!mode && (
        <h2>
          {minutesRX}:{seconds < 10 ? `0${seconds}` : seconds}
        </h2>
      )}
      <div className={classes.btnCont}>
        {/* <button className={classes.btn} onClick={onStartHandler}>
          {playPause ? "PAUSE" : "PLAY"}
        </button>
        <button className={classes.btn} onClick={onResetHandler}>
          RESET
        </button>
        <button className={classes.btn} onClick={onChangeModeHandler}>
          {mode ? "CHILL" : "WORK"}
        </button> */}

        <button className={classes["button-52"]} onClick={onStartHandler}>
          {playPause ? "PAUSE" : "PLAY"}
        </button>
        <button className={classes["button-52"]} onClick={onResetHandler}>RESET</button>
        <button className={classes["button-52"]} onClick={onChangeModeHandler} >{mode ? "CHILL" : "WORK"}</button>


      </div>
    </div>
  );
}

export default Counter;

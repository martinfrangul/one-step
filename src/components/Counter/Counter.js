import React, { useEffect, useState } from "react";
import classes from "./Counter.module.css";
import Alert from "../Alert";
import CounterConfig from "./CounterConfig";

function Counter(props) {
  /////////////// STATE ///////////////

  const [userAT, setUserAT] = useState(25);
  const [userRX, setUserRX] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [playPause, setPlayPause] = useState(false);
  const [mode, setMode] = useState(true);
  const [started, setStarted] = useState(false);
  const [playSound, setPlaySound] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  ////////////// HANDLERS //////////////

  const setCustomAT = (AT) => {
    setUserAT(AT);
  };

  const setCustomRX = (RX) => {
    setUserRX(RX);
  };

  function onStartHandler() {
    setPlayPause(!playPause);
  }

  const backgroundColor = mode
    ? classes["background-AT"]
    : classes["background-RX"];

  const onChangeModeHandler = () => {
    setMode(!mode);
    props.changeMode(mode)
    onResetHandler();

  };

  function onResetHandler() {
    setSeconds(0);
    setPlayPause(false);
    setStarted(false);
  }

  //////////// MODAL //////////

  const onOpenModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //////////// COUNTER /////////////////

  useEffect(() => {
    setShowAlert(false);
    if (mode) {
      if (!started) {
        setMinutes(userAT);
      }
    } else {
      if (!started) {
        setMinutes(userRX);
      }
    }
    let intervalId;

    if (playPause) {
      setStarted(true);
      setPlaySound(false);
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (mode) {
            // When both minutes and seconds reach 0, set the Alert to TRUE.
            if (props.soundState) {
              setPlaySound(true);
            }
            setShowAlert(true);
            setMinutes(userRX);
            setMode(false);
            setPlayPause(false);
            setMessageAlert("Time to rest!");
          } else {
            // When both minutes and seconds reach 0, set the Alert to TRUE.
            if (props.soundState) {
              setPlaySound(true);
            }
            setShowAlert(true);
            setMinutes(userAT);
            setMode(true);
            setPlayPause(false);
            setMessageAlert("Let's go back to work!");
          }
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };

    // eslint-disable-next-line
  }, [seconds, playPause, minutes, userAT, started, userRX, mode]);

  return (
    <div className={`${classes.container} ${backgroundColor}`}>
      <h2>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h2>
      <div className={classes.btnCont}>
        <button className={classes["button-52"]} onClick={onStartHandler}>
          {playPause ? "PAUSE" : "PLAY"}
        </button>
        <button className={classes["button-52"]} onClick={onResetHandler}>
          RESET
        </button>
        <button className={classes["button-52"]} onClick={onChangeModeHandler}>
          MODE
        </button>
        {showAlert && (
          <Alert messageAlert={messageAlert} playSound={playSound}></Alert>
        )}
      </div>
      <CounterConfig
        onCustomAT={setCustomAT}
        onCustomRX={setCustomRX}
        isOpen={isModalOpen}
        onClose={closeModal}
        onReset={onResetHandler}
      ></CounterConfig>
      <div className="btn-container">
        <button className={"button-55"} onClick={onOpenModalHandler}>
          Configure timer
        </button>
      </div>
    </div>
  );
}

export default Counter;

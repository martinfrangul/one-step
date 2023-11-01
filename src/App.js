import { Fragment, useState } from "react";
import Counter from "./components/Counter";
import CounterConfig from "./components/CounterConfig";
import "./App.css";

function App() {



  const [userTimeAT, setUserTimeAT] = useState(25)
  const [userTimeRX, setUserTimeRX] = useState(25)


  const setCustomAT = (AT) => {
    setUserTimeAT(AT)
  } 
  
  const setCustomRX = (RX) => {
    setUserTimeRX(RX)
  } 

  return (
    <Fragment>
      <Counter AT = {userTimeAT} RX = {userTimeRX}></Counter>

      <CounterConfig onCustomAT = {setCustomAT} onCustomRX = {setCustomRX}></CounterConfig>
    </Fragment>
  );
}

export default App;

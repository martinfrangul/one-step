import { Fragment, useState } from "react";
import Counter from "./components/Counter";
import CounterConfig from "./components/CounterConfig";
import "./App.css";

function App() {



  const [userTimeAT, setUserTimeAT] = useState(25)


  const setCustomAT = (AT) => {
    setUserTimeAT(AT)
  } 

  return (
    <Fragment>
      <Counter AT = {userTimeAT} ></Counter>

      <CounterConfig onCustomAT = {setCustomAT} ></CounterConfig>
    </Fragment>
  );
}

export default App;

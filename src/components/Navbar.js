import classes from "./Navbar.module.css";
import logo from "../assets/logoOneStep.png";

const Navbar = (props) => {

  const onSoundToggleHandler = (soundToggle) => {
    props.soundToggleClicked(soundToggle)
  }

  return (
    <div className={classes.navbar}>
      <div className={classes["flip-card"]}>
        <div className={classes["flip-card-inner"]}>
          <div className={classes["flip-card-front"]}>
            <img className={classes.logo} src={logo} alt="Logo" />
          </div>
          <div class={classes["flip-card-back"]}>
            <h1>STAY FOCUSED!</h1>
          </div>
        </div>
      </div>
      <div className={classes["btn-toggle-sound"]}>
        {/* <button>SOUND ON/OFF </button> */}
        <button onClick={onSoundToggleHandler} className={classes["button-48"]}>
          
        </button>

      </div>
    </div>
  );
};

export default Navbar;

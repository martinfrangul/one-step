import classes from "./Navbar.module.css";
import logo from "../assets/logoOneStep.png";
import soundIcon from "../assets/soundIcon.png";
import silentIcon from "../assets/silentIcon.png";

const Navbar = (props) => {
  const onSoundToggleHandler = () => {
    props.soundToggleClicked();
  };

  let btnSoundName = "";
  let btnIcon;

  if (props.btnSound) {
    btnSoundName = "Sound On";
    btnIcon = soundIcon;
  } else {
    btnSoundName = "Sound Off";
    btnIcon = silentIcon;
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
        <button
          onClick={onSoundToggleHandler}
          className={classes["button-sound-toggle"]}
        >
          <div className={classes["btn-elements"]}>
            <p className={classes["btn-title"]} > {btnSoundName} </p>
            <img className={classes.btnIcon} src={btnIcon} alt="sound-icon" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

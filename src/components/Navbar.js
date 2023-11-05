import classes from "./Navbar.module.css";
import logo from "../pics/logoOneStep.png";

const Navbar = () => {
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
    </div>
  );
};

export default Navbar;

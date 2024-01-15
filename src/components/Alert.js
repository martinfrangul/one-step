import alertSound from "../assets/alert.mp3";
import Swal from "sweetalert2";

const Alert = (props) => {
  const showAlertBanner = () => {
    Swal.fire({
      title: "Time's up!",
      text: props.messageAlert,
      icon: "info",
      confirmButtonText: "Cool",
    });
  };



  return (
    <div>
      {props.playSound ? (
        <audio src={alertSound} autoPlay onPlay={showAlertBanner} />
      ) : (
        showAlertBanner()
      )}
    </div>
  );
};

export default Alert;

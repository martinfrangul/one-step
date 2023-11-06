import alertSound from "../assets/alert.mp3";

const AlertSound = (props) => {

  const handleSoundEnded = () => {
    alert(props.messageAlert);
  };



  return (
    <div>
      {props.soundOn && (
        <audio src={alertSound} autoPlay onEnded={handleSoundEnded} />
      )}
    </div>
  );
};

export default AlertSound;

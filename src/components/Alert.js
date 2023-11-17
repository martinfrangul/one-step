import alertSound from "../assets/alert.mp3";

const Alert = (props) => {
  const handleSoundEnded = () => {
    alert(props.messageAlert);
  };

  return (
    <div>{<audio src={alertSound} autoPlay onEnded={handleSoundEnded} />}</div>
  );
};

export default Alert;

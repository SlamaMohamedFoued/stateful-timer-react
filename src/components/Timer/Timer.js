import React from "react";
import "./Timer.css";

const Timer = ({ time }) => {
  var heures = Math.trunc(time / 3600000);
  var heuresReste = time % 3600000;
  var minutes = Math.trunc(heuresReste / 60000);
  var minutesReste = time % 60000;
  var secondes = Math.trunc(minutesReste / 1000);
  console.log(heures);
  console.log(heuresReste);
  console.log(minutes);
  console.log(minutesReste);
  console.log(secondes);
  heures = String(heures).padStart(2, 0);
  minutes = String(minutes).padStart(2, 0);
  secondes = String(secondes).padStart(2, 0);
  return (
    <div>
      <div className="time">
        {heures}:{minutes}:{secondes}
      </div>
      <div className="timeText">
        <div className="timeItem">Heures</div>
        <div className="timeItem">Minutes</div>
        <div className="timeItem">Secondes</div>
      </div>
    </div>
  );
};

export default Timer;

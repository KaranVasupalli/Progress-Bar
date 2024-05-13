import { useEffect, useState } from "react";
import { MAX, MIN } from "../constants";
import '../App.css'

 function ProgressBar({ value = 0, onComplete = () => {} }) {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(Math.max(value, MIN), MAX));

    if (value >= MAX) {
      onComplete();
    }
  }, [value]);

  return (
    <div className="progress ">
    
      <span
        style={{
           
          color: percent > 49 ? "red" : "black"
        }}
      >
        {percent.toFixed()}%
      </span>
      <div 
        style={{
            color:"white",
            height:'100%',
          transform: `scaleX(${percent / MAX})`,
          transformOrigin: "left"
        }}
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percent}
        role="progressbar"
      />
    </div>
  );
}

export default ProgressBar;
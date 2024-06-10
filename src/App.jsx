//Rendering process : Batch Rendering

import React, { useEffect, useState } from "react";

const App = () => {
  const [isStart, setIsStart]=useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [time,setTime]=useState({hour:"",
    minute:"",
    second:""
  });
  const handleStart=()=>{
   setIsStart(true);
   setIsPaused(false);
  }
    const handlePause = () => {
      setIsPaused(true);
    };
  const handleReset=()=>{
    setTime({hour:"",minute:"",second:""})
    setIsStart(false);
    setIsPaused(false);
  }
  const handleChange=(e)=>{
    setTime({...time,
      [e.target.name]:e.target.value
  })
  }
    useEffect(() => {
      let interval;
      if (isStart && !isPaused) {
        interval = setInterval(() => {
          setTime((prevTime) => {
            let { hour, minute, second } = prevTime;

            if (hour === "" && minute === "" && second === "") {
              return prevTime;
            }

            let h = parseInt(hour) || 0;
            let m = parseInt(minute) || 0;
            let s = parseInt(second) || 0;

            if (s > 0) {
              s -= 1;
            } else if (m > 0) {
              m -= 1;
              s = 59;
            } else if (h > 0) {
              h -= 1;
              m = 59;
              s = 59;
            } else {
              clearInterval(interval);
              setIsStart(false);
            }

            return {
              hour: h.toString().padStart(2, "0"),
              minute: m.toString().padStart(2, "0"),
              second: s.toString().padStart(2, "0"),
            };
          });
        }, 1000);
      }
      return () => clearInterval(interval);
    }, [isStart, isPaused]);
 
  return (
    <>
      {!isStart && (
        <div className="container">
          <h1>CountDown Timer</h1>
          <div>
            <input
              className="input"
              placeholder="HH"
              name="hour"
              onChange={(e) => handleChange(e)}
              value={time.hour}
            />
            <input
              className="input"
              placeholder="MM"
              name="minute"
              onChange={(e) => handleChange(e)}
              value={time.minute}
            />
            <input
              className="input"
              placeholder="SS"
              name="second"
              onChange={(e) => handleChange(e)}
              value={time.second}
            />
          </div>
          <button onClick={handleStart}>Start</button>
        </div>
      )}
      {isStart && (
        <div className="container">
          <h1>CountDown Timer</h1>
          <div>
            <span> {time.hour} </span>:<span> {time.minute} </span>:
            <span> {time.second}</span>
          </div>
          <button onClick={isPaused ? handleStart : handlePause}>
            {isPaused ? "Resume" : "Pause"}
          </button>
          <button onClick={handleReset}>reset</button>
        </div>
      )}
    </>
  );
};

export default App;

import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let hour = 0;
  let min = 0;
  let sec = 0;

  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    hour = hours;
    min = minutes;
    sec = seconds;
  }, [hours, minutes, seconds]);

  const handleClick = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }

    const newIntervalId = setInterval(() => {
      sec -= 1;
      setSeconds((sec) => sec - 1);
      if (hour > 0 && min === 0 && sec === 0) {
        hour -= 1;
        setHours((h) => h - 1);
        min = 59;
        setMinutes(min);
        sec = 59;
        setSeconds(sec);
      }
      if (min > 0 && sec === 0) {
        min -= 1;
        setMinutes((min) => min - 1);
        sec = 59;
        setSeconds(sec);
      }
      if (sec === 0 && min === 0 && hour === 0) {
        setHours(hour);
        setMinutes(min);
        setSeconds(sec);
        clearInterval(intervalId);
        clearInterval(newIntervalId);
        setIntervalId(0);
      }
    }, 1000);
    setIntervalId(newIntervalId);
  };

  const handleReset = () => {
    hour = 0;
    min = 0;
    sec = 0;
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(intervalId);
    setIntervalId(0);
  };

  return (
    <div>
      <p>Timer</p>
      <label htmlFor="hours">Hours:</label>
      <input
        type="number"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />
      <label htmlFor="minutes"> Minutes:</label>
      <input
        type="number"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
      />
      <label htmlFor="seconds"> Seconds:</label>
      <input
        type="number"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
      />
      <button onClick={handleClick}>{!intervalId ? "Start" : "Pause"}</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      <div>
        <p>{`${hours.toString().padStart(2, "0")} : ${minutes
          .toString()
          .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`}</p>
      </div>
    </div>
  );
};

export default Timer;

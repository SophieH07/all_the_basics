import { useState } from "react";

const Stopwatch = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  let interval;

  return (
    <div>
      <form action="">
        <label htmlFor="minutes">Minutes:</label>
        <input type="number" />
        <label htmlFor="seconds">Seconds:</label>
        <input type="number" />
        <button type="submit">Start</button>
      </form>
    </div>
  );
};

export default Stopwatch;
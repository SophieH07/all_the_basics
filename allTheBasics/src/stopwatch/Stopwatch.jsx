import { useState } from "react";

const Stopwatch = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  let interval;

  return (
    <div>
      <form action="">
        <label htmlFor="minutes">Minutes:</label>
        <input type="number" onChange={(e) => setMinutes(e.target.value)} />
        <label htmlFor="seconds"> Seconds:</label>
        <input type="number" onChange={(e) => setSeconds(e.target.value)} />
        <button type="submit">Start</button>
      </form>
      <p></p>
    </div>
  );
};

export default Stopwatch;

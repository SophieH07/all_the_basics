import { useState } from "react";
import "./Timer.css";

const Timer = () => {
  const [[h, m, s], setTime] = useState([0, 0, 0]);
  const [intervalId, setIntervalId] = useState(0);

  let hour = h;
  let minute = m;
  let second = s;

  const handleClick = () => {
    if (hour === 0 && minute === 0 && second === 0) {
      return;
    }
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }

    const newIntervalId = setInterval(() => {
      second -= 1;
      setTime([hour, minute, second]);
      if (hour === 0 && minute === 0 && second === 0) {
        clearInterval(newIntervalId);
        clearInterval(intervalId);
        setIntervalId(0);
      }
      if (second === 0) {
        if (minute > 0) {
          minute -= 1;
          second = 59;
          setTime([hour, minute, 59]);
        } else {
          if (h > 0) {
            second -= 1;
            minute = 59;
            second = 59;
            setTime([hour, 59, 59]);
          }
        }
      }
    }, 1000);
    setIntervalId(newIntervalId);
  };

  const handleReset = () => {
    hour = 0;
    minute = 0;
    second = 0;
    setTime([0, 0, 0]);
    clearInterval(intervalId);
    setIntervalId(0);
  };

  //ONFOCUS AND ONBLUR NEEDS FIXING
  return (
    <div>
      <p>Timer</p>
      <div className="timer-inputs">
        <div>
          <label htmlFor="hours">Hours:</label>
          <input
            type="number"
            value={!intervalId ? h : 0}
            onChange={(e) => setTime([e.target.value, m, s])}
            onFocus={(e) =>
              h !== 0 ? (e.target.value = "") : (e.target.value = h)
            }
            onBlur={(e) =>
              e.target.value === 0 ? (e.target.value = 0) : (e.target.value = h)
            }
          />
        </div>
        <div>
          <label htmlFor="minutes"> Minutes:</label>
          <input
            type="number"
            max={59}
            value={!intervalId ? m : 0}
            onChange={(e) =>
              e.target.value > 59 || e.target.value < 0
                ? setTime([h, 59, s])
                : setTime([h, e.target.value, s])
            }
            onFocus={(e) =>
              m !== 0 ? (e.target.value = "") : (e.target.value = m)
            }
            onBlur={(e) =>
              e.target.value !== 0 ? (e.target.value = 0) : (e.target.value = m)
            }
          />
        </div>
        <div>
          <label htmlFor="seconds"> Seconds:</label>
          <input
            type="number"
            max={59}
            value={!intervalId ? s : 0}
            onChange={(e) =>
              e.target.value > 59 || e.target.value < 0
                ? setTime([h, m, 59])
                : setTime([h, m, e.target.value])
            }
            onFocus={(e) =>
              s !== 0 ? (e.target.value = "") : (e.target.value = s)
            }
            onBlur={(e) =>
              e.target.value === 0 ? (e.target.value = 0) : (e.target.value = s)
            }
          />
        </div>
      </div>
      <div>
        <p id="timer">{`${h.toString().padStart(2, "0")} : ${m
          .toString()
          .padStart(2, "0")} : ${s.toString().padStart(2, "0")}`}</p>
      </div>
      <div>
        <button onClick={handleClick}>{!intervalId ? "Start" : "Pause"}</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;

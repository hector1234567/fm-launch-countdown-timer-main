import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import CountdownItem from "./CountdownItem";
import { getDiffTime, getInitialDate } from "./utils";

const App = () => {
  const initDate = React.useRef(getInitialDate());
  const [countdown, setCountdown] = React.useState(
    getDiffTime(initDate.current),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getDiffTime(initDate.current));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <CountdownItem value={countdown.days} label="Days" />
      <CountdownItem value={countdown.hours} label="Hours" />
      <CountdownItem value={countdown.minutes} label="Minutes" />
      <CountdownItem value={countdown.seconds} label="Seconds" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));

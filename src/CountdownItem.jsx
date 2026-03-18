import React from "react";

const CountdownItem = ({ value, label }) => {
  const [pastValue, setPastValue] = React.useState(value);
  const [currentValue, setCurrentValue] = React.useState(value);

  React.useEffect(() => {
    setPastValue(currentValue);
    setCurrentValue(value);
    setTimeout(() => {
      setPastValue(value);
    }, 900);
  }, [value]);
  return (
    <div className="countdown-item">
      <div className={currentValue != pastValue ? "rotated" : ""}>
        <div className="countdown-value">
          <div className="countdown-tab" data-position="top">
            <span>{currentValue}</span>
          </div>
          <div className="countdown-tab" data-position="down">
            <span>{pastValue}</span>
          </div>
          <div className="countdown-tab" data-position="back">
            <span>{currentValue}</span>
          </div>
          <div className="countdown-tab" data-position="front">
            <span>{pastValue}</span>
          </div>
        </div>
        <span className="countdown-label">{label}</span>
      </div>
    </div>
  );
};

export default CountdownItem;

import React, { useState, useEffect } from "react";

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [clickCount, setClickCount] = useState(0);
  const [renderCount, setRenderCount] = useState(1);

  useEffect(() => {
    console.log(`Component has rendered ${renderCount} time(s) due to clicks.`);
  }, [renderCount]);

  // Function to display current time
  const handleShowTime = () => {
    setCurrentTime(new Date().toLocaleTimeString());
    setClickCount(clickCount + 1);
    setRenderCount(renderCount + 1);
    console.log(`Button has been clicked ${clickCount + 1} time(s).`);
  };
  return (
    <div>
      <h1> 2.Component to show current time.</h1>
      <button onClick={handleShowTime}>Show Current Time</button>
      <p>Current Time: {currentTime} </p>
      <p>Number of times Clicked: {clickCount}</p>
      <p>Number of times component rendered: {renderCount}</p>
    </div>
  );
};

export default CurrentTime;

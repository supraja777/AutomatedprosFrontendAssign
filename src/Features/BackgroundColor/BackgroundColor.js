import React, { useState, useEffect } from "react";
import "./backgroundColor.css";

const BackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("#00ff00");

  useEffect(() => {
    // By adding the updateBackgroundColor function to the useEffect,
    //  we specify that the event listener
    // should be set up when the component is mounted
    const updateBackgroundColor = (e) => {
      const x = (e.clientX / window.innerWidth) * 255; // Mapping mouse x position to a color channel
      const y = (e.clientY / window.innerHeight) * 255; // Mapping mouse y position to a color channel

      const green = (x + y) / 2; // Adjusts the green channel based on mouse x position

      // Setting the background color as a gradient of green
      const color = `rgb(0, ${green}, 0)`;
      setBackgroundColor(color);
    };

    // Adding an event listener to track mouse location
    window.addEventListener("mousemove", updateBackgroundColor);

    // Clean up the event listener when component unmounts to avoid memory leaks
    return () => {
      window.removeEventListener("mouseMove", updateBackgroundColor);
    };
  }, []);

  return (
    <div className="background" style={{ backgroundColor: backgroundColor }}>
      <h1>3 Changing the background color to different shades of green</h1>
      <p> Move your mouse to change the background color</p>
    </div>
  );
};

export default BackgroundColor;

import React, { useState } from "react";
import axios from "axios";

// Define the types for the props and state
interface SmartPlugControlProps {}

const SmartPlugControl: React.FC<SmartPlugControlProps> = () => {
  const [isPlugOn, setIsPlugOn] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const togglePlug = async () => {
    const action = isPlugOn ? "off" : "on";
    try {
      await axios.post(`/plug/${action}`);
      setIsPlugOn(!isPlugOn);
      setError(null);
    } catch (error) {
      setError("Error toggling smart plug");
      console.error("Error toggling smart plug", error);
    }
  };

  return (
    <div>
      <h1>Smart Plug Control</h1>
      <button onClick={togglePlug}>{isPlugOn ? "Turn Off" : "Turn On"}</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SmartPlugControl;

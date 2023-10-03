import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12;
      const minutes = now.getMinutes();
      const ampm = now.getHours() >= 12 ? "PM" : "AM";
      setCurrentTime(`${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`);
    };

    const intervalId = setInterval(updateTime, 1000);

    // Initial call to set the time immediately
    updateTime();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p className="bg-gradient-to-r from-lime-950 via-black to-red-700 text-transparent bg-clip-text ">
        {currentTime}
      </p>
    </div>
  );
};

export default Timer;

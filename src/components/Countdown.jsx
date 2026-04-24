import React, { useEffect, useRef } from "react";


const Countdown = ({ expiryDate }) => {
  const ref = useRef();

  useEffect(() => {
    if (!expiryDate) return;

    const updateTimer = () => {
      const timeLeftMs = new Date(expiryDate) - new Date();
      const timeLeftSeconds = Math.max(0, Math.floor(timeLeftMs / 1000));
      if (ref.current) {
        ref.current.innerText = timeLeftSeconds > 0 ? formatTime(timeLeftSeconds) : "EXPIRED";
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [expiryDate]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(secs).padStart(2, '0')}`;
  };

  return <div ref={ref} />;
};

export default Countdown;
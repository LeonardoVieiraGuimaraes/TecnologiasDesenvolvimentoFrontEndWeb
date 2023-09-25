// HOOKS
// Quadro 22 – Utilizando o Hook useEffect
import React, { useState, useEffect } from "react";
function Timer() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h2>Tempo: {time} segundos</h2>
    </div>
  );
}
export default Timer;

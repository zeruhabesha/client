import React, { useEffect, useState } from 'react';


const Clock = () => {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const setClock = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(setClock);
      };
    }, []);
  
    const calcRotation = (value, max) => {
      return (value / max) * 360;
    };
  
    const hr = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const calcHr = calcRotation(hr * 30 + min / 2, 360);
    const calcMin = calcRotation(min * 6, 60);
    const calcSec = calcRotation(sec * 6, 60);
  
    return (
      <div className="strap">
        <div className="pin"></div>
        <div className="watch">
          {/* <img src="watch background.svg" alt="watch background" /> */}
          <div className="hour hand" style={{ transform: `rotate(${calcHr}deg)` }}></div>
          <div className="minute hand" style={{ transform: `rotate(${calcMin}deg)` }}></div>
          <div className="seconds hand" style={{ transform: `rotate(${calcSec}deg)` }}></div>
        </div>
      </div>
    );
  };
  
  export default Clock;
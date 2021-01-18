import { useState, useEffect } from 'react';

const useTimer = (initialTime) => {
  const [ seconds, setSeconds ] = useState(0);
  const [ minutes, setMinutes ] = useState(0);
  const [ hours, setHours ] = useState(0);
  const [ days, setDays ] = useState(0);

  const MS_TO_SECONDS = 1000;
  const MS_TO_MINUTES = 60000;
  const MS_TO_HOURS = 3600000;
  const MS_TO_DAYS = 86400000;

  const updateTimer = (initialTime) => {
    const now = Date.now();
    const lastLogin = new Date(initialTime).getTime();
    const difference = now - lastLogin;
    const secondsNow = Math.floor(difference / MS_TO_SECONDS % 60);
    const minutesNow = Math.floor(difference / MS_TO_MINUTES % 60);
    const hoursNow = Math.floor(difference / MS_TO_HOURS % 24);
    const daysNow = Math.floor(difference / MS_TO_DAYS);
    
    setSeconds(secondsNow);
    setMinutes(minutesNow);
    setHours(hoursNow);
    setDays(daysNow);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateTimer(initialTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);
  
  return {
    seconds,
    minutes,
    hours,
    days
  };
}

export {
  useTimer
};


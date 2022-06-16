import React, { useEffect, useState } from 'react';
import './App.css';
import TimezoneWatch from './TimezoneWatch';

function App() {
  const [clock, setClock] = useState({
    second: 0,
    minute: 0,
    hour: 0
  });

  useEffect(() => {

    setInterval(() => {
      const date = new Date();
      var second = date.getSeconds() / 60;
      var minute = (second + date.getMinutes()) / 60;
      var hour = (minute + date.getHours()) / 12;
      setClock({
        second: second,
        minute: minute,
        hour: hour
      });
    }, 1000);
  }, [])

  return (
    <div className="App">

      <TimezoneWatch second={clock.second} minute={clock.minute} hour={clock.hour} />

    </div>
  );
};

export default App;

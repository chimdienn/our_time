import React, { useState } from "react";

function App() {
  const [saigonTime, setSaigonTime] = useState(null);
  const [melbourneTime, setMelbourneTime] = useState(null);
  //const [time, setTime] = useState(null);
  function getTimeForGMT(offset) {
    const currentTime = new Date();
    const utcTime =
      currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;
    const targetTime = new Date(utcTime + offset * 3600000);
    return targetTime.toTimeString().split(" ")[0].substring(0, 5);
  }

  function fetchTime() {
    setSaigonTime(getTimeForGMT(7));
    setMelbourneTime(getTimeForGMT(11));
  }
  setInterval(fetchTime, 1000);

  return (
    <div className="container">
      <button>Sai Gon</button>
      <h1>{saigonTime ? saigonTime : "00:00"}</h1>
      <br />
      <br />
      <button>Melbourne</button>
      <h1>{melbourneTime ? melbourneTime : "00:00"}</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer>Made with ❤️ from Trọng Đức.</footer>
    </div>
  );
}

export default App;

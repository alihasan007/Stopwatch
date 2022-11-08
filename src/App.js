import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [timer, setTimer] = useState(3598);
  const increment = useRef(null)
  const startHandler = () => {
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)

  }
  const stopHandler = () => {
    clearInterval(increment.current)

  }
  const resumeHandler = () => {
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)

  }
  const resetHandler = () => {

    setTimer(0);

  }
  const formatTime = () => {
    const getSecond = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const hours = `0${Math.floor(timer / 3600)}`.slice(-2);
    return `${hours} : ${getMinutes}: ${getSecond}`;
  }
  return (
    <div className="App">
      <h3>React Stopwatch</h3>
      <p>{formatTime()}</p>
      <buttom onClick={startHandler}>Start</buttom>
      <buttom onClick={stopHandler}>Stop</buttom>
      <buttom onClick={resumeHandler}>Resume</buttom>
      <buttom onClick={resetHandler}>Reset</buttom>
    </div>
  );
}

export default App;

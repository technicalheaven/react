import {useState} from 'react';
let interval;

export default function Counter() {
  
  const statusConfig = {initial: 0, running: 1, pause: 3};
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(statusConfig.initial);


  const start = () =>{
    interval = setInterval(()=>{
      setCount((prev)=> prev + 1);
    }, 100);
    setStatus(statusConfig?.running);
  }

  const pause = () => {
    clearInterval(interval);
    setStatus(statusConfig?.pause);
  }

  const stop = ()=>{
    clearInterval(interval);
    setCount(0);
    setStatus(statusConfig?.initial);
  }

  
  return (
    <div className="App">
      <h1>{count}</h1>
       {status === statusConfig.initial && <button onClick={start}>Start</button> }
       {status === statusConfig?.running && <button onClick={pause}>Pause</button>}
       {status === statusConfig?.pause && <button onClick={start}>Resume</button>}
       {status !== statusConfig?.initial && <button onClick={stop}>Stop</button>}
    </div>
  );
}

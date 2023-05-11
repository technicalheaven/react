import "./styles.css";
import useCounter from "./useCounter";

export default function App() {
  const [count, setCounter] = useCounter(0);
  
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=> setCounter('+')}>+</button>
      <button onClick={()=> setCounter('-')}>-</button>
    </div>
  );
}

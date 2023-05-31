
// Example of React.memo:

import React from 'react';

// A simple functional component
function MyComponent(props) {
  // Component logic goes here...
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

// Wrapping the component with React.memo
const MemoizedComponent = React.memo(MyComponent);

// Usage of the MemoizedComponent
function App() {
  const [count, setCount] = React.useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <MemoizedComponent title="Memoized Title" content="Memoized Content" />
      <button onClick={handleButtonClick}>Increment Count</button>
    </div>
  );
}



// Example of useMemo:                                                                                   

import React from 'react';

// A functional component that performs a heavy computation
function HeavyComputation() {
  const calculateResult = () => {
    // Some expensive computation
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  };

  // Memoizing the result of the heavy computation
  const memoizedResult = React.useMemo(() => calculateResult(), []);

  return (
    <div>
      <h1>Result: {memoizedResult}</h1>
    </div>
  );
}

// Usage of the HeavyComputation component
function App() {
  return (
    <div>
      <HeavyComputation />
    </div>
  );
}

## Basic sandbox
![01-sandbox.png](img%2F01-sandbox.png)
```
import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <h1>{advice}</h1>
      <button
        onClick={() => {
          getAdvice();
        }}
      >
        Get advice
      </button>
      <Message count={count}></Message>
    </div>
  );
}

function Message(props) {
  return <div>Count: {props.count}</div>;
}
```
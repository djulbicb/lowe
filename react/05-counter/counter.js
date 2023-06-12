import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const date = new Date("june 21 2027");
  console.log(date);
  date.setDate(date.getDate() + count);
  console.log(date);

  return (
    <>
      <div>
        <button onClick={() => setStep((val) => val - 1)}>-</button>
        <step>Step: {step}</step>
        <button onClick={() => setStep((val) => val + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((val) => val - 1)}>-</button>
        <step>Count: {count}</step>
        <button onClick={() => setCount((val) => val + 1)}>+</button>
      </div>

      <div>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </>
  );
}
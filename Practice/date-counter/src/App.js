// import { useState } from "react";
import Dates from "./Date";
import "./App.css";

// function Counter() {}

function App() {
  // const [step, setStep] = useState(1);
  // const [count, setCount] = useState(0);
  // const date = new Date();
  // date.setDate(date.getDate() + count);

  return (
    // <div>
    //   <div>
    //     <button onClick={() => setStep((s) => s - 1)}>-</button>
    //     <span>Step:{step}</span>
    //     <button onClick={() => setStep((s) => s + 1)}>+</button>
    //   </div>
    //   <div>
    //     <button onClick={() => setCount((c) => c - step)}>-</button>
    //     <span>Count:{count}</span>
    //     <button onClick={() => setCount((c) => c + step)}>+</button>
    //     <p>
    //       <span>
    //         {count === 0
    //           ? "Today is "
    //           : count > 0
    //           ? `${count} days from today is`
    //           : `${count} days ago was`}
    //       </span>
    //       {date.toLocaleString()}
    //     </p>
    //   </div>
    // </div>
    <Dates />
  );
}

export default App;

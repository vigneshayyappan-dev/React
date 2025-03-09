import { useState } from "react";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("Hello");
  // async function getAdvice() {
  //   const response = await fetch("https://api.adviceslip.com/advice");
  //   if (response.status === 200) {
  //     const obj = await response.json();
  //     setAdvice(obj.slip.advice);
  //   }
  // }
  async function getAdvice() {
    const response = await axios.get("https://api.adviceslip.com/advice");
    setAdvice(response.data.slip.advice);
  }

  return (
    <div>
      {advice}
      <button onClick={getAdvice}>Get Advice</button>
    </div>
  );
}

export default App;

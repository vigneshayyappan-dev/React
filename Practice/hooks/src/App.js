import { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  //useMemo
  const doubleNum = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  // const [doubleNum, setDoubleNum] = useState(0);
  // useEffect(() => {
  //   setDoubleNum(slowFunction(number));
  // }, [number]);
  const toggleTheme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div>
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <h2 style={toggleTheme}>{doubleNum}</h2>
    </div>
  );
}

function returnNum(num) {
  return num * 2;
}

function slowFunction(num) {
  for (let i = 0; i < 1000000000; i++) {}
  return returnNum(num);
}

export default App;

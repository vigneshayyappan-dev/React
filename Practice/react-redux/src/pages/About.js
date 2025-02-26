import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFruits } from "../slices/fruitSlice";

const About = () => {
  const dispatch = useDispatch();
  const [fruit, setFruit] = useState("");

  function handleFruit() {
    dispatch(setFruits(fruit));
  }

  return (
    <div>
      <label>Fruit</label>
      <input value={fruit} onChange={(e) => setFruit(e.target.value)} />
      <button onClick={handleFruit}>Add Fruit</button>
    </div>
  );
};

export default About;

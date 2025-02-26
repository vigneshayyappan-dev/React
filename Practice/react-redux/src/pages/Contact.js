import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const fruits = useSelector((state) => state.fruitInfo.fruits);

  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
};

export default Contact;

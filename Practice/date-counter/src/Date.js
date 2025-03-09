import React, { useState } from "react";

const Dates = () => {
  //   const date = Date;

  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  console.log(date);

  return (
    <div>
      <div className="step">
        <button
          onClick={() => {
            setStep((s) => {
              return s > 1 ? s - 1 : 1;
            });
          }}
        >
          -
        </button>
        <span>Step:{step}</span>
        <button
          onClick={() => {
            setStep((s) => s + 1);
          }}
        >
          +
        </button>
      </div>
      <div className="count">
        <button
          onClick={() => {
            setCount((c) => c - step);
          }}
        >
          -
        </button>
        <span>Count:{count}</span>
        <button
          onClick={() => {
            setCount((c) => c + step);
          }}
        >
          +
        </button>
      </div>
      <div>
        <span>
          {count === 0
            ? `Today is`
            : count > 0
            ? `${count} days from today is`
            : `${count} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
};

export default Dates;

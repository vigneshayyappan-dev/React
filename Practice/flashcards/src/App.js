import { useState } from "react";
import "./App.css";
const questions = [
  {
    id: 1,
    question: "What language is React based on?",
    answer: "Javascript",
  },
  {
    id: 2,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 3,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 4,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 5,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 6,
    question:
      "What do we call an input element that is  completely synchronised with state?",
    answer: "Controlled Elements",
  },
];

function App() {
  return <Flashcard />;
}

function Flashcard() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className="container">
      {questions.map((question) => {
        return (
          <div
            key="question.id"
            className={
              selectedId === question.id ? "flashcards selected" : "flashcards"
            }
            onClick={() => setSelectedId(question.id)}
          >
            <p>
              {selectedId === question.id ? question.answer : question.question}
            </p>
          </div>
        );
      })}
    </div>
  );
}
export default App;

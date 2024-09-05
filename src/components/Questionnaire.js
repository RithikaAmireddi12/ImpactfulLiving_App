import React, { useState } from 'react';

const Questionnaire = ({ task, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    "Is this task due soon?",
    "Will this task take a long time to complete?",
    "Is this task important for your long-term goals?",
    "Will this task have a significant impact?"
  ];

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // All questions answered, categorize the task
      const urgent = newAnswers[0] || newAnswers[1];
      const important = newAnswers[2] || newAnswers[3];
      onComplete(task.id, urgent, important);
    }
  };

  if (currentQuestion >= questions.length) {
    return null; // Questionnaire completed
  }

  return (
    <div className="questionnaire">
      <h3>Categorizing: {task.name}</h3>
      <p>{questions[currentQuestion]}</p>
      <button onClick={() => handleAnswer(true)}>Yes</button>
      <button onClick={() => handleAnswer(false)}>No</button>
    </div>
  );
};

export default Questionnaire;

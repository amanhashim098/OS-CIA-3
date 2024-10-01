import { useState, useEffect } from 'react';
import styles from '../styles/GameBoard.module.css';
import { processTypes } from './processTypes';

export const GameBoard = () => {
  const [processes, setProcesses] = useState([]);
  const [ganttChart, setGanttChart] = useState([]);
  const [level, setLevel] = useState(1);  
  const [evaluationMessage, setEvaluationMessage] = useState('');

  const generateProcesses = () => {
    const processKeys = Object.keys(processTypes);
    const totalProcesses = processKeys.length;

    const processCount = Math.floor(Math.random() * (Math.min(8, totalProcesses) - 4 + 1)) + 4;

    const shuffledProcesses = processKeys.sort(() => Math.random() - 0.5);

    const selectedProcesses = shuffledProcesses.slice(0, processCount).map((processKey) => {
      return {
        type: processKey,
        burstTime: Math.floor(Math.random() * 5) + 1,  
        arrivalTime: Math.floor(Math.random() * 10),   
      };
    });

    selectedProcesses.sort((a, b) => a.arrivalTime - b.arrivalTime); 
    setProcesses(selectedProcesses);
    setGanttChart([]); 
    setEvaluationMessage(''); 
  };

  const addToGanttChart = (process) => {
    setGanttChart((prev) => {
      const newGanttChart = [...prev];
      for (let i = 0; i < process.burstTime; i++) {
        newGanttChart.push(process);  
      }
      return newGanttChart;
    });
  };

  const removeFromGanttChart = (index) => {
    setGanttChart((prev) => prev.filter((_, i) => i !== index));
  };

  const evaluateGanttChart = () => {
    const correctOrder = [];
    processes.forEach((process) => {
      for (let i = 0; i < process.burstTime; i++) {
        correctOrder.push(process);  
      }
    });

    const isCorrect = ganttChart.every((process, index) => process.type === correctOrder[index]?.type);

    if (isCorrect && ganttChart.length === correctOrder.length) {
      setEvaluationMessage('Correct! Moving to the next level.');
      setTimeout(() => setLevel((prev) => prev + 1), 1000); 
      generateProcesses();  
    } else {
      setEvaluationMessage('Incorrect! Try again.');
    }
  };

  useEffect(() => {
    generateProcesses(); 
  }, [level]);

  return (
    <div>
      <h1 className={styles.title}>Hospital Rush - Level {level}</h1>
      
      {}
      <div className={styles.gameBoard}>
        {processes.map((process, index) => (
          <div key={index} className={styles.process}>
            <img
              src={processTypes[process.type]}
              alt={process.type}
              className={styles.processSVG}
              onClick={() => addToGanttChart(process)}
            />
          </div>
        ))}
      </div>

      {}
      <div className={styles.burstTimes}>
        {processes.map((process, index) => (
          <div key={index} className={styles.burstTime}>
            <img 
              src={processTypes[process.type]} 
              alt={process.type} 
              className={styles.processSVG} 
            />
            <span>{` -  ${process.burstTime}`}</span>
          </div>
        ))}
      </div>

      {}
      <div className={styles.ganttChart}>
        {ganttChart.map((process, index) => (
          <div key={index} className={styles.ganttProcess} onClick={() => removeFromGanttChart(index)}>
            <img
              src={processTypes[process.type]}
              alt={process.type}
              className={styles.processSVG}
            />
          </div>
        ))}
      </div>

      <button className={styles.evaluateButton} onClick={evaluateGanttChart}>Evaluate</button>
      <div className={styles.evaluationMessage}>
        {evaluationMessage}
      </div>
    </div>
  );
};

import { useState, useEffect } from 'react';
import styles from '../styles/GameBoard.module.css'; 
import { processTypes } from './processTypes'; 

export const GameBoard = () => {
  const [processes, setProcesses] = useState([]);

  const generateProcesses = () => {
    const processKeys = Object.keys(processTypes); 
    const totalProcesses = processKeys.length;

    const processCount = Math.floor(Math.random() * (Math.min(8, totalProcesses) - 4 + 1)) + 4;

    const shuffledProcesses = processKeys.sort(() => Math.random() - 0.5);

    const selectedProcesses = shuffledProcesses.slice(0, processCount).map((processKey) => {
      return {
        type: processKey,
        burstTime: Math.floor(Math.random() * 10) + 1, 
        arrivalTime: Math.floor(Math.random() * 10), 
      };
    });

    selectedProcesses.sort((a, b) => a.arrivalTime - b.arrivalTime);
    setProcesses(selectedProcesses);
  };

  useEffect(() => {
    generateProcesses();
  }, []);

  return (
    <div>
    <h1 className={styles.title}>Hospital Rush</h1>
      <div className={styles.gameBoard}>
            {processes.map((process, index) => (
          <div key={index} className={styles.process}>
            <img 
              src={processTypes[process.type]} 
              alt={process.type} 
              className={styles.processSVG} 
            />
          </div>
        ))}
      </div>
  #HI ARUN
      <div className={styles.burstTimes}>
        {processes.map((process, index) => (
          <div key={index} className={styles.burstTime}>
            <img 
              src={processTypes[process.type]} 
              alt={process.type} 
              className={styles.processSVG} 
            />
            <span>{` - ${process.burstTime}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


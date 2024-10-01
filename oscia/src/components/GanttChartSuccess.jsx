import styles from '../styles/GanttChartSuccess.module.css'; 

export const GanttChartSuccess = () => {

  const handleNextLevel = () => {
    history.push("/next-level"); 
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gantt Chart Correct!</h1>
      <p className={styles.message}>Congratulations! Youve successfully completed this level.</p>
      <button className={styles.nextLevelButton} onClick={handleNextLevel}>
        Move on to the Next Level
      </button>
    </div>
  );
};

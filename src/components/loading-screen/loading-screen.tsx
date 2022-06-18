import styles from './loading-screen.module.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className={styles.container}>
      <p>Loading data, please wait or try reloading the page.</p>
      <div className={styles.dualRing} ></div>
    </div>
  );
}

export default LoadingScreen;

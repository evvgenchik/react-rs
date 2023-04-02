import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader} />
      <p className={styles.text}>Loading...</p>
    </div>
  );
};

export default Loader;

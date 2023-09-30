import styles from "../../styles/Home.module.css";

function ExperienceOverview() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>A list of my professional experience:</h1>
        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Kainos &darr;</h2>
            <p>2018 - Present</p>
          </a>
        </div>
      </main>
    </div>
  );
}

export default ExperienceOverview;

import styles from "../../styles/Home.module.css";
import Card from "../Display/Card/Card";

function ExperienceOverview() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>A list of my professional experience:</h1>
        <div className={styles.grid}>
          <Card>
            <h2>Kainos &darr;</h2>
            <p>2018 - Present</p>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default ExperienceOverview;

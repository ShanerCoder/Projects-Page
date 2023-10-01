import styles from "../../styles/Home.module.css";
import Card from "../Display/Card/Card";

function ProjectsPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>A list of Projects I have created:</h1>

        <div className={styles.grid}>
          <Card
            onClick={() => {
              window.open(
                "https://github.com/ShanerCoder/Snakes-And-Ladders-Clone"
              );
            }}
          >
            <h2>Snakes and Ladders &rarr;</h2>
            <p>
              Project created to develop a snakes and ladders. Application
              created using PHP & Javascript.
            </p>
          </Card>

          <Card
            onClick={() => {
              window.open("https://xtreme-tracking.vercel.app/");
            }}
          >
            <h2>Xtreme Tracking &rarr;</h2>
            <p>
              Fitness Tracking Website with an inbuilt social media. Application
              created using Next.Js.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default ProjectsPage;

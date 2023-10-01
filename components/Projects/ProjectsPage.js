import Card from "../Display/Card/Card";
import classes from "./ProjectsPage.module.css";

function ProjectsPage() {
  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <h1 className={classes.title}>A list of Projects I have created:</h1>

        <div className={classes.grid}>
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

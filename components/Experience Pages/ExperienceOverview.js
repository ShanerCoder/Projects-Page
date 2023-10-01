import Card from "../Display/Card/Card";
import classes from "./ExperienceOverview.module.css";

function ExperienceOverview() {
  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <h1 className={classes.title}>A list of my professional experience:</h1>
        <div className={classes.grid}>
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

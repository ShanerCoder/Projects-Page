import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shane's Projects</title>
        <meta name="projects" content="Projects created by Shane" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>A list of Projects I have created:</h1>

        <div className={styles.grid}>
          <a
            href="https://github.com/ShanerCoder/Snakes-And-Ladders-Clone"
            className={styles.card}
          >
            <h2>Snakes and Ladders &rarr;</h2>
            <p>
              Project created to develop a snakes and ladders clone primarially
              using PHP & Javascript.
            </p>
          </a>

          <a href="https://xtreme-tracking.vercel.app/" className={styles.card}>
            <h2>Xtreme Tracking &rarr;</h2>
            <p>
              Fitness Tracking Website with inbuilt social media functionality
              made using Next.Js.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}

export default HomePage;

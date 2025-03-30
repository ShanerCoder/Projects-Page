import Head from "next/head";
import styles from "./HomePage.module.css";
import Image from "next/image";

function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>First Time Trying</title>
        <meta name="description" content="First Time Tries website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a
            className="linkLabel"
            href="https://www.youtube.com/@FirstTimeTryingYT"
          >
            <span className={"logoColor"}>F</span>irst{" "}
            <span className={"logoColor"}>T</span>ime{" "}
            <span className={"logoColor"}>T</span>rying!
            <span className={styles.logo}>
              <Image
                src="/Youtube.png"
                alt="Youtube Logo"
                width={64}
                height={64}
              />
            </span>
          </a>
        </h1>
      </main>
    </div>
  );
}

export default HomePage;

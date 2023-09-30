import ProjectsPage from "../components/Projects/ProjectsPage";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Shane's Projects</title>
        <meta name="projects" content="Projects created by Shane" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProjectsPage />
    </>
  );
}

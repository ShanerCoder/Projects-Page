import ExperienceOverview from "../components/Experience Pages/ExperienceOverview";
import OtherPage from "../components/Other Page/OtherPage";
import Head from "next/head";

export default function Other() {
  return (
    <>
      <Head>
        <title>Shane's Professional Experience</title>
        <meta name="description" content="Shane's Professional Experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ExperienceOverview />
    </>
  );
}

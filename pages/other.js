import OtherPage from "../components/Other Page/OtherPage";
import Head from "next/head";

export default function Other() {
  return (
    <>
      <Head>
        <title>Shane's Other Projects</title>
        <meta name="description" content="Other projects Shane has worked on" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <OtherPage />
    </>
  );
}

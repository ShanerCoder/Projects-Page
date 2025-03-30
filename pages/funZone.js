import OtherPage from "../components/Other Page/OtherPage";
import Head from "next/head";

export default function Other() {
  return (
    <>
      <Head>
        <title>The Fun Zone</title>
        <meta name="description" content="Fun Zone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <OtherPage />
    </>
  );
}

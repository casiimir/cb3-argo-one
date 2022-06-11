import Head from "next/head";
import Homepage from "../pages/homepage";
import { useDataContext } from "../context/DataContext/dataContext";
import SkeletonLoading from "../components/SkeletonLoading";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tricily</title>
        <meta
          name="description"
          content="Web app created for a group project, focusing on promoting tourism in Sicily"
        />
        <meta
          name="keywords"
          content="travel, sicily, travels in sicily"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Homepage />
      </main>
    </>
  );
}

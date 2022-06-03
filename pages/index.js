<<<<<<< HEAD
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import SearchInput from "../components/SearchInput";
import Cardlist from "../components/CardList";
import { DynamicParagraph } from "../components/DynamicParagraph/dynamicParagraph";
import styles from "../styles/Home.module.css";
import Modal from "../components/Modal/modal";
=======
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Form from '../components/Form'
import Cardlist from '../components/CardList'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'
>>>>>>> f5095e7 (feat/added scrollup feature)


export default function Home() {
  const Map = dynamic(() => import("../components/Map"), {
    loading: () => <p>A map is loading</p>,
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>Tricily</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<<<<<<< HEAD
=======

>>>>>>> f5095e7 (feat/added scrollup feature)
      <main className={styles.main}>
        <SearchInput />
        <Map></Map>
        <Modal />
      </main>

      <section>
        <Cardlist />
      </section>
    </>
  );
}
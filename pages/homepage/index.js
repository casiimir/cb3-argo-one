import { useState, useEffect } from "react";
import { useWindowSize } from "../../utils/utils";
import Image from "next/image";

import Hero from "../../components/Hero/hero";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.homepage}>
      <Hero />
      <div className={styles.homepage__desc}></div>
    </div>
  );
}

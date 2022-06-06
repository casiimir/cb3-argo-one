import { useState, useEffect } from "react";
import { useWindowSize } from "../../utils/utils";
import Image from "next/image";

import DynamicParagraph from "../../components/DynamicParagraph/dynamicParagraph";

import styles from "./styles.module.scss";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <div className={styles.homepage}>
      <Hero />
      <div className={styles.homepage__desc}>
        <DynamicParagraph />
      </div>
    </div>
  );
}

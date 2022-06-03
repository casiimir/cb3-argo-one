import Image from "next/image";
import styles from "./styles.module.scss";

import DynamicParagraph from "../../components/DynamicParagraph/dynamicParagraph";
import { useState } from "react";

const scalaDeiTurchiImg =
  "https://i.ibb.co/fC37R1m/davide-ragusa-Qb-Dkh-VZ80-To-unsplash.jpg";

export default function Home() {
  const [imgCount, setImgCount] = useState();

  return (
    <div className={styles.homepage}>
      <header className={styles.homepage__wrapper}>
        <Image
          src={scalaDeiTurchiImg}
          alt="scala-dei-turchi"
          width={2400}
          height={1598}
          layout="responsive"
          placeholder="empty"
          className="background-img"
        />
      </header>
      <div className={styles.homepage__desc}>
        <DynamicParagraph setCount={setImgCount} />
      </div>
    </div>
  );
}

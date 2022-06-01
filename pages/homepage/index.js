import Image from "next/image";
import styles from "./styles.module.scss";

export default function Home() {
	return (
		<div className={styles.homepage}>
			<header className={styles.homepage__wrapper}>
				<Image
					src="https://i.ibb.co/fC37R1m/davide-ragusa-Qb-Dkh-VZ80-To-unsplash.jpg"
					alt="scala-dei-turchi"
					width={2400}
					height={1598}
					layout="responsive"
					placeholder="empty"
					className="background-img"
				/>
			</header>
			<p className={styles.homepage__desc}>
				Discover Sicily through our beaches{" "}
			</p>
		</div>
	);
}

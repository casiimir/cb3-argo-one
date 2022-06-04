import styles from "./styles.module.scss";
import Image from "next/image";

const oliveBranchImg =
	"https://i.ibb.co/hFkrYbq/vilija-valeisaite-x-TZpip-USEj8-unsplash.jpg";

export default function About() {
	return (
		<div className={styles.about}>
			<div className={styles.about__wrapper}>
				<Image
					src={oliveBranchImg}
					alt="ramo ulivo"
					border="0"
					width={1280}
					height={2048}
					layout="responsive"
					placeholder="empty"
					objectFit="cover"
					className={styles.about__title}
				/>

				<article className={styles.about__descWrapper}>
					<h1 className={styles.about__title}>About us</h1>
					<div className={styles.about__descContainer}>
						<h2 className={styles.about__descTitle}>Who we are</h2>
						<p className={styles.about__desc}>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Optio eveniet rem, sint architecto soluta
							iusto libero doloremque placeat numquam maxime saepe
							itaque voluptatibus aliquid reprehenderit nisi nihil
							perspiciatis nam? Omnis? Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Optio eveniet rem,
							sint architecto soluta iusto libero doloremque
							placeat numquam maxime saepe itaque voluptatibus
							aliquid reprehenderit nisi nihil perspiciatis nam?
							Omnis? Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Optio eveniet rem, sint architecto
							soluta iusto libero doloremque placeat numquam
							maxime saepe itaque voluptatibus aliquid
							reprehenderit nisi nihil perspiciatis nam? Omnis?
						</p>

						<div className={styles.about__photos}>
							<img
								src={oliveBranchImg}
								alt=""
								width={300}
								height={300}
							/>
						</div>
					</div>
				</article>
			</div>
		</div>
	);
}

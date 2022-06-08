/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";
import Image from "next/image";

const oliveBranchImg =
	"https://i.ibb.co/hFkrYbq/vilija-valeisaite-x-TZpip-USEj8-unsplash.jpg";

const avatar_federica = "https://i.ibb.co/yY8WxBP/Federica-Centorbi-round.png";
const avatar_elenia = "https://i.ibb.co/y543nbf/Elenia-round.png";
const avatar_nicolo = "https://i.ibb.co/xX2cpyG/Nicolo-round.png";
const avatar_paolo = "https://i.ibb.co/bHyrKXv/Paolo-round.png";
const avatar_andrea = "https://i.ibb.co/34KChFn/Andrea-round.png";

export default function About() {
	return (
		<div className={styles.about}>
			<h1 className={styles.about__title}>About us</h1>
			<div className={styles.about__wrapper}>
				<Image
					src={oliveBranchImg}
					alt="ramo ulivo"
					border="0"
					width={1280}
					height={1280}
					layout="responsive"
					placeholder="empty"
					objectFit="cover"
					className={styles.about__img}
				></Image>

				<article className={styles.about__descWrapper}>
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
							<picture className={styles.about__pic}>
								<p>Elenia Centamore</p>
								<a href="https://www.linkedin.com/in/elenia-centamore-ba6200116/">
									<img
										src={avatar_elenia}
										alt="Elenia Centamore"
										title="Elenia Centamore"
									></img>
								</a>
							</picture>
							<picture className={styles.about__pic}>
								<p>Nicolò Piccolo</p>
								<a href="https://www.linkedin.com/in/nicolo-piccolo-nickpick77/">
									<img
										src={avatar_nicolo}
										alt="Nicolo Piccolo"
										title="Nicolò Piccolo"
									></img>
								</a>
							</picture>

							<picture className={styles.about__pic}>
								<p>Paolo Rotondo</p>
								<a href="https://www.linkedin.com/in/paolo-rotondo/">
									<img
										src={avatar_paolo}
										alt="Paolo Rotondo"
										title="Paolo Rotondo"
									></img>
								</a>
							</picture>

							<picture className={styles.about__pic}>
								<p>Federica Centorbi</p>
								<a href="https://www.linkedin.com/in/federica-centorbi/">
									<img
										src={avatar_federica}
										alt="Federica Centorbi"
										title="Federica Centorbi"
									></img>
								</a>
							</picture>
							<picture className={styles.about__pic}>
								<p>Andrea Cicala</p>
								<a href="https://www.linkedin.com/in/cicala-andrea/">
									<img
										src={avatar_andrea}
										alt="Andrea Cicala"
										title="Andrea Cicala"
									></img>
								</a>
							</picture>
						</div>
					</div>
				</article>
			</div>
		</div>
	);
}

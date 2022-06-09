import styles from "./styles.module.scss";
import Image from "next/image";

export default function Loginpage() {
	return (
		<div className={styles.login}>
			<div className={styles.loginImg}>
				<Image
					src="https://i.ibb.co/xLpYPpG/0674203617f60083ac3a61ddf87a8dda.jpg"
					alt="testa"
					width={2992}
					height={2244}
					layout="responsive"
					objectFit="cover"
				></Image>
			</div>
			<div className={styles.wrapper}>
				<h2 className={styles.wrapper__title}>Sign in</h2>
				<form className={styles.wrapper__form}>
					<input
						className={styles.wrapper__input}
						type="text"
						id="name"
						autoComplete="off"
						placeholder="Your name..."
					></input>
					<input
						className={styles.wrapper__input}
						type="text"
						id="password"
						autoComplete="off"
						placeholder="Your password..."
					></input>
				</form>
				<button className={styles.wrapper__button}>Sign in</button>
			</div>
		</div>
	);
}

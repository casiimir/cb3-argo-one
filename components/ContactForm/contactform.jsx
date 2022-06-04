import styles from "./styles.module.scss";

export default function Contact() {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.wrapper__title}>Send us a message</h1>
			<form className={styles.wrapper__form}>
				<div className={styles.wrapper__inputAll}>
					<input
						className={styles.wrapper__input}
						type="text"
						id="name"
						placeholder="Your name..."
						required
					></input>
					<input
						className={styles.wrapper__input}
						type="text"
						id="email"
						placeholder="Your email..."
						required
					></input>
				</div>

				<div className={styles.wrapper__message}>
					<label htmlFor="Message"></label>
					<textarea
						type="text"
						id="message"
						placeholder="Your message..."
						required
						className={styles.wrapper__textarea}
					></textarea>

					<button>Send</button>
				</div>
			</form>
		</div>
	);
}

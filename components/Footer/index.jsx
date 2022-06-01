import styles from ".//styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const currentYear = new Date();
const year = currentYear.getFullYear();

export default function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.upperFooter}>
				<div className={styles.upperFooterLeft}>
					<div className={styles.upperFooterLeft__logo}>
						<h4 className={styles.upperFooterLeft__title}>
							TRICILY
						</h4>
						<p>Discover Sicily with us.</p>
					</div>
				</div>

				<div className={styles.upperFooterRight}>
					<a href="#">HOME</a>
					<a href="">ABOUT US</a>
					<a href="">CONTACT US</a>
				</div>
			</div>

			<div className={styles.bottomFooter}>
				<hr className={styles.bottomFooter__line} />
				<div className={styles.bottomFooter__icons}>
					<FontAwesomeIcon icon={faFacebook} />
					<FontAwesomeIcon icon={faInstagram} />
					<FontAwesomeIcon icon={faTwitter} />
				</div>
				<p className={styles.bottomFooter__copyright}>
					Copyright ©{year} All rights reserved.
				</p>
			</div>
		</div>
	);
}

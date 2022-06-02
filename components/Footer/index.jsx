import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./styles.module.scss";

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
					<Link href="#">
						<a>HOME</a>
					</Link>
					<Link href="/about">
						<a>ABOUT US</a>
					</Link>
					<Link href="/contactus">
						<a>CONTACT US</a>
					</Link>
				</div>
			</div>

			<div className={styles.bottomFooter}>
				<hr className={styles.bottomFooter__line} />
				<div className={styles.bottomFooter__icons}>
					<FontAwesomeIcon
						icon={faFacebook}
						className={styles.bottomFooter__facebookIcon}
					/>
					<FontAwesomeIcon
						icon={faInstagram}
						className={styles.bottomFooter__instagramIcon}
					/>
					<FontAwesomeIcon
						icon={faTwitter}
						className={styles.bottomFooter__twitterIcon}
					/>
				</div>
				<p className={styles.bottomFooter__copyright}>
					Copyright ©{year} All rights reserved.
				</p>
			</div>
		</div>
	);
}

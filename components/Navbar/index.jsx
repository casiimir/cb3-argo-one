import Link from 'next/link'
import ContactUs from '../../pages/ContactUs'
import styles from './styles.module.scss'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div>
                <ul>
                    <h2>TRICILY</h2>
                        <Link href="/pages/ContactUs.jsx">
                            <ContactUs/>
                            <a>CONTACT US</a>
                        </Link>
                        <Link href="#">
                            <a>ABOUT US</a>
                        </Link>
                        <Link href="#">
                            <a>EXPERIENCES</a>
                        </Link>
                        <Link href="#">
                            <a>HOME</a>
                        </Link>
                </ul>
            </div>
        </nav>
    )
}
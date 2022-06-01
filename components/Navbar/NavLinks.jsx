import Link from 'next/link';
import styles from './styles.module.scss';
import {FaShoppingCart} from 'react-icons/fa';
import {RiUser3Fill} from 'react-icons/ri';

const NavLinks = (props) => {
    return (
        <nav>
            <ul className={props.open?styles.MenuOpener:null}>
                <Link href="/" onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <a>HOME</a>
                </Link>
                <Link href="/experiences" onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <a>EXPERIENCES</a>
                </Link>
                <Link href="/about" onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <a>ABOUT</a>
                </Link>
                <Link href="/contact-us" onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <a>CONTACTS</a>
                </Link>
                <Link href="/" onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <a>
                    <RiUser3Fill className={styles.NavbarIcons} />
                    </a>
                </Link>
                <Link href="/" onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <a>
                        <FaShoppingCart className={styles.NavbarIcons} />
                    </a>
                </Link>
            </ul>
        </nav>
    );
}    

export default NavLinks;

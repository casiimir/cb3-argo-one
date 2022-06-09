import Link from "next/link";
import styles from "./styles.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { RiUser3Fill } from "react-icons/ri";
import Translator from "../Translator";
import Flag from "../Translator/flag";

const NavLinks = (props) => {
  const handleOnClick = () => {
    props.isMobile && props.closeMobileMenu();
  };

  return (
    <nav>
      <ul className={props.open ? styles.MenuOpener : null}>
        <Link href="/">
          <a onClick={() => props.isMobile && props.closeMobileMenu()}>
            <Translator word="home" type="upper" />
          </a>
        </Link>
        <Link href="/experiences">
          <a onClick={() => props.isMobile && props.closeMobileMenu()}>
            <Translator word="experiences" type="upper" />
          </a>
        </Link>
        <Link href="/about">
          <a onClick={() => props.isMobile && props.closeMobileMenu()}>
            <Translator word="about" type="upper" />
          </a>
        </Link>
        <Link href="/contact-us">
          <a onClick={() => props.isMobile && props.closeMobileMenu()}>
            <Translator word="contacts" type="upper" />
          </a>
        </Link>
        <Link href="/">
          <a onClick={() => props.isMobile && props.closeMobileMenu()}>
            <RiUser3Fill className={styles.NavbarIcons} />
          </a>
        </Link>
        <Flag />
        <Link href="/cart">
          <a onClick={() => props.isMobile && props.closeMobileMenu()}>
            <FaShoppingCart className={styles.NavbarIcons} />
          </a>
        </Link>
      </ul>
    </nav>
  );
};

export default NavLinks;

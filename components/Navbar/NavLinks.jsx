import Link from "next/link";
import styles from "./styles.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { RiUser3Fill } from "react-icons/ri";
import Translator from "../Translator";
import Flag from "../Translator/flag";

const NavLinks = (props) => {

  return (
    <nav>
      <ul className={props.open ? styles.MenuOpener : null}>
        <Link
          href="/"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a>
          <Translator word="home" type="upper"/>
          </a>
        </Link>
        <Link
          href="/experiences"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a>
            <Translator word="experiences" type="upper"/>
          </a>
        </Link>
        <Link
          href="/about"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a>
          <Translator word="about" type="upper"/>
          </a>
        </Link>
        <Link
          href="/contact-us"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a>
          <Translator word="contacts" type="upper"/>
          </a>
        </Link>
        <Link
          href="/"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a>
            <RiUser3Fill className={styles.NavbarIcons} />
          </a>
        </Link>
        <Flag/>
        <Link
          href="/cart"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a>
            <FaShoppingCart className={styles.NavbarIcons} />
          </a>
        </Link>
      </ul>
    </nav>
  );
};

export default NavLinks;

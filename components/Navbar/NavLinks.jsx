import Link from "next/link";
import styles from "./styles.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { RiUser3Fill } from "react-icons/ri";
import Translator from "../Translator";
import Flag from "../Translator/flag";
import { useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext/userContext";

const NavLinks = (props) => {
  const [itemCounter, setItemCounter] = useState(0);
  const { userStore } = useUserContext();
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("cartItems"));
    console.log(userStore);
    item ? setItemCounter(item.length) : setItemCounter(0);
    //eslint-next-line-disable
  }, [userStore]);
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

        <Link href="/cart">
          <a
            className={styles.Cart_Container}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <div className={styles.Cart_Container__Badge}>
              <p>{itemCounter}</p>
            </div>
            <FaShoppingCart className={styles.Cart_Container__NavbarIcons} />
          </a>
        </Link>
        <Flag />
      </ul>
    </nav>
  );
};

export default NavLinks;

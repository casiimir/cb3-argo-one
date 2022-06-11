import NavLinks from "./NavLinks";
import styles from './styles.module.scss';
import {FiMenu} from 'react-icons/fi';
import {MdClose} from 'react-icons/md';
import {useState} from 'react';


const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <FiMenu
      className={styles.Hamburger}
      size="30px"
      color="#125D98"
      onClick={() => setOpen(!open)}
    />
  );
  const closeBtn = (
    <MdClose
      className={styles.Hamburger}
      size="30px"
      color="#125D98"
      onClick={() => setOpen(!open)}
    />
  );
  const closeMobileMenu = () => setOpen(false);

  return (    
    <nav className={styles.MobileNavigation}>
    {open ? closeBtn : hamburgerIcon}
    {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} open={open} />}
    </nav>
 );
};

export default MobileNavigation;


import NavLogo from "./NavLogo";
import styles from './styles.module.scss';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <NavLogo />
      <Navigation />
      <MobileNavigation />
    </div>
  );
}

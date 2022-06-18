import NavLinks from "./NavLinks";
import styles from './styles.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <NavLinks />
    </nav>
  );
};

export default Navigation;

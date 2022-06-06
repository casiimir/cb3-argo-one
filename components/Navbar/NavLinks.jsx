import Link from "next/link";
import { useDataContext } from "../../context/DataContext/dataContext";
import { FaShoppingCart } from "react-icons/fa";
import { cities } from "../../utils/data";
<<<<<<< HEAD
import styles from "./styles.module.scss";
=======
>>>>>>> feat: more page structure


const NavLinks = (props) => {
  const { updateExperiencesData } = useDataContext();

<<<<<<< HEAD
  const handleClickOnExperience = () => {
    const cityId = cities.map((city) => city.id);
    updateExperiencesData(cityId);
    updateExperiencesData(24);
    updateExperiencesData(15);
    props.isMobile && props.closeMobileMenu();
=======
  const arr = cities;
  const cityArr = arr.map((city) => city.id)

  const handleCliclOnExperience = (event) => {
    console.log(event);
    event.preventDefault();
    updateExperiencesData(cityArr); // passa i vari valori in base alle tue necessità, se te ne dovessero servire altri vai in utils -> getActivitiesOptions
>>>>>>> feat: more page structure
  };

  return (
    <nav>
      <div>
        <ul>
          <Link
            href="/homepage"
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <a>HOME</a>
          </Link>
          <Link
            href="/experiences"
            //onClick={() => props.isMobile && props.closeMobileMenu()} <--- devi wrapparle in una funzione
          >
            <a onClick={handleClickOnExperience}>EXPERIENCES</a>
          </Link>
          <Link
            href="/about"
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <a>ABOUT</a>
          </Link>
          <Link
            href="/contact-us"
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <a>CONTACTS</a>
          </Link>
          <Link href="/cart">
            <button
              className={styles.button}
              onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <FaShoppingCart size="22px" color="#fff" />
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavLinks;

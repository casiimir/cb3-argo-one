import Link from "next/link";
import { useDataContext } from "../../context/DataContext/dataContext";
import { FaShoppingCart } from "react-icons/fa";

const NavLinks = (props) => {
  const { updateActivitiesData } = useDataContext();
  const handleCliclOnExperience = (event) => {
    console.log(event);
    event.preventDefault();
    updateActivitiesData(coord, codeType, date, cityIn); // passa i vari valori in base alle tue necessità, se te ne dovessero servire altri vai in utils -> getActivitiesOptions
  };

  return (
    <nav>
      <div>
        <ul>
          <Link
            href="/"
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <a>HOME</a>
          </Link>
          <Link
            href="/experiences"
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <a onClick={handleCliclOnExperience}>EXPERIENCES</a>
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
          <button
            href="/"
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <FaShoppingCart size="22px" color="#fff" />
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default NavLinks;

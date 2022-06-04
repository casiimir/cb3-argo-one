import Footer from "../Footer";
import Navbar from "../Navbar/index";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;

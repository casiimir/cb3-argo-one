import Footer from "../Footer";
import Navbar from "../Navbar/index";
import ScrollUp from "../ScrollUp/index";

const DefaultLayout = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
			<ScrollUp />
			<Footer />
		</div>
	);
};

export default DefaultLayout;

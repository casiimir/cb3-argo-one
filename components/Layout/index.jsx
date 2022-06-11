import Footer from "../Footer";
import Navbar from "../Navbar/index";
import ScrollUp from "../ScrollUp/index";

const DefaultLayout = ({ children }) => {

	function setLogin(data){
		console.log(data)
	}

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

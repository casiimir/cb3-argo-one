import { DataContextProvider } from "../context/DataContext/dataContext";
import DefaultLayout from "../components/Layout";
import Home from "./homepage";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<DefaultLayout>
			<DataContextProvider>
				<Component {...pageProps} />
			</DataContextProvider>
		</DefaultLayout>
	);
}

export default MyApp;

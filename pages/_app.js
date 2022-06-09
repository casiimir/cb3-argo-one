import { DataContextProvider } from "../context/DataContext/dataContext";
import { UserContextProvider } from "../context/UserContext/userContext";
import DefaultLayout from "../components/Layout";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
	return (
		<UserContextProvider>
			<DataContextProvider>
				<DefaultLayout>
					<Component {...pageProps} />
				</DefaultLayout>
			</DataContextProvider>
		</UserContextProvider>
	);
}

export default MyApp;

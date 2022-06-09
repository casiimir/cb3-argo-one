import { DataContextProvider } from "../context/DataContext/dataContext";
import { UserContextProvider } from "../context/UserContext/userContext";
import DefaultLayout from "../components/Layout";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
<<<<<<< HEAD
	return (
		<ModalContextProvider>
			<DataContextProvider>
				<DefaultLayout>
					<Component {...pageProps} />
				</DefaultLayout>
			</DataContextProvider>
		</ModalContextProvider>
	);
=======
  return (
    <UserContextProvider>
      <DataContextProvider>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </DataContextProvider>
    </UserContextProvider>
  );
>>>>>>> 8fcf5b659782df116183fe0b9223c5dd49b8e25a
}

export default MyApp;

import { DataContextProvider } from "../context/DataContext/dataContext";
import { ModalContextProvider } from "../context/ModalContext/modalContext";
import DefaultLayout from "../components/Layout";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

config.autoAddCss = false;

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <ModalContextProvider>
      <DataContextProvider>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </DataContextProvider>
    </ModalContextProvider>
  );
}

export default MyApp;

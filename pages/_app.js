import { DataContextProvider } from "../context/DataContext/dataContext";
import DefaultLayout from "../components/Layout";
import Home from "./homepage";
import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </DataContextProvider>
  );
}

export default MyApp;

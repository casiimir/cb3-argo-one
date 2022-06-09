import Head from "next/head";
import dynamic from "next/dynamic";
import Cardlist from "../components/CardList";
import Homepage from "../pages/homepage";
import styles from "../styles/Home.module.css";

export default function Home() {
	const Map = dynamic(() => import("../components/Map"), {
		loading: () => <p>A map is loading</p>,
		ssr: false,
	});

	return (
		<>
			<Head>
				<title>Tricily</title>
				<meta
					name="description"
					content="Web app created for a group project, focusing on promoting tourism in Sicily"
				/>
				<meta
					name="keywords"
					content="travel, sicily, travels in sicily"
				></meta>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Homepage />
			</main>
		</>
	);
}

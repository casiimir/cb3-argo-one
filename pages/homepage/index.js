import Hero from "../../components/Hero/hero";
import CardList from "../../components/CardList";
import ExperienceFinder from "../../components/ExperienceFinder/ExperienceFinder";
import styles from "./styles.module.scss";
import { useDataContext } from "../../context/DataContext/dataContext";

export default function Homepage() {

	return (
		<div className={styles.homepage}>
			<Hero />
			<div className={styles.homepage__map}>
				<ExperienceFinder />
			</div>
			<CardList />
		</div>
	);
}
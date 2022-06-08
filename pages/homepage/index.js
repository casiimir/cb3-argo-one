import { useState, useEffect } from "react";
import { useWindowSize } from "../../utils/utils";
import Image from "next/image";
import SearchInput from "../../components/SearchInput";
import dynamic from "next/dynamic";
import Hero from "../../components/Hero/hero";
import CardList from "../../components/CardList";
import styles from "./styles.module.scss";

export default function Homepage() {
	const Map = dynamic(() => import("../../components/Map"), {
		loading: () => <p>A map is loading</p>,
		ssr: false,
	});

	return (
		<div className={styles.homepage}>
			<Hero />
			<div className={styles.homepage__map}>
				<SearchInput />
				<Map />
			</div>
			<CardList />
		</div>
	);
}

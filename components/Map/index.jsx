import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useMap } from "react-leaflet";
import { useDataContext } from "../../context/DataContext/dataContext";
import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./index.module.scss";

const MapControl = (props) => {
  const map = useMap();
  const coords = props.coords;

  useEffect(() => {
    map.flyTo(coords, map.getZoom());
  });
  return null;
};

const markerCoordinates = [
	[38.121065, 13.349032],
	[37.289, 13.6],
	[38.196, 15.554],
	[37.508, 15.086],
	[37.075, 15.286],
	[38.0175, 12.515],
];

const Map = () => {
  const { dataStore } = useDataContext();
  const coords = dataStore.latLon;

  const ICON = icon({
    iconUrl: "/marker.png",
    iconSize: [35, 35],
  });

  const containerStyle = {
    minWidth: "80%",
    maxWidth: "100vw",
    height: "65vh",
  };

  return (
    <MapContainer
      className={styles.map}
      center={coords}
      zoom={8.2}
      scrollWheelZoom={false}
      doubleClickZoom={true}
      style={containerStyle}
    >
      <MapControl coords={coords} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markerCoordinates.map((item, index) => (
        <Marker icon={ICON} key={`marker-${index}`} position={item} />
      ))}
    </MapContainer>
  );
};

export default Map;

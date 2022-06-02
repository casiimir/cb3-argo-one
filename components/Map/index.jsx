import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useMap } from 'react-leaflet';
import { useDataContext } from '../../context/DataContext/dataContext';
import { icon } from "leaflet";
import 'leaflet/dist/leaflet.css';


const MapControl = (props) => {
    const map = useMap()
    const coords = props.coords;

    useEffect(() => {
        map.flyTo(coords, map.getZoom())
    })
    return null;
}

const Map = () => {
    const { dataStore } = useDataContext();
    const coords = dataStore.latLon;

    const ICON = icon({
        iconUrl: "/marker.png",
        iconSize: [35, 35],
    })

    const containerStyle = {
        minWidth: '80%',
        maxWidth: '100vw',
        height: '60vh',
    };

    return (
        <>
            <MapContainer center={dataStore.latLon} zoom={13} scrollWheelZoom={true} style={containerStyle}>
                <MapControl coords={coords} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={ICON} position={dataStore.latLon}>
                </Marker>
            </MapContainer>
        </>
    )
};

export default Map;
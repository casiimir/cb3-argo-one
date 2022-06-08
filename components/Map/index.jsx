import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useMap } from 'react-leaflet';
import { useDataContext } from '../../context/DataContext/dataContext';
import { icon } from "leaflet";
import 'leaflet/dist/leaflet.css';
import styles from './index.module.scss'


const MapControl = (props) => {
    const map = useMap()
    const coords = props.coords;

    useEffect(() => {
        map.flyTo(coords, map.getZoom())
    })
    return null;
};

const markerCoordinates = {
    
     agr: {
        lat: '37.289',
        lng: '13.6'
    },
    mess: {
        lat: '38.196',
        lng: '15.554'
    },
    cat: {
        lat: '37.508',
        lng: '15.086'
    },
    rag: {
        lat: '44.698',
        lng: '8.523'
    },
    sir: {
        lat: '37.075',
        lng: '15.286'
    },
    trp: {
        lat: '38.0175',
        lng: '12.515'
    },
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
        height: '65vh',
    };

    return (
            <MapContainer className={styles.map} center={dataStore.latLon} zoom={7.2} scrollWheelZoom={false} style={containerStyle}>
                <MapControl coords={coords} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={ICON} position={dataStore.latLon}/>
                <Marker icon={ICON} position={markerCoordinates.agr}/>
                <Marker icon={ICON} position={markerCoordinates.mess}/>
                <Marker icon={ICON} position={markerCoordinates.cat}/>
                <Marker icon={ICON} position={markerCoordinates.rag}/>
                <Marker icon={ICON} position={markerCoordinates.sir}/>
                <Marker icon={ICON} position={markerCoordinates.trp}/>
            </MapContainer>
        
    )
};

export default Map;
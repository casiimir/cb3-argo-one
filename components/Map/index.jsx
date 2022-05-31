import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { icon } from "leaflet"
import 'leaflet/dist/leaflet.css'

const Map = ({ lat, long }) => {

const ICON = icon({
    iconUrl: "/marker.png",
    iconSize: [32, 32],
  })

const containerStyle = {
    width: '100%',
    height: '60vh'
};

const center = {
    lat: lat,
    lng: long
};

    return (
        <>
            <MapContainer center={center} zoom={13} scrollWheelZoom={true} style={containerStyle}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={ICON} position={center}>
                </Marker>
            </MapContainer>
        </>
    )
}

export default Map;
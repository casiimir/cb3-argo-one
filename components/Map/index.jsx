import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { icon } from "leaflet"
import 'leaflet/dist/leaflet.css'

const Map = ( {coords} ) => {

const ICON = icon({
    iconUrl: "/marker.png",
    iconSize: [32, 32],
  })

const containerStyle = {
    minWidth: '80%',
    maxWidth: '100vw',
    height: '60vh',
};

const center = {
   lat: coords[0],
   lng: coords[1] 
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
};

export default Map;
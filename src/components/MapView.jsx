import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

import "leaflet/dist/leaflet.css";

const MapView = () => {
  const position = [-34.739726, -56.222658]; // Coordenadas (ejemplo: Montevideo, Uruguay)
  return (
    <MapContainer center={position} zoom={14} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
        <Popup>
          Fraccionamiento Los Robles
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;

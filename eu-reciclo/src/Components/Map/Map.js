import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import { postos } from './data/postosDeReciclagem';
import './map.css';
import 'leaflet/dist/leaflet.css';
import recicleIcon from './recicle.svg';

export const icon = new Icon({
  iconUrl: recicleIcon,
  iconSize: [60, 60],
});

export default function MapLeaflet() {
  return (
    <MapContainer center={[-20.3222, -40.3381]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {postos.map((posto) => (
        <Marker position={posto.coordinates} icon={icon} key={posto.id}>
          <Popup>
            <h3>{posto.name}</h3>
            <p>
              <b>Endereço:</b> {posto.address}
            </p>
            <p>
              <b>Telefone:</b> {posto.phone}
            </p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

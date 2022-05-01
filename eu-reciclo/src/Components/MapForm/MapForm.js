import 'leaflet/dist/leaflet.css';

import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { v4 as uuidv4 } from 'uuid';
import { fetchLocalMapBox } from '../../Services';
import AsyncSelect from 'react-select/async';
import './MapForm.css';
import L, { Icon } from 'leaflet';
import { postos } from './data/postosDeReciclagem';
import recicleIcon from './recicle.svg';
import { useUserContext } from '../../Contexts/userContext';

export const icon = new Icon({
  iconUrl: recicleIcon,
  iconSize: [60, 60],
});

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const initialPosition = { lat: -22.2154042, lng: -54.8331331 };

function MapForm() {
  const { user } = useUserContext();
  const [deliveries, setDeliveries] = useState([]);

  const [position, setPosition] = useState(null);
  const [name, setName] = useState('');
  const [complement, setComplement] = useState('');
  const [address, setAddress] = useState(null);

  const [location, setLocation] = useState(initialPosition);

  const loadOptions = async (inputValue, callback) => {
    if (inputValue.length < 5) return;
    let places = [];
    const response = await fetchLocalMapBox(inputValue);
    response.features.map((item) =>
      places.push({
        label: item.place_name,
        value: item.place_name,
        coords: item.center,
        place: item.place_name,
      })
    );

    callback(places);
  };

  const handleChangeSelect = (event) => {
    setPosition({
      longitude: event.coords[0],
      latitude: event.coords[1],
    });

    setAddress({ label: event.place, value: event.place });

    setLocation({
      lng: event.coords[0],
      lat: event.coords[1],
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (!address || !name) return;

    setDeliveries([
      ...deliveries,
      {
        id: uuidv4(),
        name,
        address: address?.value || '',
        complement,
        latitude: location.lat,
        longitude: location.lng,
      },
    ]);
    setName('');
    setAddress(null);
    setComplement('');
    setPosition(null);
  }

  return (
    <div id="page-map">
      <main>
        {' '}
        <form onSubmit={handleSubmit} className="landing-page-form">
          <fieldset>
            <legend>Buscar Associação</legend>
            <div className="input-block">
              <label htmlFor="address">Endereço</label>
              <AsyncSelect
                placeholder="Digite seu endereço..."
                classNamePrefix="filter"
                cacheOptions
                loadOptions={loadOptions}
                onChange={handleChangeSelect}
                value={address}
              />
            </div>
          </fieldset>
          <button
            className="confirm-button"
            type="submit"
            onClick={() => setName(user?.name)}
          >
            Confirmar
          </button>
        </form>
      </main>
      <MapContainer
        center={location}
        zoom={4}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoid2lsbGlhbmQxIiwiYSI6ImNsMm5jeXRlMjA0ajAzY28wcHVoaDQ1YmMifQ.mzoXDafxXBR6E1Jb9rSPfw`}
        />

        {position && (
          <Marker position={[position.latitude, position.longitude]}></Marker>
        )}

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

        {deliveries.map((delivery) => (
          <Marker
            key={delivery.id}
            position={[delivery.latitude, delivery.longitude]}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              <div>
                <h3>{delivery.name}</h3>
                <p>{delivery.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapForm;

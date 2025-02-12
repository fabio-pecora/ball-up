import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const CourtMap = ({ courtsData }) => {
  return (
    <MapContainer center={[40.5795, -74.1502]} zoom={13} style={{ height: "500px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {courtsData.map((court, index) => (
        <Marker key={index} position={[court.lat, court.long]}>
          <Popup>{court.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CourtMap;

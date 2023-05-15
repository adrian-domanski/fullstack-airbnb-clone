import React from 'react'
import 'twin.macro'

import L from 'leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import makerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import makerIcon from 'leaflet/dist/images/marker-icon.png'
import makerShadow from 'leaflet/dist/images/marker-shadow.png'

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: makerIcon.src,
  iconRetinaUrl: makerIcon2x.src,
  shadowUrl: makerShadow.src,
})

interface MapProps {
  center?: number[]
}

const Map: React.FC<MapProps> = ({ center }) => {
  return (
    <MapContainer
      center={(center as L.LatLngExpression) || [51, -0.09]}
      zoom={center ? 4 : 2}
      scrollWheelZoom={false}
      tw="h-[35vh] rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {center && <Marker position={center as L.LatLngExpression} />}
    </MapContainer>
  )
}

export default Map
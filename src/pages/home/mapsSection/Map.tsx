import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { type MapType } from '../../../types/types'

const Map = ({ position, popup }: MapType) => {
  return (
    <MapContainer className='w-screen xl:w-[500px] h-[350px] sm:h-[500px] z-0' center={position} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; Ministerio Libertad en Cristo Jesus'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          {popup}
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map

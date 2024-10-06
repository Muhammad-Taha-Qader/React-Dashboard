

// const RealTimeMapComponent = () => {
//   return (
//     <div className="bg-white rounded-lg shadow p-6">
//       <h2 className="text-lg font-semibold mb-4">Real-Time</h2>
//       <div className="relative">
//         {/* The map */}
//         <div className="relative">
//           <img src="path-to-your-map-image.png" alt="World Map" className="w-full" />
//           {/* The location markers */}
//           <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-500 rounded-full"></div>
//           <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-blue-500 rounded-full"></div>
//           {/* Add more markers as per the design */}
//         </div>
//         {/* Zoom controls */}
//         <div className="absolute bottom-4 right-4 flex flex-col">
//           <button className="bg-gray-300 p-2 rounded mb-1">+</button>
//           <button className="bg-gray-300 p-2 rounded">-</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RealTimeMapComponent;

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const RealTimeMapComponent = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 min-w-96 text-gray-950">
      <h2 className="text-lg font-semibold mb-4">Real-Time</h2>
      <MapContainer center={[20, 0]} zoom={1} scrollWheelZoom={false} className="w-full h-64">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Example markers */}
        <Marker position={[51.505, -0.09]}>
          <Popup>Marker 1</Popup>
        </Marker>
        <Marker position={[48.8566, 2.3522]}>
          <Popup>Marker 2</Popup>
        </Marker>
        <Marker position={[30.8566, 70.3522]}>
          <Popup>Marker 2</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default RealTimeMapComponent;

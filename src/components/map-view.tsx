'use client';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { Skeleton } from './ui/skeleton';

const containerStyle = {
  width: '100%',
  height: '100%'
};

// Demo location: Mumbai, India
const center = {
  lat: 19.0760,
  lng: 72.8777
};

const locations = [
  { lat: 19.0760, lng: 72.8777 }, // Mumbai
  { lat: 19.0790, lng: 72.8727 },
  { lat: 19.0720, lng: 72.8827 },
];


export default function MapView() {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
    });

    if (loadError) {
        return <div className="w-full h-full bg-muted flex items-center justify-center"><p>Error loading map</p></div>;
    }

    if (!isLoaded) {
        return <Skeleton className="w-full h-full" />;
    }

  return (
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={{ 
            disableDefaultUI: true, 
            zoomControl: true,
            styles: [
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.icon",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },
                 {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                }
            ]
        }}
    >
        {locations.map((loc, index) => (
             <MarkerF 
                key={index} 
                position={loc} 
                icon={{
                    path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
                    fillColor: 'hsl(var(--primary))',
                    fillOpacity: 1,
                    strokeWeight: 0,
                    rotation: 0,
                    scale: 1.5,
                    anchor: new google.maps.Point(12, 24),
                }}
            />
        ))}
    </GoogleMap>
  );
}

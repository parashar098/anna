'use client';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { Skeleton } from './ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { MapPin } from 'lucide-react';

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

// Using an empty string for the API key for demo purposes
const apiKey = '';

export default function MapView() {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    });

    if (loadError) {
        return (
          <div className="w-full h-full bg-muted flex items-center justify-center p-4">
            <Alert variant="destructive" className="max-w-md">
              <MapPin className="h-4 w-4" />
              <AlertTitle>Map Loading Error</AlertTitle>
              <AlertDescription>
                There was an error loading the map. For full functionality, ensure a valid Google Maps API key is provided.
              </AlertDescription>
            </Alert>
          </div>
        );
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

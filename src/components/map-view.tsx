import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const mapImage = PlaceHolderImages.find(p => p.id === 'map-view');

export default function MapView() {
  if (!mapImage) {
    return <div className="w-full h-full bg-muted flex items-center justify-center"><p>Map not available</p></div>;
  }

  return (
    <div className="w-full h-full relative">
      <Image
        src={mapImage.imageUrl}
        alt={mapImage.description}
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
        data-ai-hint={mapImage.imageHint}
      />
      <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
        <div className="bg-background/80 p-4 rounded-lg shadow-lg">
          <p className="font-semibold text-center">Map View Placeholder</p>
          <p className="text-sm text-muted-foreground text-center">Live map will be displayed here.</p>
        </div>
      </div>
    </div>
  );
}

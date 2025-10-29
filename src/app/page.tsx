
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HandHelping, Heart, Users } from 'lucide-react';

const partnerImages = [
  PlaceHolderImages.find(p => p.id === 'partner-1'),
  PlaceHolderImages.find(p => p.id === 'partner-2'),
  PlaceHolderImages.find(p => p.id === 'partner-3'),
  PlaceHolderImages.find(p => p.id === 'partner-4'),
  PlaceHolderImages.find(p => p.id === 'partner-5'),
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
          <video
            src="https://videos.pexels.com/video-files/7578298/7578298-hd_1920_1080_25fps.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex flex-col items-center gap-6 p-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight drop-shadow-lg">
              Save Food, Feed Lives
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-gray-200">
              Join AnnaSewa, a platform connecting those with surplus food to those in need. Together, we can fight hunger and reduce food waste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-lg">
                <Link href="/donate">Donate Food</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8 py-6 text-lg">
                <Link href="/volunteer">Become a Volunteer</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Impact Counters */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center gap-2">
                <Heart className="h-12 w-12 text-primary" />
                <p className="text-4xl font-bold">1,200,000+</p>
                <p className="text-lg text-muted-foreground">Meals Saved</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <HandHelping className="h-12 w-12 text-primary" />
                <p className="text-4xl font-bold">5,000+</p>
                <p className="text-lg text-muted-foreground">Donors</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Users className="h-12 w-12 text-primary" />
                <p className="text-4xl font-bold">1,500+</p>
                <p className="text-lg text-muted-foreground">Volunteers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
              Our Partners & Sponsors
            </h2>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {partnerImages.map((logo, index) =>
                logo ? (
                  <Card key={index} className="bg-card/80 p-6 flex items-center justify-center shadow-sm hover:shadow-lg transition-shadow">
                    <Image
                      src={logo.imageUrl}
                      alt={logo.description}
                      width={150}
                      height={75}
                      className="object-contain"
                      data-ai-hint={logo.imageHint}
                    />
                  </Card>
                ) : null
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

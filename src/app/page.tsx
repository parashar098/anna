
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HandHelping, Heart, Users, Truck, Leaf, ShieldCheck, Map } from 'lucide-react';
import { Footer } from '@/components/layout/footer';

const partnerImages = [
  PlaceHolderImages.find(p => p.id === 'partner-1'),
  PlaceHolderImages.find(p => p.id === 'partner-2'),
  PlaceHolderImages.find(p => p.id === 'partner-3'),
  PlaceHolderImages.find(p => p.id === 'partner-4'),
  PlaceHolderImages.find(p => p.id === 'partner-5'),
];

const howItWorksSteps = [
    {
        icon: HandHelping,
        title: "Register & List Food",
        description: "Donors list surplus food details on the platform.",
    },
    {
        icon: Truck,
        title: "Volunteer Picks Up",
        description: "A nearby volunteer is assigned to collect the donation.",
    },
    {
        icon: Users,
        title: "NGOs Distribute",
        description: "The food is delivered to a partner NGO for distribution.",
    },
    {
        icon: Heart,
        title: "You Make a Difference",
        description: "Your contribution reaches those in need, fighting hunger.",
    },
];

const whyChooseUsPoints = [
    {
        icon: Map,
        title: "Real-Time Tracking",
        description: "Monitor your donation from pickup to delivery with our live map.",
    },
    {
        icon: ShieldCheck,
        title: "Trusted NGOs",
        description: "We partner with verified NGOs to ensure food reaches the right people.",
    },
    {
        icon: Leaf,
        title: "Verified Impact",
        description: "Receive certificates for your contributions and track your impact.",
    },
]

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
              Serve Food, Save Lives, Spread Happiness 🍱
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-gray-200">
              Connecting donors, volunteers, and NGOs to eliminate hunger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-lg">
                <Link href="/donate">Donate Now</Link>
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

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-secondary/50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">How It Works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {howItWorksSteps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary mb-4">
                                <step.icon className="h-10 w-10" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Why Choose AnnaSewa */}
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Why Choose AnnaSewa</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {whyChooseUsPoints.map((point, index) => (
                        <Card key={index} className="p-8 text-center flex flex-col items-center shadow-md hover:shadow-xl transition-shadow rounded-2xl">
                             <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 text-accent mb-6">
                                <point.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                            <p className="text-muted-foreground">{point.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Volunteer CTA */}
        <section className="py-20 md:py-32 bg-primary/10">
            <div className="container mx-auto px-4 text-center">
                 <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                    Be the reason someone smiles today.
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Join 1,500+ volunteers helping end hunger one meal at a time. Your time and effort can make a world of difference.
                </p>
                <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg">
                    <Link href="/volunteer">Join as a Volunteer</Link>
                </Button>
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
      <Footer />
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, Goal, Users } from 'lucide-react';

const missionImage = PlaceHolderImages.find(p => p.id === 'about-mission');
const teamImages = [
  PlaceHolderImages.find(p => p.id === 'team-1'),
  PlaceHolderImages.find(p => p.id === 'team-2'),
  PlaceHolderImages.find(p => p.id === 'team-3'),
  PlaceHolderImages.find(p => p.id === 'team-4'),
];
const partnerImages = [
  PlaceHolderImages.find(p => p.id === 'partner-1'),
  PlaceHolderImages.find(p => p.id === 'partner-2'),
  PlaceHolderImages.find(p => p.id === 'partner-3'),
  PlaceHolderImages.find(p => p.id === 'partner-4'),
  PlaceHolderImages.find(p => p.id === 'partner-5'),
];

const teamMembers = [
  { name: 'Alex Johnson', role: 'Founder & CEO', image: teamImages[0] },
  { name: 'Maria Garcia', role: 'Head of Operations', image: teamImages[1] },
  { name: 'Sam Chen', role: 'Lead Developer', image: teamImages[2] },
  { name: 'Priya Singh', role: 'Community Manager', image: teamImages[3] },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">About AnnaSewa</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Learn about our journey, our mission to combat food waste, and the dedicated team making it all happen.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20">
        <div className="order-2 md:order-1">
          <div className="space-y-8">
            <div className="flex gap-4">
              <Goal className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold font-headline mb-2">Our Mission</h2>
                <p className="text-muted-foreground">
                  To create a seamless network connecting food donors, volunteers, and beneficiaries, ensuring that surplus food nourishes communities instead of ending up in landfills. We aim to leverage technology for social good, making food redistribution efficient, transparent, and impactful.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Award className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold font-headline mb-2">Our Journey</h2>
                <p className="text-muted-foreground">
                  Founded in 2022, AnnaSewa started as a small community project. Witnessing the dual problems of food waste and hunger, our founders were inspired to build a platform that could bridge this gap. Today, we've grown into a nationwide movement, saving thousands of meals every week.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          {missionImage && (
            <Image
              src={missionImage.imageUrl}
              alt={missionImage.description}
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover aspect-video"
              data-ai-hint={missionImage.imageHint}
            />
          )}
        </div>
      </section>

      {/* Team Section */}
      <section className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              {member.image && (
                <Image
                  src={member.image.imageUrl}
                  alt={`Portrait of ${member.name}`}
                  width={150}
                  height={150}
                  className="rounded-full object-cover mb-4 shadow-md"
                  data-ai-hint={member.image.imageHint}
                />
              )}
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16 bg-secondary/50 rounded-2xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
            Partners & Sponsors
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

      {/* Join Us CTA */}
      <section className="text-center mt-20">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Ready to Make a Difference?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join our mission to fight hunger and food waste.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
            <Link href="/donate">Donate Food</Link>
          </Button>
          <Button asChild size="lg" variant="default" className="rounded-full">
            <Link href="/volunteer">Become a Volunteer</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

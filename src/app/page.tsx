
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HandHelping, Heart, Users, Truck, Leaf, ShieldCheck, Map, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Footer } from '@/components/layout/footer';
import { blogPosts } from '@/app/blog/data';
import { ContactForm } from './contact/_components/contact-form';

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

const mapImage = PlaceHolderImages.find(p => p.id === 'contact-map');
const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg');

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3);
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover -z-10"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
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

        {/* Blog Section */}
        <section className="py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">
              From the Blog
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Stay updated with our latest news, impact stories, and articles on sustainability and food waste reduction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map((post) => {
                const image = PlaceHolderImages.find(p => p.id === post.image);
                return (
                  <Card key={post.slug} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl flex flex-col">
                    {image && (
                       <Link href={`/blog/${post.slug}`}>
                        <Image
                          src={image.imageUrl}
                          alt={post.title}
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover"
                           data-ai-hint={image.imageHint}
                        />
                      </Link>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl font-headline">
                         <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                       <Button asChild variant="link" className="p-0 h-auto text-primary">
                        <Link href={`/blog/${post.slug}`}>
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/blog">Read All Articles</Link>
              </Button>
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
                  <Card key={index} className="bg-card p-6 flex items-center justify-center shadow-sm hover:shadow-lg transition-shadow">
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

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4">Get In Touch</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Have questions or want to partner with us? We'd love to hear from you.
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-12">
              <div className="md:col-span-3">
                <ContactForm />
              </div>
              <div className="md:col-span-2 space-y-8">
                <div className="p-6 bg-card rounded-2xl shadow-sm">
                  <h3 className="text-2xl font-semibold font-headline mb-6">Contact Information</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Our Headquarters</h4>
                        <p>123 Green Way, Sustainability City, 12345</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Email Us</h4>
                        <p>contact@annasewa.org</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground">Call Us</h4>
                        <p>+1 (234) 567-890</p>
                      </div>
                    </div>
                  </div>
                </div>
                {mapImage && (
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={mapImage.imageUrl}
                      alt={mapImage.description}
                      width={800}
                      height={500}
                      className="w-full object-cover"
                      data-ai-hint={mapImage.imageHint}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

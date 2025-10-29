
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const storyHeroImage = PlaceHolderImages.find(p => p.id === 'story-hero');
const storyImages = [
  PlaceHolderImages.find(p => p.id === 'story-1'),
  PlaceHolderImages.find(p => p.id === 'story-2'),
  PlaceHolderImages.find(p => p.id === 'story-3'),
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Volunteer',
    avatar: 'https://picsum.photos/seed/priya/100/100',
    quote: "Volunteering with AnnaSewa has been a life-changing experience. Seeing the direct impact of our work on people's lives is incredibly rewarding. It's more than just distributing food; it's about sharing hope and building community.",
  },
  {
    name: 'Mr. Gupta',
    role: 'Beneficiary',
    avatar: 'https://picsum.photos/seed/gupta/100/100',
    quote: "Before AnnaSewa, we struggled to get consistent meals. Now, thanks to the kind volunteers and donors, my family has nutritious food every day. It has lifted a huge weight off our shoulders. We are so grateful for this support.",
  },
  {
    name: 'Rohan Mehta',
    role: 'Restaurant Partner',
    avatar: 'https://picsum.photos/seed/rohan/100/100',
    quote: "As a restaurant owner, I always felt bad about the food we couldn't sell. Partnering with AnnaSewa allows us to put our surplus food to good use. It's an efficient, meaningful way to reduce waste and give back to our community.",
  },
];

export default function StoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Real Stories, Real Impact</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the powerful stories of change, hope, and community that fuel our mission every single day.
        </p>
      </section>

      {/* Hero Story */}
      {storyHeroImage && (
        <section className="relative rounded-2xl overflow-hidden mb-20 shadow-lg">
          <Image
            src={storyHeroImage.imageUrl}
            alt={storyHeroImage.description}
            width={1200}
            height={500}
            className="w-full object-cover aspect-[16/7]"
            data-ai-hint={storyHeroImage.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h2 className="text-3xl font-bold font-headline mb-2">From Waste to Warmth: A Community Kitchen's Tale</h2>
            <p className="max-w-3xl">
              Learn how a partnership with a local community kitchen turned surplus ingredients from local markets into thousands of warm, nutritious meals for daily wage workers and their families, showcasing the true power of collective action.
            </p>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Voices from Our Community</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between rounded-2xl shadow-md">
              <CardHeader className="flex-grow">
                <div className="flex flex-col items-center text-center">
                   <Quote className="h-10 w-10 text-primary mb-4 transform rotate-180" />
                   <p className="text-muted-foreground italic">&ldquo;{testimonial.quote}&rdquo;</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center gap-4 pt-6 border-t">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Photo Gallery */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Moments from the Field</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {storyImages.map((photo, index) =>
            photo ? (
              <div key={index} className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                <Image
                  src={photo.imageUrl}
                  alt={photo.description}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover aspect-square transform group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={photo.imageHint}
                />
              </div>
            ) : null
          )}
        </div>
      </section>

    </div>
  );
}

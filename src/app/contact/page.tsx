import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from './_components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

const mapImage = PlaceHolderImages.find(p => p.id === 'contact-map');

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Get In Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions or want to partner with us? We'd love to hear from you. Use our intelligent support form for quick answers.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Form Section */}
          <div className="md:col-span-3">
             <ContactForm />
          </div>

          {/* Contact Info Section */}
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
    </div>
  );
}

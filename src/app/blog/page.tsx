
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { blogPosts } from './data';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">AnnaSewa Blog</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Insights, stories, and updates from our community. Learn more about our mission to fight hunger and reduce food waste.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => {
          const image = PlaceHolderImages.find(p => p.id === post.image);
          return (
            <Card key={post.slug} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl flex flex-col">
              {image && (
                <Link href={`/blog/${post.slug}`} className="block">
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
                <p className="text-sm text-muted-foreground">{post.date}</p>
                <CardTitle className="text-xl font-headline mt-1">
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
    </div>
  );
}

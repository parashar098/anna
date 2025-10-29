
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts, BlogPost } from '../data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, User } from 'lucide-react';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find(p => p.id === post.image);
  const authorImage = PlaceHolderImages.find(p => p.id === post.authorImage);

  return (
    <article className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">{post.title}</h1>
        <div className="flex justify-center items-center gap-6 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              {authorImage && <AvatarImage src={authorImage.imageUrl} alt={post.author} />}
              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{post.date}</time>
          </div>
        </div>
      </header>

      {postImage && (
        <div className="mb-12">
          <Image
            src={postImage.imageUrl}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-auto rounded-2xl shadow-lg object-cover aspect-video"
            data-ai-hint={postImage.imageHint}
            priority
          />
        </div>
      )}
      
      <div
        className="prose prose-lg dark:prose-invert max-w-none mx-auto
                   prose-p:text-muted-foreground prose-headings:font-headline 
                   prose-headings:text-foreground prose-a:text-primary 
                   prose-strong:text-foreground"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}


import Link from 'next/link';
import { Logo } from '@/components/icons';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Donate', href: '/donate' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'NGO', href: '/ngo' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
  ];

  return (
    <footer className="bg-secondary/70">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">AnnaSewa</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Connecting communities to fight food waste and hunger.
            </p>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <social.icon className="h-6 w-6" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AnnaSewa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

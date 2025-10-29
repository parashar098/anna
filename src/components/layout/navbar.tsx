
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X, Bell } from 'lucide-react';
import { Logo } from '@/components/icons';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/donate', label: 'Donate Food' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/ngo', label: 'NGO' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">AnnaSewa</span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname.startsWith(link.href) ? 'text-foreground' : 'text-foreground/60'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild variant="ghost" size="icon" className="hidden md:inline-flex rounded-full">
            <Link href="/notifications">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Link>
          </Button>
          <Button asChild className="hidden md:inline-flex rounded-full" variant="ghost">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="hidden md:inline-flex rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/signup">Sign Up</Link>
          </Button>
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b">
                    <Link href="/" className="flex items-center space-x-2">
                      <Logo className="h-6 w-6 text-primary" />
                      <span className="font-bold">AnnaSewa</span>
                    </Link>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close Menu</span>
                      </Button>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col items-start gap-4 p-4">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                           className={cn(
                            'text-lg font-medium transition-colors hover:text-foreground/80',
                             pathname.startsWith(link.href) ? 'text-foreground' : 'text-foreground/60'
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                     <SheetClose asChild>
                        <Link
                          href="/notifications"
                           className={cn(
                            'text-lg font-medium transition-colors hover:text-foreground/80',
                             pathname === '/notifications' ? 'text-foreground' : 'text-foreground/60'
                          )}
                        >
                          Notifications
                        </Link>
                      </SheetClose>
                  </nav>
                  <div className="mt-auto p-4 border-t flex flex-col gap-2">
                    <SheetClose asChild>
                      <Button asChild className="w-full" variant="outline">
                        <Link href="/login">Login</Link>
                      </Button>
                    </SheetClose>
                    <SheetClose asChild>
                       <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/signup">Sign Up</Link>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

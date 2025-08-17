"use client";

import { useState } from 'react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Curriculum', href: '/#curriculum' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/#faq' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6 text-lg font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="transition-colors hover:text-primary text-sm font-semibold">
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:987654321" className="flex items-center space-x-2 text-primary font-semibold hover:text-primary/80">
            <Phone className="h-5 w-5"/>
            <span>987654321</span>
          </a>
          <Button asChild>
            <a href="/#contact">Contact Us</a>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                   <Logo />
                   <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                   </Button>
                </div>
                <nav className="flex-grow flex flex-col items-center justify-center space-y-6">
                  {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="text-2xl font-medium transition-colors hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                      {link.name}
                    </Link>
                  ))}
                  <Button asChild size="lg" className="w-4/5">
                     <a href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
                  </Button>
                  <a href="tel:987654321" className="flex items-center space-x-2 text-primary font-semibold text-xl mt-4">
                    <Phone className="h-6 w-6"/>
                    <span>987654321</span>
                  </a>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

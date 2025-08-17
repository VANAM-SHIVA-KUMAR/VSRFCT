import { Logo } from '@/components/logo';
import { Facebook, Instagram, Twitter, Youtube, Phone, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  { icon: Facebook, href: '#', name: 'Facebook' },
  { icon: Instagram, href: '#', name: 'Instagram' },
  { icon: Twitter, href: '#', name: 'Twitter' },
  { icon: Youtube, href: '#', name: 'YouTube' },
];

const footerLinks = {
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ],
  support: [
    { name: 'FAQ', href: '#faq' },
    { name: 'Curriculum', href: '#curriculum' },
  ],
};

export default function Footer() {
  const gmapsUrl = "https://www.google.com/maps/search/?api=1&query=C9M9%2B39+Hyderabad,+Telangana";
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-muted-foreground">
              A non-profit learning initiative by V.S. Raju Family Charitable Trust.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map(link => (
                <a key={link.name} href={link.href} className="text-muted-foreground hover:text-primary">
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-headline font-semibold tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.quickLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.support.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+919866176486" className="hover:text-primary font-semibold text-lg">+91 9866176486</a>
              </li>
              <li className="flex items-start space-x-2 mt-2">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                    <p className="font-bold">Opening Hours:</p>
                    <p>Monday - Saturday: 4.30pm–8.00pm</p>
                    <p>Sunday: Closed</p>
                </div>
              </li>
              <li className="flex items-start space-x-2 mt-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-bold">Address:</p>
                  <a 
                    href={gmapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    13, Sri Shyam Nagar, Telecom Nagar Extension, Gachibowli, Hyderabad, Telangana 500032.
                  </a>
                </div>
              </li>
            </ul>
            <a href={gmapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 block">
              <Image 
                src="/images/map.png"
                alt="Location on Google Maps"
                data-ai-hint="map location"
                width={400}
                height={200}
                className="rounded-md shadow-md hover:shadow-lg transition-shadow"
              />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VSRFCT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

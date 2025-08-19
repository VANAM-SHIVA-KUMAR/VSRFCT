import { Logo } from '@/components/logo';
import { Phone, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
  const youtubeUrl = "https://www.youtube.com/@vsrfct";
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
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-transform duration-300 hover:scale-110">
                <svg
                  className="h-10 w-auto"
                  viewBox="0 0 28 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.4258 3.12056C27.136 1.88452 26.1316 0.903827 24.8939 0.613997C22.7134 0.000199465 14.001 0 14.001 0C14.001 0 5.28861 0.000199465 3.10814 0.613997C1.87042 0.903827 0.865983 1.88452 0.576184 3.12056C-0.00185931 5.3491 -0.00185931 10.0002 0.000140689 10.0002C0.000140689 10.0002 -0.00185931 14.6513 0.576184 16.8798C0.865983 18.1159 1.87042 19.0966 3.10814 19.3864C5.28861 20 14.001 20 14.001 20C14.001 20 22.7134 20 24.8939 19.3864C26.1316 19.0966 27.136 18.1159 27.4258 16.8798C28.0038 14.6513 28.0038 10.0002 28.0018 10.0002C28.0018 10.0002 28.0038 5.3491 27.4258 3.12056Z"
                    fill="#FF0000"
                  />
                  <path
                    d="M11.2009 14.2859L18.4862 10.0002L11.2009 5.71454V14.2859Z"
                    fill="white"
                  />
                </svg>
                <span className="sr-only">YouTube</span>
              </a>
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

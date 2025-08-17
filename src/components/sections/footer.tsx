import { Logo } from '@/components/logo';
import { Facebook, Instagram, Twitter, Youtube, Phone, Clock } from 'lucide-react';

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
    { name: 'Blogs', href: '/blog' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Curriculum', href: '#curriculum' },
  ],
};

export default function Footer() {
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
                  <a href={link.href} className="text-muted-foreground hover:text-primary">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.support.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:987654321" className="hover:text-primary font-semibold text-lg">987654321</a>
              </li>
              <li className="flex items-start space-x-2 mt-2">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                    <p className="font-bold">Opening Hours:</p>
                    <p>Monday - Saturday: 4.30pm–8.00pm</p>
                    <p>Sunday: Closed</p>
                </div>
              </li>
              <li className="flex flex-col mt-2">
                <span className="font-bold">Address:</span>
                <span>123 Learning Lane, Knowledge City, Hyderabad, 500001</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VSRFCT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

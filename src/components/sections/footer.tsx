import { Logo } from '@/components/logo';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', name: 'Facebook' },
  { icon: Instagram, href: '#', name: 'Instagram' },
  { icon: Twitter, href: '#', name: 'Twitter' },
  { icon: Youtube, href: '#', name: 'YouTube' },
];

const footerLinks = {
  quickLinks: [
    { name: 'About Us', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blogs', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ],
  curriculums: [
    { name: 'CBSE', href: '#curriculum' },
    { name: 'ICSE', href: '#curriculum' },
    { name: 'IGCSE & IB', href: '#curriculum' },
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
              Personalized learning for academic excellence.
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
            <h3 className="font-headline font-semibold tracking-wider uppercase">Curriculums</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.curriculums.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex flex-col">
                <span className="font-bold">Saroornagar:</span>
                <span>Mallesh Avenue, beside Saroornagar bus stop, Hyderabad, 500035</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold">Jubilee Hills:</span>
                <span>Plot 229, Rd 72, Prashasan Nagar, Jubilee Hills, Hyderabad, 500096</span>
              </li>
              <li className="mt-2">
                <a href="tel:+917396669430" className="hover:text-primary">+91 73966 69430</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VSRFCT Tuition Centre. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

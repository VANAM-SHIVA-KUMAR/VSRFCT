import { Logo } from '@/components/logo';
import { Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  quickLinks: [ // Removed Testimonials and FAQ from here based on previous request.
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '#testimonials' },
  ],
  support: [
    { name: 'FAQ', href: '#faq' },
    // Testimonials and FAQ removed here as well if they were present.
  ],
};

export default function Footer() {
  const gmapsUrl = "https://www.google.com/maps/search/?api=1&query=Sai+krupa+enclave,+Telecom+nagar,+Hyderabad+500032";
  const youtubeUrl = "https://www.youtube.com/@vsrfct";
  return (
    <footer className="bg-primary text-primary-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo variant="dark" />
            <p className="mt-4 text-White/80">
              A non-profit organisation by VSRFCT, working to empower India through education.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-transform duration-300 hover:scale-110">
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
            <h3 className="font-headline font-semibold tracking-wider uppercase text-White">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.quickLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-primary-White/80 hover:text-White">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold tracking-wider uppercase text-White">Support</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.support.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-White/80 hover:text-White">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold tracking-wider uppercase text-White">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-White/80">
              <li className="flex items-start space-x-2 mt-2">
                <Clock className="h-5 w-5 text-accent shrink-0 mt-1" />
                <div>
                    <p className="font-bold text-White">Opening Hours:</p>
                    <p>Monday - Saturday: 9.30am–8.00pm.</p>
                </div>
              </li>
              <li className="flex items-start space-x-2 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:vsrfct2003@gmail.com" className="hover:text-White">vsrfct2003@gmail.com</a>
              </li>
              <li className="flex items-start space-x-2 mt-2">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-White">Address:</p>
                  <a 
                    href={gmapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-White flex flex-col space-y-2"
                  >
                    <p><span className="font-semibold">Vempadu Branch:</span> Swayam Krushi Kids Care Center,Vempadu, West Godavari, Andra Pradesh (AP), India (IN), Pin Code:- 534206.</p>
                    <p><span className="font-semibold">Telecomnagar Branch:</span> Sai Krupa Enclave, Telecom Nagar, Gachibowli, Hyderabad, Telangana (TS), India (IN), Pin Code:- 500032.</p>
                    <p><span className="font-semibold">Kopalle Branch:</span> Dr. Vijaya Rama Raju Memorial Free kids Pre School, Kopalle Village, Kalla Mandal, West Godavari, Andhra Pradesh (AP), India (IN), Pin code:- 534206.</p>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-White-700 text-center text-White/80">
          <p>&copy; {new Date().getFullYear()} VSRFCT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

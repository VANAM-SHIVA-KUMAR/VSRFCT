import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const academicYears = Array.from({ length: 2026 - 2014 }, (_, i) => {
  const startYear = 2014 + i;
  const endYear = startYear + 1;
  return `${startYear}-${endYear.toString().slice(-2)}`;
}).reverse();

const galleryItems = [
  { src: "/images/founder.webp", alt: "Students in classroom", hint: "students classroom" },
  { src: "https://placehold.co/600x400.png", alt: "Annual day celebration", hint: "school event" },
  { src: "https://placehold.co/600x400.png", alt: "Science fair project", hint: "science fair" },
  { src: "https://placehold.co/600x400.png", alt: "Sports day event", hint: "students sports" },
  { src: "https://placehold.co/600x400.png", alt: "Art and craft activity", hint: "children art" },
  { src: "https://placehold.co/600x400.png", alt: "Group photo with teachers", hint: "students teachers" },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">Our Gallery</h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
              A visual journey through the years at VSRFCT Tuition Centre.
            </p>
          </div>

          <div className="space-y-16">
            {academicYears.map((year) => (
              <section key={year} id={`year-${year}`}>
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center md:text-left">
                  Academic Year {year}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {galleryItems.map((item, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={item.src}
                        alt={`${item.alt} - ${year}`}
                        data-ai-hint={item.hint}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

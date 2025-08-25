"use client"

import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";

type GalleryItem = {
  type: 'image';
  src: string;
  alt: string;
  hint: string;
};

type AcademicYearGallery = {
  year: string;
  items: GalleryItem[];
};

const galleries: AcademicYearGallery[] = [
  {
    year: "2025-26",
    items: [
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Future class of 2026", hint: "students future classroom" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Innovative learning tools", hint: "educational technology" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Student aspirations for the future", hint: "student goals" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Community projects planning", hint: "community outreach" },
      ],
  },
  {
    year: "2024-25",
    items: [
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Current students in a workshop", hint: "students workshop" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "A message from our current students", hint: "student message" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Science experiments in action", hint: "science experiments" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Library and reading time", hint: "children reading" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Guest speaker event", hint: "guest speaker" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Guest speaker event", hint: "guest speaker" },
    ],
  },
    {
    year: "2023-24",
    items: [
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Annual day celebration 2024", hint: "school event 2024" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Highlights from Sports Day 2024", hint: "students sports 2024" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Students receiving prizes", hint: "student awards" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Republic Day parade", hint: "republic day school" },
    ],
  },
  {
    year: "2022-23",
    items: [
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Classroom group photo 2023", hint: "classroom photo 2023" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Mathematics Olympiad winners", hint: "math competition" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Science Fair projects showcase", hint: "science fair" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Field trip to a museum", hint: "school field trip" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Plantation drive", hint: "school environment day" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Interactive learning session", hint: "interactive learning" },
    ],
  },
    {
    year: "2021-22",
    items: [
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Students with their home projects", hint: "student projects home" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Online quiz competition", hint: "online quiz" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Teachers conducting online sessions", hint: "teacher online class" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Celebrating festivals virtually", hint: "virtual celebration" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "A return to the classroom", hint: "students back school" },
    ],
  },
  {
    year: "2020-21",
    items: [
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Early days of online learning", hint: "remote learning setup" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Distributing study materials", hint: "education support" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Parents meeting online", hint: "parent teacher online" },
    ],
  },
  {
    year: "2019-20",
    items: [
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Sports Day champions 2020", hint: "students sports trophy" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Annual function group dance", hint: "students group dance" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Independence Day celebrations", hint: "independence day india school" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Class of 2020 farewell", hint: "student farewell" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Creative writing workshop", hint: "writing workshop" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Creative writing workshop", hint: "writing workshop" },
    ],
  },
  {
    year: "2018-19",
    items: [
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Throwback to a fun classroom activity", hint: "vintage classroom" },
    ],
  },
  {
    year: "2017-18",
    items: [
       { type: "image", src: "https://placehold.co/600x400.png", alt: "Foundation day event", hint: "foundation day" },
    ],
  },
   {
    year: "2016-17",
    items: [
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Throwback to a fun classroom activity", hint: "vintage classroom" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Our young learners in 2018", hint: "young students" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Foundation day event", hint: "foundation day" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Memories from 2018-19", hint: "student memories" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "A special assembly", hint: "school assembly" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Students with their art projects", hint: "student art projects" },
    ],
  },
   {
    year: "2015-16",
    items: [
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Throwback to a fun classroom activity", hint: "vintage classroom" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Our young learners in 2018", hint: "young students" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Foundation day event", hint: "foundation day" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Memories from 2018-19", hint: "student memories" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "A special assembly", hint: "school assembly" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Students with their art projects", hint: "student art projects" },
    ],
  },
  {
    year: "2014-15",
    items: [
      { type: "image", src: "https://placehold.co/600x400.png", alt: "The very first batch of students", hint: "first batch students" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Inauguration of the tuition centre", hint: "inauguration event" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Our first classroom setup", hint: "old classroom" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Early learning materials", hint: "vintage school books" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "A journey back to our beginnings", hint: "school history" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Founders with the first students", hint: "founder students" },
    ],
  },
];

const AnimatedGalleryItem = ({ item, year, index }: { item: GalleryItem, year: string, index: number }) => {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const commonClasses = "w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500";
  
  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out",
        isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="relative">
        <Image
          src={item.src}
          alt={`${item.alt} - ${year}`}
          data-ai-hint={item.hint}
          width={600}
          height={400}
          className={commonClasses}
        />
      </div>
    </div>
  );
};


export default function GalleryPage() {
  const youtubeUrl = "https://www.youtube.com/@vsrfct";
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-4 mb-4">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">Our Gallery</h1>
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg
                  className="h-12 w-auto md:h-16"
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
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
              A visual journey through the years at VSRFCT.
            </p>
          </div>

          <div className="space-y-16">
            {galleries.map(({ year, items }) => (
              <section key={year} id={`year-${year}`}>
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center md:text-left">
                  Academic Year {year}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((item, index) => (
                    <AnimatedGalleryItem key={index} item={item} year={year} index={index} />
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

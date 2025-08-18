import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';

type GalleryItem = {
  type: 'image' | 'video';
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
      { type: "video", src: "https://placehold.co/600x400.png", alt: "A look ahead: plans for 2026", hint: "education planning" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Student aspirations for the future", hint: "student goals" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Community projects planning", hint: "community outreach" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Preparing for next-gen challenges", hint: "modern education" },
    ],
  },
  {
    year: "2024-25",
    items: [
      { type: "image", src: "/images/2024/IMG-20240217-WA0000.jpg", alt: "Current students in a workshop", hint: "students workshop" },
      { type: "image", src: "/images/2024/IMG-20240217-WA0001.jpg", alt: "A message from our current students", hint: "student message" },
      { type: "image", src: "/images/2024/IMG-20240217-WA0002.jpg", alt: "Science experiments in action", hint: "science experiments" },
      { type: "image", src: "/images/2024/IMG-20240217-WA0003.jpg", alt: "Creative arts session", hint: "children painting" },
      { type: "image", src: "/images/2024/IMG-20240217-WA0004.jpg", alt: "Library and reading time", hint: "children reading" },
      { type: "image", src: "/images/2024/IMG-20240217-WA0005.jpg", alt: "Guest speaker event", hint: "guest speaker" },
    ],
  },
    {
    year: "2023-24",
    items: [
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Annual day celebration 2024", hint: "school event 2024" },
      { type: "video", src: "https://placehold.co/600x400.png", alt: "Highlights from Sports Day 2024", hint: "students sports 2024" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Republic Day parade", hint: "republic day school" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Students receiving prizes", hint: "student awards" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Art exhibition", hint: "student art" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Cultural dance performance", hint: "cultural dance" },
    ],
  },
  {
    year: "2022-23",
    items: [
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Classroom group photo 2023", hint: "classroom photo 2023" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Mathematics Olympiad winners", hint: "math competition" },
      { type: "video", src: "https://placehold.co/600x400.png", alt: "Science Fair projects showcase", hint: "science fair" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Field trip to a museum", hint: "school field trip" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Plantation drive", hint: "school environment day" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Interactive learning session", hint: "interactive learning" },
    ],
  },
    {
    year: "2021-22",
    items: [
      { type: "video", src: "https://placehold.co/600x400.png", alt: "Virtual classes during the pandemic", hint: "online learning" },
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
      { type: "video", src: "https://placehold.co/600x400.png", alt: "A message of hope from our staff", hint: "teacher message" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Parents meeting online", hint: "parent teacher online" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Health and safety measures", hint: "health safety school" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Students adapting to new norms", hint: "student adapting" },
    ],
  },
  {
    year: "2019-20",
    items: [
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Sports Day champions 2020", hint: "students sports trophy" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Annual function group dance", hint: "students group dance" },
      { type: "video", src: "https://placehold.co/600x400.png", alt: "A tour of our facility in 2020", hint: "school tour" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Independence Day celebrations", hint: "independence day india school" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Class of 2020 farewell", hint: "student farewell" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Creative writing workshop", hint: "writing workshop" },
    ],
  },
  {
    year: "2018-19",
    items: [
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Throwback to a fun classroom activity", hint: "vintage classroom" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Our young learners in 2018", hint: "young students" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Foundation day event", hint: "foundation day" },
      { type: "video", src: "https://placehold.co/600x400.png", alt: "Memories from 2018-19", hint: "student memories" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "A special assembly", hint: "school assembly" },
      { type: "image", src: "https://placehold.co/600x400.png", alt: "Students with their art projects", hint: "student art projects" },
    ],
  },
  {
    year: "2017-18",
    items: [
      { type: "video", src: "/images/2018/20181229_174303.mp4", alt: "Throwback to a fun classroom activity", hint: "vintage classroom" },
      { type: "video", src: "/images/2018/20181229_175135.mp4", alt: "Our young learners in 2018", hint: "young students" },
      { type: "video", src: "/images/2018/20181229_175540.mp4", alt: "Foundation day event", hint: "foundation day" },
    ],
  },
   {
    year: "2016-17",
    items: [
      { type: "image", src: "/images/2017/IMG-20170416-WA0028.jpg", alt: "Throwback to a fun classroom activity", hint: "vintage classroom" },
      { type: "image", src: "/images/2017/IMG-20170415-WA0016.jpg", alt: "Our young learners in 2018", hint: "young students" },
      { type: "image", src: "/images/2017/IMG-20170415-WA0020.jpg", alt: "Foundation day event", hint: "foundation day" },
      { type: "image", src: "/images/2017/IMG-20170415-WA0024.jpg", alt: "Memories from 2018-19", hint: "student memories" },
      { type: "image", src: "/images/2017/IMG-20170415-WA0031.jpg", alt: "A special assembly", hint: "school assembly" },
      { type: "image", src: "/images/2017/IMG-20170416-WA0010.jpg", alt: "Students with their art projects", hint: "student art projects" },
    ],
  },
   {
    year: "2015-16",
    items: [
      { type: "image", src: "/images/2016/IMG-20161013-WA0006.jpg", alt: "Throwback to a fun classroom activity", hint: "vintage classroom" },
      { type: "image", src: "/images/2016/IMG-20161028-WA0012.jpg", alt: "Our young learners in 2018", hint: "young students" },
      { type: "image", src: "/images/2016/IMG-20161013-WA0009.jpg", alt: "Foundation day event", hint: "foundation day" },
      { type: "image", src: "/images/2016/IMG-20161028-WA0010.jpg", alt: "Memories from 2018-19", hint: "student memories" },
      { type: "image", src: "/images/2016/IMG-20161028-WA0011.jpg", alt: "A special assembly", hint: "school assembly" },
      { type: "image", src: "/images/2016/IMG-20161028-WA0024.jpg", alt: "Students with their art projects", hint: "student art projects" },
    ],
  },
  {
    year: "2014-15",
    items: [
      { type: "image", src: "/images/2015/IMG-20150421-WA0000.jpg", alt: "The very first batch of students", hint: "first batch students" },
      { type: "image", src: "/images/2015/IMG-20150421-WA0002.jpg", alt: "Inauguration of the tuition centre", hint: "inauguration event" },
      { type: "image", src: "/images/2015/IMG-20150421-WA0003.jpg", alt: "Our first classroom setup", hint: "old classroom" },
      { type: "image", src: "/images/2015/IMG-20150421-WA0004.jpg", alt: "Early learning materials", hint: "vintage school books" },
      { type: "image", src: "/images/2015/IMG-20150421-WA0005.jpg", alt: "A journey back to our beginnings", hint: "school history" },
      { type: "image", src: "/images/2015/IMG-20150421-WA0006.jpg", alt: "Founders with the first students", hint: "founder students" },
    ],
  },
];

const GalleryItemComponent = ({ item, year }: { item: GalleryItem, year: string }) => {
  const commonClasses = "w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500";
  
  const isPlaceholderVideo = item.type === 'video' && item.src.startsWith('https://placehold.co');

  if (item.type === 'video' && !isPlaceholderVideo) {
    return (
      <video
        src={item.src}
        controls
        className={commonClasses}
        aria-label={`${item.alt} - ${year}`}
      >
        Your browser does not support the video tag.
      </video>
    );
  }

  // This will render for images and placeholder videos
  return (
    <div className="relative">
      <Image
        src={item.src}
        alt={`${item.alt} - ${year}`}
        data-ai-hint={item.hint}
        width={600}
        height={400}
        className={commonClasses}
      />
      {isPlaceholderVideo && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
           <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}
    </div>
  );
};


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
            {galleries.map(({ year, items }) => (
              <section key={year} id={`year-${year}`}>
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center md:text-left">
                  Academic Year {year}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((item, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <GalleryItemComponent item={item} year={year} />
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

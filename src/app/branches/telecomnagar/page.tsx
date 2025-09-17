'use client';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import TelecomnagarTeam from '@/components/sections/team';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, School, Briefcase, PlayCircle, BrainCircuit } from 'lucide-react';
import Image from 'next/image';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";
import Link from 'next/link';
import YouTubeIcon from '@/components/icons/youtube-icon';

const branchDetails = {
    name: "Telecomnagar",
    stats: [
      { icon: <Users className="h-6 w-6 text-accent" />, label: "28 Pre-primary, 43 Primary, 37 Secondary Students" },
      { icon: <Briefcase className="h-6 w-6 text-accent" />, label: "10 Teachers & 1 Helper" },
      { icon: <School className="h-6 w-6 text-accent" />, label: "3 Classrooms & 1 Hall (Approx 800 sq yds)" },
    ],
    activities: [
      { icon: <PlayCircle className="h-5 w-5 text-primary" />, text: "Yoga, Dance, Slokas classes & Games" },
      { icon: <BrainCircuit className="h-5 w-5 text-primary" />, text: "Digital stories and rhymes on computer" },
      { icon: <Users className="h-5 w-5 text-primary" />, text: "Recently conducted a Mental Health Program" },
    ],
  };

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
      { type: "image", src: "/images/2025/1.jpeg", alt: "Future class of 2026", hint: "students future classroom" },
      { type: "image", src: "/images/2025/2.jpeg", alt: "Innovative learning tools", hint: "educational technology" },
      { type: "image", src: "/images/2025/3.jpeg", alt: "Student aspirations for the future", hint: "student goals" },
      { type: "image", src: "/images/2025/4.jpeg", alt: "Community projects planning", hint: "community outreach" },
      ],
  },
  {
    year: "2024-25",
    items: [
      { type: "image", src: "/images/2024/18f2cf62-6c49-4cf6-aa51-01448a0105be.jpg", alt: "Current students in a workshop", hint: "students workshop" },
      { type: "image", src: "/images/2024/78ba84c9-d793-4baa-97ed-481ce8bfeb16.jpg", alt: "A message from our current students", hint: "student message" },
      { type: "image", src: "/images/2024/8220f4ad-5bf6-4ca8-a89d-f4a02b3f5973.jpg", alt: "Science experiments in action", hint: "science experiments" },
      { type: "image", src: "/images/2024/d78261f4-c25d-470f-bbb8-8c6037217460.jpg", alt: "Library and reading time", hint: "children reading" },
      { type: "image", src: "/images/2024/IMG_20241202_171516.jpg", alt: "Guest speaker event", hint: "guest speaker" },
      { type: "image", src: "/images/2024/IMG_20241202_190510.jpg", alt: "Guest speaker event", hint: "guest speaker" },
    ],
  },
    {
    year: "2023-24",
    items: [
      { type: "image", src: "/images/2023/IMG_20231001_072145__01.jpg", alt: "Annual day celebration 2024", hint: "school event 2024" },
      { type: "image", src: "/images/2023/IMG_20231001_074620.jpg", alt: "Highlights from Sports Day 2024", hint: "students sports 2024" },
      { type: "image", src: "/images/2023/20240330_175427.jpg", alt: "Students receiving prizes", hint: "student awards" },
      { type: "image", src: "/images/2023/20240330_180106.jpg", alt: "Republic Day parade", hint: "republic day school" },
    ],
  },
  {
    year: "2022-23",
    items: [
      { type: "image", src: "/images/2022/20180314_201541.jpg", alt: "Classroom group photo 2023", hint: "classroom photo 2023" },
      { type: "image", src: "/images/2022/20190420_153840.jpg", alt: "Mathematics Olympiad winners", hint: "math competition" },
      { type: "image", src: "/images/2022/20190812_165552.jpg", alt: "Science Fair projects showcase", hint: "science fair" },
      { type: "image", src: "/images/2022/20190812_171815.jpg", alt: "Field trip to a museum", hint: "school field trip" },
      { type: "image", src: "/images/2022/20190812_172601.jpg", alt: "Plantation drive", hint: "school environment day" },
      { type: "image", src: "/images/2022/20190812_173347.jpg", alt: "Interactive learning session", hint: "interactive learning" },
    ],
  },
    {
    year: "2021-22",
    items: [
      { type: "image", src: "/images/2021/20210711_180804.jpg", alt: "Students with their home projects", hint: "student projects home" },
      { type: "image", src: "/images/2021/20220105_170215.jpg", alt: "Online quiz competition", hint: "online quiz" },
      { type: "image", src: "/images/2021/20220105_183759.jpg", alt: "Teachers conducting online sessions", hint: "teacher online class" },
      { type: "image", src: "/images/2021/20220105_190134.jpg", alt: "Celebrating festivals virtually", hint: "virtual celebration" },
      { type: "image", src: "/images/2021/20220105_192108.jpg", alt: "A return to the classroom", hint: "students back school" },
    ],
  },
  {
    year: "2020-21",
    items: [
      { type: "image", src: "/images/2020/IMG-20190420-WA0020.jpg", alt: "Early days of online learning", hint: "remote learning setup" },
      { type: "image", src: "/images/2020/IMG-20200212-WA0021.jpg", alt: "Distributing study materials", hint: "education support" },
      { type: "image", src: "/images/2020/IMG-20200212-WA0028.jpg", alt: "Parents meeting online", hint: "parent teacher online" },
    ],
  },
  {
    year: "2019-20",
    items: [
      { type: "image", src: "/images/2019/563.jpg", alt: "Sports Day champions 2020", hint: "students sports trophy" },
      { type: "image", src: "/images/2019/20170415_175753.jpg", alt: "Annual function group dance", hint: "students group dance" },
      { type: "image", src: "/images/2019/20190110_192044.jpg", alt: "Independence Day celebrations", hint: "independence day india school" },
      { type: "image", src: "/images/2019/IMG-20200129-WA0020.jpg", alt: "Class of 2020 farewell", hint: "student farewell" },
      { type: "image", src: "/images/2019/IMG-20200129-WA0023.jpg", alt: "Creative writing workshop", hint: "writing workshop" },
      { type: "image", src: "/images/2019/IMG-20200212-WA0006.jpg", alt: "Creative writing workshop", hint: "writing workshop" },
    ],
  },
  {
    year: "2018-19",
    items: [
      { type: "image", src: "/images/2018/20181229_182109.jpg", alt: "Throwback to a fun classroom activity", hint: "vintage classroom" },
    ],
  },
  {
    year: "2017-18",
    items: [
       { type: "image", src: "/images/2018/IMG-20160608-WA0046.jpg", alt: "Foundation day event", hint: "foundation day" },
       { type: "image", src: "/images/2024/ca4e5784-a497-406a-b86f-51c3bd489090.jpg", alt: "Foundation day event", hint: "foundation day" },
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
      style={{ transitionDelay: `${(index % 2) * 100}ms` }}
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


export default function TelecomnagarBranchPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center gap-4">
                        <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">Telecomnagar Branch</h2>
                        <Link href="https://www.youtube.com/@vsrfct" target="_blank" rel="noopener noreferrer">
                            <YouTubeIcon />
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <Image src="/images/2025/4.jpeg" alt="Telecomnagar Branch" width={600} height={400} className="rounded-lg shadow-lg" />
                    </div>
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Branch Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p><strong>Address:</strong> Sai Krupa Enclave, Telecom Nagar, Gachibowli, Hyderabad, Telangana (TS), India (IN), Pin Code:- 500032.</p>
                                <p><strong>Contact in person:</strong> Morning 10am to 11.30am, Evening 5pm to 6.30pm</p>
                                <p><strong>Preschool Timings:</strong> 10am to 12noon</p>
                                <p><strong>Junior Batch (Class 1 to 5):</strong> 4.30pm to 6.30pm</p>
                                <p><strong>Senior Batch (Class 6 to 10):</strong> 6.00 pm to 8pm</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-12 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">Our Branch Activities</h2>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-green-900">{branchDetails.name}</CardTitle>
                        <CardDescription>Majority of the parents are daily labourers, watchmen, drivers etc.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between">
                        <div>
                            <h4 className="font-semibold mb-3 text-green-900">Branch Overview:</h4>
                            <ul className="space-y-3 mb-6">
                                {branchDetails.stats.map((stat, sIndex) => (
                                    <li key={sIndex} className="flex items-start gap-3">
                                        <div className="mt-1">{stat.icon}</div>
                                        <span className="text-muted-foreground flex-1">{stat.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-3 text-green-900">Activities & Projects:</h4>
                            <ul className="space-y-3">
                            {branchDetails.activities.map((activity, aIndex) => (
                                <li key={aIndex} className="flex items-start gap-3">
                                    {activity.icon}
                                    <span className="text-muted-foreground flex-1">{activity.text}</span>
                                </li>
                            ))}\
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
        <TelecomnagarTeam />
        <section className="py-12 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">Gallery</h2>
                </div>
                <div className="space-y-16">
                  {galleries.map(({ year, items }) => (
                    <section key={year} id={`year-${year}`}>
                      <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center md:text-left text-green-900">
                        Academic Year {year}
                      </h2>
                      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
                        {items.map((item, index) => (
                          <AnimatedGalleryItem key={index} item={item} year={year} index={index} />
                        ))}\
                      </div>
                    </section>
                  ))}\
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

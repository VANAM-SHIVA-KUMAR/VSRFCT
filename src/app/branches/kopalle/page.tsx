
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import KopalleTeam from '@/components/sections/kopalle-team';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, School, Briefcase, PlayCircle, Hammer } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import YouTubeIcon from '@/components/icons/youtube-icon';

const branchDetails = {
    name: "Kopalle",
    stats: [
      { icon: <Users className="h-6 w-6 text-accent" />, label: "60 Pre-primary Students" },
      { icon: <Briefcase className="h-6 w-6 text-accent" />, label: "3 Teachers & 1 Helper" },
      { icon: <School className="h-6 w-6 text-accent" />, label: "4 Classrooms with a Playground" },
    ],
    activities: [
        { icon: <PlayCircle className="h-5 w-5 text-primary" />, text: "Yoga, Dance, Slokas classes & Games" },
        { icon: <Hammer className="h-5 w-5 text-primary" />, text: "New sliders and swingers installed for kids" },
        { icon: <School className="h-5 w-5 text-primary" />, text: "Upcoming: evening tuitions for all students" },
        { icon: <Hammer className="h-5 w-5 text-primary" />, text: "Upcoming: Construction of open hall and playground repairs" },
    ],
  };

export default function KopalleBranchPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center gap-4">
                        <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">Kopalle Branch</h2>
                        <Link href="https://youtube.com/@sirishanelupuri?si=yVG_i7JdM4GHNgNT" target="_blank" rel="noopener noreferrer">
                            <YouTubeIcon />
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <Image src="/images/Buildings/Kopalle.jpg" alt="Kopalle Branch" width={600} height={400} className="rounded-lg shadow-lg" />
                    </div>
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Branch Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p><strong>Address:</strong> Dr. Vijaya Rama Raju Memorial Free kids Pre School, Kopalle Village, Kalla Mandal, West Godavari, Andhra Pradesh (AP), India (IN), Pin code:- 534206.</p>
                                <p><strong>PreSchool Timings:</strong> 8.30am to 3.30pm</p>
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
                            ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
        <KopalleTeam />
        <section className="py-12 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">Gallery</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <Image src="/images/Students/21.jpeg" alt="Gallery Image" width={1000} height={1000} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/22.jpeg" alt="Gallery Image" width={1000} height={1000} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/23.jpeg" alt="Gallery Image" width={1000} height={1000} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/24.jpeg" alt="Gallery Image" width={1200} height={1200} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/25.jpeg" alt="Gallery Image" width={1000} height={1000} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/26.jpeg" alt="Gallery Image" width={1000} height={1000} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/k.jpeg" alt="Gallery Image" width={1000} height={1000} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/g.jpeg" alt="Gallery Image" width={1000} height={1000} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/d.jpeg" alt="Gallery Image" width={1000} height={1000} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/f.jpeg" alt="Gallery Image" width={1000} height={1000} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/c.jpeg" alt="Gallery Image" width={1200} height={1200} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/27.jpeg" alt="Gallery Image" width={1000} height={1000} className="rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

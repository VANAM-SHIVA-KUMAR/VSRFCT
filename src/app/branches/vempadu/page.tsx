
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import VempaduTeam from '@/components/sections/vempadu-team';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, School, Briefcase, PlayCircle, Hammer, Scissors, BrainCircuit } from 'lucide-react';
import Image from 'next/image';

const branchDetails = {
    name: "Vempadu",
    stats: [
      { icon: <Users className="h-6 w-6 text-accent" />, label: "35 Pre-primary & 50 Tuition Students" },
      { icon: <Briefcase className="h-6 w6 text-accent" />, label: "5 Teachers & 1 Helper" },
      { icon: <School className="h-6 w-6 text-accent" />, label: "2 Classrooms with a Playground" },
    ],
    activities: [
      { icon: <PlayCircle className="h-5 w-5 text-primary" />, text: "Yoga, Dance, Slokas classes & Games" },
      { icon: <BrainCircuit className="h-5 w-5 text-primary" />, text: "Digital stories and rhymes on computer" },
      { icon: <Users className="h-5 w-5 text-primary" />, text: "Summer camp with Vedic Maths, Art & Craft" },
      { icon: <Scissors className="h-5 w-5 text-primary" />, text: "Tailoring classes for women's self-employment" },
    ],
  };

export default function VempaduBranchPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">Vempadu Branch</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <Image src="/images/Buildings/Vempadu.jpg" alt="Vempadu Branch" width={600} height={400} className="rounded-lg shadow-lg" />
                    </div>
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Branch Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p><strong>Address:</strong> Swayam Krushi Kids Care Center,Vempadu, West Godavari, Andra Pradesh (AP), India (IN), Pin Code:- 534206.</p>
                                <p><strong>Preschool Timings:</strong> 8.30am to 3.30pm</p>
                                <p><strong>Junior & Senior Batch:</strong> 5.00 pm to 8pm</p>
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
        <VempaduTeam />
        <section className="py-12 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">Gallery</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <Image src="/images/Students/12.jpeg" alt="Gallery Image" width={800} height={800} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/11.jpeg" alt="Gallery Image" width={800} height={800} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/14.jpeg" alt="Gallery Image" width={800} height={800} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/15.jpeg" alt="Gallery Image" width={800} height={800} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/17.jpeg" alt="Gallery Image" width={800} height={800} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/18.jpeg" alt="Gallery Image" width={800} height={800} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/19.jpeg" alt="Gallery Image" width={400} height={300} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/n.jpeg" alt="Gallery Image" width={800} height={800} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/o.jpeg" alt="Gallery Image" width={800} height={800} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/m.jpeg" alt="Gallery Image" width={400} height={300} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/13.jpeg" alt="Gallery Image" width={400} height={300} className="rounded-lg shadow-lg" />
                    <Image src="/images/Students/16.jpeg" alt="Gallery Image" width={400} height={300} className="rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

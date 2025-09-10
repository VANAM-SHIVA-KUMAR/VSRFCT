"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, School, Briefcase, PlayCircle, Hammer, Scissors, BrainCircuit } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";

const branchDetails = [
  {
    name: "Vempadu",
    stats: [
      { icon: <Users className="h-6 w-6 text-accent" />, label: "66 Pre-primary & 50 Tuition Students" },
      { icon: <Briefcase className="h-6 w6 text-accent" />, label: "4 Teachers & 1 Helper" },
      { icon: <School className="h-6 w-6 text-accent" />, label: "2 Classrooms with a Playground" },
    ],
    activities: [
      { icon: <PlayCircle className="h-5 w-5 text-primary" />, text: "Yoga, Dance, Slokas classes & Games" },
      { icon: <BrainCircuit className="h-5 w-5 text-primary" />, text: "Digital stories and rhymes on computer" },
      { icon: <Users className="h-5 w-5 text-primary" />, text: "Summer camp with Vedic Maths, Art & Craft" },
      { icon: <Scissors className="h-5 w-5 text-primary" />, text: "Tailoring classes for women's self-employment" },
    ],
  },
  {
    name: "Telecomnagar",
    stats: [
      { icon: <Users className="h-6 w-6 text-accent" />, label: "28 Pre-primary, 40 Primary, 39 Secondary Students" },
      { icon: <Briefcase className="h-6 w-6 text-accent" />, label: "10 Teachers" },
      { icon: <School className="h-6 w-6 text-accent" />, label: "3 Classrooms & 1 Hall (Approx 800 sq yds)" },
    ],
    activities: [
      { icon: <PlayCircle className="h-5 w-5 text-primary" />, text: "Yoga, Dance, Slokas classes & Games" },
      { icon: <BrainCircuit className="h-5 w-5 text-primary" />, text: "Digital stories and rhymes on computer" },
      { icon: <Users className="h-5 w-5 text-primary" />, text: "Recently conducted a Mental Health Program" },
    ],
  },
  {
    name: "Kopalle",
    stats: [
      { icon: <Users className="h-6 w-6 text-accent" />, label: "56 Pre-primary Students" },
      { icon: <Briefcase className="h-6 w-6 text-accent" />, label: "3 Teachers & 1 Helper" },
      { icon: <School className="h-6 w-6 text-accent" />, label: "4 Classrooms with a Playground" },
    ],
    activities: [
        { icon: <PlayCircle className="h-5 w-5 text-primary" />, text: "Yoga, Dance, Slokas classes & Games" },
        { icon: <Hammer className="h-5 w-5 text-primary" />, text: "New sliders and swingers installed for kids" },
        { icon: <School className="h-5 w-5 text-primary" />, text: "Upcoming: evening tuitions for all students" },
        { icon: <Hammer className="h-5 w-5 text-primary" />, text: "Upcoming: Construction of open hall and playground repairs" },
    ],
  },
];

export default function BranchDetails() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="branch-details" className="py-12 md:py-24 bg-background">
      <div
        ref={ref}
        className={cn(
          "container mx-auto px-4 transition-opacity duration-700 ease-in",
          isInView ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">Our Branch Activities</h2>
          <p className="text-lg md:text-xl text-green-700 mt-4 max-w-3xl mx-auto">
            A closer look at our community-focused initiatives in each location.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {branchDetails.map((branch, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-700 ease-in-out",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-headline text-3xl text-primary">{branch.name}</CardTitle>
                  <CardDescription>Majority of the parents are daily labourers, watchmen, drivers etc.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                    <div>
                        <h4 className="font-semibold mb-3 text-green-900">Branch Overview:</h4>
                        <ul className="space-y-3 mb-6">
                            {branch.stats.map((stat, sIndex) => (
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
                        {branch.activities.map((activity, aIndex) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}

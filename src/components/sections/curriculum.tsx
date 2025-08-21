"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle, BookUser, Sparkles, Trophy } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";


const subjectsByClass = [
  {
    classes: "Classes 1-5",
    subjects: ["Telugu", "Hindi", "English", "Mathematics", "Environmental Science"],
    icon: <BookUser className="h-8 w-8 text-primary" />
  },
  {
    classes: "Classes 6-10",
    subjects: ["Telugu", "Hindi", "English", "Mathematics", "Physical Science", "Biological Science", "Social Studies"],
    icon: <BookUser className="h-8 w-8 text-primary" />
  }
];

const weeklyActivities = [
    {
        day: "Fun Fridays",
        description: "Engaging activities to spark curiosity and creativity.",
        activities: [
            "Moral stories and value education",
            "Fun games and quiz competitions",
            "Digital classes on history, science, and more",
            "Discovering new things through interactive sessions"
        ],
        icon: <Sparkles className="h-8 w-8 text-primary" />
    },
    {
        day: "Sports Saturdays",
        description: "Promoting physical fitness and teamwork.",
        activities: [
            "Outdoor games like Kho-Kho and running",
            "Team-building sports activities",
            "Focus on a healthy and active lifestyle",
            "Play in our own dedicated ground"
        ],
        icon: <Trophy className="h-8 w-8 text-primary" />
    }
]

export default function Curriculum() {
  const { ref: ref1, isInView: isInView1 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: ref2, isInView: isInView2 } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="curriculum" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline">Our Curriculum</h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            We provide free, comprehensive tuition for the State Syllabus, empowering students from Government schools.
          </p>
        </div>
        <div ref={ref1} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {subjectsByClass.map((item, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-700 ease-in-out",
                isInView1 ? "opacity-100 translate-x-0" : (index % 2 === 0 ? "opacity-0 -translate-x-10" : "opacity-0 translate-x-10")
              )}
            >
              <Card className="flex flex-col h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  {item.icon}
                  <div >
                      <CardTitle className="font-headline text-2xl text-primary">{item.classes}</CardTitle>
                      <CardDescription>State Syllabus</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {item.subjects.map((subject, pIndex) => (
                      <li key={pIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                        <span>{subject}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold font-headline">Beyond the Classroom</h3>
             <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                We believe in holistic development through engaging weekly activities.
            </p>
          </div>
           <div ref={ref2} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {weeklyActivities.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "transition-all duration-700 ease-in-out",
                  isInView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="flex flex-col h-full">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {item.icon}
                    <div>
                        <CardTitle className="font-headline text-2xl text-primary">{item.day}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {item.activities.map((activity, pIndex) => (
                        <li key={pIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

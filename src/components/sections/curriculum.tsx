"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { CheckCircle, BookUser, Sparkles, Trophy, Leaf, Palette, Music, BrainCircuit, Users, Heart } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";


const subjectsByClass = [
  {
    classes: "Classes 1-5",
    subjects: ["Telugu", "Hindi", "English", "Mathematics", "Environmental Science"],
    icon: <BookUser className="h-8 w-8 text-accent" />
  },
  {
    classes: "Classes 6-10",
    subjects: ["Telugu", "Hindi", "English", "Mathematics", "Physical Science", "Biological Science", "Social Studies"],
    icon: <BookUser className="h-8 w-8 text-accent" />
  }
];

const weeklyActivities = [
    {
        title: "Holistic Growth",
        description: "Engaging activities to spark curiosity and creativity.",
        activities: [
            { text: "Yoga & Dance", icon: <Music className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" /> },
            { text: "Slokas & Moral Stories", icon: <BookUser className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" /> },
            { text: "Digital classes on history, science, and more", icon: <Sparkles className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" /> },
            { text: "Art & Craft Sessions", icon: <Palette className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" /> },
            { text: "Mental Health Programs", icon: <BrainCircuit className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" /> }
        ],
        icon: <Leaf className="h-8 w-8 text-accent" />
    },
    {
        title: "Physical Education",
        description: "Promoting physical fitness and teamwork.",
        activities: [
            { text: "Outdoor games like Kho-Kho and running", icon: <Trophy className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" /> },
            { text: "Team-building sports activities", icon: <Users className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" /> },
            { text: "Focus on a healthy and active lifestyle", icon: <Heart className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" /> },
            { text: "Play in our own dedicated grounds", icon: <CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" /> },
            { text: "New Swings and Sliders for kids", icon: <CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" /> }
        ],
        icon: <Trophy className="h-8 w-8 text-accent" />
    }
]

export default function Curriculum() {
  const { ref: ref1, isInView: isInView1 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: ref2, isInView: isInView2 } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="curriculum" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">Comprehensive Learning</h2>
          <p className="text-lg md:text-xl text-green-700 mt-4 max-w-3xl mx-auto">
            "Focused on syllabus, driven by success."
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
              <Card className="flex flex-col h-full bg-green-100">
                <CardHeader className="flex flex-row items-center gap-4">
                  {item.icon}
                  <div >
                      <CardTitle className="font-headline text-2xl text-green-900">{item.classes}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 text-green-900/80">
                    {item.subjects.map((subject, pIndex) => (
                      <li key={pIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" />
                        <span>{subject}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold font-headline text-green-900">Beyond the Classroom</h3>
             <p className="text-lg md:text-xl text-green-700 mt-4 max-w-3xl mx-auto">
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
                <Card className="flex flex-col h-full bg-green-100">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {item.icon}
                    <div>
                        <CardTitle className="font-headline text-2xl text-green-900">{item.title}</CardTitle>
                        <CardDescription className="text-green-700">{item.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2 text-green-900/80">
                      {item.activities.map((activity, pIndex) => (
                        <li key={pIndex} className="flex items-start">
                          {activity.icon}
                          <span>{activity.text}</span>
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

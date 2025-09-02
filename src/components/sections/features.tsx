"use client"

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart, BookOpen, Lightbulb, Users } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Heart className="h-10 w-10 text-accent" />,
    title: "Free Education",
    description: "A non-profit initiative providing completely free tuition for Government school students (Classes 1-10)."
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: "Dedicated Teachers",
    description: "Our experienced and passionate teachers are committed to helping every child succeed academically and personally."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-accent" />,
    title: "State Syllabus Focus",
    description: "We offer comprehensive coaching tailored specifically to the State Syllabus to ensure students excel in their exams."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-accent" />,
    title: "Holistic Development",
    description: "We focus on not just academics but also on nurturing curiosity, critical thinking, and confidence in our students."
  },
];

export default function Features() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
  return (
    <section id="features" className="py-12 md:py-24 bg-background">
      <div
        ref={ref}
        className={cn(
          "container mx-auto px-4 transition-opacity duration-700 ease-in",
          isInView ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline">We Provide</h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            Opening doors of learning, free for all
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-700 ease-in-out",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardDescription className="px-6 pb-6">
                  {feature.description}
                </CardDescription>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

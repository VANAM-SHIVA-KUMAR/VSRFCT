"use client"

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";

const branches = [
  {
    name: "Telecomnagar",
    icon: <MapPin className="h-10 w-10 text-accent" />,
  },
  {
    name: "Vempadu",
    icon: <MapPin className="h-10 w-10 text-accent" />,
  },
  {
    name: "Kopalle",
    icon: <MapPin className="h-10 w-10 text-accent" />,
  },
];

export default function OurBranches() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
  return (
    <section id="branches" className="py-12 md:py-24 bg-white">
      <div
        ref={ref}
        className={cn(
          "container mx-auto px-4 transition-opacity duration-700 ease-in",
          isInView ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline">Our Branches</h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            Find a VSRFCT learning centre near you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-700 ease-in-out",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full bg-card">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4">
                    {branch.icon}
                  </div>
                  <CardTitle className="font-headline text-2xl">{branch.name}</CardTitle>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

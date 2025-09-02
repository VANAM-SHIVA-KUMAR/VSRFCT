"use client"

import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";
import { Award, Users } from 'lucide-react';

const stats = [
  {
    icon: <Award className="h-10 w-10 text-accent" />,
    value: "10+",
    label: "Years Founded"
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    value: "750+",
    label: "Students Passed"
  }
];

export default function Stats() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="stats" className="py-12 md:py-20 bg-card">
      <div ref={ref} className="container mx-auto px-4">
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto transition-all duration-700 ease-in-out",
           isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          {stats.map((stat, index) => (
             <div
              key={index}
              className={cn(
                "flex items-center justify-center gap-4 p-6 rounded-lg",
                "transition-all duration-500 ease-in-out",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-primary/10 rounded-full p-4">
                 {stat.icon}
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold font-headline text-primary">{stat.value}</p>
                <p className="text-lg text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

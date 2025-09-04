"use client"
import Image from 'next/image';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";
import { Award, Users, BookOpen } from 'lucide-react';

const founder = {
    name: "Prof. V. S. Raju",
    title: "Former Director, IIT Delhi (1995-2000)",
    image: "/images/hi.png",
    hint: "professional portrait",
};

const aboutText = [
    "The V.S. Raju Family Charitable Trust is founded by Prof. V.S. Raju, an eminent academician and engineer with over six decades of contribution to education, research, and nation-building. Born in 1940 in Kopalle, West Godavari, he pursued his Civil Engineering at Andhra University, a postgraduate degree at IISc Bangalore, and a Ph.D. in Geotechnical Engineering from the University of Karlsruhe, Germany.",
    "Prof. Raju has served as Director of IIT Delhi, Professor & Dean at IIT Madras, and held key roles in prestigious national projects, advisory boards, and corporates. He has guided more than 800 geotechnical and foundation projects across India and abroad, while also contributing to landmark initiatives such as the Shri Ram Mandir, Ayodhya and the Polavaram Irrigation Project.",
    "The Trust reflects his lifelong values of knowledge, service, and community welfare—dedicated to advancing education, supporting social causes, and inspiring future generations."
];

const stats = [
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    value: "10+",
    label: "Years Founded"
  },
  {
    icon: <BookOpen className="h-8 w-8 text-accent" />,
    value: "10",
    label: "Classes Covered"
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    value: "750+",
    label: "Students Enrolled"
  }
];


export default function FounderSpotlight() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} id="founder" className="py-12 md:py-24 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className={cn(
            "md:col-span-8 transition-all duration-700 ease-in-out delay-150",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">About the Trust</h2>
            {aboutText.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-muted-foreground mb-4">
                {paragraph}
              </p>
            ))}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
               {stats.map((stat, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center gap-4 transition-all duration-500 ease-in-out",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-primary/10 rounded-full p-3">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-headline text-primary">{stat.value}</p>
                    <p className="text-md text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={cn(
            "md:col-span-4 transition-all duration-700 ease-in-out",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <Image
              src={founder.image}
              alt={`Portrait of ${founder.name}`}
              data-ai-hint={founder.hint}
              width={350}
              height={450}
              className="rounded-xl shadow-lg w-full mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

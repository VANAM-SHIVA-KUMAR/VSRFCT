"use client"
import Image from 'next/image';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";
import { Award, Users, BookOpen, Heart, Globe, ShieldCheck } from 'lucide-react';

const founder = {
    name: "Prof. V. S. Raju",
    title: "Former Director, IIT Delhi (1995-2000)",
    image: "/images/hi.png",
    hint: "professional portrait",
};

const aboutText = [
    "Prof.V.S. Raju Family Charitable Trust (VSRFCT), a registered non-profit trust started in 2015 by Prof. V.S. Raju (Formely : Director of IIT Delhi, Professor & Dean at IIT Madras) & Family with a focus in the twin states of AP & Telangana.",
    "Our vision is a humble contribution to build a better India."
];

const mission = [
    {
        icon: <Users className="h-6 w-6 text-accent" />,
        text: "Support underprivileged through education, mentoring and livelihoods."
    },
    {
        icon: <Heart className="h-6 w-6 text-accent" />,
        text: "Help improve the nutrition and health of people."
    },
    {
        icon: <Globe className="h-6 w-6 text-accent" />,
        text: "Adopt sustainable ways to protect our environment."
    }
]

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
    <section ref={ref} id="founder" className="py-12 md:py-24 bg-green-900 text-green-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className={cn(
            "md:col-span-8 transition-all duration-700 ease-in-out delay-150",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">About the Trust</h2>
            {aboutText.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-green-200 mb-4 text-lg">
                {paragraph}
              </p>
            ))}
             <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Our Mission</h3>
             <ul className="space-y-3">
                {mission.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <div className="bg-green-800 rounded-full p-2 mt-1">{item.icon}</div>
                        <span className="text-green-200 flex-1">{item.text}</span>
                    </li>
                ))}
             </ul>
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
                  <div className="bg-green-800 rounded-full p-3">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-headline text-white">{stat.value}</p>
                    <p className="text-md text-green-200">{stat.label}</p>
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

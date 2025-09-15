"use client"
import Image from 'next/image';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";
import { Award, Users, BookOpen, Heart, Globe, ShieldCheck, Target } from 'lucide-react';

const founder = {
    name: "Prof. V. S. Raju",
    title: "Former Director, IIT Delhi (1995-2000)",
    image: "/images/hi.png",
    hint: "professional portrait",
};

const aboutText = [
    "The Prof. V. S. Raju Family Charitable Trust (VSRFCT) is a registered non-profit organization established in 2015 by Prof. V.S. Raju, formerly the Director of IIT Delhi and Professor, Head & Dean at IIT Madras, along with his family.",
    "The trust focuses on helping people in the states of Andhra Pradesh and Telangana, with a focus on education, healthcare, rural development, and social welfare initiatives.",
    "We make a difference in students’ lives by giving them hope of a better future, with support that goes beyond the material requirements of education and guidance that exceeds the expectation of every student under our umbrella."
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
    value: "1,400+",
    label: "Students Enrolled"
  }
];


export default function FounderSpotlight() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} id="founder" className="py-12 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className={cn(
            "md:col-span-8 transition-all duration-700 ease-in-out",
            isInView ? "animate-slide-in-from-left" : "opacity-0"
          )}>
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">About the Trust</h2>
            {aboutText.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-primary-foreground/80 mb-4 text-lg">
                {paragraph}
              </p>
            ))}
             <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Our Mission</h3>
             <ul className="space-y-3">
                {mission.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <div className="bg-green-800 rounded-full p-2 mt-1">{item.icon}</div>
                        <span className="text-primary-foreground/80 flex-1">{item.text}</span>
                    </li>
                ))}
             </ul>
             <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Our Vision</h3>
             <div className="flex items-start gap-3">
                <div className="bg-green-800 rounded-full p-2 mt-1"><Target className="h-6 w-6 text-accent" /></div>
                <span className="text-primary-foreground/80 flex-1">Our vision is a humble contribution to build a better India.</span>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
               {stats.map((stat, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center gap-4 transition-all duration-500 ease-in-out",
                    isInView ? "animate-fade-in-up" : "opacity-0"
                  )}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-green-800 rounded-full p-3">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-headline text-white">{stat.value}</p>
                    <p className="text-md text-primary-foreground/80">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={cn(
            "md:col-span-4 transition-all duration-700 ease-in-out",
            isInView ? "animate-slide-in-from-right" : "opacity-0"
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

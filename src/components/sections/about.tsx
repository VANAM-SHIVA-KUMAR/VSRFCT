"use client";
import Image from 'next/image';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";

const founders = [
  {
    name: "Prof. V. S. Raju",
    title: "Former Director, IIT Delhi; Professor & Dean, IIT Madras",
    image: "/images/hi.png",
    hint: "professional portrait",
    bio: [
      "Prof. V. S. Raju is a renowned expert in the field of Geotechnical & Foundation Engineering, with over 60 years of extensive experience.",
      "He has held prominent academic positions including:",
      "• Director, IIT Delhi",
      "• Professor, Head & Dean, IIT Madras",
      "He was also:",
      "(a) Member of governing boards of several companies & educational institutions",
      "(b) Chairman / Member of councils / committees set up by Govt. of India.",
      "His passion is institution building and educating the children of the economically weaker section of the society."
    ]
  }
];

function FounderSection({ founder, index }: { founder: typeof founders[0], index: number }) {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
      <div className={cn(
        "md:col-span-4 transition-all duration-700 ease-in-out",
        isEven ? 'md:order-1' : 'md:order-2',
        isInView ? "animate-slide-in-from-left" : "opacity-0"
      )}>
        <Image
          src={founder.image}
          alt={`Portrait of ${founder.name}`}
          data-ai-hint={founder.hint}
          width={300}
          height={500}
          className="rounded-xl shadow-lg w-full"
        />
      </div>
      <div className={cn(
        "md:col-span-8 transition-all duration-700 ease-in-out delay-150",
        isEven ? 'md:order-2' : 'md:order-1',
        isInView ? "animate-slide-in-from-right" : "opacity-0"
      )}>
        <h3 className="text-3xl font-bold font-headline mb-4 text-primary">
          {founder.name}
        </h3>
        <p className="text-lg text-White mb-4">
          <span className="font-semibold">{founder.title}</span>
        </p>
        {founder.bio.map((paragraph, pIndex) => (
          <p key={pIndex} className="text-White mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">About Our Founders</h2>
            <p className="text-lg italic md:text-xl text-White-700 mt-4 max-w-3xl mx-auto">
              The driving forces behind our initiative.
            </p>
        </div>
        <div className="space-y-16">
          {founders.map((founder, index) => (
            <FounderSection key={index} founder={founder} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client"
import Image from 'next/image';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";

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


export default function FounderSpotlight() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} id="founder" className="py-12 md:py-24 bg-card">
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

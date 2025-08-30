"use client"
import Image from 'next/image';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const founder = {
    name: "Prof. V. S. Raju",
    title: "Former Director, IIT Delhi (1995-2000)",
    image: "/images/hi.png",
    hint: "professional portrait",
    bio: [
      "Prof. V.S. Raju, a renowned expert in Geotechnical Engineering with a Ph.D. from the University of Karlsruhe, Germany, has over 60 years of extensive experience.",
      "He has held prominent academic positions including Director at IIT Delhi and Professor, Head, and Dean at IIT Madras. His distinguished career includes over 750 consultancy projects worldwide."
    ]
};

export default function FounderSpotlight() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} id="founder" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className={cn(
            "md:col-span-7 transition-all duration-700 ease-in-out delay-150",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">Our Founder</h2>
            <h3 className="text-3xl font-bold font-headline mb-4 text-primary">
              {founder.name}
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              <span className="font-semibold">{founder.title}</span>
            </p>
            {founder.bio.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-muted-foreground mb-4">
                {paragraph}
              </p>
            ))}
             <Button asChild>
                <Link href="/about">
                    Learn More About Our Story <ArrowRight className="ml-2" />
                </Link>
            </Button>
          </div>
          <div className={cn(
            "md:col-span-5 transition-all duration-700 ease-in-out",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <Image
              src={founder.image}
              alt={`Portrait of ${founder.name}`}
              data-ai-hint={founder.hint}
              width={400}
              height={500}
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

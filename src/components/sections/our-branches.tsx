"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPin } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";

const branches = [
  {
    name: "Vempadu",
    icon: <MapPin className="h-10 w-10 text-accent" />,
    description: "Established in 2005",
    href: "/branches/vempadu"
  },
  {
    name: "Telecomnagar",
    icon: <MapPin className="h-10 w-10 text-accent" />,
    description: "Established in 2015 ",
    href: "/branches/telecomnagar"
  },
  {
    name: "Kopalle",
    icon: <MapPin className="h-10 w-10 text-accent" />,
    description: "Established in 2022",
    href: "/branches/kopalle"
  },
];

export default function OurBranches() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [hoveredIndices, setHoveredIndices] = useState<Set<number>>(new Set());
  
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
          <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">Our Branches</h2>
          <p className="text-lg italic md:text-xl text-White-700 mt-4 max-w-3xl mx-auto">
            Schools Maintained by "VSRFCT".
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <Link href={branch.href} key={index}>
              <div
                className={cn(
                  "group transition-all duration-700 ease-in-out",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => {
                  setHoveredIndices(prev => new Set(prev).add(index));
                }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 h-full bg-White-100 overflow-hidden">
                  <CardHeader className="p-6">
                    <div className={cn("mx-auto bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4 transition-transform duration-300", {"scale-110": hoveredIndices.has(index)})}>
                      {branch.icon}
                    </div>
                    <CardTitle className="font-headline text-2xl text-green-900">{branch.name}</CardTitle>
                  </CardHeader>
                  <div className={cn("h-0 transition-all duration-300 ease-in-out opacity-0", {"h-auto opacity-100": hoveredIndices.has(index)})}>
                      <CardContent className="pt-0 pb-6 px-6">
                        <p className="text-White-800">{branch.description}</p>
                      </CardContent>
                  </div>
                </Card>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

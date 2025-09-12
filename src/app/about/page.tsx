
"use client";

import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import About from '@/components/sections/about';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPin } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";
import Link from 'next/link';

const branches = [
  {
    name: "Vempadu",
    href: "/about/vempadu",
    description: "Learn more about our Vempadu branch, its staff, and its history."
  },
  {
    name: "Telecomnagar",
    href: "/about/telecomnagar",
    description: "Explore the details of our Telecomnagar branch, including our team and historical milestones."
  },
  {
    name: "Kopalle",
    href: "/about/kopalle",
    description: "Discover our Kopalle branch and its journey."
  },
];

export default function AboutPage() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <About />
        <section 
          ref={ref}
          className="py-12 md:py-24 bg-card"
        >
          <div className={cn(
            "container mx-auto px-4 transition-opacity duration-700 ease-in",
            isInView ? "opacity-100" : "opacity-0"
          )}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold font-headline text-primary">Our Branch Details</h2>
              <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                Click on a branch to learn more about its team and history.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {branches.map((branch, index) => (
                <Link href={branch.href} key={index} className="group block">
                  <div
                    className={cn(
                      "h-full transition-all duration-700 ease-in-out",
                      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Card className="text-center hover:shadow-lg transition-all duration-300 h-full bg-background overflow-hidden group-hover:scale-105">
                      <CardHeader className="p-6">
                        <div className="mx-auto bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                          <MapPin className="h-10 w-10 text-accent" />
                        </div>
                        <CardTitle className="font-headline text-2xl text-primary">{branch.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 pb-6 px-6">
                        <p className="text-muted-foreground">{branch.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

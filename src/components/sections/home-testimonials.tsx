'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useInView } from '@/hooks/use-in-view';
import { cn } from "@/lib/utils";

export default function HomeTestimonials() {
  const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="testimonials-link" className="py-12 md:py-24 bg-background">
      <div
        ref={ref}
        className={cn(
          "container mx-auto px-4 transition-opacity duration-700 ease-in",
          isInView ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline text-green-900">What People Are Saying</h2>
          <p className="text-lg italic md:text-xl text-White-700 mt-4 max-w-3xl mx-auto">
            Feedback from parents, students, and well-wishers of our community.
          </p>
          <div className="mt-8">
            <Link href="/testimonials">
              <Button size="lg">View Testimonials</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
